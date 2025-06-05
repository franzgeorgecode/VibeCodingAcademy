import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useUserStore();

  if (isLoading) {
    // Optional: A more sophisticated loading spinner/page
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Checking authentication...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
