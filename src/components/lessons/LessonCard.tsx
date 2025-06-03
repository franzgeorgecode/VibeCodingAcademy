import { motion } from 'framer-motion';
import { CheckCircle, Lock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserProgressStore } from '@/stores/userProgressStore';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  level: number;
  xpReward: number;
  duration: string;
  isLocked?: boolean;
  requiredLessonId?: string;
}

const LessonCard = ({
  id,
  title,
  description,
  level,
  xpReward,
  duration,
  isLocked = false,
  requiredLessonId
}: LessonCardProps) => {
  const { completedLessons } = useUserProgressStore();
  const isCompleted = completedLessons.includes(id);
  
  return (
    <motion.div
      whileHover={!isLocked ? { y: -5 } : {}}
      className={`bg-white rounded-lg overflow-hidden shadow-md border ${
        isCompleted 
          ? 'border-green-200' 
          : isLocked 
            ? 'border-gray-200 opacity-75' 
            : 'border-primary-100'
      }`}
    >
      {/* Card header */}
      <div className="relative p-5">
        {isLocked ? (
          <div className="absolute top-4 right-4 text-gray-400">
            <Lock size={20} />
          </div>
        ) : isCompleted ? (
          <div className="absolute top-4 right-4 text-green-500">
            <CheckCircle size={20} />
          </div>
        ) : null}
        
        <div className="flex items-center mb-3">
          <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
            Level {level}
          </span>
          <span className="ml-2 text-xs text-gray-500">{duration}</span>
        </div>
        
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      {/* Card footer */}
      <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
        <span className="text-sm font-medium text-primary-600">
          +{xpReward} XP
        </span>
        
        {isLocked ? (
          <div className="text-xs text-gray-500 flex items-center">
            <span>Complete previous lesson first</span>
          </div>
        ) : (
          <Link 
            to={`/lessons/${id}`}
            className="text-sm text-primary-600 hover:text-primary-700 inline-flex items-center"
          >
            {isCompleted ? 'Review Lesson' : 'Start Lesson'}
            <ExternalLink size={14} className="ml-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default LessonCard;