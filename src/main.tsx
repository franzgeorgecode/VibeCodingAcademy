import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Initialize i18next

// Add error handling
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);