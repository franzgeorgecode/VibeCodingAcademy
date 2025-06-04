import React, { useEffect } from 'react';
import { useUserStore } from './store/userStore';
import { checkUserSession } from './services/auth';
import AuthPage from './pages/AuthPage'; // Or your router setup later
import LandingPage from './pages/LandingPage'; // Keep landing page for "logged in" state for now
import './index.css';

function App() {
  const { user, isLoading, setIsLoading } = useUserStore();

  useEffect(() => {
    // Ensure isLoading is set to true when starting session check
    // although it's defaulted to true in the store, this is a safeguard.
    const storeIsLoading = useUserStore.getState().isLoading;
    if (!storeIsLoading) {
        setIsLoading(true);
    }
    checkUserSession();
  }, [setIsLoading]); // Add setIsLoading to dependency array if it's stable

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading SrCode Academy... ✨
      </div>
    );
  }

  return (
    <div className="App">
      {user ? <LandingPage /> : <AuthPage />}
      {/* Example of how to show user info, can be removed or placed elsewhere
      {user && (
        <div style={{ position: 'absolute', top: 10, right: 10, color: 'white', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '5px' }}>
          Logged in as: {user.email}
          <button onClick={async () => {
            await signOut(); // Assuming signOut is imported from './services/auth'
            // setUser(null) is handled by signOut internally via useUserStore.getState().setUser(null)
          }} style={{ marginLeft: '10px', background: 'red', color: 'white', border: 'none', padding: '5px', borderRadius: '3px' }}>
            Sign Out
          </button>
        </div>
      )}
      */}
    </div>
  );
}

export default App;
