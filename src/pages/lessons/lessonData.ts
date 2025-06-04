import marked from 'marked';
import { Badge } from '@/stores/userProgressStore';

interface Lesson {
  id: string;
  title: string;
  description: string;
  level: number;
  xpReward: number;
  content: string;
  objectives: string[];
  practice?: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  badge: Badge;
  srCodeSays: string;
}

export const lessons: Record<string, Lesson> = {
  'lesson-1-1': {
    id: 'lesson-1-1',
    title: 'What the Hell is bolt.new?',
    description: 'Understand bolt.new as an AI web development agent',
    level: 1,
    xpReward: 10,
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
  // Add all other lessons here following the same structure
};