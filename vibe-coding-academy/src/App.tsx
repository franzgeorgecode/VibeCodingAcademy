import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './store/userStore';
import { checkUserSession } from './services/auth';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './layout/DashboardLayout';
import LandingPage from './pages/LandingPage'; // Import LandingPage
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import CodeAnalysisPage from './pages/CodeAnalysisPage'; // Import CodeAnalysisPage
import './index.css';

// Example Dashboard Home Content (can be moved to its own file later)
const DashboardHomePage: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold text-purple-400">Bienvenido al Dashboard!</h1>
    <p className="mt-4 text-gray-300">Aquí comenzarás tu aventura con SrCode.</p>
    <p className="mt-2 text-sm text-gray-500">Este es el contenido principal del dashboard.</p>
  </div>
);

function App() {
  const { user, isLoading, setIsLoading } = useUserStore();

  useEffect(() => {
    if (isLoading && !user) {
        checkUserSession();
    } else if (user && isLoading) {
        setIsLoading(false);
    } else if (!user && isLoading) {
        setIsLoading(false);
    }
  }, [user, isLoading, setIsLoading]);

  // No need for the global isLoading check here anymore if ProtectedRoute handles its own.
  // However, you might want a global loading screen before router is ready if checkUserSession is slow.
  // For this iteration, ProtectedRoute's loading is fine.

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={user && !isLoading ? <Navigate to="/dashboard" replace /> : <AuthPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <DashboardHomePage />
                </DashboardLayout>
              }
            />
            <Route
              path="/dashboard/analyze-code"
              element={
                <DashboardLayout>
                  <CodeAnalysisPage />
                </DashboardLayout>
              }
            />
            {/* Add more protected dashboard routes here as children of DashboardLayout if needed */}
            {/* e.g., <Route path="/dashboard/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} /> */}
          </Route>

          {/* Fallback for unknown routes (optional) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
