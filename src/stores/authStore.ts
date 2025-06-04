import { create } from 'zustand';
import { supabase } from '@/lib/supabase'; // Corrected path
import type { User, Session, AuthError } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: AuthError | null;
  fetchUser: () => Promise<void>;
  signIn: (email?: string, password?: string, provider?: 'google' | 'github') => Promise<void>;
  signUp: (email?: string, password?: string, metadata?: Record<string, any>) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null, session: Session | null) => void;
  clearUser: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  isLoading: true, // Set to true initially, fetchUser will set to false
  error: null,

  fetchUser: async () => {
    console.log('[AuthStore] fetchUser: Initiating.');
    useAuthStore.setState({ isLoading: true, error: null });
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (userError) {
        console.error('[AuthStore] fetchUser: Error fetching user:', userError);
        useAuthStore.setState({ user: null, session: null, isLoading: false, error: userError });
        return;
      }
      if (sessionError) {
        console.warn('[AuthStore] fetchUser: Error fetching session (user might still be valid):', sessionError);
        // Keep user if available, but clear session and note error
        useAuthStore.setState({ user: user || null, session: null, isLoading: false, error: sessionError });
        return;
      }

      console.log('[AuthStore] fetchUser: Success. User ID:', user?.id, 'Session exists:', !!session);
      useAuthStore.setState({ user, session, isLoading: false, error: null });
    } catch (e: any) {
      console.error('[AuthStore] fetchUser: Unexpected error in try-catch:', e);
      useAuthStore.setState({ user: null, session: null, isLoading: false, error: e as AuthError });
    }
  },

  signIn: async (email, password, provider) => {
    console.log(`[AuthStore] signIn: Attempting sign-in. Provider: ${provider}, Email: ${email ? 'provided' : 'not provided'}`);
    set({ isLoading: true, error: null });
    try {
      let response;
      if (provider) {
        response = await supabase.auth.signInWithOAuth({ provider });
      } else if (email && password) {
        response = await supabase.auth.signInWithPassword({ email, password });
      } else {
        throw new Error('Email/password or provider must be provided for sign in.');
      }

      if (response.error) throw response.error;

      // For OAuth, user/session are set via onAuthStateChange.
      // For password, user/session are in response.data
      if (response.data.user && response.data.session) {
        console.log('[AuthStore] signIn: Password sign-in successful, user and session set.');
        set({ user: response.data.user, session: response.data.session, isLoading: false });
      } else if (!provider) {
        // If not OAuth and no user/session, something is unexpected or requires re-fetch.
        console.log('[AuthStore] signIn: Non-OAuth sign-in, user/session not immediately available, re-fetching.');
        await get().fetchUser();
      } else {
        // For OAuth, isLoading will be false after redirect or if already handled by onAuthStateChange
        console.log('[AuthStore] signIn: OAuth initiated. isLoading remains true until redirect or handled by onAuthStateChange.');
        // Set isLoading to false here if you don't expect an immediate redirect to change the app state loader
        // set({ isLoading: false });
      }
    } catch (e: any) {
      console.error('[AuthStore] signIn: Error:', e);
      set({ isLoading: false, error: e as AuthError });
      // Potentially re-throw or handle specific errors for UI
    }
  },

  signUp: async (email, password, metadata = {}) => {
    console.log(`[AuthStore] signUp: Attempting sign-up. Email: ${email}`);
    set({ isLoading: true, error: null });
    try {
      if (!email || !password) {
         throw new Error('Email and password are required for sign up.');
      }
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: metadata },
      });

      if (error) throw error;

      console.log('[AuthStore] signUp: Sign-up successful (or requires confirmation). Data:', data);
      // If auto-confirm is off (default), user is returned but session is null until email confirmed.
      // If auto-confirm is on, user and session are returned.
      if (data.user && data.session) {
        set({ user: data.user, session: data.session, isLoading: false });
      } else if (data.user) { // User created, but session might be pending (e.g. email confirmation)
        set({ user: data.user, session: null, isLoading: false });
      } else { // Should not happen if no error, but as a fallback
        set({ isLoading: false });
      }
    } catch (e: any) {
      console.error('[AuthStore] signUp: Error:', e);
      set({ isLoading: false, error: e as AuthError });
    }
  },

  signOut: async () => {
    console.log('[AuthStore] signOut: Attempting sign-out.');
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('[AuthStore] signOut: Sign-out successful. User and session cleared.');
      set({ user: null, session: null, isLoading: false }); // clearUser() also does this
    } catch (e: any) {
      console.error('[AuthStore] signOut: Error:', e);
      set({ isLoading: false, error: e as AuthError });
    }
  },

  setUser: (user, session) => {
     console.log('[AuthStore] setUser: Manually setting user and session.', user?.id, !!session);
     set({ user, session, isLoading: false, error: null });
  },

  clearUser: () => {
    console.log('[AuthStore] clearUser: Clearing user, session, error.');
    set({ user: null, session: null, isLoading: false, error: null });
  },

  clearError: () => {
    console.log('[AuthStore] clearError: Clearing error.');
    set({ error: null });
  }
}));

