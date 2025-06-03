import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import SrCodeAvatar from '../srcode/SrCodeAvatar';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <motion.div 
        className="bg-primary-600 text-white md:w-1/2 p-8 flex flex-col justify-center items-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md mx-auto text-center">
          <Code2 className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vibe Coding Academy</h1>
          <p className="text-lg mb-6">Master bolt.new with SrCode, your sarcastic AI mentor</p>
          
          <div className="mt-12">
            <SrCodeAvatar 
              mood="happy" 
              message="Welcome! I'm here to turn you into a Vibe Coding master... if you've got what it takes 😏" 
            />
          </div>
        </div>
      </motion.div>
      
      {/* Right Side - Auth Form */}
      <motion.div 
        className="bg-gray-50 md:w-1/2 p-8 flex items-center justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;