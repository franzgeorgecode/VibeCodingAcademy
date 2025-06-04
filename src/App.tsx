import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Navigate removed as it's not used in the new version directly here
import { AuthProvider } from './contexts/AuthContext';
// import Login from './components/Login'; // Old Login component, replaced by AuthPage
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import ProtectedRoute from './components/ProtectedRoute';

// New imports
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50"> {/* Assuming this wrapper is desired, or can be adjusted */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
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
            {/* The old redirect from "/" is replaced by the LandingPage route */}
            {/* Ensure any other existing routes are preserved if not specified in the issue's App.tsx snippet */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
