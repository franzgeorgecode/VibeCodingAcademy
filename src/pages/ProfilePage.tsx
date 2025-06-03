import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Award, Zap, Calendar } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useUserProgressStore, Badge } from '@/stores/userProgressStore';

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
  const { user } = useAuthStore();
  const { xp, level, streak, badges } = useUserProgressStore();
  
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-3xl font-bold mb-4">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              
              <h2 className="text-xl font-bold mb-1">
                {user?.user_metadata?.username || 'Coding Enthusiast'}
              </h2>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Mail className="h-4 w-4 mr-1" />
                <span>{user?.email}</span>
              </div>
              
              <div className="w-full mt-4">
                <XpBar />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-2 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Your Stats</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <StreakCounter />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Badges</h2>
          <span className="text-sm text-gray-500">
            {badges.length} of {mockBadges.length} Badges Earned
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allBadges.map((badge) => (
            <BadgeCard 
              key={badge.id}
              badge={badge}
              isLocked={!badge.unlockedAt}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;