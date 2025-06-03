import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitTimer, setRateLimitTimer] = useState(3);
  const [step, setStep] = useState<'username' | 'email' | 'password'>('username');
  
  const navigate = useNavigate();
  const { signUp, signInWithGoogle, isLoading } = useAuthStore();
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRateLimited && rateLimitTimer > 0) {
      timer = setInterval(() => {
        setRateLimitTimer((prev) => prev - 1);
      }, 1000);
    } else if (rateLimitTimer === 0) {
      setIsRateLimited(false);
      setRateLimitTimer(3);
    }
    return () => clearInterval(timer);
  }, [isRateLimited, rateLimitTimer]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateUsername = (username: string) => {
    return username.length >= 3 && username.length <= 20;
  };

  const handleNext = () => {
    setError(null);
    
    if (step === 'username') {
      if (!username) {
        setError('Please enter a username');
        return;
      }
      if (!validateUsername(username)) {
        setError('Username must be between 3 and 20 characters');
        return;
      }
      setStep('email');
    } else if (step === 'email') {
      if (!email) {
        setError('Please enter your email');
        return;
      }
      if (!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }
      setStep('password');
    }
  };

  const handleBack = () => {
    setError(null);
    if (step === 'password') setStep('email');
    else if (step === 'email') setStep('username');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!validateUsername(username)) {
      setError('Username must be between 3 and 20 characters');
      setStep('username');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setStep('email');
      return;
    }
    
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      setStep('password');
      return;
    }
    
    const { error } = await signUp(email, password, username);
    
    if (error) {
      if (error.message.includes('rate limit') || error.message.includes('after 3 seconds')) {
        setIsRateLimited(true);
        setError('Please wait a few seconds before trying again');
      } else if (error.message.includes('email')) {
        setError('This email is already registered');
        setStep('email');
      } else if (error.message.includes('username')) {
        setError('This username is already taken');
        setStep('username');
      } else {
        setError(error.message);
      }
    } else {
      setSuccess(true);
      // Redirect to login after 5 seconds
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'username':
        return (
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Choose a username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input pl-10"
                placeholder="codingwizard"
                required
              />
            </div>
          </div>
        );
      
      case 'email':
        return (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input pl-10"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        );
      
      case 'password':
        return (
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
                placeholder="••••••••"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 6 characters long
            </p>
          </div>
        );
    }
  };
  
  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="mb-6">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600">
            Please check your email to verify your account before logging in.
            You will be redirected to the login page in a few seconds.
          </p>
        </div>
        <Link
          to="/login"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Go to Login
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Vibe Coding Academy</h2>
        <p className="text-gray-600">Create an account to start your learning journey</p>
      </div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-start"
        >
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {renderStep()}
        
        <div className="flex justify-between space-x-4">
          {step !== 'username' && (
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-outline flex-1"
            >
              Back
            </button>
          )}
          
          {step !== 'password' ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary flex-1"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading || isRateLimited}
              className="btn btn-primary flex-1 flex justify-center items-center"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : isRateLimited ? (
                `Try again in ${rateLimitTimer}s`
              ) : (
                <>
                  <span>Sign up</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="button"
            onClick={signInWithGoogle}
            className="btn btn-outline w-full flex justify-center items-center"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;