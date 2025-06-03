import { motion } from 'framer-motion';
import { useUserProgressStore } from '@/stores/userProgressStore';

const XpBar = () => {
  const { xp, level } = useUserProgressStore();
  
  // Calculate progress percentage within current level
  const xpForCurrentLevel = (level - 1) * 100;
  const xpProgress = xp - xpForCurrentLevel;
  const progressPercentage = Math.min((xpProgress / 100) * 100, 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Level {level}</span>
        <span className="text-sm font-medium text-gray-700">{xpProgress} / 100 XP</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600"
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Upcoming level indicator */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">Current</span>
        <span className="text-xs text-gray-500">Level {level + 1}</span>
      </div>
    </div>
  );
};

export default XpBar;