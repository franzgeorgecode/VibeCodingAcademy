import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, Award } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext'; // Added

// Updated LESSON_STRUCTURE with keys for translation
const LESSON_STRUCTURE = [
  {
    level: 1,
    titleKey: 'lessons.levels.foundations',
    descriptionKey: 'lessons.descriptions.foundations',
    lessons: [
      { id: "lesson-1-1", lessonTitleKey: "lessons.lesson-1-1.title", xp: 10, orderInLevel: 1 }, // Added orderInLevel
      { id: "lesson-1-2", lessonTitleKey: "lessons.lesson-1-2.title", xp: 15, orderInLevel: 2 },
      { id: "lesson-1-3", lessonTitleKey: "lessons.lesson-1-3.title", xp: 20, orderInLevel: 3 }
    ]
  },
  {
    level: 2,
    titleKey: 'lessons.levels.databases',
    descriptionKey: 'lessons.descriptions.databases',
    lessons: [
      { id: "lesson-2-1", lessonTitleKey: "lessons.lesson-2-1.title", xp: 25, orderInLevel: 1 },
      { id: "lesson-2-2", lessonTitleKey: "lessons.lesson-2-2.title", xp: 30, orderInLevel: 2 },
      { id: "lesson-2-3", lessonTitleKey: "lessons.lesson-2-3.title", xp: 40, orderInLevel: 3 }
    ]
  },
  {
    level: 3,
    titleKey: 'lessons.levels.authentication',
    descriptionKey: 'lessons.descriptions.authentication',
    lessons: [
      { id: "lesson-3-1", lessonTitleKey: "lessons.lesson-3-1.title", xp: 35, orderInLevel: 1 },
      { id: "lesson-3-2", lessonTitleKey: "lessons.lesson-3-2.title", xp: 45, orderInLevel: 2 },
      { id: "lesson-3-3", lessonTitleKey: "lessons.lesson-3-3.title", xp: 50, orderInLevel: 3 }
    ]
  },
  {
    level: 4,
    titleKey: 'lessons.levels.deployment',
    descriptionKey: 'lessons.descriptions.deployment',
    lessons: [
      { id: "lesson-4-1", lessonTitleKey: "lessons.lesson-4-1.title", xp: 55, orderInLevel: 1 },
      { id: "lesson-4-2", lessonTitleKey: "lessons.lesson-4-2.title", xp: 60, orderInLevel: 2 },
      { id: "lesson-4-3", lessonTitleKey: "lessons.lesson-4-3.title", xp: 70, orderInLevel: 3 }
    ]
  },
  {
    level: 5,
    titleKey: 'lessons.levels.integrations',
    descriptionKey: 'lessons.descriptions.integrations',
    lessons: [
      { id: "lesson-5-1", lessonTitleKey: "lessons.lesson-5-1.title", xp: 65, orderInLevel: 1 },
      { id: "lesson-5-2", lessonTitleKey: "lessons.lesson-5-2.title", xp: 75, orderInLevel: 2 },
      { id: "lesson-5-3", lessonTitleKey: "lessons.lesson-5-3.title", xp: 80, orderInLevel: 3 }
    ]
  },
  {
    level: 6,
    titleKey: 'lessons.levels.mastery',
    descriptionKey: 'lessons.descriptions.mastery',
    lessons: [
      { id: "lesson-6-1", lessonTitleKey: "lessons.lesson-6-1.title", xp: 100, orderInLevel: 1 },
      { id: "lesson-6-2", lessonTitleKey: "lessons.lesson-6-2.title", xp: 90, orderInLevel: 2 },
      { id: "lesson-6-3", lessonTitleKey: "lessons.lesson-6-3.title", xp: 200, orderInLevel: 3 }
    ]
  }
];

interface UserProgressItem {
  lesson_id: string;
  completed: boolean;
  quiz_score?: number; // quiz_score might be optional if not taken yet
}

interface LessonsTabProps {
  userProgress: UserProgressItem[];
  onProgressUpdate?: () => void; // Added prop
}

