import { motion } from 'framer-motion';
import { useUserProgressStore } from '@/stores/userProgressStore';

interface LessonProgressProps {
  currentLessonId: string;
  totalLessons: number;
}

const LessonProgress = ({ currentLessonId, totalLessons }: LessonProgressProps) => {
  const { completedLessons } = useUserProgressStore();
  const currentLessonIndex = parseInt(currentLessonId.split('-')[1]); // Assuming format "level-X"
  
  const completionPercentage = (completedLessons.length / totalLessons) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Course Progress
        </span>
        <span className="text-sm font-medium text-gray-700">
          {completedLessons.length} / {totalLessons} lessons
        </span>
      </div>
      
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600"
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: totalLessons }).map((_, index) => {
          const lessonNumber = index + 1;
          const isCompleted = completedLessons.includes(`lesson-${lessonNumber}`);
          const isCurrent = currentLessonIndex === lessonNumber;
          
          return (
            <motion.div
              key={`lesson-${lessonNumber}`}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : isCurrent
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {lessonNumber}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonProgress;