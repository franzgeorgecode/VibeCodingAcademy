import { supabase } from './supabaseClient';
import { useUserStore } from '../store/userStore'; // Ensure correct path

// Sign Up
export const signUpWithEmailPassword = async (email_param: string, password_param: string, first_name_param?: string, last_name_param?: string) => {
  useUserStore.getState().setIsLoading(true);
  const { data, error } = await supabase.auth.signUp({
    email: email_param,
    password: password_param,
    options: {
      data: { // Optional: include first_name and last_name in user_metadata
        first_name: first_name_param,
        last_name: last_name_param,
        avatar_url: '', // Can be updated later
      }
    }
  });
  if (error) {
    console.error('Error signing up:', error.message);
    useUserStore.getState().setIsLoading(false);
    return { user: null, session: null, error };
  }
  // On Supabase, sign up also logs the user in, creating a session.
  // The user object might be in data.user, and session in data.session
  useUserStore.getState().setUser(data.user);
  useUserStore.getState().setIsLoading(false);
  console.log('Sign up successful, user:', data.user);
  return { user: data.user, session: data.session, error: null };
};

// Sign In
export const signInWithEmailPassword = async (email_param: string, password_param: string) => {
  useUserStore.getState().setIsLoading(true);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email_param,
    password: password_param,
  });
  if (error) {
    console.error('Error signing in:', error.message);
    useUserStore.getState().setIsLoading(false);
    return { user: null, session: null, error };
  }
  useUserStore.getState().setUser(data.user);
  useUserStore.getState().setIsLoading(false);
  console.log('Sign in successful, user:', data.user);
  return { user: data.user, session: data.session, error: null };
};

// Sign Out
export const signOut = async () => {
  useUserStore.getState().setIsLoading(true);
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
  }
  useUserStore.getState().setUser(null);
  useUserStore.getState().setIsLoading(false);
  console.log('Sign out successful');
  return { error };
};

// Get Current User Session (useful for app initialization)
export const checkUserSession = async () => {
  useUserStore.getState().setIsLoading(true);
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error getting session:', error.message);
    useUserStore.getState().setUser(null);
  } else if (session) {
    // If a session exists, Supabase automatically refreshes it if needed.
    // The user object is part of the session.
    console.log('Session exists, user:', session.user);
    useUserStore.getState().setUser(session.user);
  } else {
    console.log('No active session found.');
    useUserStore.getState().setUser(null);
  }
  useUserStore.getState().setIsLoading(false);
};
