import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth as useClerkAuth, useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: any;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded, signOut: clerkSignOut } = useClerkAuth();
  const { user: clerkUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncUserWithSupabase = async () => {
      if (isLoaded) {
        if (isSignedIn && clerkUser) {
          try {
            // Sync user data with Supabase - use upsert with proper conflict resolution
            const { data, error } = await supabase
              .from('users')
              .upsert({
                id: clerkUser.id,
                username: clerkUser.username || clerkUser.emailAddresses[0]?.emailAddress.split('@')[0],
                avatar_url: clerkUser.imageUrl,
                created_at: new Date(clerkUser.createdAt!).toISOString(),
                total_xp: 0,
                current_level: 1,
                streak_days: 0,
                last_activity: new Date().toISOString().split('T')[0]
              }, { 
                onConflict: 'id',
                ignoreDuplicates: false 
              })
              .select()
              .single();

            if (error && error.code !== '23505') { // Ignore duplicate key errors
              console.error('Error syncing user with Supabase:', error);
            } else {
              console.log('User synced successfully with Supabase');
            }
          } catch (error) {
            console.error('Error in user sync:', error);
          }
        }
        setLoading(false);
      }
    };

    syncUserWithSupabase();
  }, [isSignedIn, isLoaded, clerkUser]);

  const signOut = async () => {
    await clerkSignOut();
  };

  const value = {
    user: clerkUser,
    loading: loading || !isLoaded,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};