import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useUserProgressStore } from '@/stores/userProgressStore';

const StreakCounter = () => {
  const { streak } = useUserProgressStore();
  
  // Determine flame color based on streak length
  const getFlameColor = () => {
    if (streak < 3) return 'text-orange-400';
    if (streak < 7) return 'text-orange-500';
    if (streak < 14) return 'text-orange-600';
    return 'text-red-600';
  };
  
  return (
    <motion.div 
      className="flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          repeatType: "reverse"
        }}
        className={getFlameColor()}
      >
        <Flame className="h-5 w-5" />
      </motion.div>
      
      <div>
        <p className="text-sm font-medium text-gray-800">{streak} day streak</p>
        <p className="text-xs text-gray-500">
          {streak === 0
            ? "Start your coding streak today!"
            : streak < 3
            ? "You're just getting started!"
            : streak < 7
            ? "Keep going strong!"
            : streak < 14
            ? "Impressive dedication!"
            : "You're on fire! 🔥"}
        </p>
      </div>
    </motion.div>
  );
};

export default StreakCounter;