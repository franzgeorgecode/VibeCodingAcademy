import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabase';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
}

export interface UserProgress {
  xp: number;
  level: number;
  currentLessonId: string | null;
  completedLessons: string[];
  badges: Badge[];
  streak: number;
  lastActive: string | null;
  hintsUsed: number;
}

interface UserProgressState extends UserProgress {
  isLoading: boolean;
  updateXp: (amount: number) => void;
  addBadge: (badge: Badge) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  setCurrentLesson: (lessonId: string) => void;
  incrementStreak: () => void;
  incrementHintsUsed: () => void;
  syncWithDatabase: () => Promise<void>;
}

export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      currentLessonId: null,
      completedLessons: [],
      badges: [],
      streak: 0,
      lastActive: null,
      hintsUsed: 0,
      isLoading: false,
      
      updateXp: (amount) => {
        const currentXp = get().xp + amount;
        const newLevel = Math.floor(currentXp / 100) + 1;
        
        set((state) => ({
          xp: currentXp,
          level: newLevel,
          // If level increased, we could trigger a special event
        }));
      },
      
      addBadge: (badge) => {
        set((state) => ({
          badges: [...state.badges, {...badge, unlockedAt: new Date()}]
        }));
      },
      
      completeLesson: (lessonId, xpReward) => {
        const { completedLessons } = get();
        
        if (!completedLessons.includes(lessonId)) {
          set((state) => ({
            completedLessons: [...state.completedLessons, lessonId]
          }));
          
          get().updateXp(xpReward);
        }
      },
      
      setCurrentLesson: (lessonId) => set({ currentLessonId: lessonId }),
      
      incrementStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const { lastActive, streak } = get();
        
        // If last active was yesterday, increment streak
        if (lastActive) {
          const lastDate = new Date(lastActive);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          
          if (lastDate.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0]) {
            set({ streak: streak + 1, lastActive: today });
          } else if (lastDate.toISOString().split('T')[0] !== today) {
            // If not yesterday and not today, reset streak
            set({ streak: 1, lastActive: today });
          }
        } else {
          // First time, start streak
          set({ streak: 1, lastActive: today });
        }
      },
      
      incrementHintsUsed: () => set((state) => ({ hintsUsed: state.hintsUsed + 1 })),
      
      syncWithDatabase: async () => {
        const { user } = await supabase.auth.getUser();
        
        if (user) {
          const state = get();
          
          // Update user profile with current progress
          await supabase
            .from('users')
            .upsert({
              id: user.id,
              total_xp: state.xp,
              current_level: state.level,
              streak_days: state.streak,
              last_activity: state.lastActive
            }, { onConflict: 'id' });
            
          // We could also sync completed lessons, badges, etc.
        }
      }
    }),
    {
      name: 'user-progress-storage',
    }
  )
);