import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { ArrowLeft, Zap, Code2 } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignedIn } = useAuth();

  // Redirect if already signed in
  React.useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  // Determine if we should show SignIn or SignUp based on the path
  const isSignUp = location.pathname.includes('sign-up') || location.pathname.includes('signup');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Back to Home & Language Selector */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('auth.backToHome')}
        </button>
        <LanguageSelector />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Code2 className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            {isSignUp ? t('auth.joinVibeCoding') : t('auth.welcomeBack')}
          </h1>
          <p className="text-gray-300">
            {isSignUp
              ? t('auth.startAdventure')
              : t('auth.continueJourney')
            }
          </p>
        </motion.div>

        {/* Auth Component Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
        >
          {isSignUp ? (
            <SignUp 
              routing="path"
              path="/auth/sign-up"
              signInUrl="/auth/sign-in"
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white text-xl font-bold',
                  headerSubtitle: 'text-gray-300',
                  socialButtonsBlockButton: 'border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all backdrop-blur-sm',
                  socialButtonsBlockButtonText: 'text-white font-medium',
                  dividerLine: 'bg-white/20',
                  dividerText: 'text-gray-300',
                  formFieldInput: 'bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm',
                  formFieldLabel: 'text-gray-300 font-medium',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 w-full',
                  footerActionLink: 'text-blue-400 hover:text-blue-300 font-medium',
                  footerActionText: 'text-gray-300',
                  identityPreviewText: 'text-white',
                  identityPreviewEditButton: 'text-blue-400 hover:text-blue-300',
                }
              }}
            />
          ) : (
            <SignIn 
              routing="path"
              path="/auth/sign-in"
              signUpUrl="/auth/sign-up"
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white text-xl font-bold',
                  headerSubtitle: 'text-gray-300',
                  socialButtonsBlockButton: 'border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all backdrop-blur-sm',
                  socialButtonsBlockButtonText: 'text-white font-medium',
                  dividerLine: 'bg-white/20',
                  dividerText: 'text-gray-300',
                  formFieldInput: 'bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm',
                  formFieldLabel: 'text-gray-300 font-medium',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 w-full',
                  footerActionLink: 'text-blue-400 hover:text-blue-300 font-medium',
                  footerActionText: 'text-gray-300',
                  forgotPasswordLink: 'text-blue-400 hover:text-blue-300',
                }
              }}
            />
          )}
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-2 gap-4 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <Zap className="h-6 w-6 text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300 font-medium">AI-Powered Learning</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <Code2 className="h-6 w-6 text-purple-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300 font-medium">Real Projects</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}