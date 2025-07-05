import React, { useState, useEffect } from 'react';
import { BookOpen, Award, User, LogOut } from 'lucide-react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../contexts/LanguageContext';
import { lessonsData } from '../data/lessonsData';
import LessonsTab from './LessonsTab';
import BadgesTab from './BadgesTab';
import CertificateTab from './CertificateTab';
import ProfileTab from './ProfileTab';
import { motion } from 'framer-motion';

interface UserProgress {
  lesson_id: string;
  completed: boolean;
  score: number;
  attempts?: number;
}

interface UserBadge {
  badge_name: string;
  badge_xp: number;
  earned_at: string;
  icon?: string;
  description?: string;
  rarity?: string;
}

interface FetchedUserBadge {
  earned_at: string;
  badge_id: string;
  badges: {
    name: string;
    xp_reward: number;
    icon?: string;
    description?: string;
    rarity?: string;
  } | null;
}

export default function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('lessons');
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    fetchUserData();

    // Listener for manual updates
    const handleProgressUpdate = (event?: CustomEvent) => {
      console.log('[Dashboard] Event: progressUpdated received.', event?.detail);
      fetchUserData();
    };
    window.addEventListener('progressUpdated', handleProgressUpdate as EventListener);

    // Supabase Real-time Subscriptions
    console.log('[Dashboard] Setting up Supabase real-time subscriptions.');
    const progressSubscription = supabase
      .channel('dashboard-user-progress')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'user_progress',
      }, (payload) => {
        console.log('[Dashboard] Real-time: user_progress change detected.', payload);
        fetchUserData();
      })
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log('[Dashboard] Real-time: Successfully subscribed to user_progress changes.');
        }
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          console.error('[Dashboard] Real-time: user_progress subscription error.', err);
        }
      });

    const badgesSubscription = supabase
      .channel('dashboard-user-badges')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'user_badges',
      }, (payload) => {
        console.log('[Dashboard] Real-time: user_badges change detected.', payload);
        fetchUserData();
      })
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log('[Dashboard] Real-time: Successfully subscribed to user_badges changes.');
        }
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          console.error('[Dashboard] Real-time: user_badges subscription error.', err);
        }
      });

    return () => {
      console.log('[Dashboard] Cleaning up real-time subscriptions and event listener.');
      window.removeEventListener('progressUpdated', handleProgressUpdate);
      progressSubscription.unsubscribe();
      badgesSubscription.unsubscribe();
    };
  }, []);

  const fetchUserData = async () => {
    console.log('[Dashboard] fetchUserData: Initiating data fetch.');
    try {
      if (!user?.id) {
        console.log('[Dashboard] fetchUserData: No user found.');
        setLoading(false);
        setUserProgress([]);
        setUserBadges([]);
        return;
      }

      console.log('[Dashboard] fetchUserData: User found:', user.emailAddresses[0]?.emailAddress);

      // Fetch user progress
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('lesson_id, completed, score, attempts')
        .eq('user_id', user.id);

      if (progressError) {
        console.error('[Dashboard] fetchUserData: Error fetching user_progress.', progressError);
        setUserProgress([]);
      } else {
        console.log('[Dashboard] fetchUserData: User progress data received:', progress);
        setUserProgress(progress || []);
      }

      // Fetch user badges with a JOIN to the badges table
      const { data: fetchedBadgesData, error: badgesError } = await supabase
        .from('user_badges')
        .select(`
          earned_at,
          badge_id,
          badges (
            name,
            xp_reward,
            icon,
            description,
            rarity
          )
        `)
        .eq('user_id', user.id)
        .order('earned_at', { ascending: false });

      if (badgesError) {
        console.error('[Dashboard] fetchUserData: Error fetching user_badges.', badgesError);
        setUserBadges([]);
      } else {
        console.log('[Dashboard] fetchUserData: Raw user badges data received:', fetchedBadgesData);
        const transformedBadges = (fetchedBadgesData || [])
          .map((ub: FetchedUserBadge) => {
            if (!ub.badges) return null;
            return {
              badge_name: ub.badges.name,
              badge_xp: ub.badges.xp_reward,
              earned_at: ub.earned_at,
              icon: ub.badges.icon,
              description: ub.badges.description,
              rarity: ub.badges.rarity,
            };
          })
          .filter(b => b !== null) as UserBadge[];

        console.log('[Dashboard] fetchUserData: Transformed user badges:', transformedBadges);
        setUserBadges(transformedBadges);
      }

    } catch (error) {
      console.error('[Dashboard] fetchUserData: Unexpected error during data fetching.', error);
    } finally {
      setLoading(false);
      console.log('[Dashboard] fetchUserData: Data fetching process complete.');
    }
  };

  const refreshData = () => {
    console.log('[Dashboard] refreshData: Manual refresh triggered.');
    fetchUserData();
  };

  const totalLessonsCount = Object.keys(lessonsData).length;
  const totalXP = userBadges.reduce((sum, badge) => sum + (badge.badge_xp || 0), 0);
  const completedLessons = userProgress.filter(p => p.completed).length;
  const progressPercentage = totalLessonsCount > 0 ? Math.round((completedLessons / totalLessonsCount) * 100) : 0;

  if (loading) {
    console.log('[Dashboard] Render: Displaying loading indicator.');
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('dashboard.welcomeBack', {
              name: user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0] || 'Student'
            })}
          </h1>
          <p className="text-gray-600">{t('dashboard.title')}</p>
        </div>
        
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>{t('navigation.logout')}</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.completedLessons')}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {completedLessons}/{totalLessonsCount}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <Award className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.totalXP')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{totalXP}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <Award className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.badgesEarned')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{userBadges.length}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <User className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.progress')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{progressPercentage}%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'lessons'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('dashboard.tabs.lessons')}
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'badges'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('dashboard.tabs.badges')}
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'certificate'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('dashboard.tabs.certificate')}
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('navigation.profile', { defaultValue: 'Profile' })}
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'lessons' && (
          <LessonsTab
            userProgress={userProgress}
            onProgressUpdate={refreshData}
          />
        )}

        {activeTab === 'badges' && (
          <BadgesTab
            userBadges={userBadges}
            onBadgeUpdate={refreshData}
          />
        )}

        {activeTab === 'certificate' && (
          <CertificateTab
            completedLessons={completedLessons}
            totalXP={totalXP}
            onCertificateGenerate={refreshData}
          />
        )}

        {activeTab === 'profile' && <ProfileTab />}
      </motion.div>
    </div>
  );
}