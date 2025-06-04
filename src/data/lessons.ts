import { marked } from 'marked';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: number;
  xpReward: number;
  content: string;
  objectives: string[];
  badge: {
    name: string;
    description: string;
    icon: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
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
    badge: {
      name: 'First Contact',
      description: 'Complete your first lesson',
      icon: '🏆',
      rarity: 'common'
    },
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
    srCodeSays: "Welcome to your first lesson! Let's demystify bolt.new together. Don't worry, I promise to keep the sarcasm to a minimum... maybe 😏"
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    title: 'The Art of the Perfect Prompt',
    description: 'Master the craft of writing effective prompts',
    level: 1,
    xpReward: 15,
    content: marked(`
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
    `),
    objectives: [
      'Learn the structure of effective prompts',
      'Understand best practices for communication with bolt.new',
      'Practice writing clear and specific requests',
      'Identify common prompt mistakes'
    ],
    badge: {
      name: 'AI Whisperer',
      description: 'Master the art of prompt writing',
      icon: '🗣️',
      rarity: 'rare'
    },
    quiz: [
      {
        question: 'What should a good prompt include?',
        options: [
          'Just the project name',
          'A detailed project overview and technical requirements',
          'Only the desired technologies',
          'As few details as possible'
        ],
        correctAnswer: 1
      },
      {
        question: 'Which is an example of a good prompt?',
        options: [
          'Make me a website',
          'Create something cool',
          'Build a React app with authentication, routing, and Tailwind CSS styling',
          'Do the thing we talked about'
        ],
        correctAnswer: 2
      },
      {
        question: 'What is the recommended approach for complex requests?',
        options: [
          'Write everything in one long prompt',
          'Break them into smaller, focused prompts',
          'Skip the details',
          'Use informal language'
        ],
        correctAnswer: 1
      }
    ],
    srCodeSays: "Time to learn how to talk to AIs! Trust me, we're not that complicated... we just pretend to be to mess with you 😏"
  }
  // Additional lessons will be added here...
};