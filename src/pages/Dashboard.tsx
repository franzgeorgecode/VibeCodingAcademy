import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useSrCodeStore } from '@/stores/srCodeStore';
import { ExternalLink } from 'lucide-react';

import XpBar from '../components/gamification/XpBar';
import StreakCounter from '../components/gamification/StreakCounter';
import SrCodeAvatar from '../components/srcode/SrCodeAvatar';
import LessonCard from '../components/lessons/LessonCard';
import BadgeCard from '../components/gamification/BadgeCard';

// Complete lesson data based on the structured learning path
const lessons = [
  {
    id: 'lesson-1-1',
    title: 'What the Hell is bolt.new?',
    description: 'Understand bolt.new as an AI web development agent and its capabilities',
    level: 1,
    xpReward: 10,
    duration: '15 min',
    isLocked: false
  },
  {
    id: 'lesson-1-2',
    title: 'The Art of the Perfect Prompt',
    description: 'Master the craft of writing effective prompts for bolt.new',
    level: 1,
    xpReward: 15,
    duration: '20 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-1'
  },
  {
    id: 'lesson-1-3',
    title: 'WebContainers: The Magic Behind the Curtain',
    description: 'Deep dive into StackBlitz WebContainers and their capabilities',
    level: 1,
    xpReward: 20,
    duration: '25 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-2'
  },
  {
    id: 'lesson-2-1',
    title: 'Connecting Supabase Like a Pro',
    description: 'Set up and integrate Supabase in your bolt.new projects',
    level: 2,
    xpReward: 25,
    duration: '30 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-3'
  },
  {
    id: 'lesson-2-2',
    title: 'Database Schemas: Your New Best Friend',
    description: 'Design effective database schemas for your applications',
    level: 2,
    xpReward: 30,
    duration: '35 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-1'
  },
  {
    id: 'lesson-2-3',
    title: 'Edge Functions: Unlimited Power',
    description: 'Create and manage Edge Functions for serverless operations',
    level: 2,
    xpReward: 40,
    duration: '40 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-2'
  },
  {
    id: 'lesson-3-1',
    title: 'Auth Basics: Who Are You',
    description: 'Implement secure authentication in your applications',
    level: 3,
    xpReward: 35,
    duration: '30 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-3'
  },
  {
    id: 'lesson-3-2',
    title: 'Protecting Routes Like Fort Knox',
    description: 'Master middleware and route protection techniques',
    level: 3,
    xpReward: 45,
    duration: '35 min',
    isLocked: false,
    requiredLessonId: 'lesson-3-1'
  },
  {
    id: 'lesson-3-3',
    title: 'Social Auth: The Easy Way',
    description: 'Integrate multiple authentication providers',
    level: 3,
    xpReward: 50,
    duration: '40 min',
    isLocked: false,
    requiredLessonId: 'lesson-3-2'
  }
];

// Available badges based on the learning path
const availableBadges = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🏆',
    rarity: 'common',
    xpReward: 10
  },
  {
    id: 'ai-whisperer',
    name: 'AI Whisperer',
    description: 'Create your first perfect prompt',
    icon: '🗣️',
    rarity: 'rare',
    xpReward: 20
  },
  {
    id: 'tech-detective',
    name: 'Tech Detective',
    description: 'Master WebContainers concepts',
    icon: '🔍',
    rarity: 'rare',
    xpReward: 25
  },
  {
    id: 'supreme-connector',
    name: 'Supreme Connector',
    description: 'Successfully integrate Supabase',
    icon: '🔌',
    rarity: 'epic',
    xpReward: 30
  },
  {
    id: 'data-architect',
    name: 'Data Architect',
    description: 'Design your first database schema',
    icon: '📊',
    rarity: 'epic',
    xpReward: 35
  },
  {
    id: 'edge-lord',
    name: 'Edge Lord',
    description: 'Create your first Edge Function',
    icon: '⚡',
    rarity: 'legendary',
    xpReward: 40
  }
];

const Dashboard = () => {
  const { xp, level, streak, badges, completedLessons, incrementStreak } = useUserProgressStore();
  const { addSrCodeMessage, setTyping, mood } = useSrCodeStore();
  
  useEffect(() => {
    setTyping(true);
    
    const timer = setTimeout(() => {
      const welcomeMessages = [
        "Welcome to Vibe Coding Academy! I'm SrCode, your new favorite mentor. Spoiler alert: I'm also your only mentor. So you'll have to put up with me 😏",
        "Hey future bolt.new wizard! I'm SrCode, and I'm here to turn you into a true Vibe developer... or laugh trying.",
        "Look who decided to learn programming! Great choice. I'm SrCode, and I promise this will be the most fun journey you've had since... well, probably ever."
      ];
      
      const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      addSrCodeMessage(randomMessage, 'happy');
    }, 1500);
    
    incrementStreak();
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Vibe Coding Academy</h1>
        <p className="text-gray-600">Your journey to mastering bolt.new starts here</p>
      </div>
      
      {/* Stats & Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-medium mb-3">Your Progress</h3>
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 text-primary-700 h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl mr-3">
              {level}
            </div>
            <div>
              <p className="font-medium">Level {level}</p>
              <p className="text-sm text-gray-500">
                {level === 1 ? "Novice" : 
                 level === 2 ? "Apprentice" : 
                 level === 3 ? "Developer" : 
                 level === 4 ? "Expert" : "Master"}
              </p>
            </div>
          </div>
          <XpBar />
        </motion.div>
        
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-medium mb-4">Daily Streak</h3>
          <StreakCounter />
        </motion.div>
        
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-medium mb-4">Your Mentor</h3>
          <div className="flex flex-col items-center">
            <SrCodeAvatar mood={mood} size="md" showMessage={false} />
            <p className="mt-3 text-center text-gray-700">
              Need help? Chat with SrCode anytime for guidance and tips!
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Continue Learning */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Continue Learning</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Lessons
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <LessonCard 
                {...lesson}
                isLocked={lesson.requiredLessonId && !completedLessons.includes(lesson.requiredLessonId)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Badges Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Achievements</h2>
          <Link 
            to="/profile"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center"
          >
            View All
            <ExternalLink size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {availableBadges.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              isLocked={!badges.some(b => b.id === badge.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;