import React, { useState, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { useAuth } from '@clerk/clerk-react';

export default function ProfileTab() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user?.id) {
      setInitialLoading(false);
      setError(t ? t('profile.errorNoUser', { defaultValue: 'User not found. Profile cannot be loaded.' }) : 'User not found.');
      return;
    }
    try {
      setInitialLoading(true);
      setError(null);
      
      // Get data from Clerk user object
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      
    } catch (e: any) {
      setError(t ? t('profile.errorFetching', { defaultValue: 'Error fetching profile: ' }) + e.message : 'Error fetching profile: ' + e.message);
    } finally {
      setInitialLoading(false);
    }
  }, [user, t]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) {
      setError(t('profile.errorNoUserSaving', { defaultValue: 'User not found. Cannot save.' }));
      return;
    }
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);
      
      // Update user profile in Clerk
      await user.update({
        firstName: firstName,
        lastName: lastName,
      });

      // Also update in Supabase
      const { error: saveError } = await supabase
        .from('users')
        .upsert({ 
          id: user.id, 
          username: user.username || `${firstName}_${lastName}`.toLowerCase().replace(/\s+/g, '_')
        }, { onConflict: 'id' });

      if (saveError) {
        console.warn('Error updating Supabase profile:', saveError);
        // Don't throw error since Clerk update succeeded
      }

      setSuccessMessage(t('profile.saveSuccess', { defaultValue: 'Profile saved successfully!' }));
    } catch (e: any) {
      setError(t('profile.errorSaving', { defaultValue: 'Error saving profile: ' }) + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      setError(null);
      await signOut();
      navigate('/');
    } catch (e: any) {
      setError(t('profile.errorLogout', { defaultValue: 'Logout failed: ' }) + e.message);
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <div className="p-6 text-center">{t('common.loading', { defaultValue: 'Loading...' })}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{t('profile.title', { defaultValue: 'User Profile' })}</h2>
      
      {/* User Avatar and Basic Info */}
      <div className="flex items-center mb-6">
        <img
          src={user?.imageUrl || `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=7C3AED&color=fff`}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {firstName || lastName ? `${firstName} ${lastName}`.trim() : user?.emailAddresses[0]?.emailAddress}
          </h3>
          <p className="text-gray-600 text-sm">{user?.emailAddresses[0]?.emailAddress}</p>
        </div>
      </div>

      {error && <p className="text-red-600 bg-red-100 p-3 rounded-md mb-4 text-sm">{error}</p>}
      {successMessage && <p className="text-green-600 bg-green-100 p-3 rounded-md mb-4 text-sm">{successMessage}</p>}
      
      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            {t('profile.firstNameLabel', { defaultValue: 'First Name' })}
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            {t('profile.lastNameLabel', { defaultValue: 'Last Name' })}
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={loading}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
            disabled={loading || initialLoading}
          >
            {loading && !initialLoading ? t('common.saving', { defaultValue: 'Saving...' }) : t('profile.saveButton', { defaultValue: 'Save Changes' })}
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
            disabled={loading || initialLoading}
          >
            {t('navigation.logout', { defaultValue: 'Logout' })}
          </button>
        </div>
      </form>
    </div>
  );
}