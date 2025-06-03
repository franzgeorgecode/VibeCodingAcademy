import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useSrCodeStore } from '@/stores/srCodeStore';
import SrCodeAvatar from '@/components/srcode/SrCodeAvatar';

// Mock lesson content for a single lesson
const getLessonContent = (lessonId: string) => {
  if (lessonId === 'lesson-1') {
    return {
      title: 'What is bolt.new?',
      description: 'Learn the fundamentals of bolt.new as an AI web development agent',
      xpReward: 10,
      content: `
## Introduction to bolt.new

bolt.new is an artificial intelligence agent specialized in web development, created by StackBlitz. 
It works as an expert programming partner that can:

1. **Create complete projects** based on your instructions
2. **Solve code problems** with optimized solutions
3. **Explain programming concepts** clearly
4. **Adapt existing code** according to your needs

### How does it work?

bolt.new uses WebContainers, a technology that allows running complete Node.js environments in the browser. 
This means you can develop complete applications without complex local configurations.
      `,
      objectives: [
        'Understand what bolt.new is',
        'Know its main capabilities',
        'Identify ideal use cases'
      ],
      quiz: [
        {
          question: 'What is bolt.new?',
          options: [
            'A JavaScript framework',
            'An AI web development agent',
            'A new programming language',
            'A hosting platform'
          ],
          correctIndex: 1
        },
        {
          question: 'What technology does bolt.new use to run development environments?',
          options: [
            'Docker',
            'Virtual Machines',
            'WebContainers',
            'Kubernetes'
          ],
          correctIndex: 2
        }
      ]
    };
  }
  
  // Default lesson if ID not found
  return {
    title: 'Lesson not found',
    description: 'This lesson does not exist',
    xpReward: 0,
    content: 'Content not available',
    objectives: [],
    quiz: []
  };
};

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [lesson, setLesson] = useState(getLessonContent(lessonId || ''));
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const { completeLesson, completedLessons } = useUserProgressStore();
  const { setMood, addSrCodeMessage, setTyping } = useSrCodeStore();
  
  const isLessonCompleted = completedLessons.includes(lessonId || '');
  
  useEffect(() => {
    if (lessonId) {
      setLesson(getLessonContent(lessonId));
      setQuizStarted(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setIsCorrect(null);
      setQuizCompleted(false);
      setScore(0);
      
      setTyping(true);
      setMood('happy');
      
      setTimeout(() => {
        const introMessages = [
          `Welcome to "${lesson.title}"! Get ready to learn... or at least pretend you are 😏`,
          `Ah, you made it to "${lesson.title}"! I hope you brought coffee, because I don't share mine ☕`,
          `"${lesson.title}"! My favorite lesson... well, I say that about all lessons, don't feel special.`
        ];
        
        addSrCodeMessage(
          introMessages[Math.floor(Math.random() * introMessages.length)]
        );
      }, 1000);
    }
  }, [lessonId, lesson.title, addSrCodeMessage, setMood, setTyping]);
  
  const startQuiz = () => {
    setQuizStarted(true);
    setMood('thinking');
    
    addSrCodeMessage(
      "Quiz time! Let's see if you were paying attention or just pretending while checking Instagram..."
    );
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(optionIndex);
    
    const currentQuestion = lesson.quiz[currentQuestionIndex];
    const correct = optionIndex === currentQuestion.correctIndex;
    
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
      setMood('celebrating');
      
      addSrCodeMessage(
        "Correct! Looks like your neurons are working after all. Impressive!"
      );
    } else {
      setMood('sarcastic');
      
      addSrCodeMessage(
        "Hmm, not quite. But hey, mistakes are learning opportunities... or at least that's what they say to make us feel better."
      );
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < lesson.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setMood('thinking');
    } else {
      setQuizCompleted(true);
      
      if (!isLessonCompleted) {
        completeLesson(lessonId || '', lesson.xpReward);
        
        setMood('celebrating');
        
        setTimeout(() => {
          const scorePercentage = (score + 1) / lesson.quiz.length * 100;
          
          let message = '';
          if (scorePercentage === 100) {
            message = "PERFECTION! 🎉 100% correct. Either you're a genius or you're really good at guessing. Either way, impressive!";
          } else if (scorePercentage >= 80) {
            message = "Excellent work! Almost perfect. Next time try reading ALL the words, not just the ones you like 😉";
          } else {
            message = "Well... you passed. Not with honors, but you passed. Remember that in programming 'almost right' means 'completely wrong', but we'll let it slide for today.";
          }
          
          addSrCodeMessage(message);
        }, 1000);
      }
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Back button */}
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
      
      {/* Lesson header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md p-6 mb-8"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-gray-600">{lesson.description}</p>
            
            <div className="flex items-center mt-4 space-x-4">
              <span className="badge bg-primary-100 text-primary-700">
                Level 1
              </span>
              <span className="text-sm text-gray-500">
                +{lesson.xpReward} XP
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
      
      {/* Lesson content or quiz */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        {!quizStarted ? (
          <div className="p-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-3">Learning Objectives:</h3>
              <ul className="space-y-2">
                {lesson.objectives.map((objective, index) => (
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
                    Question {currentQuestionIndex + 1} of {lesson.quiz.length}
                  </span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">
                    {lesson.quiz[currentQuestionIndex].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {lesson.quiz[currentQuestionIndex].options.map((option, index) => (
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
                      {currentQuestionIndex < lesson.quiz.length - 1 
                        ? 'Next Question' 
                        : 'Complete Quiz'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Lesson Completed!</h3>
                <p className="text-gray-600 mb-6">
                  You've earned {lesson.xpReward} XP and are making great progress!
                </p>
                <Link to="/dashboard" className="btn btn-primary">
                  Return to Dashboard
                </Link>
              </div>
            )}
          </div>
        )}
      </motion.div>
      
      {/* SrCode interaction area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        className="mt-8 bg-white rounded-xl shadow-md p-6"
      >
        <h3 className="font-bold text-lg mb-4">SrCode Says:</h3>
        <div className="flex items-start">
          <SrCodeAvatar />
        </div>
      </motion.div>
    </div>
  );
};

export default LessonPage;