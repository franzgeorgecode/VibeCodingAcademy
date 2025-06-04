import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, Award } from 'lucide-react';

const LESSON_STRUCTURE = [
  {
    level: 1,
    title: "Foundations",
    description: "Learn the basics of bolt.new and prompt engineering",
    lessons: [
      { id: "lesson-1-1", title: "What the Hell is bolt.new?", xp: 10 },
      { id: "lesson-1-2", title: "The Art of the Perfect Prompt", xp: 15 },
      { id: "lesson-1-3", title: "WebContainers: The Magic Behind the Curtain", xp: 20 }
    ]
  },
  {
    level: 2,
    title: "Databases",
    description: "Master Supabase integration and database design",
    lessons: [
      { id: "lesson-2-1", title: "Connecting Supabase Like a Pro", xp: 25 },
      { id: "lesson-2-2", title: "Database Schemas: Your New Best Friend", xp: 30 },
      { id: "lesson-2-3", title: "Edge Functions: Unlimited Power", xp: 40 }
    ]
  },
  {
    level: 3,
    title: "Authentication",
    description: "Implement secure user authentication systems",
    lessons: [
      { id: "lesson-3-1", title: "Auth Basics: Who Are You", xp: 35 },
      { id: "lesson-3-2", title: "Protecting Routes Like Fort Knox", xp: 45 },
      { id: "lesson-3-3", title: "Social Auth: The Easy Way", xp: 50 }
    ]
  },
  {
    level: 4,
    title: "Deployment",
    description: "Deploy your applications to the world",
    lessons: [
      { id: "lesson-4-1", title: "Netlify: Your Best Friend for Deploy", xp: 55 },
      { id: "lesson-4-2", title: "Custom Domains: Your Personal Brand", xp: 60 },
      { id: "lesson-4-3", title: "CI/CD: The Future is Now", xp: 70 }
    ]
  },
  {
    level: 5,
    title: "Integrations",
    description: "Connect with external services and APIs",
    lessons: [
      { id: "lesson-5-1", title: "GitHub: Your Safety Net", xp: 65 },
      { id: "lesson-5-2", title: "Stripe: Show Me The Money", xp: 75 },
      { id: "lesson-5-3", title: "Figma to Code: Pure Magic", xp: 80 }
    ]
  },
  {
    level: 6,
    title: "Mastery",
    description: "Become a bolt.new expert with advanced projects",
    lessons: [
      { id: "lesson-6-1", title: "Final Project: Complete App", xp: 100 },
      { id: "lesson-6-2", title: "Optimization and Performance", xp: 90 },
      { id: "lesson-6-3", title: "SrCode Certification", xp: 200 }
    ]
  }
];

export default function LessonsTab({ userProgress }) {
  const navigate = useNavigate();

  const getProgressForLesson = (lessonId) => {
    return userProgress.find(p => p.lesson_id === lessonId);
  };

  const isLessonUnlocked = (level, lessonIndex) => {
    if (level === 1 && lessonIndex === 0) return true;

    const currentLevelLessons = LESSON_STRUCTURE.find(l => l.level === level)?.lessons || [];

    if (lessonIndex > 0) {
      const prevLessonId = currentLevelLessons[lessonIndex - 1].id;
      const prevProgress = getProgressForLesson(prevLessonId);
      return prevProgress?.completed || false;
    } else {
      const prevLevel = LESSON_STRUCTURE.find(l => l.level === level - 1);
      if (!prevLevel) return true; // Should not happen if levels are sequential starting from 1

      const prevLevelLastLesson = prevLevel.lessons[prevLevel.lessons.length - 1];
      const prevProgress = getProgressForLesson(prevLevelLastLesson.id);
      return prevProgress?.completed || false;
    }
  };

  return (
    <div className="space-y-8">
      {LESSON_STRUCTURE.map((level) => {
        const completedCount = level.lessons.filter(lesson => {
          const progress = getProgressForLesson(lesson.id);
          return progress?.completed;
        }).length;

        const progressPercentage = level.lessons.length > 0 ? Math.round((completedCount / level.lessons.length) * 100) : 0;

        return (
          <div key={level.level} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Level {level.level}: {level.title}
                  </h2>
                  <p className="text-blue-100">{level.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    {completedCount}/{level.lessons.length}
                  </div>
                  <div className="text-sm text-blue-100">
                    {progressPercentage}% Complete
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
                {level.lessons.map((lesson, index) => {
                  const lessonProgress = getProgressForLesson(lesson.id);
                  const isUnlocked = isLessonUnlocked(level.level, index);
                  const isCompleted = lessonProgress?.completed || false;
                  const score = lessonProgress?.quiz_score || 0;

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isCompleted
                          ? 'border-green-300 bg-green-50 hover:bg-green-100 cursor-pointer'
                          : isUnlocked
                          ? 'border-blue-200 bg-blue-50 hover:bg-blue-100 cursor-pointer'
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
                              {lesson.title}
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
                                  Score: {score}%
                                </span>
                              )}
                              {!isUnlocked && (
                                <span className="text-gray-400 text-xs">
                                  Complete previous lesson to unlock
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {isCompleted && (
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Completed
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
