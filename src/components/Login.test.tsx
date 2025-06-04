import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Adjust path if necessary
import Login from './Login';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { AuthProvider } from '../contexts/AuthContext'; // Import AuthProvider

jest.mock('../lib/supabase'); // Add this line to explicitly mock supabase

describe('Login Component Localization', () => {
  test('renders correctly in English', async () => {
    await i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter> {/* Wrap with BrowserRouter */}
          <AuthProvider> {/* Wrap with AuthProvider */}
            <Login />
          </AuthProvider>
        </BrowserRouter>
      </I18nextProvider>
    );
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('renders correctly in Spanish', async () => {
    await i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter> {/* Wrap with BrowserRouter */}
          <AuthProvider> {/* Wrap with AuthProvider */}
            <Login />
          </AuthProvider>
        </BrowserRouter>
      </I18nextProvider>
    );
    expect(screen.getByRole('heading', { name: /Iniciar Sesión/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });
});