// Listen to Supabase auth events to keep store in sync
// This is a key part for reactivity across the app.
supabase.auth.onAuthStateChange((event, session) => {
  console.log('[AuthStore] onAuthStateChange: Event received:', event, 'Session:', !!session);
  const store = useAuthStore.getState();

  switch (event) {
    case 'INITIAL_SESSION':
      // This event fires on initial load with either a session or null
      // fetchUser is typically called at app start, but this can be a backup
      // or primary way to set initial user if fetchUser isn't called elsewhere.
      console.log('[AuthStore] onAuthStateChange: INITIAL_SESSION');
      if (session && session.user) {
        if (store.user?.id !== session.user.id || store.session?.access_token !== session.access_token) {
          useAuthStore.getState().setUser(session.user, session);
        } else {
          useAuthStore.setState({ isLoading: false });
        }
      } else {
        useAuthStore.getState().clearUser();
      }
      break;
    case 'SIGNED_IN':
      if (session && session.user) {
        console.log('[AuthStore] onAuthStateChange: SIGNED_IN - User signed in.');
        useAuthStore.getState().setUser(session.user, session);
      } else {
        console.warn('[AuthStore] onAuthStateChange: SIGNED_IN event, but session or user is null. Re-fetching.');
        useAuthStore.getState().fetchUser();
      }
      break;
    case 'SIGNED_OUT':
      console.log('[AuthStore] onAuthStateChange: SIGNED_OUT - User signed out.');
      useAuthStore.getState().clearUser();
      break;
    case 'USER_UPDATED':
      if (session && session.user) {
        console.log('[AuthStore] onAuthStateChange: USER_UPDATED - User data updated.');
        // setUser will update user and session, and set isLoading/error appropriately.
        if (JSON.stringify(store.user) !== JSON.stringify(session.user) || store.session?.access_token !== session.access_token) {
            useAuthStore.getState().setUser(session.user, session);
        } else {
            useAuthStore.setState({ isLoading: false }); // Already up-to-date, ensure loading is false.
        }
      } else {
         console.warn('[AuthStore] onAuthStateChange: USER_UPDATED event, but session or user is null. Re-fetching.');
         useAuthStore.getState().fetchUser();
      }
      break;
    case 'PASSWORD_RECOVERY':
      console.log('[AuthStore] onAuthStateChange: PASSWORD_RECOVERY event. Clearing loading/error.');
      useAuthStore.setState({ isLoading: false, error: null });
      break;
    case 'TOKEN_REFRESHED':
      console.log('[AuthStore] onAuthStateChange: TOKEN_REFRESHED.');
      if (session) {
        if (session.user && (JSON.stringify(store.user) !== JSON.stringify(session.user) || store.session?.access_token !== session.access_token)) {
          useAuthStore.getState().setUser(session.user, session);
        } else if (store.session?.access_token !== session.access_token) {
          useAuthStore.setState({ session, user: store.user, isLoading: false, error: null });
        } else {
          useAuthStore.setState({ isLoading: false, error: null });
        }
      } else {
        console.warn('[AuthStore] onAuthStateChange: TOKEN_REFRESHED event, but session is null. This is unexpected. Attempting to fetch user to clarify state.');
        useAuthStore.getState().fetchUser();
      }
      break;
    default:
      console.log('[AuthStore] onAuthStateChange: Unhandled event or no specific action needed:', event);
      useAuthStore.setState({ isLoading: false });
  }
});

// Note: Initial fetchUser() call is removed from here.
// It's better to call it explicitly in the application's entry point (e.g., main.tsx or App.tsx)
// after Supabase client is initialized and router is ready.
// Example: useAuthStore.getState().fetchUser(); in main.tsx
