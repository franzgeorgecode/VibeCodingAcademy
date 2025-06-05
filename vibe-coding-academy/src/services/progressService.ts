// src/services/progressService.ts
import { supabase } from './supabaseClient';

export interface UserProgress {
  id?: string; // UUID from Supabase
  user_id: string;
  total_xp: number;
  current_level: number;
  // Add other fields from user_progress table as needed in the future
  // current_streak?: number;
  // longest_streak?: number;
  // completed_lessons?: any[]; // JSONB
  // badges?: any[]; // JSONB
  // achievements?: any[]; // JSONB
  // daily_goal?: number;
  // last_activity?: string; // Timestamp
}

// Function to ensure a user has a progress record
export const ensureUserProgressRecord = async (userId: string): Promise<{ data: UserProgress | null, error: any }> => {
  if (!userId) return { data: null, error: 'User ID is required.' };

  // First, check if a record already exists
  let { data: existingRecord, error: fetchError } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116: "The result contains 0 rows"
    console.error('Error checking for user progress record:', fetchError);
    return { data: null, error: fetchError };
  }

  if (existingRecord) {
    return { data: existingRecord as UserProgress, error: null };
  }

  // If no record exists, create one with default values
  const defaultProgress: Omit<UserProgress, 'id' | 'user_id'> = { // user_id will be set by Supabase from the row data
    total_xp: 0,
    current_level: 1,
    // Initialize other fields as per your table defaults if necessary
    // current_streak: 0,
    // longest_streak: 0,
    // completed_lessons: [],
    // badges: [],
    // achievements: [],
    // daily_goal: 30, // Example default
    // last_activity: new Date().toISOString(),
  };

  const { data: newRecord, error: insertError } = await supabase
    .from('user_progress')
    .insert({ user_id: userId, ...defaultProgress })
    .select()
    .single();

  if (insertError) {
    console.error('Error creating user progress record:', insertError);
    return { data: null, error: insertError };
  }

  return { data: newRecord as UserProgress, error: null };
};

// Function to get user progress
export const getUserProgress = async (userId: string): Promise<{ data: UserProgress | null, error: any }> => {
  if (!userId) return { data: null, error: 'User ID is required for getUserProgress.' };

  // Ensure record exists first, then fetch it.
  // ensureUserProgressRecord will return the record if it exists or creates it.
  const { data: progressRecord, error: ensureError } = await ensureUserProgressRecord(userId);

  if (ensureError) {
    // Error already logged by ensureUserProgressRecord
    return { data: null, error: ensureError };
  }

  return { data: progressRecord, error: null };
};

// Function to update user XP
// This function will simply update total_xp. Leveling up logic will be separate or triggered elsewhere.
export const updateUserXP = async (userId: string, xpToAdd: number): Promise<{ data: UserProgress | null, error: any }> => {
  if (!userId) return { data: null, error: 'User ID is required for updateUserXP.' };
  if (xpToAdd === 0) return { data: null, error: 'XP to add cannot be zero.' }; // Or just return current progress

  const { data: currentProgress, error: fetchError } = await getUserProgress(userId);

  if (fetchError || !currentProgress) {
    return { data: null, error: fetchError || 'Could not retrieve current progress to update XP.' };
  }

  const newTotalXP = (currentProgress.total_xp || 0) + xpToAdd;

  const { data: updatedRecord, error: updateError } = await supabase
    .from('user_progress')
    .update({ total_xp: newTotalXP })
    .eq('user_id', userId)
    .select()
    .single();

  if (updateError) {
    console.error('Error updating user XP:', updateError);
    return { data: null, error: updateError };
  }

  // Here you could add logic to check for level ups based on newTotalXP
  // For now, just return the updated record.
  console.log(\`User \${userId} XP updated to \${newTotalXP}\`);
  return { data: updatedRecord as UserProgress, error: null };
};
