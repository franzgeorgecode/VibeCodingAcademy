import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { SrCodeMood, useSrCodeStore } from '@/stores/srCodeStore';

interface SrCodeAvatarProps {
  mood?: SrCodeMood;
  message?: string;
  isAnimated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showMessage?: boolean;
}

const SrCodeAvatar = ({
  mood: propMood,
  message,
  isAnimated = true,
  size = 'md',
  showMessage = true
}: SrCodeAvatarProps) => {
  const { mood: storeMood, isTyping } = useSrCodeStore();
  const mood = propMood || storeMood;
  
  const [messageShown, setMessageShown] = useState(false);
  
  useEffect(() => {
    if (message) {
      setMessageShown(true);
    }
  }, [message]);
  
  // Size classes
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  
  // Mood animations and colors
  const moodConfig = {
    happy: {
      color: 'text-teal-500',
      bg: 'bg-teal-100',
      animation: { scale: [1, 1.05, 1], rotate: [0, 2, 0] }
    },
    sarcastic: {
      color: 'text-orange-500',
      bg: 'bg-orange-100',
      animation: { scale: [1, 1.03, 1], rotate: [0, -3, 0] }
    },
    thinking: {
      color: 'text-primary-600',
      bg: 'bg-primary-100',
      animation: { scale: [1, 0.97, 1], rotate: [0, 0, 0] }
    },
    celebrating: {
      color: 'text-green-500',
      bg: 'bg-green-100',
      animation: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
    }
  };
  
  const currentMood = moodConfig[mood];
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={`relative rounded-full flex items-center justify-center ${sizeClasses[size]} ${currentMood.bg}`}
        animate={isAnimated ? currentMood.animation : {}}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Code className={`${currentMood.color} ${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'}`} />
        
        {/* Expressions based on mood */}
        {mood === 'sarcastic' && (
          <motion.div 
            className="absolute top-1/4 right-1/4 text-orange-500" 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            😏
          </motion.div>
        )}
        
        {mood === 'celebrating' && (
          <>
            <motion.div 
              className="absolute -top-2 -right-2" 
              animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🎉
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2" 
              animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              ✨
            </motion.div>
          </>
        )}
      </motion.div>
      
      {showMessage && message && (
        <AnimatePresence>
          <motion.div
            className="mt-4 bg-white p-3 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {isTyping ? (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <TypeAnimation
                sequence={[message]}
                wrapper="p"
                cursor={false}
                repeat={0}
                speed={50}
                className="text-sm text-gray-800"
              />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SrCodeAvatar;