import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, BookOpen, Award, User, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import SrCodeChatButton from '../srcode/SrCodeChatButton';

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();
  
  const navItems = [
    { icon: <Sparkles size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <BookOpen size={20} />, label: 'My Lessons', path: '/dashboard' }, // Changed to /dashboard for now
    { icon: <Award size={20} />, label: 'Achievements', path: '/dashboard' }, // Changed to /dashboard for now
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
  ];

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mr-2 p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">Vibe Coding</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <SrCodeChatButton />
            
            <button 
              onClick={() => signOut()}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex">
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        
        {/* Sidebar */}
        <AnimatePresence>
          <motion.aside
            className={`fixed z-50 md:relative md:z-0 md:block bg-white h-full w-64 shadow-lg transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 flex flex-col h-full">
              <div className="mb-8 mt-4 px-4">
                {user && (
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user.email}</p>
                      <p className="text-xs text-gray-500">Level 1 Novice</p>
                    </div>
                  </div>
                )}
              </div>
              
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${pathname === item.path ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-auto p-4">
                <div className="bg-primary-50 rounded-lg p-4 text-sm">
                  <p className="font-medium text-primary-700">Need help?</p>
                  <p className="text-gray-600 mt-1">Ask SrCode for hints and guidance anytime!</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;