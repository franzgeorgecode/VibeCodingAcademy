import marked from 'marked';
import { Badge } from '@/stores/userProgressStore';

interface Lesson {
  id: string;
  title: string;
  description: string;
  level: number;
  xpReward: number;
  duration: string;
  isLocked: boolean;
  requiredLessonId?: string;
  content?: string;
  objectives?: string[];
  practice?: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  badge?: Badge;
  srCodeSays?: string;
}

const lessons: Record<string, Lesson> = {
  'lesson-1-1': {
    id: 'lesson-1-1',
    title: 'What the Hell is bolt.new?',
    description: 'Understand bolt.new as an AI web development agent and its capabilities',
    level: 1,
    xpReward: 10,
    duration: '15 min',
    isLocked: false,
    content: marked(`
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
    `),
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
        correctAnswer: 1
      },
      {
        question: 'What technology enables bolt.new to run Node.js in the browser?',
        options: [
          'Docker containers',
          'Virtual machines',
          'WebContainers',
          'Cloud servers'
        ],
        correctAnswer: 2
      },
      {
        question: 'Which of these is NOT a feature of bolt.new?',
        options: [
          'Code generation',
          'Real-time collaboration',
          'Local file system access',
          'Instant deployment'
        ],
        correctAnswer: 2
      }
    ],
    badge: {
      id: 'first-contact',
      name: 'First Contact',
      description: 'Completed your first lesson about bolt.new',
      icon: '🏆',
      rarity: 'common'
    },
    srCodeSays: "bolt.new is like having a senior developer who never gets tired, never asks for coffee, and never argues about tabs vs spaces. Amazing, right?"
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    title: 'The Art of the Perfect Prompt',
    description: 'Master the craft of writing effective prompts for bolt.new',
    level: 1,
    xpReward: 15,
    duration: '20 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-1'
  },
  'lesson-1-3': {
    id: 'lesson-1-3',
    title: 'WebContainers: The Magic Behind the Curtain',
    description: 'Deep dive into StackBlitz WebContainers and their capabilities',
    level: 1,
    xpReward: 20,
    duration: '25 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-2'
  },
  'lesson-2-1': {
    id: 'lesson-2-1',
    title: 'Connecting Supabase Like a Pro',
    description: 'Set up and integrate Supabase in your bolt.new projects',
    level: 2,
    xpReward: 25,
    duration: '30 min',
    isLocked: false,
    requiredLessonId: 'lesson-1-3'
  },
  'lesson-2-2': {
    id: 'lesson-2-2',
    title: 'Database Schemas: Your New Best Friend',
    description: 'Design effective database schemas for your applications',
    level: 2,
    xpReward: 30,
    duration: '35 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-1'
  },
  'lesson-2-3': {
    id: 'lesson-2-3',
    title: 'Edge Functions: Unlimited Power',
    description: 'Create and manage Edge Functions for serverless operations',
    level: 2,
    xpReward: 40,
    duration: '40 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-2'
  },
  'lesson-3-1': {
    id: 'lesson-3-1',
    title: 'Auth Basics: Who Are You',
    description: 'Implement secure authentication in your applications',
    level: 3,
    xpReward: 35,
    duration: '30 min',
    isLocked: false,
    requiredLessonId: 'lesson-2-3'
  },
  'lesson-3-2': {
    id: 'lesson-3-2',
    title: 'Protecting Routes Like Fort Knox',
    description: 'Master middleware and route protection techniques',
    level: 3,
    xpReward: 45,
    duration: '35 min',
    isLocked: false,
    requiredLessonId: 'lesson-3-1'
  },
  'lesson-3-3': {
    id: 'lesson-3-3',
    title: 'Social Auth: The Easy Way',
    description: 'Integrate multiple authentication providers',
    level: 3,
    xpReward: 50,
    duration: '40 min',
    isLocked: false,
    requiredLessonId: 'lesson-3-2'
  }
};

export { lessons };