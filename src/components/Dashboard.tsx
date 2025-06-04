import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Download, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
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
  const [activeTab, setActiveTab] = useState('lessons');
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      const { data: badges } = await supabase
        .from('user_badges')
        .select('*')
        .eq('user_id', user.id)
        .order('earned_at', { ascending: false });

      setUserProgress(progress || []);
      setUserBadges(badges || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalXP = userBadges.reduce((sum, badge) => sum + badge.badge_xp, 0);
  const completedLessons = userProgress.filter(p => p.completed).length;

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed Lessons</p>
              <p className="text-2xl font-bold text-gray-900">{completedLessons}/18</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total XP</p>
              <p className="text-2xl font-bold text-gray-900">{totalXP}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Badges Earned</p>
              <p className="text-2xl font-bold text-gray-900">{userBadges.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <User className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((completedLessons / 18) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - SOLO LESSONS, BADGES, CERTIFICATE */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'lessons'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            My Lessons
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'badges'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Badges
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'certificate'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Certificate
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'lessons' && (
        <LessonsTab userProgress={userProgress} />
      )}

      {activeTab === 'badges' && (
        <BadgesTab userBadges={userBadges} />
      )}

      {activeTab === 'certificate' && (
        <CertificateTab
          completedLessons={completedLessons}
          totalXP={totalXP}
        />
      )}
    </div>
  );
}
