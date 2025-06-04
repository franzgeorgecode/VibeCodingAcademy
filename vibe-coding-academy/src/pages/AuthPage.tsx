import React, { useState } from 'react';
import { signUpWithEmailPassword, signInWithEmailPassword } from '../services/auth'; // Adjust path

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true); // true for Sign Up, false for Sign In
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const commonInputClasses = "w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition-colors";
  const commonButtonClasses = "w-full py-3 rounded-lg font-semibold transition-transform transform hover:scale-105";

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Attempting sign up with:', { email, password, firstName, lastName });
    const { error } = await signUpWithEmailPassword(email, password, firstName, lastName);
    if (error) {
      alert('Sign up failed: ' + error.message);
    } else {
      alert('Sign up successful! Please check your email for verification if enabled.');
      // Potentially redirect or clear form
      setEmail(''); setPassword(''); setFirstName(''); setLastName(''); setConfirmPassword('');
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Attempting sign in with:', { email, password });
    const { error } = await signInWithEmailPassword(email, password);
    if (error) {
      alert('Sign in failed: ' + error.message);
    } else {
      alert('Sign in successful!');
      // Potentially redirect (this will be handled by routing later)
      setEmail(''); setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
          </h1>
          <p className="text-gray-400">
            {isSignUp ? 'Únete a la aventura con SrCode.' : 'Bienvenido de nuevo, Guerrero del Código.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-6 rounded-lg bg-gray-700 p-1">
          <button
            onClick={() => setIsSignUp(true)}
            className={`w-1/2 py-2 rounded-md text-sm font-medium transition-colors
              ${isSignUp ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600'}`}
          >
            Registrarse
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`w-1/2 py-2 rounded-md text-sm font-medium transition-colors
              ${!isSignUp ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-600'}`}
          >
            Ingresar
          </button>
        </div>

        <form className="space-y-6" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          {isSignUp && (
            <>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className={commonInputClasses}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className={commonInputClasses}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className={commonInputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={commonInputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              className={commonInputClasses}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button
            type="submit"
            className={`${commonButtonClasses} ${isSignUp ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
          >
            {isSignUp ? '🚀 Crear mi Cuenta de SrCode' : '🎮 Entrar al Mundo SrCode'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            {isSignUp ? '¿Ya tienes una cuenta SrCode?' : '¿Nuevo en la academia SrCode?'}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-semibold text-purple-400 hover:text-purple-300 ml-1 transition-colors"
            >
              {isSignUp ? 'Ingresa aquí' : 'Crea una cuenta'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
