// src/services/chatService.ts
import { supabase } from './supabaseClient';
import { useUserStore } from '../store/userStore'; // To get current user's ID

export interface ChatMessage { // Exporting for use in SrCodeChat.tsx if needed, or define locally there
  sender: 'user' | 'srcode';
  content: string;
  timestamp?: Date;
}

export const saveConversation = async (
  fullConversationHistory: ChatMessage[]
) => {
  const { user } = useUserStore.getState();
  if (!user) {
    console.error("User not logged in. Cannot save conversation.");
    return { error: new Error("User not logged in.") };
  }

  if (!fullConversationHistory || fullConversationHistory.length === 0) {
    console.warn("No conversation history provided to save.");
    return { error: new Error("No conversation history provided.") };
  }

  const { data, error } = await supabase
    .from('srcode_conversations')
    .insert([{
      user_id: user.id,
      messages: fullConversationHistory.map(msg => ({
        sender: msg.sender,
        content: msg.content,
        timestamp: msg.timestamp?.toISOString() || new Date().toISOString(),
      })),
      // context: null, // Context can be added later if needed (e.g. lesson ID)
    }]);

  if (error) {
    console.error('Error saving conversation to Supabase:', error.message);
    return { error };
  }
  console.log('Conversation saved to Supabase:', data);
  return { data };
};

export const getLatestConversation = async (userId: string) => {
  if (!userId) {
    console.warn("No user ID provided to getLatestConversation.");
    return { data: null, error: new Error("No user ID provided.") };
  }

  const { data, error } = await supabase
    .from('srcode_conversations')
    .select('messages, created_at') // Select messages and created_at for ordering
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single(); // Use .single() if you expect at most one row or want an error if multiple (though limit 1 handles this)

  if (error && error.code !== 'PGRST116') { // PGRST116: "The result contains 0 rows" - not an error for us here
    console.error('Error fetching latest conversation from Supabase:', error.message);
    return { data: null, error };
  }

  if (data && data.messages) {
    // Assuming messages are stored with ISO string timestamps
    const messagesWithDateObjects: ChatMessage[] = (data.messages as any[]).map(msg => ({
      ...msg,
      timestamp: msg.timestamp ? new Date(msg.timestamp) : undefined,
    }));
    return { data: messagesWithDateObjects, error: null };
  }

  return { data: null, error: null }; // No conversation found or no messages in it
};
