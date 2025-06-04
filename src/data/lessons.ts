import { renderMarkdown } from '../utils/markdown';

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
    explanation: string;
  }[];
  srCodeSays: string;
  practice?: string;
}

export const lessons: Record<string, Lesson> = {
  'lesson-1-1': {
    id: 'lesson-1-1',
    title: 'What the Hell is bolt.new?',
    description: 'Understand bolt.new as an AI web development agent',
    level: 1,
    xpReward: 10,
    content: renderMarkdown(`
# What the Hell is bolt.new?

Welcome to your first lesson in the Vibe Coding Academy! I'm SrCode, and I'll be your mentor throughout this journey.

## What is bolt.new?

bolt.new is a revolutionary AI-powered web development agent that allows you to build full-stack applications using natural language prompts. Think of it as having a senior developer who:

- Never gets tired or frustrated
- Doesn't need coffee breaks
- Never argues about coding standards
- Can build entire applications from scratch
- Integrates seamlessly with modern tools

## Key Features:

### 🚀 **AI-Powered Development**
bolt.new uses advanced AI to understand your requirements and generate complete, functional code. You describe what you want, and it builds it.

### 🌐 **Full-Stack Capabilities**
- Frontend development (React, Vue, Svelte)
- Backend integration (APIs, databases)
- Styling (CSS, Tailwind, styled-components)
- State management
- Authentication systems

### ⚡ **Instant Deployment**
Built-in integration with:
- Netlify for hosting
- Supabase for databases
- GitHub for version control
- Custom domains

### 🛠️ **Modern Tech Stack**
- WebContainers for browser-based development
- Hot reloading and live preview
- Terminal access within browser
- Package manager integration

## Why bolt.new is Revolutionary:

1. Speed: Build applications in minutes, not days
2. Accessibility: No need to be an expert coder
3. Integration: Everything works together seamlessly
4. Learning: Great for understanding modern web development

## Common Use Cases:

- Landing Pages: Beautiful, responsive marketing sites
- SaaS Applications: Complete business applications
- E-commerce: Online stores with payment integration
- Portfolios: Professional developer portfolios
- Educational Platforms: Like this one you're using now!

## Getting Started:

1. Navigate to bolt.new
2. Describe your project in natural language
3. Watch as your application comes to life
4. Deploy with one click

Remember: The quality of your output depends on the quality of your input. Learning to write effective prompts is crucial!
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
        correctAnswer: 1,
        explanation: 'bolt.new is designed to assist developers by providing AI-powered development help, not to replace them entirely.'
      },
      {
        question: 'What technology enables bolt.new to run Node.js in the browser?',
        options: [
          'Docker containers',
          'Virtual machines',
          'WebContainers',
          'Cloud servers'
        ],
        correctAnswer: 2,
        explanation: 'WebContainers is the technology that allows bolt.new to run Node.js directly in your browser without any local installation.'
      },
      {
        question: 'Which of these is NOT a feature of bolt.new?',
        options: [
          'Code generation',
          'Real-time collaboration',
          'Local file system access',
          'Instant deployment'
        ],
        correctAnswer: 2,
        explanation: 'bolt.new runs entirely in the browser and does not have access to your local file system.'
      },
      {
        question: 'What is a key advantage of using bolt.new?',
        options: [
          'It requires extensive setup',
          'It only works with JavaScript',
          'It provides instant project setup and deployment',
          'It needs local installation'
        ],
        correctAnswer: 2,
        explanation: 'One of bolt.new\'s main advantages is providing instant project setup and deployment without any local installation or configuration.'
      }
    ],
    srCodeSays: "Welcome to your first lesson! Let's demystify bolt.new together. Don't worry, I promise to keep the sarcasm to a minimum... maybe 😏",
    practice: "Try creating a simple 'Hello World' project in bolt.new to get familiar with the interface and basic functionality."
  }
  // Additional lessons will be added here...
};