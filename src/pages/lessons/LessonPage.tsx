import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useSrCodeStore } from '@/stores/srCodeStore';
import SrCodeAvatar from '@/components/srcode/SrCodeAvatar';
import { lessons } from '@/data/lessons';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [currentLesson, setCurrentLesson] = useState(lessons[lessonId || '']);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  
  const { completeLesson, completedLessons } = useUserProgressStore();
  const { addSrCodeMessage, setTyping, setMood, mood } = useSrCodeStore();
  
  const isLessonCompleted = completedLessons.includes(lessonId || '');
  
  useEffect(() => {
    if (lessonId && lessons[lessonId]) {
      setCurrentLesson(lessons[lessonId]);
      setQuizStarted(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setIsCorrect(null);
      setQuizCompleted(false);
      setScore(0);
      setAttempts(0);
      
      setTyping(true);
      setMood('happy');
      
      setTimeout(() => {
        addSrCodeMessage(currentLesson.srCodeSays);
      }, 1000);
    }
  }, [lessonId, addSrCodeMessage, setMood, setTyping]);
  
  const startQuiz = () => {
    setQuizStarted(true);
    setMood('thinking');
    addSrCodeMessage("Quiz time! Let's see if you were actually paying attention... 🤓");
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(optionIndex);
    const currentQuestion = currentLesson.quiz[currentQuestionIndex];
    const correct = optionIndex === currentQuestion.correctAnswer;
    
    setIsCorrect(correct);
    setScore(correct ? score + 1 : score);
    
    if (correct) {
      setMood('celebrating');
      addSrCodeMessage("Correct! Maybe you're not as hopeless as I thought! 🎉");
    } else {
      setMood('sarcastic');
      addSrCodeMessage("Not quite... but hey, at least you're consistent in being wrong! 😏");
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < currentLesson.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setMood('thinking');
    } else {
      const percentage = (score + (isCorrect ? 1 : 0)) / currentLesson.quiz.length * 100;
      
      if (percentage >= 85) {
        setQuizCompleted(true);
        if (!isLessonCompleted) {
          completeLesson(lessonId || '', currentLesson.xpReward);
          setMood('celebrating');
          addSrCodeMessage(`Amazing! ${percentage}% correct! You've earned the "${currentLesson.badge.name}" badge and ${currentLesson.xpReward} XP! 🏆`);
        }
      } else {
        setAttempts(attempts + 1);
        setMood('sarcastic');
        addSrCodeMessage(`${percentage}% correct... You need at least 85% to pass. Want to try again? I've got all day! 😏`);
        
        setTimeout(() => {
          setQuizStarted(false);
          setCurrentQuestionIndex(0);
          setSelectedOption(null);
          setIsCorrect(null);
          setScore(0);
        }, 3000);
      }
    }
  };
  
  if (!currentLesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Link to="/dashboard" className="text-primary-600 hover:text-primary-700">
          Return to Dashboard
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto pb-16">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md p-6 mb-8"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
            <p className="text-gray-600">{currentLesson.description}</p>
            
            <div className="flex items-center mt-4 space-x-4">
              <span className="badge bg-primary-100 text-primary-700">
                Level {currentLesson.level}
              </span>
              <span className="text-sm text-gray-500">
                +{currentLesson.xpReward} XP
              </span>
              
              {isLessonCompleted && (
                <span className="inline-flex items-center text-sm text-green-600">
                  <CheckCircle size={16} className="mr-1" />
                  Completed
                </span>
              )}
            </div>
          </div>
          
          <SrCodeAvatar size="sm" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        {!quizStarted ? (
          <div className="p-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-3">Learning Objectives:</h3>
              <ul className="space-y-2">
                {currentLesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-2 text-sm">
                      {index + 1}
                    </div>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <button
                onClick={startQuiz}
                className="btn btn-primary"
              >
                Take Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {!quizCompleted ? (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="font-bold text-lg">Quiz Time!</h3>
                  <span className="text-sm text-gray-600">
                    Question {currentQuestionIndex + 1} of {currentLesson.quiz.length}
                  </span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">
                    {currentLesson.quiz[currentQuestionIndex].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {currentLesson.quiz[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          selectedOption === index
                            ? isCorrect
                              ? 'bg-green-100 border-green-500'
                              : 'bg-red-100 border-red-500'
                            : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'
                        }`}
                        disabled={isCorrect !== null}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {isCorrect !== null && (
                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="btn btn-primary"
                    >
                      {currentQuestionIndex < currentLesson.quiz.length - 1 
                        ? 'Next Question' 
                        : 'Complete Quiz'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Lesson Completed!</h3>
                <p className="text-gray-600 mb-6">
                  Congratulations! You've earned {currentLesson.xpReward} XP and the "{currentLesson.badge.name}" badge!
                </p>
                <Link to="/dashboard" className="btn btn-primary">
                  Return to Dashboard
                </Link>
              </div>
            )}
          </div>
        )}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-white rounded-xl shadow-md p-6"
      >
        <h3 className="font-bold text-lg mb-4">SrCode Says:</h3>
        <div className="flex items-start">
          <SrCodeAvatar mood={mood} />
        </div>
      </motion.div>
    </div>
  );
};

export default LessonPage;