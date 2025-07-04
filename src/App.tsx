import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const { isLoaded } = useAuth();

  // Show loading screen while Clerk is initializing
  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/lesson/:lessonId" element={
                <ProtectedRoute>
                  <LessonView />
                </ProtectedRoute>
              } />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;