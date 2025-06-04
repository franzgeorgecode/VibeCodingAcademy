import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useAuthStore } from '@/stores/authStore'; // Using alias

// Fetch initial user state
// This ensures that by the time App mounts, auth state is being resolved.
// Supabase client is initialized when authStore or supabaseClient is imported.
useAuthStore.getState().fetchUser();

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);