export default function LessonsTab({ userProgress, onProgressUpdate }: LessonsTabProps) {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Added

  const getProgressForLesson = (lessonId: string) => {
    return userProgress.find(p => p.lesson_id === lessonId);
  };

  // lessonIndex is 0-based index within the level's lessons array
  const isLessonUnlocked = (levelNumber: number, lessonOrderInLevel: number) => {
    // First lesson of the first level is always unlocked
    if (levelNumber === 1 && lessonOrderInLevel === 1) return true;

    // For lessons other than the very first one:
    if (lessonOrderInLevel > 1) {
      // Check previous lesson in the same level
      const prevLessonInSameLevel = LESSON_STRUCTURE
        .find(l => l.level === levelNumber)?.lessons
        .find(lesson => lesson.orderInLevel === lessonOrderInLevel - 1);

      if (prevLessonInSameLevel) {
        const prevProgress = getProgressForLesson(prevLessonInSameLevel.id);
        return prevProgress?.completed || false;
      }
    } else { // First lesson of a level (levelNumber > 1)
      const prevLevelNumber = levelNumber - 1;
      if (prevLevelNumber < 1) return true; // Should be caught by the first condition, but defensive

      const prevLevelData = LESSON_STRUCTURE.find(l => l.level === prevLevelNumber);
      if (!prevLevelData || prevLevelData.lessons.length === 0) {
        // This case implies a misconfiguration or that level 1 has no lessons,
        // which shouldn't happen if level 1 lesson 1 is the start.
        // If previous level has no lessons, consider this one unlocked (or handle as error).
        // For simplicity, let's assume valid structure where previous level has lessons.
        return true;
      }

      const prevLevelLastLesson = prevLevelData.lessons[prevLevelData.lessons.length - 1];
      const prevProgress = getProgressForLesson(prevLevelLastLesson.id);
      return prevProgress?.completed || false;
    }
    return false; // Default to locked if logic somehow fails to find a condition
  };

  return (
    <div className="space-y-8">
      {LESSON_STRUCTURE.map((level) => {
        const completedCount = level.lessons.filter(lesson => {
          const progress = getProgressForLesson(lesson.id);
          return progress?.completed;
        }).length;

        const progressPercentage = level.lessons.length > 0
          ? Math.round((completedCount / level.lessons.length) * 100)
          : 0;

        return (
          <div key={level.level} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {t('lessons.level', { level: level.level })}: {t(level.titleKey)}
                  </h2>
                  <p className="text-blue-100">{t(level.descriptionKey)}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    {completedCount}/{level.lessons.length}
                  </div>
                  <div className="text-sm text-blue-100">
                    {/* Using dashboard.stats.progress as it's a general "Progress" term */}
                    {progressPercentage}% {t('dashboard.stats.progress')}
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-800 bg-opacity-50 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4">
                {level.lessons.map((lesson, index) => { // index here is the 0-based array index
                  const lessonProgress = getProgressForLesson(lesson.id);
                  // Use lesson.orderInLevel for isLessonUnlocked, which is 1-based
                  const isUnlocked = isLessonUnlocked(level.level, lesson.orderInLevel);
                  const isCompleted = lessonProgress?.completed || false;
                  const score = lessonProgress?.quiz_score || 0;

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        isCompleted
                          ? 'border-green-300 bg-green-50 hover:bg-green-100'
                          : isUnlocked
                          ? 'border-blue-200 bg-blue-50 hover:bg-blue-100'
                          : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                      }`}
                      onClick={() => {
                        if (isUnlocked) {
                          navigate(`/lesson/${lesson.id}`);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                            isCompleted
                              ? 'bg-green-500'
                              : isUnlocked
                              ? 'bg-blue-500'
                              : 'bg-gray-400'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="h-6 w-6 text-white" />
                            ) : isUnlocked ? (
                              <BookOpen className="h-6 w-6 text-white" />
                            ) : (
                              <Lock className="h-6 w-6 text-white" />
                            )}
                          </div>

                          <div>
                            <h3 className={`font-semibold ${
                              isUnlocked ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {t(lesson.lessonTitleKey)}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className={`flex items-center ${
                                isUnlocked ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                                <Award className="h-4 w-4 mr-1" />
                                {lesson.xp} XP
                              </span>
                              {isCompleted && (
                                <span className="text-green-600 font-medium">
                                  {t('lessons.status.score', { score })}
                                </span>
                              )}
                              {!isUnlocked && (
                                <span className="text-gray-400 text-xs">
                                  {t('lessons.status.locked')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {isCompleted && (
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {t('lessons.status.completed')}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
