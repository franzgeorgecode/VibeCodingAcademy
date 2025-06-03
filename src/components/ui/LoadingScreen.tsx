import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-primary-600 mb-4"
        >
          <Code2 size={64} />
        </motion.div>
        
        <motion.h1 
          className="text-2xl font-bold text-gray-800 mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Vibe Coding Academy
        </motion.h1>
        
        <div className="flex space-x-2 mt-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-primary-600"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-teal-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.75 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-orange-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
        
        <p className="text-gray-600 mt-4">Loading your coding adventure...</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;