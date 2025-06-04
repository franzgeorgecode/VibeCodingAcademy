import React, { useState, useEffect } from 'react';
import { BookOpen, Award, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../contexts/LanguageContext';
import { lessonsData } from '../data/lessonsData';
import { useAuthStore } from '@/stores/authStore'; // Import useAuthStore
import LessonsTab from './LessonsTab';
import BadgesTab from './BadgesTab';
import CertificateTab from './CertificateTab';

interface UserProgress {
  lesson_id: string;
  completed: boolean;
  quiz_score: number;
}

interface UserBadge {
  badge_name: string;
  badge_xp: number;
  earned_at: string;
}

export default function Dashboard() {
  const { t } = useTranslation(); // Added
  const [activeTab, setActiveTab] = useState('lessons');
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [localUser, setLocalUser] = useState<any>(null); // Renamed to avoid conflict with authStore user

  // Get user from authStore for welcome message reactivity
  const { user: authUser } = useAuthStore();

  useEffect(() => {
    fetchUserData();

    // Listener for manual updates (e.g., from LessonView)
    const handleProgressUpdate = (event?: CustomEvent) => {
      console.log('[Dashboard] Event: progressUpdated received.', event?.detail);
      fetchUserData();
    };
    window.addEventListener('progressUpdated', handleProgressUpdate as EventListener);

    // Supabase Real-time Subscriptions
    console.log('[Dashboard] Setting up Supabase real-time subscriptions.');
    const progressSubscription = supabase
      .channel('dashboard-user-progress') // Unique channel name for dashboard
      .on('postgres_changes', {
        event: '*', // Listen to all changes (INSERT, UPDATE, DELETE)
        schema: 'public',
        table: 'user_progress',
        // filter: `user_id=eq.${user?.id}` // Ensure this filter is applied if user is available
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
      .channel('dashboard-user-badges') // Unique channel name
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'user_badges',
        // filter: `user_id=eq.${user?.id}`
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

    // Cleanup function
    return () => {
      console.log('[Dashboard] Cleaning up real-time subscriptions and event listener.');
      window.removeEventListener('progressUpdated', handleProgressUpdate);
      progressSubscription.unsubscribe();
      badgesSubscription.unsubscribe();
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const fetchUserData = async () => {
    console.log('[Dashboard] fetchUserData: Initiating data fetch.');
    // setLoading(true); // Consider if re-enabling this provides better UX for manual refreshes
    try {
      const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error('[Dashboard] fetchUserData: Error fetching user.', userError);
        setLoading(false);
        return;
      }
      if (!currentUser) {
        console.log('[Dashboard] fetchUserData: No current user found.');
        setLoading(false);
        // Potentially clear user-specific state if a user was previously logged in
        setLocalUser(null); // Use setLocalUser
        setUserProgress([]);
        setUserBadges([]);
        return;
      }

      console.log('[Dashboard] fetchUserData: User found:', currentUser.email);
      setLocalUser(currentUser); // Use setLocalUser

      // Fetch user progress
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('lesson_id, completed, quiz_score') // Select only necessary fields
        .eq('user_id', currentUser.id);

      if (progressError) {
        console.error('[Dashboard] fetchUserData: Error fetching user_progress.', progressError);
        // Don't return, try to fetch badges anyway, or handle more gracefully
      } else {
        console.log('[Dashboard] fetchUserData: User progress data received:', progress);
        setUserProgress(progress || []);
      }

      // Fetch user badges
      const { data: badges, error: badgesError } = await supabase
        .from('user_badges')
        .select('badge_name, badge_xp, earned_at') // Select only necessary fields
        .eq('user_id', currentUser.id)
        .order('earned_at', { ascending: false });

      if (badgesError) {
        console.error('[Dashboard] fetchUserData: Error fetching user_badges.', badgesError);
      } else {
        console.log('[Dashboard] fetchUserData: User badges data received:', badges);
        setUserBadges(badges || []);
      }

      // Log calculated values
      const calculatedTotalXP = (badges || []).reduce((sum, badge) => sum + (badge.badge_xp || 0), 0);
      const calculatedCompletedLessons = (progress || []).filter(p => p.completed).length;
      const totalLessons = Object.keys(lessonsData).length;
      const calculatedProgressPercentage = totalLessons > 0 ? Math.round((calculatedCompletedLessons / totalLessons) * 100) : 0;

      console.log('[Dashboard] fetchUserData: Calculated stats:', {
        userEmail: currentUser.email,
        completedLessons: calculatedCompletedLessons,
        totalXP: calculatedTotalXP,
        badgesEarned: (badges || []).length,
        progressPercentage: calculatedProgressPercentage,
      });

    } catch (error) {
      console.error('[Dashboard] fetchUserData: Unexpected error during data fetching.', error);
    } finally {
      setLoading(false);
      console.log('[Dashboard] fetchUserData: Data fetching process complete.');
    }
  };

  // Función para refrescar manualmente (llamada desde tabs)
  const refreshData = () => {
    console.log('[Dashboard] refreshData: Manual refresh triggered.');
    fetchUserData();
  };

  const totalLessonsCount = Object.keys(lessonsData).length;
  const totalXP = userBadges.reduce((sum, badge) => sum + (badge.badge_xp || 0), 0); // Ensure badge_xp is a number
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
      {/* Header de Bienvenida */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('dashboard.welcomeBack', {
            name: authUser?.user_metadata?.first_name || authUser?.email?.split('@')[0] || localUser?.user_metadata?.first_name || localUser?.email?.split('@')[0] || 'Student'
          })}
        </h1>
        <p className="text-gray-600">{t('dashboard.title')}</p>
      </div>

      {/* Header Stats - CON DATOS REALES ACTUALIZADOS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform">
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
        </div>

        <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.totalXP')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{totalXP}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-purple-600" /> {/* Icon matches original prompt */}
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.badgesEarned')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{userBadges.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <User className="h-8 w-8 text-green-600" /> {/* Icon matches original prompt */}
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                {t('dashboard.stats.progress')}
              </p>
              <p className="text-2xl font-bold text-gray-900">{progressPercentage}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - COMPLETAMENTE TRADUCIDOS */}
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
        </nav>
      </div>

      {/* Tab Content - PASANDO FUNCIÓN DE REFRESH */}
      {activeTab === 'lessons' && (
        <LessonsTab
          userProgress={userProgress}
          onProgressUpdate={refreshData} // Changed from original, now passing refreshData
        />
      )}

      {activeTab === 'badges' && (
        <BadgesTab
          userBadges={userBadges}
          onBadgeUpdate={refreshData} // Changed from original, now passing refreshData
        />
      )}

      {activeTab === 'certificate' && (
        <CertificateTab
          completedLessons={completedLessons}
          totalXP={totalXP}
          onCertificateGenerate={refreshData} // Changed from original, now passing refreshData
        />
      )}
    </div>
  );
}
