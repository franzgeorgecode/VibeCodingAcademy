import React from 'react';
import { useUserStore } from '../store/userStore'; // To get user info for header
import SrCodePlaceholder from '../assets/images/srcode_placeholder.svg'; // SrCode avatar
import SrCodeChat from '../components/SrCodeChat'; // Add this import

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUserStore();

  // Placeholder data - replace with real data from user_progress later
  const userXP = 0;
  const userStreak = 0;

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          {/* User Avatar Placeholder */}
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-xl font-semibold">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <p className="text-sm font-semibold">{user?.email}</p>
            <p className="text-xs text-gray-400">Level 1 - Aprendiz de SrCode</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <p className="text-xs text-yellow-400">XP</p>
            <p className="font-bold text-lg">{userXP}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-red-400">Streak 🔥</p>
            <p className="font-bold text-lg">{userStreak}</p>
          </div>
          {/* SrCode Mini Avatar */}
          <img src={SrCodePlaceholder} alt="SrCode Mini Avatar" className="w-10 h-10 rounded-full border-2 border-blue-400" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-6 space-y-6 border-r border-gray-700 overflow-y-auto">
          <nav className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</h3>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Progreso
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Logros
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-gray-500 rounded-sm inline-block mr-2"></span> Social
            </a>
          </nav>
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SrCode</h3>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-blue-500 rounded-sm inline-block mr-2"></span> Chat con SrCode
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition-colors">
              {/* Icon Placeholder */} <span className="w-5 h-5 bg-blue-500 rounded-sm inline-block mr-2"></span> Poderes IA
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children || <h2 className="text-2xl font-semibold">Lección Actual Irá Aquí</h2>}
        </main>

        {/* SrCode Panel (Right Sidebar) */}
        <aside className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* The direct child should be SrCodeChat, it handles its own padding/margins if needed */}
          <SrCodeChat />
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
