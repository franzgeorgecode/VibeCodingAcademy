import React, { useState, useEffect } from 'react';
import { BookOpen, Award, User } from 'lucide-react'; // Removed Download, not used here
import { supabase } from '../lib/supabase';
import { useTranslation } from '../contexts/LanguageContext'; // Added
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
  const [user, setUser] = useState<any>(null); // Added

  useEffect(() => {
    fetchUserData();

    // Listener for manual updates (e.g., from LessonView)
    const handleProgressUpdate = () => {
      console.log('Progress update event received, refreshing data...');
      fetchUserData();
    };
    window.addEventListener('progressUpdated', handleProgressUpdate);

    // Suscripciones a cambios en tiempo real
    const progressSubscription = supabase
      .channel('user_progress_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'user_progress'
      }, (payload) => {
        console.log('Real-time progress change:', payload);
        fetchUserData(); // Refrescar datos cuando cambie el progreso
      })
      .subscribe();

    const badgesSubscription = supabase
      .channel('user_badges_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'user_badges'
      }, (payload) => {
        console.log('Real-time badge change:', payload);
        fetchUserData(); // Refrescar datos cuando cambien los badges
      })
      .subscribe();

    return () => {
      window.removeEventListener('progressUpdated', handleProgressUpdate);
      progressSubscription.unsubscribe();
      badgesSubscription.unsubscribe();
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const fetchUserData = async () => {
    // setLoading(true); // Optionally reset loading state if preferred UX
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (!currentUser) {
        setLoading(false); // Ensure loading is false if no user
        return;
      }

      setUser(currentUser); // Set user state

      // Fetch user progress con manejo de errores mejorado
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', currentUser.id);

      if (progressError) {
        console.error('Error fetching progress:', progressError);
      }

      // Fetch user badges con manejo de errores mejorado
      const { data: badges, error: badgesError } = await supabase
        .from('user_badges')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('earned_at', { ascending: false });

      if (badgesError) {
        console.error('Error fetching badges:', badgesError);
      }

      setUserProgress(progress || []);
      setUserBadges(badges || []);

      console.log('Dashboard data updated:', {
        user: currentUser.email,
        progress: progress?.length || 0,
        badges: badges?.length || 0,
        totalXP: (badges || []).reduce((sum: number, badge: any) => sum + badge.badge_xp, 0)
      });

    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para refrescar manualmente (llamada desde tabs)
  const refreshData = () => {
    fetchUserData();
  };

  const totalXP = userBadges.reduce((sum, badge) => sum + badge.badge_xp, 0);
  const completedLessons = userProgress.filter(p => p.completed).length;
  const progressPercentage = Math.round((completedLessons / 18) * 100); // Assuming 18 total lessons

  if (loading) {
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
            name: user?.user_metadata?.first_name || user?.email?.split('@')[0] || 'Student'
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
                {completedLessons}/18
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
