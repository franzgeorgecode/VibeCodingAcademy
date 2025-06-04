import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, BookOpen } from 'lucide-react';
import { lessonsData } from '../data/lessonsData'; // Ensure this path is correct
import { supabase } from '../lib/supabase';
import Quiz from './Quiz'; // Ensure this path is correct

// Define the UserProgress interface locally if not imported from elsewhere
interface UserProgress {
  lesson_id: string;
  completed: boolean;
  quiz_score: number;
  quiz_attempts: number;
  // Add other fields if necessary, like user_id, completed_at
}

export default function LessonView() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null); // Can be null if no progress yet

  const currentLesson = lessonId ? lessonsData[lessonId] : null;

  useEffect(() => {
    if (!currentLesson) {
      console.warn(`Lesson with ID "${lessonId}" not found. Redirecting to dashboard.`);
      navigate('/dashboard');
      return;
    }
    checkUserProgress();
  }, [lessonId, navigate]); // currentLesson removed as it can cause loop if lessonsData is complex

  const checkUserProgress = async () => {
    if (!lessonId) return; // Guard against undefined lessonId
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: progress, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116: 'single' row not found is okay
        console.error('Error checking user progress:', error);
        throw error;
      }

      if (progress) {
        setUserProgress(progress as UserProgress); // Cast to UserProgress
        setLessonCompleted(progress.completed);
      } else {
        setUserProgress(null); // No progress found for this lesson
        setLessonCompleted(false);
      }
    } catch (error) {
      // Error already logged or it's a non-critical "not found"
    }
  };

  const markLessonComplete = async (quizScore: number) => {
    if (!currentLesson) return;
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const isCompleted = quizScore >= 85;

      const progressData = {
        user_id: user.id,
        lesson_id: currentLesson.id,
        completed: isCompleted,
        quiz_score: quizScore,
        quiz_attempts: (userProgress?.quiz_attempts || 0) + 1,
        completed_at: isCompleted ? new Date().toISOString() : userProgress?.completed_at || null // Preserve original completion if not re-completing now
      };

      const { error: progressError } = await supabase
        .from('user_progress')
        .upsert(progressData, { onConflict: 'user_id,lesson_id' });


      if (progressError) throw progressError;

      if (isCompleted) {
         // Only add a new badge entry if one doesn't already exist for this lesson
        const { data: existingBadge } = await supabase
          .from('user_badges')
          .select('id')
          .eq('user_id', user.id)
          .eq('lesson_id', currentLesson.id)
          .single();

        if (!existingBadge) {
            const { error: badgeError } = await supabase
            .from('user_badges')
            .insert({ // Use insert instead of upsert if we only want to add once
                user_id: user.id,
                lesson_id: currentLesson.id, // Make sure your DB schema for user_badges has lesson_id
                badge_name: currentLesson.badgeName,
                badge_xp: currentLesson.badgeXp,
                earned_at: new Date().toISOString()
            });
            if (badgeError) throw badgeError;
        }
        setLessonCompleted(true);
      }
      setShowQuiz(false); // Go back to lesson view after quiz
      await checkUserProgress(); // Refresh progress state
    } catch (error) {
      console.error('Error updating progress:', error);
      // Potentially show an error message to the user
    }
  };

  const renderContent = (content: string) => {
    if (!content) return null;
    return content
      .split('\n\n') // Split by escaped double newlines from lessonsData
      .map((paragraph, index) => {
        const trimmedParagraph = paragraph.trim();
        if (trimmedParagraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mb-2 text-gray-700 mt-4">{trimmedParagraph.slice(4)}</h3>;
        }
        if (trimmedParagraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mb-3 text-gray-800 mt-6">{trimmedParagraph.slice(3)}</h2>;
        }
        if (trimmedParagraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mb-4 text-gray-900 mt-8">{trimmedParagraph.slice(2)}</h1>;
        }
        // Replace single escaped newlines with <br /> for line breaks within paragraphs
        const lines = trimmedParagraph.split('\n').map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < trimmedParagraph.split('\n').length - 1 && <br />}
          </React.Fragment>
        ));
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{lines}</p>;
      });
  };


  if (!currentLesson) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-6">This lesson does not exist or is not available.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <Quiz
        lesson={currentLesson}
        onComplete={markLessonComplete}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>

        {lessonCompleted && (
          <div className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full">
            <Award className="h-5 w-5 mr-2" />
            Completed
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-sm text-blue-600 font-medium mb-2">
              Level {currentLesson.level} • Lesson {currentLesson.orderInLevel}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {currentLesson.title}
            </h1>
            <p className="text-lg text-gray-600">
              {currentLesson.objective}
            </p>
          </div>

          <div className="text-right flex-shrink-0 ml-4">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {currentLesson.badgeName}
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-2 justify-end">
                <Award className="h-4 w-4 mr-1 text-yellow-500" />
                {currentLesson.badgeXp} XP
            </div>
          </div>
        </div>
         <div className="flex items-center space-x-4 text-sm text-gray-500 border-t pt-4">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                 Approx. Reading Time: 10-15 min {/* Example, can be dynamic */}
              </div>
        </div>
      </div>

      {currentLesson.learningObjectives && currentLesson.learningObjectives.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">What You'll Learn</h2>
          <ul className="space-y-2">
            {currentLesson.learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start text-blue-800">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-[0.4rem] mr-3 flex-shrink-0"></div>
                {objective}
              </li>
            ))}
          </ul>
        </div>
      )}

      <article className="bg-white rounded-lg shadow-lg p-8 mb-6 prose max-w-none">
        {renderContent(currentLesson.content)}
      </article>

      {currentLesson.srcodeCommentary && (
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6 border border-purple-200">
          <div className="flex items-start">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 font-bold flex items-center justify-center mr-4 flex-shrink-0 text-lg">
              SR
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-1">SrCode says:</h3>
              <p className="text-purple-800 italic leading-relaxed">{currentLesson.srcodeCommentary}</p>
            </div>
          </div>
        </div>
      )}

      {currentLesson.practiceDescription && (
        <div className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-green-900 mb-3">Practice Exercise</h2>
          <p className="text-green-800 leading-relaxed">{currentLesson.practiceDescription}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
        <div>
          {userProgress && userProgress.quiz_attempts > 0 && (
            <p className="text-sm text-gray-600">
              Best Score: {userProgress.quiz_score}%
              {userProgress.quiz_score < 85 && userProgress.completed === false && " (85% required to pass)"}
            </p>
          )}
        </div>

        <button
          onClick={() => setShowQuiz(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center font-semibold text-lg transition-colors"
        >
          {lessonCompleted ? 'Review Quiz' : (userProgress?.quiz_attempts > 0 && userProgress?.quiz_score < 85) ? 'Retake Quiz' : 'Take Quiz'}
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
