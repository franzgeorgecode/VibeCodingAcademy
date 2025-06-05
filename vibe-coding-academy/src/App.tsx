import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './store/userStore';
import { checkUserSession, signOut } from './services/auth'; // Importar signOut
import AuthPage from './pages/AuthPage';
import DashboardLayout from './layout/DashboardLayout';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

// Contenido de ejemplo para la página de inicio del Dashboard
const DashboardHomePage: React.FC = () => {
  const { user } = useUserStore();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-400">¡Bienvenido al Dashboard, {user?.email}!</h1>
        <button 
          onClick={async () => {
            await signOut();
            // ProtectedRoute se encargará de la redirección a /auth después del signOut
          }} 
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
      <p className="mt-4 text-gray-300">Aquí comenzarás tu aventura épica con SrCode para dominar la programación.</p>
      <p className="mt-2 text-sm text-gray-500">Explora las lecciones, interactúa con SrCode y desbloquea tus superpoderes de codificación.</p>
    </div>
  );
};

function App() {
  const { user, isLoading, setIsLoading } = useUserStore();

  useEffect(() => {
    // Lógica para verificar la sesión del usuario al cargar la app
    if (isLoading && !user) {
        checkUserSession(); // Llama a checkUserSession si está cargando y no hay usuario
    } else if (isLoading && user) {
        // Si hay usuario y sigue cargando, la sesión ya se resolvió, así que no estamos cargando más.
        setIsLoading(false);
    } else if (isLoading && !user) {
        // Si no hay usuario y sigue cargando, la sesión se resolvió como "no autenticado".
        setIsLoading(false);
    }
  }, [user, isLoading, setIsLoading]); // Dependencias del useEffect

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la Landing Page (pública) */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Ruta para Autenticación (pública, pero redirige si ya está logueado) */}
          <Route 
            path="/auth" 
            element={user && !isLoading ? <Navigate to="/dashboard" replace /> : <AuthPage />} 
          />
          
          {/* Rutas Protegidas (requieren autenticación) */}
          <Route element={<ProtectedRoute />}>
            <Route 
              path="/dashboard" 
              element={
                <DashboardLayout>
                  <DashboardHomePage />
                </DashboardLayout>
              } 
            />
            {/* Puedes añadir más rutas protegidas aquí, por ejemplo:
            <Route 
              path="/dashboard/profile"
              element={
                <DashboardLayout>
                  <ProfilePage /> 
                </DashboardLayout>
              }
            />
            */}
          </Route>
          
          {/* Ruta Fallback: si no coincide ninguna ruta, redirige a la Landing Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;