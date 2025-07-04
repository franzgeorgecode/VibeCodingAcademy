import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#7C3AED',
          colorBackground: '#1F2937',
          colorInputBackground: '#374151',
          colorInputText: '#F9FAFB',
          colorText: '#F9FAFB',
          colorTextSecondary: '#D1D5DB',
          colorShimmer: '#4B5563',
          borderRadius: '0.75rem',
        },
        elements: {
          formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105',
          socialButtonsBlockButton: 'border border-gray-600 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all',
          formFieldInput: 'bg-gray-700 border-gray-600 text-white rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
          footerActionLink: 'text-blue-400 hover:text-blue-300',
        }
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);