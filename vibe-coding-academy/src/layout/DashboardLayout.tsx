// src/layout/DashboardLayout.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // If not already there
import { useUserStore } from '../store/userStore';
import SrCodePlaceholder from '../assets/images/srcode_placeholder.svg';
import SrCodeChat from '../components/SrCodeChat';
import { getUserProgress, UserProgress } from '../services/progressService'; // Import this
import { SRCODE_LEVELS } from '../core/srcodeConfig'; // Will be created in step 9

// Helper function to get level title (or create it within useEffect)
const getLevelTitle = (level: number): string => {
  // SRCODE_LEVELS might not be directly indexable if it's an object like { 1: { title: ... }}
  // It might be an array or require a lookup function.
  // Assuming SRCODE_LEVELS is like: { 1: { title: "..." }, 5: { title: "..." } }
  // We need to find the highest level achieved that is less than or equal to current level.
  // For now, let's assume a direct lookup or a simple placeholder.
  // This logic will be refined when SRCODE_LEVELS is actually defined.
  if (SRCODE_LEVELS && SRCODE_LEVELS[level]) {
    return SRCODE_LEVELS[level].title;
  }
  // A more robust lookup for threshold-based levels:
  let currentTitle = SRCODE_LEVELS?.[1]?.title || "Aprendiz"; // Default to level 1 title
  let highestLevelAchieved = 1;
  if (SRCODE_LEVELS) {
      for (const lvlKey in SRCODE_LEVELS) {
          const levelNum = parseInt(lvlKey);
          if (level >= levelNum && levelNum >= highestLevelAchieved) {
              highestLevelAchieved = levelNum;
              currentTitle = SRCODE_LEVELS[lvlKey].title;
          }
      }
  }
  return currentTitle;
};


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUserStore();
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [levelTitle, setLevelTitle] = useState<string>('Cargando...');

  useEffect(() => {
    const fetchProgress = async () => {
      if (user?.id) {
        const { data, error } = await getUserProgress(user.id);
        if (error) {
          console.error("Failed to fetch user progress:", error);
          // Set some default/error state if needed
          setUserProgress({ user_id: user.id, total_xp: 0, current_level: 1 }); // Basic default
          setLevelTitle(getLevelTitle(1));
        } else if (data) {
          setUserProgress(data);
          // setLevelTitle is handled by the next useEffect
        }
      }
    };
    fetchProgress();
  }, [user]); // Re-fetch if user changes

  useEffect(() => {
    // Update level title if userProgress changes (e.g. after initial fetch or XP update)
    if (userProgress) {
      setLevelTitle(getLevelTitle(userProgress.current_level));
    } else if (!user) { // If user logs out, reset title
        setLevelTitle('Cargando...');
        setUserProgress(null);
    }
  }, [userProgress?.current_level, user]); // Also depends on user to reset if user logs out


  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-xl font-semibold">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <p className="text-sm font-semibold">{user?.email}</p>
            <p className="text-xs text-gray-400">
              Nivel {userProgress?.current_level || 1} - {levelTitle}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <p className="text-xs text-yellow-400">XP</p>
            <p className="font-bold text-lg">{userProgress?.total_xp ?? '0'}</p>
          </div>
          <div className="text-center">
            {/* Assuming current_streak is part of UserProgress interface if used */}
            <p className="text-xs text-red-400">Streak 🔥</p>
            <p className="font-bold text-lg">{(userProgress as any)?.current_streak || 0}</p>
          </div>
          <img src={SrCodePlaceholder} alt="SrCode Mini Avatar" className="w-10 h-10 rounded-full border-2 border-blue-400" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-800 p-6 space-y-6 border-r border-gray-700 overflow-y-auto">
          <nav className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</h3>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Progreso
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Logros
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Social
            </a>
          </nav>
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SrCode</h3>
            <Link to="/dashboard/analyze-code" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Análisis de Código
            </Link>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              <span className="w-5 h-5 bg-blue-500 rounded-sm inline-block mr-2"></span> Chat con SrCode
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              <span className="w-5 h-5 bg-blue-500 rounded-sm inline-block mr-2"></span> Poderes IA
            </a>
          </div>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">
          {children || <h2 className="text-2xl font-semibold">Lección Actual Irá Aquí</h2>}
        </main>

        <aside className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <SrCodeChat />
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
