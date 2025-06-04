import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Lesson } from '../data/lessonsData'; // Assuming Lesson interface is exported from lessonsData

interface QuizProps {
  lesson: Lesson;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export default function Quiz({ lesson, onComplete, onBack }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const currentQuestion = lesson.quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === lesson.quizQuestions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) return; // Prevent proceeding without an answer

    if (isLastQuestion) {
      calculateAndShowResults();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateAndShowResults = () => {
    let correctAnswers = 0;
    lesson.quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = lesson.quizQuestions.length > 0
                  ? Math.round((correctAnswers / lesson.quizQuestions.length) * 100)
                  : 0;
    setQuizScore(score);
    setShowResults(true);
    onComplete(score); // Call onComplete with the calculated score
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizScore(0);
  };

  if (showResults) {
    const passed = quizScore >= 85;
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center border-t-8 ${passed ? 'border-green-500' : 'border-red-500'}">
          <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <CheckCircle className="h-12 w-12 text-green-600" />
            ) : (
              <XCircle className="h-12 w-12 text-red-600" />
            )}
          </div>

          <h2 className="text-3xl font-bold mb-2">
            {passed ? 'Congratulations!' : 'Keep Trying!'}
          </h2>

          <div className="text-6xl font-bold my-4">
            <span className={passed ? 'text-green-600' : 'text-red-600'}>
              {quizScore}%
            </span>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            {passed
              ? `You've successfully passed the quiz for "${lesson.title}"!`
              : `You need 85% or higher to pass. You scored ${quizScore}%. Review the lesson and try again!`
            }
            {passed && lesson.badgeName && (
                 <span className="block mt-2 text-yellow-600 font-semibold">🏆 Badge Earned: {lesson.badgeName} (+{lesson.badgeXp} XP)</span>
            )}
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onBack}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              {passed ? 'Continue Learning' : 'Review Lesson'}
            </button>

            {!passed && (
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 inline-flex items-center justify-center text-lg font-semibold transition-colors"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
        <div className="max-w-2xl mx-auto p-6 text-center">
            <p className="text-red-500">Error: Quiz questions could not be loaded for this lesson.</p>
            <button onClick={onBack} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Back to Lesson
            </button>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Lesson
        </button>

        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {lesson.quizQuestions.length}
        </div>
      </div>

      <div className="bg-gray-200 rounded-full h-2.5 mb-8">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / lesson.quizQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">{currentQuestion.question}</h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all text-gray-800
                ${selectedAnswers[currentQuestionIndex] === index
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mr-4 flex items-center justify-center ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-400'
                }`}>
                  {selectedAnswers[currentQuestionIndex] === index && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedAnswers[currentQuestionIndex] !== undefined && currentQuestion.explanation && (
             <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-700"><span className="font-semibold">Explanation:</span> {currentQuestion.explanation}</p>
            </div>
        )}

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-8 py-3 rounded-lg font-semibold
              disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
              bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
            className="px-8 py-3 rounded-lg font-semibold text-white
              disabled:bg-blue-300 disabled:cursor-not-allowed
              bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
