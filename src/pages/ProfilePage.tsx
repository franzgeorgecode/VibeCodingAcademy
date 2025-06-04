import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Award, Zap, Calendar, Save, LogOut } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useUserProgressStore, Badge } from '@/stores/userProgressStore';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

import XpBar from '@/components/gamification/XpBar';
import StreakCounter from '@/components/gamification/StreakCounter';
import BadgeCard from '@/components/gamification/BadgeCard';

// Mock badges for display
const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Completed your first lesson',
    icon: '🏆',
    rarity: 'common',
    unlockedAt: new Date()
  },
  {
    id: '2',
    name: 'Bolt Explorer',
    description: 'Discovered 5 bolt.new features',
    icon: '🔎',
    rarity: 'common'
  },
  {
    id: '3',
    name: 'Code Streak',
    description: 'Logged in for 7 days in a row',
    icon: '🔥',
    rarity: 'rare'
  },
  {
    id: '4',
    name: 'Bug Hunter',
    description: 'Found and fixed your first error',
    icon: '🐛',
    rarity: 'epic'
  }
];

const ProfilePage = () => {
  const { user, fetchUser, clearUser } = useAuthStore();
  const { xp, level, streak, badges, clearProgress } = useUserProgressStore();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (user?.user_metadata) {
      setFirstName(user.user_metadata.first_name || '');
      setLastName(user.user_metadata.last_name || '');
    }
  }, [user]);

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setMessage(null);

    const { data, error } = await supabase.auth.updateUser({
      data: { first_name: firstName, last_name: lastName },
    });

    setIsLoading(false);

    if (error) {
      setMessage({ type: 'error', text: `Error updating profile: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      if (data.user) {
        // Refresh user data in the store
        await fetchUser();
      }
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    setIsLoading(false);

    if (error) {
      setMessage({ type: 'error', text: `Error logging out: ${error.message}` });
    } else {
      clearUser();
      clearProgress();
      navigate('/login');
    }
  };
  
  // Add mock badges for demo
  const allBadges = [...badges, ...mockBadges];
  
  // Stats for the profile
  const stats = [
    { 
      icon: <Award className="h-5 w-5 text-primary-600" />,
      label: 'Current Level',
      value: level.toString()
    },
    { 
      icon: <Zap className="h-5 w-5 text-orange-500" />,
      label: 'Total XP',
      value: xp.toString()
    },
    { 
      icon: <Calendar className="h-5 w-5 text-teal-500" />,
      label: 'Day Streak',
      value: streak.toString()
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

      {/* User Details and Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-md mb-10"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-3xl font-bold mb-4 md:mb-0 md:mr-6">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-1">
              {user?.user_metadata?.first_name || user?.user_metadata?.last_name ? `${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}`.trim() : (user?.user_metadata?.username || 'Coding Enthusiast')}
            </h2>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Mail className="h-4 w-4 mr-1" />
              <span>{user?.email}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition duration-150 ease-in-out disabled:opacity-50"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        <form onSubmit={handleSaveChanges} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition duration-150 ease-in-out disabled:opacity-50"
            >
              <Save className="h-5 w-5 mr-2" />
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
            {message && (
              <span className={`ml-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message.text}
              </span>
            )}
          </div>
        </form>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* XP Bar - moved for better layout potentially */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="col-span-1 md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden p-6"
        >
            <h3 className="text-lg font-bold mb-2">Your Progress</h3>
            <XpBar />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Your Stats</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="p-3 bg-primary-100 rounded-full mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <StreakCounter />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Badges</h2>
          <span className="text-sm text-gray-500">
            {badges.filter(b => b.unlockedAt).length} of {allBadges.length} Badges Earned
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allBadges.map((badge) => (
            <BadgeCard 
              key={badge.id}
              badge={badge}
              isLocked={!badge.unlockedAt} // Ensure isLocked is dynamically set
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;