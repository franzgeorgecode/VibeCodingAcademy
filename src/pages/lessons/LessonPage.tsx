import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useSrCodeStore } from '@/stores/srCodeStore';
import SrCodeAvatar from '@/components/srcode/SrCodeAvatar';

// Complete lesson content based on the structured learning path
const getLessonContent = (lessonId: string) => {
  const lessons = {
    'lesson-1-1': {
      title: 'What the Hell is bolt.new?',
      description: 'Understand bolt.new as an AI web development agent',
      level: 1,
      xpReward: 10,
      content: `
## Introduction to bolt.new

bolt.new is an AI-powered development environment that revolutionizes how we build web applications. Created by StackBlitz, it's like having a senior developer available 24/7 who never gets tired and never judges your code (well, maybe a little 😉).

### What Makes bolt.new Special?

1. **AI-Powered Development**
   - Creates complete projects from natural language descriptions
   - Provides intelligent code suggestions and solutions
   - Explains complex concepts in simple terms
   - Adapts to your coding style and preferences

2. **WebContainer Technology**
   - Runs Node.js directly in your browser
   - No local setup required
   - Instant project creation and deployment
   - Seamless development experience

3. **Real-Time Collaboration**
   - Share your workspace with a single URL
   - Get instant feedback from the AI
   - Perfect for pair programming and learning

### Key Features

- **Project Generation**: Create complete applications with simple prompts
- **Code Assistance**: Get help with debugging and optimization
- **Best Practices**: Learn modern development patterns
- **Instant Deployment**: Deploy your apps with a single click
      `,
      objectives: [
        'Understand the core concepts of bolt.new',
        'Learn about WebContainer technology',
        'Explore AI-powered development features',
        'Identify when and how to use bolt.new effectively'
      ],
      quiz: [
        {
          question: 'What is the primary purpose of bolt.new?',
          options: [
            'To replace human developers',
            'To provide AI-powered development assistance',
            'To host websites',
            'To compile code'
          ],
          correctIndex: 1
        },
        {
          question: 'What technology enables bolt.new to run Node.js in the browser?',
          options: [
            'Docker containers',
            'Virtual machines',
            'WebContainers',
            'Cloud servers'
          ],
          correctIndex: 2
        },
        {
          question: 'Which of these is NOT a feature of bolt.new?',
          options: [
            'Code generation',
            'Real-time collaboration',
            'Local file system access',
            'Instant deployment'
          ],
          correctIndex: 2
        }
      ]
    },
    'lesson-1-2': {
      title: 'The Art of the Perfect Prompt',
      description: 'Master the craft of writing effective prompts for bolt.new',
      level: 1,
      xpReward: 15,
      content: `
## Writing Effective Prompts

The key to getting the most out of bolt.new lies in how you communicate with it. A well-crafted prompt is like a detailed blueprint - the clearer it is, the better the result.

### Prompt Structure

1. **Project Overview**
   - Start with a clear, high-level description
   - Specify the type of application
   - Define the main functionality

2. **Technical Requirements**
   - List specific technologies to use
   - Mention any constraints
   - Specify performance requirements

3. **User Interface**
   - Describe the desired layout
   - Specify styling preferences
   - Include any design system requirements

### Best Practices

- Be specific but concise
- Use technical terms correctly
- Break complex requests into smaller parts
- Include examples when possible
- Specify what you don't want

### Example Prompts

✅ Good Prompt:
"Create a React todo app with Tailwind CSS. Include features for adding, completing, and deleting tasks. Use local storage for persistence. The design should be minimal and modern."

❌ Bad Prompt:
"Make me a cool app that does stuff with tasks"
      `,
      objectives: [
        'Learn the structure of effective prompts',
        'Understand best practices for communication with bolt.new',
        'Practice writing clear and specific requests',
        'Identify common prompt mistakes'
      ],
      quiz: [
        {
          question: 'What should a good prompt include?',
          options: [
            'Just the project name',
            'A detailed project overview and technical requirements',
            'Only the desired technologies',
            'As few details as possible'
          ],
          correctIndex: 1
        },
        {
          question: 'Which is an example of a good prompt?',
          options: [
            'Make me a website',
            'Create something cool',
            'Build a React app with authentication, routing, and Tailwind CSS styling',
            'Do the thing we talked about'
          ],
          correctIndex: 2
        }
      ]
    }
  };

  return lessons[lessonId as keyof typeof lessons] || {
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
  const { addSrCodeMessage, setTyping, setMood, mood } = useSrCodeStore();
  
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
                Level {lesson.level}
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