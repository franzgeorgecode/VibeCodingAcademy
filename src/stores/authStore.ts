import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import { supabase, signIn, signUp, signOut } from '../lib/supabase';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, username: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  
  setUser: (user) => set({ user, isLoading: false }),
  
  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const { error } = await signIn(email, password);
      set({ isLoading: false });
      return { error };
    } catch (error: any) {
      set({ isLoading: false });
      return { error };
    }
  },
  
  signUp: async (email: string, password: string, username: string) => {
    set({ isLoading: true });
    try {
      const { error } = await signUp(email, password, username);
      set({ isLoading: false });
      return { error };
    } catch (error: any) {
      set({ isLoading: false });
      return { error };
    }
  },
  
  signOut: async () => {
    try {
      await signOut();
      set({ user: null });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  },
  
  resetPassword: async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      return { error };
    } catch (error: any) {
      return { error };
    }
  }
}));