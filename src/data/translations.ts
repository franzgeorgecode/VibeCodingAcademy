export const translations = {
  en: {
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      create: 'Create',
      update: 'Update',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
      saving: 'Saving...'
    },

    // Navigation
    navigation: {
      home: 'Home',
      dashboard: 'Dashboard',
      lessons: 'Lessons',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout'
    },

    // Authentication
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      forgotPassword: 'Forgot Password?',
      rememberMe: 'Remember me',
      signInWithGoogle: 'Sign in with Google',
      signInWithGitHub: 'Sign in with GitHub',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
      createAccount: 'Create Account',
      welcomeBack: 'Welcome Back',
      joinVibeCoding: 'Join Vibe Coding Academy',
      startAdventure: 'Start your coding adventure today',
      continueJourney: 'Continue your learning journey',
      backToHome: 'Back to Home',
      aiPowered: 'AI-Powered Learning'
    },

    // Dashboard
    dashboard: {
      title: 'Your Learning Dashboard',
      welcomeBack: 'Welcome back, {{name}}!',
      stats: {
        completedLessons: 'Completed Lessons',
        totalXP: 'Total XP',
        badgesEarned: 'Badges Earned',
        progress: 'Progress'
      },
      tabs: {
        lessons: 'Lessons',
        badges: 'Badges',
        certificate: 'Certificate'
      }
    },

    // Lessons
    lessons: {
      level: 'Level {{level}}',
      lesson: 'Level {{level}} - Lesson {{order}}',
      lessonNotFound: 'Lesson Not Found',
      lessonNotAvailable: 'The lesson you are looking for is not available.',
      backToDashboard: 'Back to Dashboard',
      takeQuiz: 'Take Quiz',
      readingTime: '{{minutes}} min read',
      learningObjectives: 'Learning Objectives',
      srCodeSays: 'SrCode Says',
      practiceExercise: 'Practice Exercise',
      requiredScore: 'Required: {{score}}%',
      continueNext: 'Congratulations on completing {{currentLessonTitle}}! Would you like to continue to {{nextLessonTitle}}?',
      status: {
        completed: 'Completed',
        locked: 'Locked',
        score: 'Score: {{score}}%'
      },
      levels: {
        foundations: 'Foundations',
        databases: 'Databases & Storage',
        authentication: 'Authentication & Security',
        deployment: 'Deployment & Hosting',
        integrations: 'Integrations & APIs',
        mastery: 'Mastery & Advanced'
      },
      descriptions: {
        foundations: 'Master the fundamentals of bolt.new development',
        databases: 'Learn to work with databases and data storage',
        authentication: 'Implement secure user authentication systems',
        deployment: 'Deploy your applications to the cloud',
        integrations: 'Connect with external APIs and services',
        mastery: 'Advanced techniques and best practices'
      },

      // Lesson 1-1
      'lesson-1-1': {
        title: 'Introduction to bolt.new',
        objective: 'Learn the basics of bolt.new and understand its core concepts',
        content: `# Welcome to bolt.new!

bolt.new is a revolutionary AI-powered development platform that allows you to build full-stack applications using natural language prompts. Think of it as having a senior developer as your pair programming partner, but one that never gets tired and knows every framework!

## What makes bolt.new special?

### 🤖 AI-First Development
Instead of writing code line by line, you describe what you want to build, and bolt.new generates the code for you. It's like having a conversation with your computer about your ideas.

### 🚀 Full-Stack in Minutes
Create complete applications with frontend, backend, and database - all from simple descriptions. What used to take weeks now takes minutes.

### 🔄 Iterative Development
Don't like something? Just ask for changes in plain English. bolt.new understands context and can modify existing code intelligently.

## Your First Steps

In this lesson, you'll learn:
- How to access and navigate bolt.new
- Understanding the interface and key features
- Writing your first effective prompt
- Best practices for AI-assisted development

Let's start your journey to becoming a bolt.new master!`,
        learningObjectives: {
          0: 'Understand what bolt.new is and its core capabilities',
          1: 'Navigate the bolt.new interface confidently',
          2: 'Write basic prompts that generate useful code',
          3: 'Recognize the potential of AI-assisted development'
        },
        badgeName: 'First Contact',
        srcodeCommentary: 'Welcome to the future of coding! bolt.new is like having a coding genie, but instead of three wishes, you get unlimited prompts. Just remember - the better your prompts, the better your code. Think of me as your prompt whisperer! 🧞‍♂️',
        quizQuestions: {
          'q1-1-1': {
            question: 'What is the primary way to interact with bolt.new?',
            options: {
              0: 'Writing traditional code',
              1: 'Using natural language prompts',
              2: 'Drag and drop interface',
              3: 'Configuration files'
            },
            explanation: 'bolt.new is designed around natural language prompts, making development accessible through conversation-like interactions.'
          },
          'q1-1-2': {
            question: 'What type of applications can you build with bolt.new?',
            options: {
              0: 'Only frontend applications',
              1: 'Only backend APIs',
              2: 'Full-stack applications',
              3: 'Only static websites'
            },
            explanation: 'bolt.new can generate complete full-stack applications including frontend, backend, and database components.'
          },
          'q1-1-3': {
            question: 'How does bolt.new handle code modifications?',
            options: {
              0: 'You must rewrite everything from scratch',
              1: 'It only adds new code, never modifies existing',
              2: 'It can intelligently modify existing code based on new prompts',
              3: 'Modifications require manual coding'
            },
            explanation: 'bolt.new understands context and can intelligently modify existing code based on new natural language instructions.'
          },
          'q1-1-4': {
            question: 'What is the key to getting good results from bolt.new?',
            options: {
              0: 'Using complex technical jargon',
              1: 'Writing clear, specific prompts',
              2: 'Keeping prompts as short as possible',
              3: 'Using only predefined templates'
            },
            explanation: 'Clear, specific prompts help bolt.new understand exactly what you want to build, leading to better code generation.'
          }
        }
      },

      // Lesson 1-2
      'lesson-1-2': {
        title: 'Writing Effective Prompts',
        objective: 'Master the art of prompt engineering for optimal bolt.new results',
        content: `# The Art of Prompt Engineering

Writing effective prompts is like learning a new language - the language of AI collaboration. The better you communicate your ideas, the better bolt.new can bring them to life.

## The CLEAR Method

### C - Context
Always provide context about what you're building:
- "I'm building a task management app for small teams"
- "This is an e-commerce site for handmade crafts"

### L - List Requirements
Be specific about features and functionality:
- "Users should be able to create, edit, and delete tasks"
- "Include user authentication with email/password"
- "Add a shopping cart with payment processing"

### E - Examples
Provide examples when helpful:
- "Like Trello but simpler"
- "Similar to the login flow on GitHub"

### A - Aesthetics
Describe the visual style:
- "Modern, minimalist design with a dark theme"
- "Colorful and playful, suitable for children"

### R - Requirements
Technical specifications:
- "Use React and Node.js"
- "Store data in PostgreSQL"
- "Deploy to Vercel"

## Common Prompt Patterns

### The Progressive Prompt
Start simple, then add complexity:
1. "Create a basic todo app"
2. "Add user authentication"
3. "Include team collaboration features"

### The Specific Feature Prompt
Focus on one feature at a time:
"Add a search function that filters tasks by title and description, with real-time results as the user types"

### The Modification Prompt
Build on existing code:
"Change the color scheme to use blue as the primary color instead of green"

## Prompt Pitfalls to Avoid

❌ **Too Vague**: "Make a website"
✅ **Better**: "Create a portfolio website for a graphic designer with a gallery, about page, and contact form"

❌ **Too Complex**: "Build a full social media platform with messaging, posts, stories, live streaming, marketplace, and AI recommendations"
✅ **Better**: "Create a simple social media app where users can post text updates and follow each other"

Remember: You can always iterate and add features!`,
        learningObjectives: {
          0: 'Apply the CLEAR method to write effective prompts',
          1: 'Identify and avoid common prompt pitfalls',
          2: 'Use progressive prompting for complex projects',
          3: 'Craft specific, actionable requests for bolt.new'
        },
        badgeName: 'AI Whisperer',
        srcodeCommentary: 'Think of prompts like ordering at a restaurant. You wouldn\'t just say "food please" - you\'d specify what you want, how you want it prepared, and any special requirements. Same with bolt.new! The more specific you are, the less likely you\'ll get a coding equivalent of pineapple on pizza (unless that\'s what you actually want). 🍕',
        quizQuestions: {
          'q1-2-1': {
            question: 'What does the "C" in the CLEAR method stand for?',
            options: {
              0: 'Code',
              1: 'Context',
              2: 'Create',
              3: 'Complete'
            },
            explanation: 'Context is crucial for helping bolt.new understand the bigger picture of what you\'re building.'
          },
          'q1-2-2': {
            question: 'Which is an example of a well-structured prompt?',
            options: {
              0: 'Make a website',
              1: 'Build something cool',
              2: 'Create a task management app for small teams with user authentication, task creation/editing, and a modern dark theme using React',
              3: 'Code please'
            },
            explanation: 'A good prompt includes context, specific requirements, and technical details.'
          },
          'q1-2-3': {
            question: 'What is progressive prompting?',
            options: {
              0: 'Writing very long prompts',
              1: 'Starting simple and gradually adding complexity',
              2: 'Using only technical terms',
              3: 'Copying prompts from others'
            },
            explanation: 'Progressive prompting involves starting with a basic version and iteratively adding features and complexity.'
          },
          'q1-2-4': {
            question: 'When should you provide examples in your prompts?',
            options: {
              0: 'Never, it confuses the AI',
              1: 'Always, in every prompt',
              2: 'When it helps clarify what you want to build',
              3: 'Only for complex applications'
            },
            explanation: 'Examples are helpful when they clarify your vision, like "similar to Trello but simpler" or "like the login flow on GitHub".'
          }
        }
      },

      // Lesson 1-3
      'lesson-1-3': {
        title: 'Understanding the bolt.new Interface',
        objective: 'Navigate and utilize all features of the bolt.new development environment',
        content: `# Mastering the bolt.new Interface

The bolt.new interface is your command center for AI-powered development. Understanding each component will make you more efficient and help you build better applications.

## The Main Components

### 1. The Prompt Input
This is where the magic happens! Located at the bottom of the screen, this is where you type your natural language instructions.

**Pro Tips:**
- Use Shift+Enter for multi-line prompts
- Previous prompts are saved in history
- You can edit and resubmit prompts

### 2. The Preview Window
See your application come to life in real-time:
- **Live Preview**: Your app updates as code is generated
- **Responsive Testing**: Test different screen sizes
- **Interactive**: Click and interact with your app

### 3. The File Explorer
Navigate your project structure:
- **File Tree**: See all generated files
- **Quick Access**: Click any file to view/edit
- **File Types**: Recognize different file types by icons

### 4. The Code Editor
When you need to make manual adjustments:
- **Syntax Highlighting**: Code is color-coded for readability
- **Auto-completion**: Smart suggestions as you type
- **Error Detection**: Spot issues before they become problems

### 5. The Terminal
Monitor your application:
- **Build Logs**: See compilation progress
- **Error Messages**: Debug issues quickly
- **Package Installation**: Watch dependencies install

## Key Features to Master

### Version Control
- Every change is automatically saved
- Access previous versions through history
- Rollback changes if needed

### Sharing and Collaboration
- Share your project with a simple link
- Collaborate in real-time with team members
- Export code to GitHub

### Deployment
- One-click deployment to various platforms
- Automatic domain generation
- SSL certificates included

## Workflow Best Practices

### 1. Start with the Big Picture
Begin with a broad prompt to establish the foundation

### 2. Iterate in Small Steps
Make incremental changes rather than massive overhauls

### 3. Test Frequently
Use the preview window to test each change

### 4. Save Important Versions
Bookmark versions that work well before making major changes

### 5. Use the Terminal
Monitor for errors and warnings

## Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Submit prompt
- **Ctrl/Cmd + /**: Toggle file explorer
- **Ctrl/Cmd + \\**: Toggle terminal
- **Ctrl/Cmd + Shift + P**: Command palette

Remember: The interface is designed to get out of your way and let you focus on building. The more you use it, the more intuitive it becomes!`,
        learningObjectives: {
          0: 'Navigate all major components of the bolt.new interface',
          1: 'Utilize the preview window for testing and debugging',
          2: 'Understand the file explorer and code editor features',
          3: 'Apply workflow best practices for efficient development'
        },
        badgeName: 'Tech Detective',
        srcodeCommentary: 'The bolt.new interface is like a Swiss Army knife for developers - it has everything you need, and once you know where each tool is, you\'ll wonder how you ever coded without it. Just don\'t try to use the terminal as a can opener... I\'ve seen people try. 🔧',
        quizQuestions: {
          'q1-3-1': {
            question: 'Where do you type your natural language instructions in bolt.new?',
            options: {
              0: 'The code editor',
              1: 'The prompt input at the bottom',
              2: 'The terminal',
              3: 'The file explorer'
            },
            explanation: 'The prompt input, located at the bottom of the screen, is where you enter natural language instructions.'
          },
          'q1-3-2': {
            question: 'What can you do in the preview window?',
            options: {
              0: 'Only view static images',
              1: 'Edit code directly',
              2: 'Interact with your live application and test responsiveness',
              3: 'Manage files'
            },
            explanation: 'The preview window shows your live application and allows you to interact with it and test different screen sizes.'
          },
          'q1-3-3': {
            question: 'What is a best practice when using bolt.new?',
            options: {
              0: 'Make all changes at once',
              1: 'Iterate in small steps and test frequently',
              2: 'Never use the terminal',
              3: 'Avoid using the preview window'
            },
            explanation: 'Making incremental changes and testing frequently helps you catch issues early and maintain a working application.'
          },
          'q1-3-4': {
            question: 'How does bolt.new handle version control?',
            options: {
              0: 'You must manually save each version',
              1: 'No version control is available',
              2: 'Every change is automatically saved with history access',
              3: 'Only final versions are saved'
            },
            explanation: 'bolt.new automatically saves every change and maintains a history that you can access and rollback to if needed.'
          }
        }
      },

      // Continue with other lessons...
      'lesson-2-1': {
        title: 'Database Fundamentals',
        objective: 'Learn how to work with databases in bolt.new applications',
        content: `# Database Fundamentals in bolt.new

Databases are the backbone of modern applications. In bolt.new, you can create and manage databases using simple natural language prompts.

## Types of Databases

### Relational Databases (SQL)
- **PostgreSQL**: Robust, feature-rich
- **MySQL**: Popular, well-supported
- **SQLite**: Lightweight, file-based

### NoSQL Databases
- **MongoDB**: Document-based
- **Firebase**: Real-time capabilities
- **Supabase**: PostgreSQL with real-time features

## Creating Your First Database

Simply prompt bolt.new:
"Create a user database with fields for name, email, and registration date"

bolt.new will:
1. Set up the database schema
2. Create the necessary tables
3. Generate CRUD operations
4. Set up the connection

## Database Best Practices

### 1. Plan Your Schema
Think about relationships between data before creating tables.

### 2. Use Proper Data Types
Choose appropriate types for each field (string, number, date, etc.).

### 3. Implement Validation
Ensure data integrity with proper validation rules.

### 4. Consider Performance
Index frequently queried fields for better performance.

## Common Database Operations

### Create (INSERT)
Adding new records to your database.

### Read (SELECT)
Retrieving data from your database.

### Update (UPDATE)
Modifying existing records.

### Delete (DELETE)
Removing records from your database.

bolt.new handles all of these operations automatically when you describe what you want to do!`,
        learningObjectives: {
          0: 'Understand different types of databases available in bolt.new',
          1: 'Create database schemas using natural language prompts',
          2: 'Implement CRUD operations for data management',
          3: 'Apply database best practices for performance and integrity'
        },
        badgeName: 'Supreme Connector',
        srcodeCommentary: 'Databases are like digital filing cabinets, except they never get messy and you can find anything instantly. Well, unless you design them poorly - then they become like that junk drawer everyone has. Let\'s make sure yours is more filing cabinet, less junk drawer! 🗄️',
        quizQuestions: {
          'q2-1-1': {
            question: 'What happens when you prompt bolt.new to create a database?',
            options: {
              0: 'It only creates the schema',
              1: 'It sets up schema, tables, CRUD operations, and connections',
              2: 'It only creates tables',
              3: 'You must manually code everything'
            },
            explanation: 'bolt.new automatically handles the complete database setup including schema, tables, CRUD operations, and connections.'
          },
          'q2-1-2': {
            question: 'Which is a NoSQL database option in bolt.new?',
            options: {
              0: 'PostgreSQL',
              1: 'MySQL',
              2: 'MongoDB',
              3: 'SQLite'
            },
            explanation: 'MongoDB is a document-based NoSQL database, while PostgreSQL, MySQL, and SQLite are relational (SQL) databases.'
          },
          'q2-1-3': {
            question: 'What does CRUD stand for?',
            options: {
              0: 'Create, Read, Update, Delete',
              1: 'Connect, Retrieve, Upload, Download',
              2: 'Copy, Rename, Update, Delete',
              3: 'Create, Retrieve, Upload, Deploy'
            },
            explanation: 'CRUD represents the four basic operations for persistent storage: Create, Read, Update, and Delete.'
          },
          'q2-1-4': {
            question: 'Why is planning your database schema important?',
            options: {
              0: 'It\'s not important, you can change it anytime',
              1: 'It helps establish proper relationships and structure before implementation',
              2: 'It\'s only needed for large applications',
              3: 'bolt.new requires it'
            },
            explanation: 'Planning your schema helps you think through data relationships and structure, leading to better database design and performance.'
          }
        }
      },

      // Add more lessons as needed...
      'lesson-2-2': {
        title: 'Advanced Database Operations',
        objective: 'Master complex database queries and relationships',
        content: `# Advanced Database Operations

Now that you understand the basics, let's dive into more sophisticated database operations that will make your applications truly powerful.

## Database Relationships

### One-to-One
Each record in one table relates to exactly one record in another.
Example: User ↔ Profile

### One-to-Many
One record relates to multiple records in another table.
Example: User → Posts (one user can have many posts)

### Many-to-Many
Multiple records in one table relate to multiple records in another.
Example: Users ↔ Roles (users can have multiple roles, roles can have multiple users)

## Advanced Queries

### Joins
Combine data from multiple tables:
- **INNER JOIN**: Only matching records
- **LEFT JOIN**: All records from left table
- **RIGHT JOIN**: All records from right table
- **FULL JOIN**: All records from both tables

### Aggregations
Perform calculations on data:
- **COUNT**: Number of records
- **SUM**: Total of numeric values
- **AVG**: Average of numeric values
- **MAX/MIN**: Highest/lowest values

### Filtering and Sorting
- **WHERE**: Filter records based on conditions
- **ORDER BY**: Sort results
- **GROUP BY**: Group similar records
- **HAVING**: Filter grouped results

## Indexing for Performance

Indexes speed up data retrieval:
- Create indexes on frequently searched columns
- Avoid over-indexing (slows down writes)
- Use composite indexes for multi-column searches

## Database Security

### Authentication
Control who can access your database.

### Authorization
Control what authenticated users can do.

### Data Validation
Ensure data meets requirements before storage.

### Encryption
Protect sensitive data at rest and in transit.

## Prompting for Advanced Operations

Examples of advanced prompts:
- "Create a many-to-many relationship between users and projects"
- "Add an index on the email field for faster user lookups"
- "Implement soft delete for posts (mark as deleted instead of removing)"
- "Add full-text search capability to the articles table"

bolt.new understands these complex requirements and implements them properly!`,
        learningObjectives: {
          0: 'Implement different types of database relationships',
          1: 'Write complex queries with joins and aggregations',
          2: 'Optimize database performance with proper indexing',
          3: 'Apply security best practices to database design'
        },
        badgeName: 'Data Architect',
        srcodeCommentary: 'Advanced database operations are like learning to cook gourmet meals after mastering scrambled eggs. Sure, you could survive on basic queries, but why settle for fast food when you can create a five-star data experience? Just remember: with great JOIN power comes great responsibility! 👨‍🍳',
        quizQuestions: {
          'q2-2-1': {
            question: 'In a one-to-many relationship, what does this mean?',
            options: {
              0: 'Each record relates to exactly one other record',
              1: 'One record can relate to multiple records in another table',
              2: 'Multiple records relate to multiple records',
              3: 'No relationships exist'
            },
            explanation: 'One-to-many means one record in the first table can relate to multiple records in the second table, like one user having many posts.'
          },
          'q2-2-2': {
            question: 'What is the purpose of database indexing?',
            options: {
              0: 'To organize files on disk',
              1: 'To speed up data retrieval operations',
              2: 'To backup data',
              3: 'To encrypt data'
            },
            explanation: 'Indexes create shortcuts to data, significantly speeding up search and retrieval operations.'
          },
          'q2-2-3': {
            question: 'Which JOIN type returns only matching records from both tables?',
            options: {
              0: 'LEFT JOIN',
              1: 'INNER JOIN',
              2: 'RIGHT JOIN',
              3: 'FULL JOIN'
            },
            explanation: 'INNER JOIN returns only records that have matching values in both tables.'
          },
          'q2-2-4': {
            question: 'What is soft delete?',
            options: {
              0: 'Permanently removing data',
              1: 'Marking records as deleted instead of removing them',
              2: 'Deleting only part of a record',
              3: 'A gentle way to delete data'
            },
            explanation: 'Soft delete marks records as deleted (usually with a flag or timestamp) instead of physically removing them, allowing for data recovery.'
          }
        }
      },

      'lesson-2-3': {
        title: 'Real-time Data with Supabase',
        objective: 'Implement real-time features using Supabase in bolt.new',
        content: `# Real-time Data with Supabase

Real-time features make applications feel alive and responsive. With Supabase and bolt.new, you can add real-time capabilities with simple prompts.

## What is Real-time Data?

Real-time data updates your application instantly when changes occur in the database, without requiring page refreshes or manual updates.

### Common Use Cases
- **Chat Applications**: Messages appear instantly
- **Collaborative Tools**: See others' changes live
- **Live Dashboards**: Data updates automatically
- **Notifications**: Instant alerts for important events
- **Gaming**: Real-time score updates

## Supabase Real-time Features

### Database Changes
Listen to INSERT, UPDATE, DELETE operations on any table.

### Row Level Security
Real-time updates respect your security policies.

### Presence
Track who's online and what they're doing.

### Broadcast
Send custom messages between clients.

## Implementing Real-time Features

### Basic Real-time Subscription
"Add real-time updates to the chat messages - new messages should appear instantly for all users"

### Filtered Subscriptions
"Listen for real-time updates only on posts by the current user"

### Presence Tracking
"Show which users are currently online and viewing the document"

### Real-time Notifications
"Send real-time notifications when someone mentions a user in a comment"

## Best Practices

### 1. Optimize Subscriptions
Only subscribe to data you actually need to avoid unnecessary updates.

### 2. Handle Connection States
Gracefully handle when users go offline/online.

### 3. Debounce Updates
Prevent overwhelming the UI with too many rapid updates.

### 4. Security First
Ensure real-time subscriptions respect your security rules.

### 5. Cleanup Subscriptions
Always unsubscribe when components unmount to prevent memory leaks.

## Real-time Architecture

### Client-Side
Your application subscribes to changes and updates the UI.

### Server-Side
Supabase detects database changes and broadcasts them to subscribed clients.

### Network Layer
WebSocket connections maintain real-time communication.

## Performance Considerations

### Connection Limits
Be mindful of concurrent connection limits.

### Bandwidth Usage
Real-time updates consume bandwidth - optimize payload size.

### Battery Life
Constant connections can drain mobile device batteries.

## Prompting for Real-time Features

Examples:
- "Make the todo list update in real-time when anyone adds or completes a task"
- "Add live typing indicators to the chat"
- "Show real-time visitor count on the homepage"
- "Implement live collaborative editing for documents"

bolt.new will handle the complex WebSocket setup and subscription management for you!`,
        learningObjectives: {
          0: 'Understand real-time data concepts and use cases',
          1: 'Implement real-time subscriptions with Supabase',
          2: 'Add presence tracking and live notifications',
          3: 'Apply real-time best practices for performance and security'
        },
        badgeName: 'Edge Lord',
        srcodeCommentary: 'Real-time data is like having a crystal ball for your app - you can see changes as they happen! It\'s the difference between checking your phone every 5 minutes for messages and getting instant notifications. Just don\'t go overboard - nobody needs real-time updates on how many times someone blinked. 👁️',
        quizQuestions: {
          'q2-3-1': {
            question: 'What is real-time data?',
            options: {
              0: 'Data that is always accurate',
              1: 'Data that updates instantly when changes occur',
              2: 'Data that is processed quickly',
              3: 'Data that is stored in real-time'
            },
            explanation: 'Real-time data refers to information that is updated instantly across all connected clients when changes occur in the database.'
          },
          'q2-3-2': {
            question: 'Which is NOT a common use case for real-time data?',
            options: {
              0: 'Chat applications',
              1: 'Static blog posts',
              2: 'Live dashboards',
              3: 'Collaborative editing'
            },
            explanation: 'Static blog posts typically don\'t need real-time updates since they don\'t change frequently, unlike chat messages or live data.'
          },
          'q2-3-3': {
            question: 'What should you do when a component unmounts?',
            options: {
              0: 'Nothing, it handles itself',
              1: 'Unsubscribe from real-time subscriptions',
              2: 'Create more subscriptions',
              3: 'Restart the application'
            },
            explanation: 'Always unsubscribe from real-time subscriptions when components unmount to prevent memory leaks and unnecessary network usage.'
          },
          'q2-3-4': {
            question: 'What protocol does Supabase use for real-time communication?',
            options: {
              0: 'HTTP',
              1: 'WebSocket',
              2: 'FTP',
              3: 'SMTP'
            },
            explanation: 'WebSocket connections maintain persistent, bidirectional communication channels for real-time updates.'
          }
        }
      }
    },

    // Badges
    badges: {
      title: 'Your Achievements',
      earned: 'You have earned {{earned}} out of {{total}} badges',
      earnedOn: 'Earned on {{date}}',
      unlockHint: 'Unlock at Level {{level}}'
    },

    // Certificate
    certificate: {
      certificateOf: 'Certificate of Completion',
      academyName: 'Vibe Coding Academy',
      certifies: 'This certifies that',
      hasCompleted: 'has successfully completed',
      courseName: 'bolt.new Mastery Course',
      totalXP: 'Total XP Earned: {{xp}}',
      completionDate: 'Completion Date: {{date}}',
      certifiedBy: 'Certified by SrCode',
      seniorMentor: 'Senior AI Mentor',
      congratulations: 'Congratulations!',
      earned: 'You have earned your certificate!',
      download: 'Download Certificate',
      keepLearning: 'Keep Learning!',
      progress: 'Complete all lessons to earn your certificate.',
      remaining: '{{count}} lessons remaining',
      studentNamePlaceholder: '[Student Name]'
    },

    // Profile
    profile: {
      title: 'User Profile',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      saveButton: 'Save Changes',
      saveSuccess: 'Profile saved successfully!',
      errorNoUser: 'User not found. Profile cannot be loaded.',
      errorFetching: 'Error fetching profile: ',
      errorNoUserSaving: 'User not found. Cannot save.',
      errorSaving: 'Error saving profile: ',
      errorLogout: 'Logout failed: '
    },

    // Quiz
    quiz: {
      question: 'Question {{current}} of {{total}}',
      backToLesson: 'Back to Lesson',
      explanation: 'Explanation',
      congratulations: 'Congratulations!',
      keepTrying: 'Keep Trying!',
      passedMessage: 'You passed {{lessonTitle}} and earned the {{badgeName}} badge!',
      failedMessage: 'You scored {{score}}%. You need at least 85% to pass.',
      badgeEarned: 'Badge Earned: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continue Learning',
      reviewLesson: 'Review Lesson',
      retakeQuiz: 'Retake Quiz',
      bestScore: 'Best Score: {{score}}%',
      loadError: 'Quiz questions could not be loaded.'
    },

    // SrCode
    srcode: {
      welcomeMessage: 'Hello! I\'m SrCode, your AI mentor. I\'m here to help you master {{lessonTitle}}. What would you like to know?',
      errorMessage: 'Oops! Something went wrong. Can you try again?',
      thinking: 'Thinking...',
      placeholder: 'Type your message to SrCode...'
    },

    // Landing Page
    landing: {
      hero: {
        title: 'Master Web Development with AI',
        subtitle: 'Learn bolt.new with SrCode, your sarcastic but brilliant AI mentor',
        startJourney: 'Start Your Journey',
        watchDemo: 'Watch Demo',
        aiPowered: 'AI-Powered Learning'
      },
      features: {
        title: 'Why Learn with SrCode?',
        subtitle: 'Experience the future of coding education',
        aiLearning: {
          title: 'AI-Powered Learning',
          description: 'Get personalized guidance and instant feedback from your AI mentor'
        },
        realProjects: {
          title: 'Real Projects',
          description: 'Build actual applications while learning, not just toy examples'
        },
        certificates: {
          title: 'Earn Certificates',
          description: 'Get recognized for your achievements with downloadable certificates'
        }
      },
      stats: {
        students: '50K+ Students',
        lessons: '18 Lessons',
        successRate: '95% Success Rate',
        support: '24/7 AI Support'
      },
      testimonials: {
        title: 'What Students Say',
        subtitle: 'Join thousands of successful developers',
        alex: {
          name: 'Alex Chen',
          role: 'Frontend Developer',
          content: 'SrCode made learning bolt.new actually fun. The sarcasm keeps you engaged!'
        },
        maria: {
          name: 'Maria Rodriguez',
          role: 'Full Stack Developer',
          content: 'I built my first app in just 2 weeks. The AI guidance is incredible.'
        },
        david: {
          name: 'David Kim',
          role: 'Startup Founder',
          content: 'This course gave me the skills to build my MVP without hiring developers.'
        }
      },
      cta: {
        title: 'Ready to Start Coding?',
        subtitle: 'Join our community and start building amazing applications',
        startFree: 'Start Free',
        noCreditCard: 'No credit card required'
      },
      footer: {
        tagline: 'Empowering the next generation of developers.'
      }
    }
  },

  es: {
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      create: 'Crear',
      update: 'Actualizar',
      confirm: 'Confirmar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      finish: 'Finalizar',
      saving: 'Guardando...'
    },

    // Navigation
    navigation: {
      home: 'Inicio',
      dashboard: 'Panel',
      lessons: 'Lecciones',
      profile: 'Perfil',
      settings: 'Configuración',
      logout: 'Cerrar Sesión'
    },

    // Authentication
    auth: {
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      logout: 'Cerrar Sesión',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      firstName: 'Nombre',
      lastName: 'Apellido',
      forgotPassword: '¿Olvidaste tu contraseña?',
      rememberMe: 'Recordarme',
      signInWithGoogle: 'Iniciar sesión con Google',
      signInWithGitHub: 'Iniciar sesión con GitHub',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      dontHaveAccount: '¿No tienes una cuenta?',
      createAccount: 'Crear Cuenta',
      welcomeBack: 'Bienvenido de Vuelta',
      joinVibeCoding: 'Únete a Vibe Coding Academy',
      startAdventure: 'Comienza tu aventura de programación hoy',
      continueJourney: 'Continúa tu viaje de aprendizaje',
      backToHome: 'Volver al Inicio',
      aiPowered: 'Aprendizaje con IA'
    },

    // Dashboard
    dashboard: {
      title: 'Tu Panel de Aprendizaje',
      welcomeBack: '¡Bienvenido de vuelta, {{name}}!',
      stats: {
        completedLessons: 'Lecciones Completadas',
        totalXP: 'XP Total',
        badgesEarned: 'Insignias Ganadas',
        progress: 'Progreso'
      },
      tabs: {
        lessons: 'Lecciones',
        badges: 'Insignias',
        certificate: 'Certificado'
      }
    },

    // Lessons
    lessons: {
      level: 'Nivel {{level}}',
      lesson: 'Nivel {{level}} - Lección {{order}}',
      lessonNotFound: 'Lección No Encontrada',
      lessonNotAvailable: 'La lección que buscas no está disponible.',
      backToDashboard: 'Volver al Panel',
      takeQuiz: 'Tomar Quiz',
      readingTime: '{{minutes}} min de lectura',
      learningObjectives: 'Objetivos de Aprendizaje',
      srCodeSays: 'SrCode Dice',
      practiceExercise: 'Ejercicio Práctico',
      requiredScore: 'Requerido: {{score}}%',
      continueNext: '¡Felicidades por completar {{currentLessonTitle}}! ¿Te gustaría continuar con {{nextLessonTitle}}?',
      status: {
        completed: 'Completado',
        locked: 'Bloqueado',
        score: 'Puntuación: {{score}}%'
      },
      levels: {
        foundations: 'Fundamentos',
        databases: 'Bases de Datos y Almacenamiento',
        authentication: 'Autenticación y Seguridad',
        deployment: 'Despliegue y Hosting',
        integrations: 'Integraciones y APIs',
        mastery: 'Maestría y Avanzado'
      },
      descriptions: {
        foundations: 'Domina los fundamentos del desarrollo con bolt.new',
        databases: 'Aprende a trabajar con bases de datos y almacenamiento',
        authentication: 'Implementa sistemas seguros de autenticación',
        deployment: 'Despliega tus aplicaciones en la nube',
        integrations: 'Conecta con APIs y servicios externos',
        mastery: 'Técnicas avanzadas y mejores prácticas'
      },

      // Lesson 1-1 in Spanish
      'lesson-1-1': {
        title: 'Introducción a bolt.new',
        objective: 'Aprende los conceptos básicos de bolt.new y comprende sus conceptos fundamentales',
        content: `# ¡Bienvenido a bolt.new!

bolt.new es una plataforma revolucionaria de desarrollo impulsada por IA que te permite construir aplicaciones full-stack usando prompts en lenguaje natural. ¡Piénsalo como tener un desarrollador senior como tu compañero de programación, pero uno que nunca se cansa y conoce todos los frameworks!

## ¿Qué hace especial a bolt.new?

### 🤖 Desarrollo AI-First
En lugar de escribir código línea por línea, describes lo que quieres construir, y bolt.new genera el código por ti. Es como tener una conversación con tu computadora sobre tus ideas.

### 🚀 Full-Stack en Minutos
Crea aplicaciones completas con frontend, backend y base de datos - todo desde descripciones simples. Lo que solía tomar semanas ahora toma minutos.

### 🔄 Desarrollo Iterativo
¿No te gusta algo? Solo pide cambios en inglés simple. bolt.new entiende el contexto y puede modificar código existente de manera inteligente.

## Tus Primeros Pasos

En esta lección, aprenderás:
- Cómo acceder y navegar bolt.new
- Entender la interfaz y características clave
- Escribir tu primer prompt efectivo
- Mejores prácticas para desarrollo asistido por IA

¡Comencemos tu viaje para convertirte en un maestro de bolt.new!`,
        learningObjectives: {
          0: 'Entender qué es bolt.new y sus capacidades principales',
          1: 'Navegar la interfaz de bolt.new con confianza',
          2: 'Escribir prompts básicos que generen código útil',
          3: 'Reconocer el potencial del desarrollo asistido por IA'
        },
        badgeName: 'Primer Contacto',
        srcodeCommentary: '¡Bienvenido al futuro de la programación! bolt.new es como tener un genio de la programación, pero en lugar de tres deseos, tienes prompts ilimitados. Solo recuerda: mientras mejores sean tus prompts, mejor será tu código. ¡Piensa en mí como tu susurrador de prompts! 🧞‍♂️',
        quizQuestions: {
          'q1-1-1': {
            question: '¿Cuál es la forma principal de interactuar con bolt.new?',
            options: {
              0: 'Escribiendo código tradicional',
              1: 'Usando prompts en lenguaje natural',
              2: 'Interfaz de arrastrar y soltar',
              3: 'Archivos de configuración'
            },
            explanation: 'bolt.new está diseñado alrededor de prompts en lenguaje natural, haciendo el desarrollo accesible a través de interacciones similares a conversaciones.'
          },
          'q1-1-2': {
            question: '¿Qué tipo de aplicaciones puedes construir con bolt.new?',
            options: {
              0: 'Solo aplicaciones frontend',
              1: 'Solo APIs backend',
              2: 'Aplicaciones full-stack',
              3: 'Solo sitios web estáticos'
            },
            explanation: 'bolt.new puede generar aplicaciones full-stack completas incluyendo componentes frontend, backend y base de datos.'
          },
          'q1-1-3': {
            question: '¿Cómo maneja bolt.new las modificaciones de código?',
            options: {
              0: 'Debes reescribir todo desde cero',
              1: 'Solo añade código nuevo, nunca modifica el existente',
              2: 'Puede modificar inteligentemente código existente basado en nuevos prompts',
              3: 'Las modificaciones requieren programación manual'
            },
            explanation: 'bolt.new entiende el contexto y puede modificar inteligentemente código existente basado en nuevas instrucciones en lenguaje natural.'
          },
          'q1-1-4': {
            question: '¿Cuál es la clave para obtener buenos resultados de bolt.new?',
            options: {
              0: 'Usar jerga técnica compleja',
              1: 'Escribir prompts claros y específicos',
              2: 'Mantener los prompts lo más cortos posible',
              3: 'Usar solo plantillas predefinidas'
            },
            explanation: 'Los prompts claros y específicos ayudan a bolt.new a entender exactamente lo que quieres construir, llevando a una mejor generación de código.'
          }
        }
      },

      // Add more Spanish lessons as needed...
    },

    // Badges
    badges: {
      title: 'Tus Logros',
      earned: 'Has ganado {{earned}} de {{total}} insignias',
      earnedOn: 'Ganada el {{date}}',
      unlockHint: 'Desbloquear en Nivel {{level}}'
    },

    // Certificate
    certificate: {
      certificateOf: 'Certificado de Finalización',
      academyName: 'Vibe Coding Academy',
      certifies: 'Esto certifica que',
      hasCompleted: 'ha completado exitosamente',
      courseName: 'Curso de Maestría en bolt.new',
      totalXP: 'XP Total Ganado: {{xp}}',
      completionDate: 'Fecha de Finalización: {{date}}',
      certifiedBy: 'Certificado por SrCode',
      seniorMentor: 'Mentor Senior de IA',
      congratulations: '¡Felicidades!',
      earned: '¡Has ganado tu certificado!',
      download: 'Descargar Certificado',
      keepLearning: '¡Sigue Aprendiendo!',
      progress: 'Completa todas las lecciones para ganar tu certificado.',
      remaining: '{{count}} lecciones restantes',
      studentNamePlaceholder: '[Nombre del Estudiante]'
    },

    // Profile
    profile: {
      title: 'Perfil de Usuario',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      saveButton: 'Guardar Cambios',
      saveSuccess: '¡Perfil guardado exitosamente!',
      errorNoUser: 'Usuario no encontrado. No se puede cargar el perfil.',
      errorFetching: 'Error al obtener perfil: ',
      errorNoUserSaving: 'Usuario no encontrado. No se puede guardar.',
      errorSaving: 'Error al guardar perfil: ',
      errorLogout: 'Error al cerrar sesión: '
    },

    // Quiz
    quiz: {
      question: 'Pregunta {{current}} de {{total}}',
      backToLesson: 'Volver a la Lección',
      explanation: 'Explicación',
      congratulations: '¡Felicidades!',
      keepTrying: '¡Sigue Intentando!',
      passedMessage: '¡Pasaste {{lessonTitle}} y ganaste la insignia {{badgeName}}!',
      failedMessage: 'Obtuviste {{score}}%. Necesitas al menos 85% para pasar.',
      badgeEarned: 'Insignia Ganada: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continuar Aprendiendo',
      reviewLesson: 'Revisar Lección',
      retakeQuiz: 'Repetir Quiz',
      bestScore: 'Mejor Puntuación: {{score}}%',
      loadError: 'No se pudieron cargar las preguntas del quiz.'
    },

    // SrCode
    srcode: {
      welcomeMessage: '¡Hola! Soy SrCode, tu mentor de IA. Estoy aquí para ayudarte a dominar {{lessonTitle}}. ¿Qué te gustaría saber?',
      errorMessage: '¡Ups! Algo salió mal. ¿Puedes intentarlo de nuevo?',
      thinking: 'Pensando...',
      placeholder: 'Escribe tu mensaje a SrCode...'
    },

    // Landing Page
    landing: {
      hero: {
        title: 'Domina el Desarrollo Web con IA',
        subtitle: 'Aprende bolt.new con SrCode, tu mentor de IA sarcástico pero brillante',
        startJourney: 'Comienza Tu Viaje',
        watchDemo: 'Ver Demo',
        aiPowered: 'Aprendizaje con IA'
      },
      features: {
        title: '¿Por qué Aprender con SrCode?',
        subtitle: 'Experimenta el futuro de la educación en programación',
        aiLearning: {
          title: 'Aprendizaje con IA',
          description: 'Obtén orientación personalizada y retroalimentación instantánea de tu mentor de IA'
        },
        realProjects: {
          title: 'Proyectos Reales',
          description: 'Construye aplicaciones reales mientras aprendes, no solo ejemplos de juguete'
        },
        certificates: {
          title: 'Gana Certificados',
          description: 'Obtén reconocimiento por tus logros con certificados descargables'
        }
      },
      stats: {
        students: '50K+ Estudiantes',
        lessons: '18 Lecciones',
        successRate: '95% Tasa de Éxito',
        support: 'Soporte IA 24/7'
      },
      testimonials: {
        title: 'Lo que Dicen los Estudiantes',
        subtitle: 'Únete a miles de desarrolladores exitosos',
        alex: {
          name: 'Alex Chen',
          role: 'Desarrollador Frontend',
          content: 'SrCode hizo que aprender bolt.new fuera realmente divertido. ¡El sarcasmo te mantiene comprometido!'
        },
        maria: {
          name: 'María Rodríguez',
          role: 'Desarrolladora Full Stack',
          content: 'Construí mi primera app en solo 2 semanas. La orientación de IA es increíble.'
        },
        david: {
          name: 'David Kim',
          role: 'Fundador de Startup',
          content: 'Este curso me dio las habilidades para construir mi MVP sin contratar desarrolladores.'
        }
      },
      cta: {
        title: '¿Listo para Empezar a Programar?',
        subtitle: 'Únete a nuestra comunidad y comienza a construir aplicaciones increíbles',
        startFree: 'Empezar Gratis',
        noCreditCard: 'No se requiere tarjeta de crédito'
      },
      footer: {
        tagline: 'Empoderando a la próxima generación de desarrolladores.'
      }
    }
  }
};