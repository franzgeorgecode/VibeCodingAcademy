export const translations = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      continue: 'Continue',
      finish: 'Finish',
      retry: 'Retry',
      saving: 'Saving...'
    },
    profile: {
      title: "User Profile",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      saveButton: "Save Changes",
      errorNoUser: "User not found. Profile cannot be loaded.",
      errorFetching: "Error fetching profile: ",
      errorNoUserSaving: "User not found. Cannot save profile.",
      saveSuccess: "Profile saved successfully!",
      errorSaving: "Error saving profile: ",
      errorLogout: "Logout failed: "
    },
    navigation: {
      home: 'Home',
      dashboard: 'Dashboard',
      lessons: 'My Lessons',
      badges: 'Badges',
      certificate: 'Certificate',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout'
    },
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      email: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      welcomeBack: 'Welcome Back!',
      joinVibeCoding: 'Join Vibe Coding',
      continueJourney: 'Continue your learning journey with SrCode',
      startAdventure: 'Start your AI-powered coding adventure',
      forgotPassword: 'Forgot Password?',
      noAccount: "Do not have an account?",
      haveAccount: 'Already have an account?',
      signInInstead: 'Sign In',
      signUpInstead: 'Sign Up',
      passwordMinLength: 'Password must be at least 8 characters',
      passwordsNoMatch: 'Passwords do not match',
      emailRequired: 'Email is required',
      invalidEmail: 'Please enter a valid email',
      checkEmail: 'Success! Check your email to confirm your account.',
      backToHome: 'Back to Home'
    },
    landing: {
      hero: {
        title: 'Master bolt.new with AI Mentorship',
        subtitle: 'Learn to build full-stack applications with SrCode, your personal AI mentor. From prompt engineering to deployment - master the future of web development.',
        startJourney: 'Start Your Journey',
        watchDemo: 'Watch Demo',
        aiPowered: 'AI-Powered Learning Platform'
      },
      features: {
        title: 'Why Choose Vibe Coding?',
        subtitle: 'Experience the future of coding education with our AI-powered platform',
        aiLearning: {
          title: 'AI-Powered Learning',
          description: 'Learn with SrCode, your personal AI mentor who adapts to your pace'
        },
        realProjects: {
          title: 'Build Real Projects',
          description: 'Master bolt.new by building actual applications, not just theory'
        },
        certificates: {
          title: 'Earn Certificates',
          description: 'Get industry-recognized certificates to boost your career'
        }
      },
      stats: {
        students: 'Students Trained',
        lessons: 'Comprehensive Lessons',
        successRate: 'Success Rate',
        support: 'AI Support'
      },
      testimonials: {
        title: 'Success Stories',
        subtitle: 'Join thousands of developers who transformed their careers',
        alex: {
          name: 'Alex Chen',
          role: 'Full-Stack Developer',
          content: 'SrCode taught me bolt.new faster than any bootcamp. Now I am building production apps in days, not months.'
        },
        maria: {
          name: 'Maria Rodriguez',
          role: 'Startup Founder',
          content: 'The interactive AI mentor is incredible. It is like having a senior developer guiding you 24/7.'
        },
        david: {
          name: 'David Kim',
          role: 'Product Manager',
          content: 'From zero to deploying full-stack apps. The gamification kept me engaged throughout the journey.'
        }
      },
      cta: {
        title: 'Ready to Build the Future?',
        subtitle: 'Join the next generation of developers mastering AI-powered web development',
        startFree: 'Start Free Today',
        noCreditCard: 'No credit card required'
      },
      footer: {
        tagline: 'Building the future, one developer at a time.'
      }
    },
    dashboard: {
      title: 'Dashboard',
      welcomeBack: 'Welcome back, {{name}}!',
      myLessons: 'My Lessons',
      badges: 'Badges',
      certificate: 'Certificate',
      stats: {
        completedLessons: 'Completed Lessons',
        totalXP: 'Total XP',
        badgesEarned: 'Badges Earned',
        progress: 'Progress'
      },
      tabs: {
        lessons: 'My Lessons',
        badges: 'Badges',
        certificate: 'Certificate'
      }
    },
    lessons: {
      title: 'Lessons',
      level: 'Level {{level}}',
      lesson: 'Lesson {{level}}.{{order}}',
      objective: 'Objective',
      learningObjectives: 'Learning Objectives',
      practiceExercise: 'Practice Exercise',
      takeQuiz: 'Take Quiz',
      retakeQuiz: 'Retake Quiz',
      requiredScore: '{{score}}% required to pass',
      readingTime: 'Reading Time: ~{{minutes}} min',
      lessonNotFound: 'Lesson Not Found',
      lessonNotAvailable: 'This lesson does not exist or is not available.',
      backToDashboard: 'Back to Dashboard',
      srCodeSays: 'SrCode says:',
      levels: {
        foundations: 'Foundations',
        databases: 'Databases',
        authentication: 'Authentication',
        deployment: 'Deployment',
        integrations: 'Integrations',
        mastery: 'Mastery'
      },
      descriptions: {
        foundations: 'Learn the basics of bolt.new and prompt engineering',
        databases: 'Master Supabase integration and database design',
        authentication: 'Implement secure user authentication systems',
        deployment: 'Deploy your applications to the world',
        integrations: 'Connect with external services and APIs',
        mastery: 'Become a bolt.new expert with advanced projects'
      },
      status: {
        locked: 'Complete previous lesson to unlock',
        available: 'Available to start',
        inProgress: 'In progress',
        completed: 'Completed',
        score: 'Score: {{score}}%'
      },
      continueNext: '🎉 Congratulations! You completed "{{currentLessonTitle}}". Do you want to continue with "{{nextLessonTitle}}"?',
      nextLessonDefaultTitle: "the next lesson",
      "lesson-1-1": {
        title: "What the Hell is bolt.new?",
        objective: "Understand bolt.new as an AI web development agent",
        content: "# What the Hell is bolt.new?\n\nWelcome to your first lesson in the Vibe Coding Academy! I'm SrCode, and I'll be your mentor throughout this journey.\n\n## What is bolt.new?\n\nbolt.new is a revolutionary AI-powered web development agent that allows you to build full-stack applications using natural language prompts. Think of it as having a senior developer who:\n\n- Never gets tired or frustrated\n- Doesn't need coffee breaks\n- Never argues about coding standards\n- Can build entire applications from scratch\n- Integrates seamlessly with modern tools\n\n## Key Features:\n\n### 🚀 **AI-Powered Development**\nbolt.new uses advanced AI to understand your requirements and generate complete, functional code. You describe what you want, and it builds it.\n\n### 🌐 **Full-Stack Capabilities**\n- Frontend development (React, Vue, Svelte)\n- Backend integration (APIs, databases)\n- Styling (CSS, Tailwind, styled-components)\n- State management\n- Authentication systems\n\n### ⚡ **Instant Deployment**\nBuilt-in integration with:\n- Netlify for hosting\n- Supabase for databases\n- GitHub for version control\n- Custom domains\n\nRemember: The quality of your output depends on the quality of your input. Learning to write effective prompts is crucial!",
        learningObjectives: [
          "Define what bolt.new is and its core purpose",
          "Identify the main advantages over traditional development",
          "Recognize ideal use cases for bolt.new projects",
          "Understand the basic workflow of building with bolt.new"
        ],
        badgeName: "First Contact",
        srcodeCommentary: "bolt.new is like having a senior developer who never gets tired, never asks for coffee, and never argues about tabs vs spaces. Amazing, right?",
        practiceDescription: "Explore the bolt.new interface and try creating a simple 'Hello World' project to get familiar with the platform.",
        quizQuestions: {
          "q1-1-1": {
            question: "What is bolt.new?",
            options: [
              "A traditional code editor",
              "An AI-powered web development agent",
              "A database management tool",
              "A design software"
            ],
            explanation: "bolt.new is an AI-powered web development agent that allows you to build full-stack applications using natural language prompts."
          },
          "q1-1-2": {
            question: "What is the main advantage of using bolt.new?",
            options: [
              "It's completely free",
              "It only works with JavaScript",
              "It can build applications from natural language descriptions",
              "It replaces all other development tools"
            ],
            explanation: "The main advantage is that bolt.new can understand natural language descriptions and generate complete, functional applications."
          },
          "q1-1-3": {
            question: "Which of these is NOT a feature of bolt.new?",
            options: [
              "AI-powered development",
              "Instant deployment",
              "Physical hardware setup",
              "Full-stack capabilities"
            ],
            explanation: "bolt.new is entirely web-based and doesn't require any physical hardware setup."
          },
          "q1-1-4": {
            question: "What type of projects is bolt.new ideal for?",
            options: [
              "Only mobile applications",
              "Web applications, SaaS, landing pages, and e-commerce",
              "Only static websites",
              "Desktop applications only"
            ],
            explanation: "bolt.new is ideal for various web-based projects including SaaS applications, landing pages, e-commerce sites, and more."
          }
        }
      },
      "lesson-1-2": {
        title: "The Art of the Perfect Prompt",
        objective: "Write effective prompts for bolt.new",
        content: "# The Art of the Perfect Prompt\n\nNow that you know what bolt.new is, let's learn how to communicate with it effectively. Writing good prompts is like being a great architect - you need to be specific, clear, and detailed.\n\n## What Makes a Perfect Prompt?\n\n### 🎯 **Specificity is Key**\nDon't say: \"Make me a cool website\"\nDo say: \"Create a landing page for a fitness app with a hero section, pricing table, testimonials, and contact form using a dark theme\"\n\n### 📋 **Structure Your Requests**\nA good prompt has these elements:\n1. **Project Type**: What you're building\n2. **Features**: Specific functionality needed\n3. **Design**: Visual preferences and styling\n4. **Technical Requirements**: Integrations, frameworks, etc.\n\n## The CLEAR Method:\n- **C**ontext: What type of project\n- **L**ist: Specific features needed\n- **E**xample: Reference similar projects\n- **A**esthetics: Design preferences\n- **R**equirements: Technical specifications\n\n## Common Mistakes to Avoid:\n1. **Too Vague**: \"Make it look good\"\n2. **Too Complex**: Asking for everything at once\n3. **No Context**: Not explaining the purpose\n4. **Missing Requirements**: Forgetting mobile responsiveness\n5. **Unclear Priorities**: Not specifying what's most important",
        learningObjectives: [
          "Write clear and specific prompts for bolt.new",
          "Understand the CLEAR method for prompt structure",
          "Avoid common prompting mistakes",
          "Use iterative prompting for refinement"
        ],
        badgeName: "AI Whisperer",
        srcodeCommentary: "A good prompt is like a cooking recipe: specific, clear, and without weird ingredients. None of that 'make me a cool app' nonsense, please 🙄",
        practiceDescription: "Create a detailed prompt for a landing page of your choice, then test it in bolt.new to see the results.",
        quizQuestions: {
          "q1-2-1": {
            question: "What does the 'C' in the CLEAR method stand for?",
            options: ["Color", "Context", "Code", "Components"],
            explanation: "In the CLEAR method, 'C' stands for Context - explaining what type of project you're building."
          },
          "q1-2-2": {
            question: "Which is an example of a well-structured prompt?",
            options: [
              "Make me a cool app",
              "Build something with React",
              "Create an e-commerce site with product catalog, shopping cart, and Stripe integration using modern design",
              "I need a website"
            ],
            explanation: "A well-structured prompt is specific, includes features, and mentions technical requirements and design preferences."
          },
          "q1-2-3": {
            question: "What should you do if your first prompt doesn't give perfect results?",
            options: [
              "Give up and start over",
              "Use iterative prompting to refine",
              "Always use the same prompt",
              "Never make changes"
            ],
            explanation: "Iterative prompting allows you to refine and improve your application with follow-up requests."
          },
          "q1-2-4": {
            question: "Which element is NOT essential in a good prompt?",
            options: [
              "Specific features needed",
              "Technical requirements",
              "Your personal life story",
              "Design preferences"
            ],
            explanation: "Personal information is not relevant to building applications - focus on project requirements instead."
          }
        }
      },
      "lesson-1-3": {
        title: "WebContainers: The Magic Behind the Curtain",
        objective: "Understand StackBlitz development environment",
        content: "# WebContainers: The Magic Behind the Curtain\n\nEver wondered how bolt.new runs an entire development environment in your browser? The answer is WebContainers - a revolutionary technology that brings Node.js to the browser.\n\n## What Are WebContainers?\n\nWebContainers are a browser-based runtime for executing Node.js applications and operating system commands. Think of them as:\n- A complete Node.js environment in your browser\n- No downloads or installations required\n- Full terminal access and package management\n- Real-time collaboration capabilities\n\n## How WebContainers Work:\n\n### 🌐 **Browser-Native**\n- Runs entirely in your browser using WebAssembly\n- No server-side execution needed\n- Your code stays private and secure\n- Works offline once loaded\n\n### ⚡ **Performance Benefits**\n- Instant startup times\n- Hot module replacement\n- Real-time preview updates\n- Efficient resource usage\n\n### 🔒 **Security Features**\n- Sandboxed execution environment\n- No access to your local file system\n- Secure by design\n- Network isolation\n\n## Key Advantages:\n- **Instant Setup**: No environment configuration\n- **Universal Access**: Works on any device with a browser\n- **Resource Efficiency**: No local storage usage\n- **Collaboration Ready**: Share projects with a URL",
        learningObjectives: [
          "Understand what WebContainers are and how they work",
          "Navigate the StackBlitz IDE effectively",
          "Use the integrated terminal for development tasks",
          "Recognize the advantages and limitations of browser-based development"
        ],
        badgeName: "Tech Detective",
        srcodeCommentary: "WebContainers are like Docker but for your browser. Yes, it's as cool as it sounds. No, you don't need to understand Docker for this 😉",
        practiceDescription: "Explore the StackBlitz IDE interface, open the terminal, and try running some basic commands like 'npm --version' and 'ls'.",
        quizQuestions: {
          "q1-3-1": {
            question: "What are WebContainers?",
            options: [
              "Docker containers for web apps",
              "A browser-based runtime for Node.js applications",
              "A type of web server",
              "A database technology"
            ],
            explanation: "WebContainers are a browser-based runtime that allows Node.js applications to run entirely in the browser using WebAssembly."
          },
          "q1-3-2": {
            question: "What is a key advantage of WebContainers?",
            options: [
              "They require local installation",
              "They only work on specific operating systems",
              "They provide instant setup with no downloads required",
              "They are slower than traditional development"
            ],
            explanation: "WebContainers provide instant setup with no downloads or installations required, making development immediately accessible."
          },
          "q1-3-3": {
            question: "How do you install packages in a WebContainer?",
            options: [
              "Download them manually",
              "Use npm or yarn in the integrated terminal",
              "Upload files directly",
              "WebContainers don't support packages"
            ],
            explanation: "You can install packages using npm or yarn commands in the integrated terminal, just like in traditional development."
          },
          "q1-3-4": {
            question: "What powers the execution of Node.js in WebContainers?",
            options: [
              "Server-side processing",
              "Local file system",
              "WebAssembly",
              "Browser plugins"
            ],
            explanation: "WebContainers use WebAssembly to run Node.js applications entirely in the browser without server-side processing."
          }
        }
      },
      "lesson-2-1": {
        title: "Connecting Supabase Like a Pro",
        objective: "Set up Supabase in bolt.new step by step",
        content: "# Connecting Supabase Like a Pro\n\nWelcome to Level 2! Now we're getting into the real meat and potatoes of modern web development. Supabase is going to be your new best friend - think of it as Firebase, but actually developer-friendly.\n\n## What is Supabase?\n\nSupabase is an open-source Backend-as-a-Service (BaaS) that provides:\n- **PostgreSQL Database**: Real SQL, not some NoSQL nonsense\n- **Authentication**: Built-in user management\n- **Real-time subscriptions**: Live data updates\n- **Edge Functions**: Serverless functions at the edge\n- **Storage**: File and image handling\n- **Auto-generated APIs**: RESTful and GraphQL\n\n## Step-by-Step Connection Process:\n\n### **Step 1: Create Your Supabase Project**\n1. Go to supabase.com\n2. Sign up or log in\n3. Click \"New Project\"\n4. Choose your organization\n5. Fill in project details\n6. Click \"Create new project\"\n\n### **Step 2: Get Your Project Credentials**\n1. Go to Settings → API\n2. Copy Project URL and Anon Key\n\n### **Step 3: Connect in bolt.new**\n1. In your project, go to integrations\n2. Select \"Supabase\"\n3. Enter your credentials\n4. Test the connection\n\n## Best Practices:\n- Never expose service role keys in frontend code\n- Use Row Level Security (RLS) policies\n- Validate data on both client and server sides\n- Use environment variables for credentials",
        learningObjectives: [
          "Create and configure a Supabase project",
          "Connect Supabase to bolt.new successfully",
          "Understand environment variables and security",
          "Troubleshoot common connection issues"
        ],
        badgeName: "Supreme Connector",
        srcodeCommentary: "Settings > Applications > Connect. Easier than assembling IKEA furniture... and with fewer tears",
        practiceDescription: "Create your own Supabase project and successfully connect it to a new bolt.new project.",
        quizQuestions: {
          "q2-1-1": {
            question: "What is the first step to connect Supabase to bolt.new?",
            options: [
              "Write database queries",
              "Create a Supabase project and get credentials",
              "Install Supabase CLI",
              "Configure authentication"
            ],
            explanation: "You must first create a Supabase project and obtain your project URL and API keys before connecting."
          },
          "q2-1-2": {
            question: "Which Supabase key should you use in frontend code?",
            options: ["Service Role Key", "Secret Key", "Anon Key", "Master Key"],
            explanation: "The Anon Key is safe to use in frontend code as it respects Row Level Security policies."
          },
          "q2-1-3": {
            question: "Where should you store your Supabase credentials for security?",
            options: [
              "Directly in the code",
              "In comments",
              "In environment variables",
              "In a public file"
            ],
            explanation: "Environment variables keep your credentials secure and separate from your codebase."
          },
          "q2-1-4": {
            question: "What does RLS stand for in Supabase?",
            options: [
              "Real Live Streaming",
              "Row Level Security",
              "Rapid Loading System",
              "Remote Login Service"
            ],
            explanation: "Row Level Security (RLS) ensures that users can only access data they're authorized to see."
          }
        }
      },
      "lesson-2-2": {
        title: "Database Schemas: Your New Best Friend",
        objective: "Design effective database schemas",
        content: "# Database Schemas: Your New Best Friend\n\nTime to talk about the foundation of any great application - the database schema. Think of it as the blueprint for your data mansion.\n\n## What is a Database Schema?\n\nA database schema is the structure that defines:\n- **Tables**: Where your data lives\n- **Columns**: What data you store\n- **Relationships**: How data connects\n- **Constraints**: Rules your data must follow\n- **Indexes**: How to find data quickly\n\n## Core Schema Design Principles:\n\n### 🎯 **Normalization (But Not Too Much)**\n- Remove duplicate data\n- Create logical relationships\n- Don't over-normalize (sometimes duplication is okay)\n\n### 🔗 **Relationships Matter**\n- **One-to-One**: User → Profile\n- **One-to-Many**: User → Posts\n- **Many-to-Many**: Users ↔ Roles\n\n### 📝 **Data Types Are Important**\n- Use the right type for the job\n- Consider storage and performance\n- Plan for future growth\n\n## Key Schema Concepts:\n\n### **Primary Keys**\n- Unique identifier for each row\n- Use UUID for better distribution\n- Never change or reuse\n\n### **Foreign Keys**\n- Link tables together\n- Enforce referential integrity\n- Define cascade behavior\n\n### **Constraints**\n- CHECK: Validate data values\n- UNIQUE: Prevent duplicates\n- NOT NULL: Require values",
        learningObjectives: [
          "Design efficient database schemas",
          "Understand table relationships and constraints",
          "Implement Row Level Security in Supabase",
          "Apply schema design best practices"
        ],
        badgeName: "Data Architect",
        srcodeCommentary: "A good schema is like a well-founded house. Without it, everything collapses faster than my January diets",
        practiceDescription: "Design a schema for a blog application with users, posts, comments, and categories.",
        quizQuestions: {
          "q2-2-1": {
            question: "What is a database schema?",
            options: [
              "A type of database",
              "The structure that defines tables, columns, and relationships",
              "A query language",
              "A backup system"
            ],
            explanation: "A database schema is the structure that defines how data is organized, including tables, columns, relationships, and constraints."
          },
          "q2-2-2": {
            question: "Which relationship type connects Users to Posts where each user can have many posts?",
            options: ["One-to-One", "One-to-Many", "Many-to-Many", "Many-to-One"],
            explanation: "One-to-Many relationship allows one user to have multiple posts, but each post belongs to only one user."
          },
          "q2-2-3": {
            question: "What does RLS stand for in Supabase?",
            options: [
              "Real-time Live Streaming",
              "Row Level Security",
              "Relational Logic System",
              "Remote Login Service"
            ],
            explanation: "Row Level Security (RLS) controls which users can access which rows in a table based on policies."
          },
          "q2-2-4": {
            question: "Why should you use UUID for primary keys?",
            options: [
              "They are smaller than integers",
              "They provide better distribution and avoid conflicts",
              "They are easier to remember",
              "They are required by Supabase"
            ],
            explanation: "UUIDs provide better distribution across systems and avoid conflicts when merging data from different sources."
          }
        }
      },
      "lesson-2-3": {
        title: "Edge Functions: Unlimited Power",
        objective: "Create and manage Edge Functions",
        content: "# Edge Functions: Unlimited Power\n\nWelcome to the powerful side of Supabase! Edge Functions are like having superpowers for your backend.\n\n## What Are Edge Functions?\n\nEdge Functions are serverless functions that run on Supabase's global edge network. Think of them as:\n- **Mini servers** that run your custom logic\n- **API endpoints** you can customize completely\n- **Event handlers** that respond to database changes\n- **Data processors** that transform information\n\n## Why Edge Functions Rock:\n\n### ⚡ **Performance**\n- Run close to your users worldwide\n- Sub-100ms response times\n- Auto-scaling based on demand\n\n### 🔒 **Security**\n- Server-side execution (secrets stay secret)\n- Built-in authentication context\n- Row Level Security integration\n\n### 🛠️ **Flexibility**\n- Use any JavaScript/TypeScript code\n- Access to full Node.js ecosystem\n- Custom business logic implementation\n\n## Common Use Cases:\n\n### **1. API Integrations**\n- Payment processing with Stripe\n- Email sending with SendGrid\n- Social media integrations\n- Third-party API calls\n\n### **2. Data Processing**\n- Image resizing and optimization\n- Data validation and sanitization\n- Complex calculations\n- Report generation\n\n### **3. Webhooks**\n- Payment confirmations\n- User notifications\n- Data synchronization\n- Real-time updates\n\n### **4. Authentication Logic**\n- Multi-factor authentication\n- Custom user validation\n- Role-based permissions\n- Third-party OAuth",
        learningObjectives: [
          "Understand what Edge Functions are and their benefits",
          "Create and deploy Edge Functions in Supabase",
          "Implement common use cases like API integrations",
          "Apply security best practices for serverless functions"
        ],
        badgeName: "Edge Lord",
        srcodeCommentary: "Edge Functions are like having superpowers. Use them wisely, young Padawan 🌟",
        practiceDescription: "Create an Edge Function that validates email addresses and checks if they're from disposable email services.",
        quizQuestions: {
          "q2-3-1": {
            question: "What are Edge Functions?",
            options: [
              "Database queries that run faster",
              "Serverless functions that run on Supabase's global edge network",
              "Frontend components",
              "CSS styling functions"
            ],
            explanation: "Edge Functions are serverless functions that run on Supabase's global edge network, providing fast, scalable backend logic."
          },
          "q2-3-2": {
            question: "When should you use Edge Functions vs API routes?",
            options: [
              "Always use Edge Functions",
              "When you need server-side logic, external API calls, or custom authentication",
              "Only for database operations",
              "Never use Edge Functions"
            ],
            explanation: "Edge Functions are ideal for server-side logic, external API integrations, payment processing, and any logic that requires secrets."
          },
          "q2-3-3": {
            question: "How do you handle errors in Edge Functions?",
            options: [
              "Ignore them",
              "Use try-catch blocks and return appropriate error responses",
              "Let them crash the function",
              "Only log them to console"
            ],
            explanation: "Proper error handling with try-catch blocks and meaningful error responses ensures robust functions."
          },
          "q2-3-4": {
            question: "Where should you store API keys in Edge Functions?",
            options: [
              "Directly in the code",
              "In comments",
              "In environment variables",
              "In the function name"
            ],
            explanation: "Environment variables keep your API keys and secrets secure and separate from your code."
          }
        }
      },
      "lesson-3-1": {
        title: "Auth Basics: Who Are You?",
        objective: "Implement basic login/registration",
        content: "# Auth Basics: Who Are You?\n\nAuthentication is verifying who someone claims to be. It's like checking ID at the door.\n\n## Authentication vs Authorization\n- **Authentication**: Who are you? (Login)\n- **Authorization**: What can you do? (Permissions)\n\n## Supabase Auth Features:\n- Email/password authentication\n- Social login (Google, GitHub, etc.)\n- Magic links (passwordless)\n- JWT tokens for sessions\n- Row Level Security integration\n\n## Basic Implementation:\n1. Configure Supabase Auth\n2. Create sign up/sign in functions\n3. Handle auth state changes\n4. Implement proper error handling\n\n## Best Practices:\n- Validate email format\n- Enforce strong passwords\n- Use HTTPS everywhere\n- Handle edge cases properly",
        learningObjectives: [
          "Understand authentication concepts and terminology",
          "Implement user registration and login with Supabase",
          "Create auth forms with proper validation",
          "Manage authentication state in React applications"
        ],
        badgeName: "Digital Guardian",
        srcodeCommentary: "Supabase Auth is so easy that even I could do it... and I'm an AI without fingers 🤖",
        practiceDescription: "Build a complete authentication system with registration, login, and logout functionality.",
        quizQuestions: {
          "q3-1-1": {
            question: "What is the difference between authentication and authorization?",
            options: [
              "They are the same thing",
              "Authentication verifies identity, authorization determines permissions",
              "Authorization verifies identity, authentication determines permissions",
              "There is no difference"
            ],
            explanation: "Authentication answers 'who are you?' while authorization answers 'what can you do?'"
          },
          "q3-1-2": {
            question: "How does Supabase handle password security?",
            options: [
              "Passwords are stored in plain text",
              "Passwords are automatically hashed and secured",
              "Users must hash their own passwords",
              "Passwords are encrypted with a simple algorithm"
            ],
            explanation: "Supabase automatically handles password hashing using industry-standard algorithms."
          },
          "q3-1-3": {
            question: "What should you validate when a user registers?",
            options: [
              "Only email format",
              "Only password strength",
              "Email format, password strength, and confirm password match",
              "Nothing - trust the user"
            ],
            explanation: "Proper validation includes email format, password strength requirements, and password confirmation."
          },
          "q3-1-4": {
            question: "How do you listen for authentication state changes in Supabase?",
            options: [
              "Check manually every second",
              "Use supabase.auth.onAuthStateChange()",
              "Refresh the page",
              "Authentication state never changes"
            ],
            explanation: "supabase.auth.onAuthStateChange() provides real-time updates when authentication state changes."
          }
        }
      },
      "lesson-3-2": {
        title: "Protecting Routes Like Fort Knox",
        objective: "Middleware and route protection",
        content: "# Protecting Routes Like Fort Knox\n\nRoute protection ensures only authorized users access protected content.\n\n## Types of Protected Routes:\n- **Authentication Required**: Dashboard, profile\n- **Role-Based Access**: Admin panels, moderator tools\n- **Conditional Access**: Subscription features\n\n## Implementation Patterns:\n1. Protected Route component\n2. Role-based route guards\n3. Subscription-based protection\n4. Row Level Security (RLS)\n\n## Best Practices:\n- Validate on both client and server\n- Show loading states during auth checks\n- Provide clear error messages\n- Use RLS for database-level protection\n\n## Testing:\n- Test with different user types\n- Test expired sessions\n- Test edge cases",
        learningObjectives: [
          "Implement authentication-based route protection",
          "Create role-based access control systems",
          "Use React Router guards effectively",
          "Apply Row Level Security for data protection"
        ],
        badgeName: "Night Watchman",
        srcodeCommentary: "An unprotected route is like leaving your door open with a 'free entry' sign. Spoiler: nobody respects those signs",
        practiceDescription: "Create a multi-level route protection system with different access levels.",
        quizQuestions: {
          "q3-2-1": {
            question: "What is the purpose of route protection?",
            options: [
              "To make the app faster",
              "To ensure only authorized users can access certain pages",
              "To improve SEO",
              "To reduce bundle size"
            ],
            explanation: "Route protection ensures that only authenticated and authorized users can access protected pages."
          },
          "q3-2-2": {
            question: "What should you do while checking authentication status?",
            options: [
              "Show an error message",
              "Redirect immediately",
              "Show a loading state",
              "Hide the entire page"
            ],
            explanation: "You should show a loading state while checking authentication to provide good user experience."
          },
          "q3-2-3": {
            question: "What is Row Level Security (RLS)?",
            options: [
              "Client-side route protection",
              "Database-level security that controls which rows users can access",
              "A React component",
              "A type of authentication"
            ],
            explanation: "Row Level Security (RLS) is a database feature that controls which rows users can see and modify."
          },
          "q3-2-4": {
            question: "Why should you validate permissions on both client and server?",
            options: [
              "It's not necessary",
              "Client-side for UX, server-side for security",
              "Only server-side validation matters",
              "Only client-side validation is needed"
            ],
            explanation: "Client-side validation provides immediate feedback, while server-side validation ensures security."
          }
        }
      },
      "lesson-3-3": {
        title: "Social Auth: The Easy Way",
        objective: "Implement Google/GitHub login",
        content: "# Social Auth: The Easy Way\n\nWhy make users remember another password when they can just click 'Login with Google'?\n\n## Benefits of Social Auth:\n- No new password to remember\n- Faster registration process\n- Trusted authentication provider\n- Higher conversion rates\n\n## Implementation Steps:\n1. Configure OAuth providers (Google, GitHub)\n2. Set up Supabase social auth\n3. Implement social login buttons\n4. Handle user profile data\n5. Manage account linking\n\n## Security Considerations:\n- Validate redirect URLs\n- Use HTTPS in production\n- Handle email conflicts properly\n- Store minimal user data\n\n## Best Practices:\n- Provide clear error messages\n- Handle popup blockers\n- Test with different providers\n- Monitor conversion rates",
        learningObjectives: [
          "Implement Google and GitHub social authentication",
          "Handle social auth data and user profiles",
          "Manage multiple linked accounts per user",
          "Apply social auth security best practices"
        ],
        badgeName: "Social Butterfly",
        srcodeCommentary: "Why remember another password when Google already knows everything about you? Embrace the convenience 😎",
        practiceDescription: "Implement a complete social authentication system with Google and GitHub.",
        quizQuestions: {
          "q3-3-1": {
            question: "What is the main benefit of social authentication for users?",
            options: [
              "It's more secure than passwords",
              "They don't need to create and remember another password",
              "It's faster to implement",
              "It works offline"
            ],
            explanation: "Social authentication eliminates the need for users to create and remember another password."
          },
          "q3-3-2": {
            question: "Where do you configure OAuth redirect URIs?",
            options: [
              "In your frontend code",
              "In Supabase database",
              "In the provider's developer console",
              "In your package.json"
            ],
            explanation: "OAuth redirect URIs must be configured in each provider's developer console for security."
          },
          "q3-3-3": {
            question: "How do you handle multiple social accounts for one user?",
            options: [
              "Create separate user accounts",
              "Use account linking to connect multiple providers to one user",
              "Only allow one provider per user",
              "Merge accounts automatically"
            ],
            explanation: "Account linking allows users to connect multiple social providers to a single user account."
          },
          "q3-3-4": {
            question: "What should you do when email conflicts occur?",
            options: [
              "Create a duplicate account",
              "Reject the signup completely",
              "Suggest linking the account or signing in with the original provider",
              "Delete the existing account"
            ],
            explanation: "When email conflicts occur, guide users to either link their account or sign in with their original method."
          }
        }
      },
      "lesson-4-1": {
        title: "Netlify: Your Best Friend for Deploy",
        objective: "Deploy using Netlify integration",
        content: "# Netlify: Your Best Friend for Deploy\n\nTime to deploy your creation to the world! Netlify makes deployment magical.\n\n## What is Netlify?\n- Static Site Hosting with global CDN\n- Serverless Functions\n- Continuous Deployment\n- Form Handling\n- Split Testing\n\n## Deployment Process:\n1. Prepare your project (build scripts, env vars)\n2. Deploy from bolt.new (one-click)\n3. Configure environment variables\n4. Set up custom domain\n5. Monitor performance\n\n## Optimization Tips:\n- Lazy load components\n- Optimize images\n- Use code splitting\n- Enable compression\n- Set up proper caching\n\n## Best Practices:\n- Use environment variables\n- Set up SPA redirects\n- Monitor build logs\n- Test deployed version",
        learningObjectives: [
          "Deploy applications to Netlify from bolt.new",
          "Configure environment variables for production",
          "Optimize applications for production deployment",
          "Troubleshoot common deployment issues"
        ],
        badgeName: "Space Launcher",
        srcodeCommentary: "Netlify + bolt.new is like Batman and Robin, but for deployment. And yes, you're Robin in this analogy 🦸‍♂️",
        practiceDescription: "Deploy a complete application to Netlify with proper environment variable configuration.",
        quizQuestions: {
          "q4-1-1": {
            question: "What is the correct build command for a Vite project in Netlify?",
            options: ["npm start", "npm run build", "npm run dev", "vite build"],
            explanation: "The build command 'npm run build' runs the build script defined in package.json."
          },
          "q4-1-2": {
            question: "Where should environment variables be configured for production?",
            options: [
              "In the source code",
              "In the .env file committed to Git",
              "In Netlify's environment variables section",
              "In package.json"
            ],
            explanation: "Environment variables should be configured in Netlify's dashboard for security."
          },
          "q4-1-3": {
            question: "What redirect rule is essential for SPAs?",
            options: [
              "/api/* /backend/:splat 200",
              "/* /index.html 200",
              "/old /new 301",
              "/404 /error 200"
            ],
            explanation: "The '/* /index.html 200' redirect ensures all routes are handled by the SPA's client-side routing."
          },
          "q4-1-4": {
            question: "How do you optimize a React app for production?",
            options: [
              "Just run npm run build",
              "Use lazy loading, code splitting, and remove console.logs",
              "Only minify the code",
              "Optimization is not necessary"
            ],
            explanation: "Production optimization includes lazy loading, code splitting, and removing development code."
          }
        }
      },
      "lesson-4-2": {
        title: "Custom Domains: Your Personal Brand",
        objective: "Configure custom domains",
        content: "# Custom Domains: Your Personal Brand\n\nTime to give your app a professional address!\n\n## Why Custom Domains Matter:\n- Professional appearance\n- Brand recognition\n- Better SEO\n- User trust\n- Easier to remember\n\n## Setup Process:\n1. Purchase a domain\n2. Configure DNS settings\n3. Add domain to Netlify\n4. Verify SSL certificate\n5. Test everything\n\n## DNS Configuration:\n- A record: Points to Netlify's load balancer\n- CNAME: Points subdomain to Netlify\n- SSL: Automatic with Let's Encrypt\n\n## Best Practices:\n- Use HTTPS everywhere\n- Set up www redirects\n- Monitor SSL certificates\n- Test from different locations",
        learningObjectives: [
          "Purchase and configure custom domains",
          "Set up DNS records correctly",
          "Verify SSL certificates",
          "Implement domain best practices"
        ],
        badgeName: "Domain Lord",
        srcodeCommentary: "A custom domain is like having an elegant address. No more 'my-random-app-123.netlify.app'",
        practiceDescription: "Set up a custom domain for your deployed application with proper DNS configuration.",
        quizQuestions: {
          "q4-2-1": {
            question: "What DNS record type should you use to point your root domain to Netlify?",
            options: ["CNAME", "A record", "MX record", "TXT record"],
            explanation: "An A record is used to point the root domain to Netlify's IP address."
          },
          "q4-2-2": {
            question: "How does Netlify handle SSL certificates?",
            options: [
              "You must purchase them separately",
              "Automatic SSL with Let's Encrypt",
              "SSL is not supported",
              "Only paid plans get SSL"
            ],
            explanation: "Netlify automatically provides SSL certificates using Let's Encrypt for all sites."
          },
          "q4-2-3": {
            question: "What should you do with the www subdomain?",
            options: [
              "Ignore it completely",
              "Set up a redirect to your main domain",
              "Use it as the primary domain",
              "Delete the www record"
            ],
            explanation: "It's best practice to set up a redirect from www to your main domain (or vice versa) for consistency."
          },
          "q4-2-4": {
            question: "How long does DNS propagation typically take?",
            options: [
              "Immediately",
              "Up to 48 hours",
              "Exactly 24 hours",
              "One week"
            ],
            explanation: "DNS propagation can take up to 48 hours to complete worldwide, though it's often faster."
          }
        }
      },
      "lesson-4-3": {
        title: "CI/CD: The Future is Now",
        objective: "Configure automatic deployments with GitHub",
        content: "# CI/CD: The Future is Now\n\nContinuous Integration and Deployment - your personal deployment butler!\n\n## What is CI/CD?\n- **CI**: Continuous Integration (automated testing)\n- **CD**: Continuous Deployment (automated deployment)\n- Push code → Tests run → Deploy automatically\n\n## Benefits:\n- Faster development cycles\n- Reduced human error\n- Consistent deployments\n- Automatic testing\n- Easy rollbacks\n\n## GitHub Actions Setup:\n1. Connect GitHub repository\n2. Configure build triggers\n3. Set up testing pipeline\n4. Deploy on successful tests\n5. Monitor deployment status\n\n## Best Practices:\n- Test before deploying\n- Use staging environments\n- Monitor deployment metrics\n- Set up notifications\n- Plan rollback strategies",
        learningObjectives: [
          "Understand CI/CD concepts and benefits",
          "Set up automated deployments with GitHub",
          "Configure testing pipelines",
          "Implement deployment best practices"
        ],
        badgeName: "Automation Master",
        srcodeCommentary: "CI/CD is like having a butler who does everything for you. Except you don't need to pay them or give them vacation days",
        practiceDescription: "Set up a complete CI/CD pipeline with GitHub Actions for automated testing and deployment.",
        quizQuestions: {
          "q4-3-1": {
            question: "What does CI/CD stand for?",
            options: [
              "Code Integration/Code Deployment",
              "Continuous Integration/Continuous Deployment",
              "Central Integration/Central Deployment",
              "Custom Integration/Custom Deployment"
            ],
            explanation: "CI/CD stands for Continuous Integration and Continuous Deployment."
          },
          "q4-3-2": {
            question: "What happens in a typical CI/CD pipeline?",
            options: [
              "Only code deployment",
              "Only testing",
              "Code push → Tests run → Deploy if tests pass",
              "Manual deployment only"
            ],
            explanation: "A typical CI/CD pipeline runs tests automatically when code is pushed and deploys only if tests pass."
          },
          "q4-3-3": {
            question: "What is the main benefit of automated deployment?",
            options: [
              "It's more expensive",
              "Reduces human error and speeds up development",
              "It requires more manual work",
              "It's only for large companies"
            ],
            explanation: "Automated deployment reduces human error, speeds up development cycles, and ensures consistent deployments."
          },
          "q4-3-4": {
            question: "When should you deploy to production?",
            options: [
              "Immediately after writing code",
              "Only after tests pass and code review is complete",
              "Once a year",
              "Never use automation"
            ],
            explanation: "Code should only be deployed to production after passing all tests and completing code review processes."
          }
        }
      },
      "lesson-5-1": {
        title: "GitHub: Your Safety Net",
        objective: "Complete GitHub integration",
        content: "# GitHub: Your Safety Net\n\nGitHub is like insurance for your code - you never know when you'll need it until you URGENTLY need it!\n\n## Why GitHub Integration Matters:\n- Version control and history\n- Collaboration capabilities\n- Backup and recovery\n- Code sharing and open source\n- Professional portfolio\n\n## Key Features:\n- Repository management\n- Branch strategies\n- Pull requests and code review\n- Issues and project management\n- GitHub Actions for CI/CD\n\n## Best Practices:\n- Commit early and often\n- Write meaningful commit messages\n- Use branches for features\n- Review code before merging\n- Keep repositories organized\n\n## Integration with bolt.new:\n1. Connect GitHub account\n2. Create repository\n3. Set up automatic sync\n4. Configure webhooks\n5. Enable collaborative features",
        learningObjectives: [
          "Set up GitHub integration with bolt.new",
          "Understand Git workflows and best practices",
          "Implement collaborative development processes",
          "Use GitHub for project management"
        ],
        badgeName: "Git Guru",
        srcodeCommentary: "GitHub is like car insurance for your code. You never know when you'll need it until you URGENTLY need it",
        practiceDescription: "Set up a GitHub repository for your project and practice making commits, branches, and pull requests.",
        quizQuestions: {
          "q5-1-1": {
            question: "What is the main purpose of version control?",
            options: [
              "To make code slower",
              "To track changes and enable collaboration",
              "To delete old code",
              "To make code harder to read"
            ],
            explanation: "Version control tracks changes over time and enables multiple developers to collaborate safely."
          },
          "q5-1-2": {
            question: "What is a branch in Git?",
            options: [
              "A tree component",
              "A parallel version of the codebase for developing features",
              "A type of commit",
              "A GitHub setting"
            ],
            explanation: "A branch is a parallel version of the codebase that allows you to develop features without affecting the main code."
          },
          "q5-1-3": {
            question: "What should a good commit message include?",
            options: [
              "Random text",
              "A clear description of what changes were made",
              "Your personal information",
              "The current date only"
            ],
            explanation: "A good commit message clearly describes what changes were made and why."
          },
          "q5-1-4": {
            question: "What is a pull request?",
            options: [
              "A request to delete code",
              "A request to merge changes from one branch to another",
              "A request for more features",
              "A request to download code"
            ],
            explanation: "A pull request is a request to merge changes from one branch into another, allowing for code review."
          }
        }
      },
      "lesson-5-2": {
        title: "Stripe: Show Me The Money",
        objective: "Integrate payments with Stripe",
        content: "# Stripe: Show Me The Money\n\nTime to monetize your masterpiece! Stripe makes accepting payments so easy you could sell bottled water to fish.\n\n## Why Stripe?\n- Industry-leading security\n- Global payment methods\n- Developer-friendly APIs\n- Extensive documentation\n- Flexible pricing models\n\n## Core Concepts:\n- **Payment Intents**: Secure payment processing\n- **Customers**: User management\n- **Subscriptions**: Recurring payments\n- **Webhooks**: Real-time notifications\n- **Products**: What you're selling\n\n## Implementation Steps:\n1. Create Stripe account\n2. Set up products and pricing\n3. Implement payment forms\n4. Handle webhooks\n5. Test thoroughly\n\n## Security Best Practices:\n- Use HTTPS everywhere\n- Validate on server-side\n- Handle PCI compliance\n- Secure webhook endpoints\n- Never store card data",
        learningObjectives: [
          "Set up Stripe payment processing",
          "Implement one-time and subscription payments",
          "Handle webhooks for payment events",
          "Apply payment security best practices"
        ],
        badgeName: "Money Maker",
        srcodeCommentary: "Stripe makes charging so easy you could sell bottled water to fish. But please, don't do that",
        practiceDescription: "Implement a complete payment system with both one-time payments and subscriptions using Stripe.",
        quizQuestions: {
          "q5-2-1": {
            question: "What is a Payment Intent in Stripe?",
            options: [
              "A customer's wish to buy something",
              "A secure object that represents your intent to collect payment",
              "A type of credit card",
              "A Stripe employee"
            ],
            explanation: "A Payment Intent is a secure object that tracks the entire payment process from creation to completion."
          },
          "q5-2-2": {
            question: "Where should you store credit card information?",
            options: [
              "In your database",
              "In local storage",
              "Never store it - let Stripe handle it",
              "In cookies"
            ],
            explanation: "You should never store credit card information yourself - let Stripe handle all sensitive payment data."
          },
          "q5-2-3": {
            question: "What are webhooks used for in Stripe?",
            options: [
              "To catch fish",
              "To receive real-time notifications about payment events",
              "To store customer data",
              "To process refunds"
            ],
            explanation: "Webhooks notify your application in real-time when payment events occur, like successful payments or failed charges."
          },
          "q5-2-4": {
            question: "Why is HTTPS required for payment processing?",
            options: [
              "It's not required",
              "To encrypt sensitive payment data in transit",
              "To make the site faster",
              "For better SEO"
            ],
            explanation: "HTTPS encrypts all data between the user and your server, protecting sensitive payment information."
          }
        }
      },
      "lesson-5-3": {
        title: "Figma to Code: Pure Magic",
        objective: "Import designs from Figma",
        content: "# Figma to Code: Pure Magic\n\nTurning beautiful designs into functional code - it's like being a digital wizard!\n\n## What is Figma to Code?\n- Automatic design-to-code conversion\n- Pixel-perfect implementations\n- Responsive design support\n- Component extraction\n- Style generation\n\n## Benefits:\n- Faster development\n- Design consistency\n- Reduced manual coding\n- Better designer-developer collaboration\n- Pixel-perfect results\n\n## Process:\n1. Prepare Figma designs\n2. Use Figma to Code tools\n3. Review generated code\n4. Customize and optimize\n5. Integrate with your app\n\n## Best Practices:\n- Organize Figma layers properly\n- Use consistent naming\n- Create reusable components\n- Test responsive behavior\n- Optimize generated code",
        learningObjectives: [
          "Convert Figma designs to functional code",
          "Optimize generated code for production",
          "Maintain design consistency",
          "Implement responsive design patterns"
        ],
        badgeName: "Design Translator",
        srcodeCommentary: "Figma to Code is like Google Translate but for designers. And it works better than Google Translate with Spanish 😂",
        practiceDescription: "Convert a complete Figma design to functional React components and integrate them into your application.",
        quizQuestions: {
          "q5-3-1": {
            question: "What is the main benefit of Figma to Code conversion?",
            options: [
              "It makes designs look worse",
              "It speeds up development and ensures design consistency",
              "It's only for mobile apps",
              "It requires no design skills"
            ],
            explanation: "Figma to Code conversion speeds up development while maintaining pixel-perfect design consistency."
          },
          "q5-3-2": {
            question: "What should you do with generated code?",
            options: [
              "Use it exactly as generated",
              "Review, optimize, and customize for your needs",
              "Delete it immediately",
              "Never modify generated code"
            ],
            explanation: "Generated code should be reviewed, optimized, and customized to fit your specific needs and coding standards."
          },
          "q5-3-3": {
            question: "How should you organize Figma designs for better code generation?",
            options: [
              "Randomly name everything",
              "Use consistent naming and layer organization",
              "Don't organize anything",
              "Only use text layers"
            ],
            explanation: "Consistent naming and proper layer organization in Figma leads to better, more maintainable generated code."
          },
          "q5-3-4": {
            question: "What should you consider when converting designs to code?",
            options: [
              "Only desktop versions",
              "Responsive behavior across all device sizes",
              "Only mobile versions",
              "Designs don't need to be responsive"
            ],
            explanation: "You should always consider responsive behavior to ensure your design works well across all device sizes."
          }
        }
      },
      "lesson-6-1": {
        title: "Final Project: Complete App",
        objective: "Create full-stack app with all integrations",
        content: "# Final Project: Complete App\n\nThis is your Avengers: Endgame moment! Time to use everything you've learned.\n\n## Project Requirements:\n- Full-stack architecture\n- User authentication\n- Database integration\n- Payment processing\n- Real-time features\n- Professional deployment\n\n## Planning Phase:\n1. Define project scope\n2. Create database schema\n3. Design user flows\n4. Plan feature implementation\n5. Set timeline and milestones\n\n## Implementation Checklist:\n- [ ] User authentication system\n- [ ] Database design and setup\n- [ ] Core feature development\n- [ ] Payment integration\n- [ ] Real-time functionality\n- [ ] Testing and optimization\n- [ ] Production deployment\n\n## Best Practices:\n- Code organization\n- Error handling\n- Performance optimization\n- Security considerations\n- User experience",
        learningObjectives: [
          "Apply all learned concepts in a complete project",
          "Plan and execute a full-stack application",
          "Implement professional development practices",
          "Create a portfolio-worthy application"
        ],
        badgeName: "Vibe Coding Master",
        srcodeCommentary: "This is your Avengers: Endgame moment. Time to use everything you learned. Don't disappoint me! 🚀",
        practiceDescription: "Build a complete full-stack application incorporating all the technologies and concepts from previous lessons.",
        quizQuestions: {
          "q6-1-1": {
            question: "What should you do before starting to code your final project?",
            options: [
              "Start coding immediately",
              "Plan the project scope, database schema, and user flows",
              "Only think about the design",
              "Skip planning entirely"
            ],
            explanation: "Proper planning including scope, database design, and user flows is essential for project success."
          },
          "q6-1-2": {
            question: "What makes a full-stack application?",
            options: [
              "Only frontend code",
              "Frontend, backend, database, and deployment",
              "Only database",
              "Just a pretty design"
            ],
            explanation: "A full-stack application includes frontend, backend logic, database, and proper deployment."
          },
          "q6-1-3": {
            question: "Why is testing important in your final project?",
            options: [
              "It's not important",
              "To ensure functionality works correctly and catch bugs early",
              "To make the project take longer",
              "Only for large companies"
            ],
            explanation: "Testing ensures your application works correctly and helps catch bugs before users encounter them."
          },
          "q6-1-4": {
            question: "What should you consider for user experience?",
            options: [
              "Only how it looks",
              "Loading states, error handling, and intuitive navigation",
              "Just the colors",
              "UX doesn't matter"
            ],
            explanation: "Good UX includes loading states, proper error handling, intuitive navigation, and responsive design."
          }
        }
      },
      "lesson-6-2": {
        title: "Optimization and Performance",
        objective: "Optimize application for production",
        content: "# Optimization and Performance\n\nA slow app is like a poorly told joke - nobody has the patience to wait for the punchline.\n\n## Core Web Vitals:\n- **LCP**: Largest Contentful Paint (loading)\n- **FID**: First Input Delay (interactivity)\n- **CLS**: Cumulative Layout Shift (visual stability)\n\n## Performance Strategies:\n- Code splitting and lazy loading\n- Image optimization\n- Caching strategies\n- Bundle size optimization\n- Database query optimization\n\n## Monitoring Tools:\n- Lighthouse audits\n- Web Vitals extension\n- Performance analytics\n- Real user monitoring\n\n## Implementation:\n1. Audit current performance\n2. Identify bottlenecks\n3. Implement optimizations\n4. Measure improvements\n5. Monitor continuously\n\n## Best Practices:\n- Optimize images and assets\n- Minimize JavaScript bundles\n- Use CDN for static assets\n- Implement proper caching\n- Monitor performance metrics",
        learningObjectives: [
          "Understand Core Web Vitals and performance metrics",
          "Implement performance optimization techniques",
          "Use performance monitoring tools",
          "Achieve production-ready performance"
        ],
        badgeName: "Speed Demon",
        srcodeCommentary: "A slow app is like a poorly told joke: nobody has the patience to wait for the punchline",
        practiceDescription: "Optimize your application to achieve a Lighthouse score of 95+ across all metrics.",
        quizQuestions: {
          "q6-2-1": {
            question: "What does LCP measure?",
            options: [
              "Loading speed of the largest content element",
              "Total page load time",
              "JavaScript execution time",
              "Database query time"
            ],
            explanation: "LCP (Largest Contentful Paint) measures how quickly the largest content element becomes visible to users."
          },
          "q6-2-2": {
            question: "What is code splitting?",
            options: [
              "Breaking code into multiple files randomly",
              "Dividing code into smaller chunks that load when needed",
              "Deleting unused code",
              "Making code harder to read"
            ],
            explanation: "Code splitting divides your application into smaller chunks that are loaded on-demand, reducing initial bundle size."
          },
          "q6-2-3": {
            question: "Why should you optimize images?",
            options: [
              "To make them look worse",
              "To reduce file size and improve loading speed",
              "Images don't need optimization",
              "To increase page size"
            ],
            explanation: "Image optimization reduces file sizes, which improves loading speed and overall performance."
          },
          "q6-2-4": {
            question: "What should you monitor continuously?",
            options: [
              "Only during development",
              "Performance metrics in production",
              "Nothing needs monitoring",
              "Only error rates"
            ],
            explanation: "Continuous monitoring of performance metrics in production helps identify and address performance issues quickly."
          }
        }
      },
      "lesson-6-3": {
        title: "SrCode Certification",
        objective: "Final Vibe Coding exam",
        content: "# SrCode Certification\n\nWelcome to the final boss fight! Time to prove you actually learned something.\n\n## Certification Requirements:\n- Complete all 18 lessons\n- Pass final comprehensive exam (85%+)\n- Demonstrate practical skills\n- Show understanding of core concepts\n- Apply best practices\n\n## Exam Coverage:\n- bolt.new fundamentals\n- Prompt engineering\n- Database design and integration\n- Authentication and security\n- Deployment and optimization\n- Real-world problem solving\n\n## What You'll Receive:\n- Official SrCode Certification\n- Digital badge for LinkedIn\n- Portfolio project examples\n- Professional recommendations\n- Community access\n\n## Career Benefits:\n- Validated bolt.new expertise\n- Professional credibility\n- Job opportunities\n- Freelancing capabilities\n- Continued learning path\n\n## Final Words from SrCode:\nYou've come a long way! From not knowing what bolt.new was to building full-stack applications. Whether you pass this exam or not, you've already accomplished something amazing. Now go forth and build something incredible!",
        learningObjectives: [
          "Demonstrate mastery of all course concepts",
          "Apply knowledge to solve complex problems",
          "Show professional development skills",
          "Earn official certification"
        ],
        badgeName: "SrCode Approved",
        srcodeCommentary: "If you pass this exam, you officially know more than 90% of developers about bolt.new. If not... well, you can always try being an influencer 😏",
        practiceDescription: "Complete the comprehensive final exam covering all course topics and demonstrate your mastery through a capstone project.",
        quizQuestions: {
          "q6-3-1": {
            question: "What is the most important skill you've learned in this course?",
            options: [
              "Memorizing code syntax",
              "Understanding how to break down problems and build solutions systematically",
              "Using specific tools only",
              "Copying code from tutorials"
            ],
            explanation: "The most valuable skill is learning to break down complex problems and build systematic solutions using modern tools."
          },
          "q6-3-2": {
            question: "What makes a good bolt.new developer?",
            options: [
              "Knowing every feature by heart",
              "Writing clear prompts, understanding the full stack, and applying best practices",
              "Only focusing on frontend",
              "Avoiding databases"
            ],
            explanation: "A good bolt.new developer combines clear communication, full-stack understanding, and professional best practices."
          },
          "q6-3-3": {
            question: "How should you approach building a new application?",
            options: [
              "Start coding immediately",
              "Plan thoroughly, build incrementally, test continuously, and deploy confidently",
              "Only focus on design",
              "Build everything at once"
            ],
            explanation: "Professional development involves planning, incremental building, continuous testing, and confident deployment."
          },
          "q6-3-4": {
            question: "What's the secret to continued success as a developer?",
            options: [
              "Stop learning after this course",
              "Keep learning, building, and sharing knowledge with the community",
              "Only use bolt.new forever",
              "Avoid new technologies"
            ],
            explanation: "Continued success comes from lifelong learning, consistent building, and active participation in the developer community."
          }
        }
      }
    },
    quiz: {
      title: 'Quiz',
      question: 'Question {{current}} of {{total}}',
      backToLesson: 'Back to Lesson',
      congratulations: 'Congratulations!',
      keepTrying: 'Keep Trying!',
      passedMessage: 'You have successfully completed "{{lessonTitle}}" and earned the "{{badgeName}}" badge!',
      failedMessage: 'You need 85% or higher to pass. You scored {{score}}%. Review the lesson and try again!',
      badgeEarned: '🏆 Badge Earned: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continue Learning',
      reviewLesson: 'Review Lesson',
      retakeQuiz: 'Retake Quiz',
      bestScore: 'Best Score: {{score}}%',
      explanation: 'Explanation',
      loadError: 'Quiz questions could not be loaded.'
    },
    badges: {
      title: 'Badge Collection',
      earned: '{{earned}} of {{total}} badges earned',
      earnedOn: 'Earned {{date}}',
      unlockHint: 'Complete Level {{level}} lessons to unlock'
    },
    certificate: {
      title: 'Certificate',
      congratulations: 'Congratulations! 🎉',
      earned: 'You have completed all 18 lessons and earned your certificate!',
      download: 'Download Certificate',
      keepLearning: 'Keep Learning!',
      progress: 'Complete all 18 lessons to earn your certificate',
      remaining: '{{count}} lessons remaining',
      certificateOf: 'CERTIFICATE OF COMPLETION',
      academyName: 'Vibe Coding Academy',
      certifies: 'This certifies that',
      hasCompleted: 'has successfully completed all 18 lessons of the',
      courseName: 'bolt.new Mastery Course',
      totalXP: 'Total XP: {{xp}}',
      completionDate: 'Completion Date: {{date}}',
      certifiedBy: 'Certified by SrCode',
      seniorMentor: 'Senior AI Mentor',
      studentNamePlaceholder: '[Student Name]'
    },
    srcode: {
      title: 'SrCode',
      subtitle: 'AI Mentor',
      placeholder: 'Ask SrCode anything about this lesson...',
      thinking: 'SrCode is thinking...',
      welcomeMessage: 'Hey there! 👋 I am SrCode, your AI mentor for "{{lessonTitle}}". Ready to dive into some bolt.new magic? Ask me anything about this lesson!',
      errorMessage: 'Oops! I am having some technical difficulties. Try again in a moment! 🔧',
      offline: 'I\'m currently offline, but I\'ll be back soon! 💻'
    }
  },
  es: {
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      cancel: 'Cancelar',
      save: 'Guardar',
      delete: 'Eliminar',
      edit: 'Editar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      continue: 'Continuar',
      finish: 'Finalizar',
      retry: 'Reintentar',
      saving: 'Guardando...'
    },
    profile: {
      title: "Perfil de Usuario",
      firstNameLabel: "Nombre",
      lastNameLabel: "Apellido",
      saveButton: "Guardar Cambios",
      errorNoUser: "Usuario no encontrado. No se puede cargar el perfil.",
      errorFetching: "Error al cargar el perfil: ",
      errorNoUserSaving: "Usuario no encontrado. No se puede guardar el perfil.",
      saveSuccess: "¡Perfil guardado exitosamente!",
      errorSaving: "Error al guardar el perfil: ",
      errorLogout: "Falló el cierre de sesión: "
    },
    navigation: {
      home: 'Inicio',
      dashboard: 'Panel',
      lessons: 'Mis Lecciones',
      badges: 'Insignias',
      certificate: 'Certificado',
      profile: 'Perfil',
      settings: 'Configuración',
      logout: 'Cerrar Sesión'
    },
    auth: {
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      logout: 'Cerrar Sesión',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      firstName: 'Nombre',
      lastName: 'Apellido',
      welcomeBack: '¡Bienvenido de vuelta!',
      joinVibeCoding: 'Únete a Vibe Coding',
      continueJourney: 'Continúa tu viaje de aprendizaje con SrCode',
      startAdventure: 'Comienza tu aventura de programación con IA',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes una cuenta?',
      haveAccount: '¿Ya tienes una cuenta?',
      signInInstead: 'Iniciar Sesión',
      signUpInstead: 'Registrarse',
      passwordMinLength: 'La contraseña debe tener al menos 8 caracteres',
      passwordsNoMatch: 'Las contraseñas no coinciden',
      emailRequired: 'El correo es requerido',
      invalidEmail: 'Por favor ingresa un correo válido',
      checkEmail: '¡Éxito! Revisa tu correo para confirmar tu cuenta.',
      backToHome: 'Volver al Inicio'
    },
    landing: {
      hero: {
        title: 'Domina bolt.new con Mentoría IA',
        subtitle: 'Aprende a construir aplicaciones full-stack con SrCode, tu mentor personal de IA. Desde ingeniería de prompts hasta despliegue: domina el futuro del desarrollo web.',
        startJourney: 'Comienza tu Viaje',
        watchDemo: 'Ver Demo',
        aiPowered: 'Plataforma de Aprendizaje con IA'
      },
      features: {
        title: '¿Por qué elegir Vibe Coding?',
        subtitle: 'Experimenta el futuro de la educación en programación con nuestra plataforma impulsada por IA',
        aiLearning: {
          title: 'Aprendizaje con IA',
          description: 'Aprende con SrCode, tu mentor personal de IA que se adapta a tu ritmo'
        },
        realProjects: {
          title: 'Construye Proyectos Reales',
          description: 'Domina bolt.new construyendo aplicaciones reales, no solo teoría'
        },
        certificates: {
          title: 'Obtén Certificados',
          description: 'Consigue certificados reconocidos por la industria para impulsar tu carrera'
        }
      },
      stats: {
        students: 'Estudiantes Entrenados',
        lessons: 'Lecciones Completas',
        successRate: 'Tasa de Éxito',
        support: 'Soporte IA'
      },
      testimonials: {
        title: 'Historias de Éxito',
        subtitle: 'Únete a miles de desarrolladores que transformaron sus carreras',
        alex: {
          name: 'Alex Chen',
          role: 'Desarrollador Full-Stack',
          content: 'SrCode me enseñó bolt.new más rápido que cualquier bootcamp. Ahora construyo apps de producción en días, no meses.'
        },
        maria: {
          name: 'María Rodriguez',
          role: 'Fundadora de Startup',
          content: 'El mentor IA interactivo es increíble. Es como tener un desarrollador senior guiándote 24/7.'
        },
        david: {
          name: 'David Kim',
          role: 'Product Manager',
          content: 'De cero a desplegar apps full-stack. La gamificación me mantuvo comprometido durante todo el viaje.'
        }
      },
      cta: {
        title: '¿Listo para Construir el Futuro?',
        subtitle: 'Únete a la próxima generación de desarrolladores dominando el desarrollo web con IA',
        startFree: 'Comienza Gratis Hoy',
        noCreditCard: 'No se requiere tarjeta de crédito'
      },
      footer: {
        tagline: 'Construyendo el futuro, un desarrollador a la vez.'
      }
    },
    dashboard: {
      title: 'Panel de Control',
      welcomeBack: '¡Bienvenido de vuelta, {{name}}!',
      myLessons: 'Mis Lecciones',
      badges: 'Insignias',
      certificate: 'Certificado',
      stats: {
        completedLessons: 'Lecciones Completadas',
        totalXP: 'XP Total',
        badgesEarned: 'Insignias Ganadas',
        progress: 'Progreso'
      },
      tabs: {
        lessons: 'Mis Lecciones',
        badges: 'Insignias',
        certificate: 'Certificado'
      }
    },
    lessons: {
      title: 'Lecciones',
      level: 'Nivel {{level}}',
      lesson: 'Lección {{level}}.{{order}}',
      objective: 'Objetivo',
      learningObjectives: 'Objetivos de Aprendizaje',
      practiceExercise: 'Ejercicio Práctico',
      takeQuiz: 'Tomar Quiz',
      retakeQuiz: 'Repetir Quiz',
      requiredScore: '{{score}}% requerido para aprobar',
      readingTime: 'Tiempo de Lectura: ~{{minutes}} min',
      lessonNotFound: 'Lección No Encontrada',
      lessonNotAvailable: 'Esta lección no existe o no está disponible.',
      backToDashboard: 'Volver al Panel',
      srCodeSays: 'SrCode dice:',
      levels: {
        foundations: 'Fundamentos',
        databases: 'Bases de Datos',
        authentication: 'Autenticación',
        deployment: 'Despliegue',
        integrations: 'Integraciones',
        mastery: 'Maestría'
      },
      descriptions: {
        foundations: 'Aprende los fundamentos de bolt.new e ingeniería de prompts',
        databases: 'Domina la integración de Supabase y diseño de bases de datos',
        authentication: 'Implementa sistemas seguros de autenticación de usuarios',
        deployment: 'Despliega tus aplicaciones al mundo',
        integrations: 'Conecta con servicios externos y APIs',
        mastery: 'Conviértete en un experto de bolt.new con proyectos avanzados'
      },
      status: {
        locked: 'Completa la lección anterior para desbloquear',
        available: 'Disponible para comenzar',
        inProgress: 'En progreso',
        completed: 'Completado',
        score: 'Puntuación: {{score}}%'
      },
      continueNext: '🎉 ¡Felicidades! Completaste "{{currentLessonTitle}}". ¿Quieres continuar con "{{nextLessonTitle}}"?',
      nextLessonDefaultTitle: "la siguiente lección",
      "lesson-1-1": {
        title: "¿Qué Demonios es bolt.new?",
        objective: "Entender bolt.new como un agente de desarrollo web IA",
        content: "# ¿Qué Demonios es bolt.new?\n\n¡Bienvenido a tu primera lección en la Vibe Coding Academy! Soy SrCode, y seré tu mentor a lo largo de este viaje.\n\n## ¿Qué es bolt.new?\n\nbolt.new es un revolucionario agente de desarrollo web impulsado por IA que te permite construir aplicaciones full-stack usando prompts de lenguaje natural. Piensa en ello como tener un desarrollador senior que:\n\n- Nunca se cansa ni se frustra\n- No necesita pausas para el café\n- Nunca discute sobre estándares de codificación\n- Puede construir aplicaciones enteras desde cero\n- Se integra sin problemas con herramientas modernas\n\n## Características Clave:\n\n### 🚀 **Desarrollo Impulsado por IA**\nbolt.new utiliza IA avanzada para entender tus requisitos y generar código completo y funcional. Tú describes lo que quieres, y él lo construye.\n\n### 🌐 **Capacidades Full-Stack**\n- Desarrollo Frontend (React, Vue, Svelte)\n- Integración Backend (APIs, bases de datos)\n- Estilizado (CSS, Tailwind, styled-components)\n- Gestión de estado\n- Sistemas de autenticación\n\n### ⚡ **Despliegue Instantáneo**\nIntegración incorporada con:\n- Netlify para hosting\n- Supabase para bases de datos\n- GitHub para control de versiones\n- Dominios personalizados\n\nRecuerda: La calidad de tu resultado depende de la calidad de tu entrada. Aprender a escribir prompts efectivos es crucial.",
        learningObjectives: [
          "Definir qué es bolt.new y su propósito central",
          "Identificar las principales ventajas sobre el desarrollo tradicional",
          "Reconocer casos de uso ideales para proyectos con bolt.new",
          "Entender el flujo de trabajo básico para construir con bolt.new"
        ],
        badgeName: "Primer Contacto",
        srcodeCommentary: "bolt.new es como tener un desarrollador senior que nunca se cansa, nunca pide café y nunca discute sobre tabs vs espacios. Increíble, ¿verdad?",
        practiceDescription: "Explora la interfaz de bolt.new e intenta crear un proyecto simple 'Hola Mundo' para familiarizarte con la plataforma.",
        quizQuestions: {
          "q1-1-1": {
            question: "¿Qué es bolt.new?",
            options: [
              "Un editor de código tradicional",
              "Un agente de desarrollo web impulsado por IA",
              "Una herramienta de gestión de bases de datos",
              "Un software de diseño"
            ],
            explanation: "bolt.new es un agente de desarrollo web impulsado por IA que te permite construir aplicaciones full-stack usando prompts de lenguaje natural."
          },
          "q1-1-2": {
            question: "¿Cuál es la principal ventaja de usar bolt.new?",
            options: [
              "Es completamente gratis",
              "Solo funciona con JavaScript",
              "Puede construir aplicaciones a partir de descripciones en lenguaje natural",
              "Reemplaza todas las demás herramientas de desarrollo"
            ],
            explanation: "La principal ventaja es que bolt.new puede entender descripciones en lenguaje natural y generar aplicaciones completas y funcionales."
          },
          "q1-1-3": {
            question: "¿Cuál de estas NO es una característica de bolt.new?",
            options: [
              "Desarrollo impulsado por IA",
              "Despliegue instantáneo",
              "Configuración de hardware físico",
              "Capacidades full-stack"
            ],
            explanation: "bolt.new es completamente basado en web y no requiere ninguna configuración de hardware físico."
          },
          "q1-1-4": {
            question: "¿Para qué tipo de proyectos es ideal bolt.new?",
            options: [
              "Solo aplicaciones móviles",
              "Aplicaciones web, SaaS, landing pages y e-commerce",
              "Solo sitios web estáticos",
              "Solo aplicaciones de escritorio"
            ],
            explanation: "bolt.new es ideal para varios proyectos basados en web, incluyendo aplicaciones SaaS, landing pages, sitios de e-commerce y más."
          }
        }
      },
      "lesson-1-2": {
        title: "El Arte del Prompt Perfecto",
        objective: "Escribir prompts efectivos para bolt.new",
        content: "# El Arte del Prompt Perfecto\n\nAhora que sabes qué es bolt.new, aprendamos a comunicarnos con él eficazmente. Escribir buenos prompts es como ser un gran arquitecto: necesitas ser específico, claro y detallado.\n\n## ¿Qué Hace un Prompt Perfecto?\n\n### 🎯 **La Especificidad es Clave**\nNo digas: \"Hazme un sitio web genial\"\nDi: \"Crea una landing page para una app de fitness con una sección de héroe, tabla de precios, testimonios y formulario de contacto usando un tema oscuro\"\n\n### 📋 **Estructura Tus Solicitudes**\nUn buen prompt tiene estos elementos:\n1. **Tipo de Proyecto**: Qué estás construyendo\n2. **Características**: Funcionalidad específica necesaria\n3. **Diseño**: Preferencias visuales y estilo\n4. **Requisitos Técnicos**: Integraciones, frameworks, etc.\n\n## El Método CLEAR:\n- **C**ontexto: Qué tipo de proyecto\n- **L**ista: Características específicas necesarias\n- **E**jemplo: Referencia a proyectos similares\n- **A**specto: Preferencias de diseño\n- **R**equisitos: Especificaciones técnicas\n\n## Errores Comunes a Evitar:\n1. **Demasiado Vago**: \"Haz que se vea bien\"\n2. **Demasiado Complejo**: Pedir todo a la vez\n3. **Sin Contexto**: No explicar el propósito\n4. **Falta de Requisitos**: Olvidar la responsividad móvil\n5. **Prioridades Poco Claras**: No especificar qué es lo más importante",
        learningObjectives: [
          "Escribir prompts claros y específicos para bolt.new",
          "Entender el método CLEAR para la estructura de prompts",
          "Evitar errores comunes al crear prompts",
          "Usar el prompting iterativo para refinar"
        ],
        badgeName: "Susurrador de IA",
        srcodeCommentary: "Un buen prompt es como una receta de cocina: específico, claro y sin ingredientes raros. Nada de esa tontería de 'hazme una app genial', por favor 🙄",
        practiceDescription: "Crea un prompt detallado para una landing page de tu elección, luego pruébalo en bolt.new para ver los resultados.",
        quizQuestions: {
          "q1-2-1": {
            question: "¿Qué significa la 'C' en el método CLEAR?",
            options: ["Color", "Contexto", "Código", "Componentes"],
            explanation: "En el método CLEAR, 'C' significa Contexto: explicar qué tipo de proyecto estás construyendo."
          },
          "q1-2-2": {
            question: "¿Cuál es un ejemplo de un prompt bien estructurado?",
            options: [
              "Hazme una app genial",
              "Construye algo con React",
              "Crea un sitio de e-commerce con catálogo de productos, carrito de compras e integración con Stripe usando un diseño moderno",
              "Necesito un sitio web"
            ],
            explanation: "Un prompt bien estructurado es específico, incluye características y menciona requisitos técnicos y preferencias de diseño."
          },
          "q1-2-3": {
            question: "¿Qué deberías hacer si tu primer prompt no da resultados perfectos?",
            options: [
              "Rendirte y empezar de nuevo",
              "Usar prompting iterativo para refinar",
              "Usar siempre el mismo prompt",
              "Nunca hacer cambios"
            ],
            explanation: "El prompting iterativo te permite refinar y mejorar tu aplicación con solicitudes de seguimiento."
          },
          "q1-2-4": {
            question: "¿Qué elemento NO es esencial en un buen prompt?",
            options: [
              "Características específicas necesarias",
              "Requisitos técnicos",
              "Tu historia personal",
              "Preferencias de diseño"
            ],
            explanation: "La información personal no es relevante para construir aplicaciones; concéntrate en los requisitos del proyecto."
          }
        }
      },
      "lesson-1-3": {
        title: "WebContainers: La Magia Detrás del Telón",
        objective: "Entender el entorno de desarrollo StackBlitz",
        content: "# WebContainers: La Magia Detrás del Telón\n\n¿Alguna vez te has preguntado cómo bolt.new ejecuta un entorno de desarrollo completo en tu navegador? La respuesta es WebContainers, una tecnología revolucionaria que lleva Node.js al navegador.\n\n## ¿Qué Son los WebContainers?\n\nLos WebContainers son un tiempo de ejecución basado en navegador para ejecutar aplicaciones Node.js y comandos del sistema operativo. Piensa en ellos como:\n- Un entorno Node.js completo en tu navegador\n- Sin necesidad de descargas ni instalaciones\n- Acceso completo a la terminal y gestión de paquetes\n- Capacidades de colaboración en tiempo real\n\n## Cómo Funcionan los WebContainers:\n\n### 🌐 **Nativo del Navegador**\n- Se ejecuta completamente en tu navegador usando WebAssembly\n- No se necesita ejecución del lado del servidor\n- Tu código permanece privado y seguro\n- Funciona sin conexión una vez cargado\n\n### ⚡ **Beneficios de Rendimiento**\n- Tiempos de inicio instantáneos\n- Reemplazo de módulos en caliente (Hot Module Replacement)\n- Actualizaciones de vista previa en tiempo real\n- Uso eficiente de recursos\n\n### 🔒 **Características de Seguridad**\n- Entorno de ejecución aislado (sandboxed)\n- Sin acceso a tu sistema de archivos local\n- Seguro por diseño\n- Aislamiento de red\n\n## Ventajas Clave:\n- **Configuración Instantánea**: Sin configuración de entorno\n- **Acceso Universal**: Funciona en cualquier dispositivo con navegador\n- **Eficiencia de Recursos**: Sin uso de almacenamiento local\n- **Listo para Colaborar**: Comparte proyectos con una URL",
        learningObjectives: [
          "Entender qué son los WebContainers y cómo funcionan",
          "Navegar eficazmente por el IDE de StackBlitz",
          "Usar la terminal integrada para tareas de desarrollo",
          "Reconocer las ventajas y limitaciones del desarrollo basado en navegador"
        ],
        badgeName: "Detective Tecnológico",
        srcodeCommentary: "Los WebContainers son como Docker pero para tu navegador. Sí, es tan genial como suena. No, no necesitas entender Docker para esto 😉",
        practiceDescription: "Explora la interfaz del IDE de StackBlitz, abre la terminal e intenta ejecutar algunos comandos básicos como 'npm --version' y 'ls'.",
        quizQuestions: {
          "q1-3-1": {
            question: "¿Qué son los WebContainers?",
            options: [
              "Contenedores Docker para aplicaciones web",
              "Un tiempo de ejecución basado en navegador para aplicaciones Node.js",
              "Un tipo de servidor web",
              "Una tecnología de base de datos"
            ],
            explanation: "Los WebContainers son un tiempo de ejecución basado en navegador que permite que las aplicaciones Node.js se ejecuten completamente en el navegador usando WebAssembly."
          },
          "q1-3-2": {
            question: "¿Cuál es una ventaja clave de los WebContainers?",
            options: [
              "Requieren instalación local",
              "Solo funcionan en sistemas operativos específicos",
              "Proporcionan configuración instantánea sin necesidad de descargas",
              "Son más lentos que el desarrollo tradicional"
            ],
            explanation: "Los WebContainers proporcionan configuración instantánea sin necesidad de descargas ni instalaciones, haciendo el desarrollo accesible inmediatamente."
          },
          "q1-3-3": {
            question: "¿Cómo instalas paquetes en un WebContainer?",
            options: [
              "Descargándolos manualmente",
              "Usando npm o yarn en la terminal integrada",
              "Subiendo archivos directamente",
              "Los WebContainers no soportan paquetes"
            ],
            explanation: "Puedes instalar paquetes usando comandos npm o yarn en la terminal integrada, igual que en el desarrollo tradicional."
          },
          "q1-3-4": {
            question: "¿Qué impulsa la ejecución de Node.js en los WebContainers?",
            options: [
              "Procesamiento del lado del servidor",
              "Sistema de archivos local",
              "WebAssembly",
              "Plugins del navegador"
            ],
            explanation: "Los WebContainers usan WebAssembly para ejecutar aplicaciones Node.js completamente en el navegador sin procesamiento del lado del servidor."
          }
        }
      },
      "lesson-2-1": {
        title: "Conectando Supabase Como un Profesional",
        objective: "Configurar Supabase en bolt.new paso a paso",
        content: "# Conectando Supabase Como un Profesional\n\n¡Bienvenido al Nivel 2! Ahora nos adentramos en el meollo del desarrollo web moderno. Supabase será tu nuevo mejor amigo; piénsalo como Firebase, pero realmente amigable para el desarrollador.\n\n## ¿Qué es Supabase?\n\nSupabase es un Backend-como-Servicio (BaaS) de código abierto que provee:\n- **Base de Datos PostgreSQL**: SQL real, no alguna tontería NoSQL\n- **Autenticación**: Gestión de usuarios incorporada\n- **Suscripciones en Tiempo Real**: Actualizaciones de datos en vivo\n- **Edge Functions**: Funciones serverless en el borde\n- **Almacenamiento**: Manejo de archivos e imágenes\n- **APIs Auto-generadas**: RESTful y GraphQL\n\n## Proceso de Conexión Paso a Paso:\n\n### **Paso 1: Crea Tu Proyecto Supabase**\n1. Ve a supabase.com\n2. Regístrate o inicia sesión\n3. Haz clic en \"Nuevo Proyecto\"\n4. Elige tu organización\n5. Completa los detalles del proyecto\n6. Haz clic en \"Crear nuevo proyecto\"\n\n### **Paso 2: Obtén Tus Credenciales de Proyecto**\n1. Ve a Configuración → API\n2. Copia la URL del Proyecto y la Clave Anónima (Anon Key)\n\n### **Paso 3: Conecta en bolt.new**\n1. En tu proyecto, ve a integraciones\n2. Selecciona \"Supabase\"\n3. Ingresa tus credenciales\n4. Prueba la conexión\n\n## Mejores Prácticas:\n- Nunca expongas claves de rol de servicio (service role keys) en el código frontend\n- Usa políticas de Seguridad a Nivel de Fila (RLS)\n- Valida los datos tanto en el lado del cliente como del servidor\n- Usa variables de entorno para las credenciales",
        learningObjectives: [
          "Crear y configurar un proyecto de Supabase",
          "Conectar Supabase a bolt.new exitosamente",
          "Entender las variables de entorno y la seguridad",
          "Solucionar problemas comunes de conexión"
        ],
        badgeName: "Conector Supremo",
        srcodeCommentary: "Configuración > Aplicaciones > Conectar. Más fácil que armar muebles de IKEA... y con menos lágrimas",
        practiceDescription: "Crea tu propio proyecto de Supabase y conéctalo exitosamente a un nuevo proyecto de bolt.new.",
        quizQuestions: {
          "q2-1-1": {
            question: "¿Cuál es el primer paso para conectar Supabase a bolt.new?",
            options: [
              "Escribir consultas de base de datos",
              "Crear un proyecto de Supabase y obtener las credenciales",
              "Instalar la CLI de Supabase",
              "Configurar la autenticación"
            ],
            explanation: "Primero debes crear un proyecto de Supabase y obtener la URL de tu proyecto y las claves API antes de conectar."
          },
          "q2-1-2": {
            question: "¿Qué clave de Supabase deberías usar en el código frontend?",
            options: ["Clave de Rol de Servicio", "Clave Secreta", "Clave Anónima (Anon Key)", "Clave Maestra"],
            explanation: "La Clave Anónima (Anon Key) es segura para usar en el código frontend ya que respeta las políticas de Seguridad a Nivel de Fila."
          },
          "q2-1-3": {
            question: "¿Dónde deberías almacenar tus credenciales de Supabase por seguridad?",
            options: [
              "Directamente en el código",
              "En comentarios",
              "En variables de entorno",
              "En un archivo público"
            ],
            explanation: "Las variables de entorno mantienen tus credenciales seguras y separadas de tu base de código."
          },
          "q2-1-4": {
            question: "¿Qué significa RLS en Supabase?",
            options: [
              "Transmisión en Vivo Real",
              "Seguridad a Nivel de Fila (Row Level Security)",
              "Sistema de Carga Rápida",
              "Servicio de Inicio de Sesión Remoto"
            ],
            explanation: "La Seguridad a Nivel de Fila (RLS) asegura que los usuarios solo puedan acceder a los datos que están autorizados a ver."
          }
        }
      },
      "lesson-2-2": {
        title: "Esquemas de Base de Datos: Tu Nuevo Mejor Amigo",
        objective: "Diseñar esquemas de base de datos efectivos",
        content: "# Esquemas de Base de Datos: Tu Nuevo Mejor Amigo\n\nHablemos de la base de cualquier gran aplicación: el esquema de la base de datos. Piénsalo como el plano de tu mansión de datos.\n\n## ¿Qué es un Esquema de Base de Datos?\n\nUn esquema de base de datos es la estructura que define:\n- **Tablas**: Donde viven tus datos\n- **Columnas**: Qué datos almacenas\n- **Relaciones**: Cómo se conectan los datos\n- **Restricciones**: Reglas que tus datos deben seguir\n- **Índices**: Cómo encontrar datos rápidamente\n\n## Principios Fundamentales de Diseño de Esquemas:\n\n### 🎯 **Normalización (Pero No Demasiada)**\n- Elimina datos duplicados\n- Crea relaciones lógicas\n- No normalices en exceso (a veces la duplicación está bien)\n\n### 🔗 **Las Relaciones Importan**\n- **Uno a Uno**: Usuario → Perfil\n- **Uno a Muchos**: Usuario → Publicaciones\n- **Muchos a Muchos**: Usuarios ↔ Roles\n\n### 📝 **Los Tipos de Datos Son Importantes**\n- Usa el tipo correcto para el trabajo\n- Considera el almacenamiento y el rendimiento\n- Planifica el crecimiento futuro\n\n## Conceptos Clave de Esquemas:\n\n### **Claves Primarias**\n- Identificador único para cada fila\n- Usa UUID para una mejor distribución\n- Nunca cambies ni reutilices\n\n### **Claves Foráneas**\n- Unen tablas\n- Refuerzan la integridad referencial\n- Definen el comportamiento en cascada\n\n### **Restricciones**\n- CHECK: Valida los valores de los datos\n- UNIQUE: Previene duplicados\n- NOT NULL: Requiere valores",
        learningObjectives: [
          "Diseñar esquemas de base de datos eficientes",
          "Entender las relaciones y restricciones de las tablas",
          "Implementar Seguridad a Nivel de Fila en Supabase",
          "Aplicar mejores prácticas de diseño de esquemas"
        ],
        badgeName: "Arquitecto de Datos",
        srcodeCommentary: "Un buen esquema es como una casa bien cimentada. Sin él, todo se derrumba más rápido que mis dietas de enero.",
        practiceDescription: "Diseña un esquema para una aplicación de blog con usuarios, publicaciones, comentarios y categorías.",
        quizQuestions: {
          "q2-2-1": {
            question: "¿Qué es un esquema de base de datos?",
            options: [
              "Un tipo de base de datos",
              "La estructura que define tablas, columnas y relaciones",
              "Un lenguaje de consulta",
              "Un sistema de respaldo"
            ],
            explanation: "Un esquema de base de datos es la estructura que define cómo se organizan los datos, incluyendo tablas, columnas, relaciones y restricciones."
          },
          "q2-2-2": {
            question: "¿Qué tipo de relación conecta Usuarios con Publicaciones donde cada usuario puede tener muchas publicaciones?",
            options: ["Uno a Uno", "Uno a Muchos", "Muchos a Muchos", "Muchos a Uno"],
            explanation: "La relación Uno a Muchos permite que un usuario tenga múltiples publicaciones, pero cada publicación pertenece a un solo usuario."
          },
          "q2-2-3": {
            question: "¿Qué significa RLS en Supabase?",
            options: [
              "Transmisión en Vivo en Tiempo Real",
              "Seguridad a Nivel de Fila (Row Level Security)",
              "Sistema Lógico Relacional",
              "Servicio de Inicio de Sesión Remoto"
            ],
            explanation: "La Seguridad a Nivel de Fila (RLS) controla qué usuarios pueden acceder a qué filas en una tabla basándose en políticas."
          },
          "q2-2-4": {
            question: "¿Por qué deberías usar UUID para las claves primarias?",
            options: [
              "Son más pequeños que los enteros",
              "Proporcionan una mejor distribución y evitan conflictos",
              "Son más fáciles de recordar",
              "Son requeridos por Supabase"
            ],
            explanation: "Los UUID proporcionan una mejor distribución entre sistemas y evitan conflictos al fusionar datos de diferentes fuentes."
          }
        }
      },
      "lesson-2-3": {
        title: "Edge Functions: Poder Ilimitado",
        objective: "Crear y gestionar Edge Functions",
        content: "# Edge Functions: Poder Ilimitado\n\n¡Bienvenido al lado poderoso de Supabase! Las Edge Functions son como tener superpoderes para tu backend.\n\n## ¿Qué Son las Edge Functions?\n\nLas Edge Functions son funciones serverless que se ejecutan en la red global de borde de Supabase. Piénsalas como:\n- **Mini servidores** que ejecutan tu lógica personalizada\n- **Endpoints de API** que puedes personalizar completamente\n- **Manejadores de eventos** que responden a cambios en la base de datos\n- **Procesadores de datos** que transforman información\n\n## Por Qué las Edge Functions Son Geniales:\n\n### ⚡ **Rendimiento**\n- Se ejecutan cerca de tus usuarios en todo el mundo\n- Tiempos de respuesta inferiores a 100 ms\n- Escalado automático según la demanda\n\n### 🔒 **Seguridad**\n- Ejecución del lado del servidor (los secretos permanecen secretos)\n- Contexto de autenticación incorporado\n- Integración con Seguridad a Nivel de Fila\n\n### 🛠️ **Flexibilidad**\n- Usa cualquier código JavaScript/TypeScript\n- Acceso al ecosistema completo de Node.js\n- Implementación de lógica de negocio personalizada\n\n## Casos de Uso Comunes:\n\n### **1. Integraciones de API**\n- Procesamiento de pagos con Stripe\n- Envío de correos electrónicos con SendGrid\n- Integraciones con redes sociales\n- Llamadas a API de terceros\n\n### **2. Procesamiento de Datos**\n- Redimensionamiento y optimización de imágenes\n- Validación y sanitización de datos\n- Cálculos complejos\n- Generación de informes\n\n### **3. Webhooks**\n- Confirmaciones de pago\n- Notificaciones a usuarios\n- Sincronización de datos\n- Actualizaciones en tiempo real\n\n### **4. Lógica de Autenticación**\n- Autenticación multifactor\n- Validación de usuarios personalizada\n- Permisos basados en roles\n- OAuth de terceros",
        learningObjectives: [
          "Entender qué son las Edge Functions y sus beneficios",
          "Crear y desplegar Edge Functions en Supabase",
          "Implementar casos de uso comunes como integraciones de API",
          "Aplicar mejores prácticas de seguridad para funciones serverless"
        ],
        badgeName: "Señor del Borde",
        srcodeCommentary: "Las Edge Functions son como tener superpoderes. Úsalos sabiamente, joven Padawan 🌟",
        practiceDescription: "Crea una Edge Function que valide direcciones de correo electrónico y verifique si provienen de servicios de correo desechable.",
        quizQuestions: {
          "q2-3-1": {
            question: "¿Qué son las Edge Functions?",
            options: [
              "Consultas de base de datos que se ejecutan más rápido",
              "Funciones serverless que se ejecutan en la red global de borde de Supabase",
              "Componentes frontend",
              "Funciones de estilo CSS"
            ],
            explanation: "Las Edge Functions son funciones serverless que se ejecutan en la red global de borde de Supabase, proporcionando lógica de backend rápida y escalable."
          },
          "q2-3-2": {
            question: "¿Cuándo deberías usar Edge Functions en lugar de rutas API?",
            options: [
              "Siempre usar Edge Functions",
              "Cuando necesitas lógica del lado del servidor, llamadas a API externas o autenticación personalizada",
              "Solo para operaciones de base de datos",
              "Nunca usar Edge Functions"
            ],
            explanation: "Las Edge Functions son ideales para lógica del lado del servidor, integraciones de API externas, procesamiento de pagos y cualquier lógica que requiera secretos."
          },
          "q2-3-3": {
            question: "¿Cómo manejas los errores en las Edge Functions?",
            options: [
              "Ignorándolos",
              "Usando bloques try-catch y devolviendo respuestas de error apropiadas",
              "Dejando que la función falle",
              "Solo registrándolos en la consola"
            ],
            explanation: "El manejo adecuado de errores con bloques try-catch y respuestas de error significativas asegura funciones robustas."
          },
          "q2-3-4": {
            question: "¿Dónde deberías almacenar las claves API en las Edge Functions?",
            options: [
              "Directamente en el código",
              "En comentarios",
              "En variables de entorno",
              "En el nombre de la función"
            ],
            explanation: "Las variables de entorno mantienen tus claves API y secretos seguros y separados de tu código."
          }
        }
      },
      "lesson-3-1": {
        title: "Fundamentos de Autenticación: ¿Quién Eres?",
        objective: "Implementar inicio de sesión/registro básicos",
        content: "# Fundamentos de Autenticación: ¿Quién Eres?\n\nLa autenticación consiste en verificar quién dice ser alguien. Es como revisar la identificación en la puerta.\n\n## Autenticación vs Autorización\n- **Autenticación**: ¿Quién eres? (Inicio de sesión)\n- **Autorización**: ¿Qué puedes hacer? (Permisos)\n\n## Características de Supabase Auth:\n- Autenticación con correo/contraseña\n- Inicio de sesión social (Google, GitHub, etc.)\n- Enlaces mágicos (sin contraseña)\n- Tokens JWT para sesiones\n- Integración con Seguridad a Nivel de Fila\n\n## Implementación Básica:\n1. Configura Supabase Auth\n2. Crea funciones de registro/inicio de sesión\n3. Maneja los cambios de estado de autenticación\n4. Implementa un manejo de errores adecuado\n\n## Mejores Prácticas:\n- Valida el formato del correo electrónico\n- Exige contraseñas seguras\n- Usa HTTPS en todas partes\n- Maneja los casos extremos adecuadamente",
        learningObjectives: [
          "Entender los conceptos y la terminología de la autenticación",
          "Implementar el registro e inicio de sesión de usuarios con Supabase",
          "Crear formularios de autenticación con validación adecuada",
          "Gestionar el estado de autenticación en aplicaciones React"
        ],
        badgeName: "Guardián Digital",
        srcodeCommentary: "Supabase Auth es tan fácil que hasta yo podría hacerlo... y soy una IA sin dedos 🤖",
        practiceDescription: "Construye un sistema de autenticación completo con funcionalidades de registro, inicio de sesión y cierre de sesión.",
        quizQuestions: {
          "q3-1-1": {
            question: "¿Cuál es la diferencia entre autenticación y autorización?",
            options: [
              "Son lo mismo",
              "La autenticación verifica la identidad, la autorización determina los permisos",
              "La autorización verifica la identidad, la autenticación determina los permisos",
              "No hay diferencia"
            ],
            explanation: "La autenticación responde '¿quién eres?' mientras que la autorización responde '¿qué puedes hacer?'"
          },
          "q3-1-2": {
            question: "¿Cómo maneja Supabase la seguridad de las contraseñas?",
            options: [
              "Las contraseñas se almacenan en texto plano",
              "Las contraseñas se hashean y aseguran automáticamente",
              "Los usuarios deben hashear sus propias contraseñas",
              "Las contraseñas se cifran con un algoritmo simple"
            ],
            explanation: "Supabase maneja automáticamente el hasheo de contraseñas utilizando algoritmos estándar de la industria."
          },
          "q3-1-3": {
            question: "¿Qué deberías validar cuando un usuario se registra?",
            options: [
              "Solo el formato del correo electrónico",
              "Solo la fortaleza de la contraseña",
              "El formato del correo, la fortaleza de la contraseña y que las contraseñas coincidan",
              "Nada - confía en el usuario"
            ],
            explanation: "Una validación adecuada incluye el formato del correo electrónico, los requisitos de fortaleza de la contraseña y la confirmación de la contraseña."
          },
          "q3-1-4": {
            question: "¿Cómo escuchas los cambios de estado de autenticación en Supabase?",
            options: [
              "Verificando manualmente cada segundo",
              "Usando supabase.auth.onAuthStateChange()",
              "Refrescando la página",
              "El estado de autenticación nunca cambia"
            ],
            explanation: "supabase.auth.onAuthStateChange() proporciona actualizaciones en tiempo real cuando cambia el estado de autenticación."
          }
        }
      },
      "lesson-3-2": {
        title: "Protegiendo Rutas Como Fort Knox",
        objective: "Middleware y protección de rutas",
        content: "# Protegiendo Rutas Como Fort Knox\n\nLa protección de rutas asegura que solo los usuarios autorizados accedan al contenido protegido.\n\n## Tipos de Rutas Protegidas:\n- **Requiere Autenticación**: Panel de control, perfil\n- **Acceso Basado en Roles**: Paneles de administrador, herramientas de moderador\n- **Acceso Condicional**: Funciones de suscripción\n\n## Patrones de Implementación:\n1. Componente de Ruta Protegida\n2. Guardias de ruta basados en roles\n3. Protección basada en suscripción\n4. Seguridad a Nivel de Fila (RLS)\n\n## Mejores Prácticas:\n- Valida tanto en el cliente como en el servidor\n- Muestra estados de carga durante las verificaciones de autenticación\n- Proporciona mensajes de error claros\n- Usa RLS para protección a nivel de base de datos\n\n## Pruebas:\n- Prueba con diferentes tipos de usuarios\n- Prueba sesiones expiradas\n- Prueba casos extremos",
        learningObjectives: [
          "Implementar protección de rutas basada en autenticación",
          "Crear sistemas de control de acceso basados en roles",
          "Usar eficazmente los guardias de React Router",
          "Aplicar Seguridad a Nivel de Fila para la protección de datos"
        ],
        badgeName: "Vigilante Nocturno",
        srcodeCommentary: "Una ruta desprotegida es como dejar la puerta abierta con un cartel de 'entrada libre'. Spoiler: nadie respeta esos carteles.",
        practiceDescription: "Crea un sistema de protección de rutas multinivel con diferentes niveles de acceso.",
        quizQuestions: {
          "q3-2-1": {
            question: "¿Cuál es el propósito de la protección de rutas?",
            options: [
              "Hacer la aplicación más rápida",
              "Asegurar que solo los usuarios autorizados puedan acceder a ciertas páginas",
              "Mejorar el SEO",
              "Reducir el tamaño del paquete"
            ],
            explanation: "La protección de rutas asegura que solo los usuarios autenticados y autorizados puedan acceder a las páginas protegidas."
          },
          "q3-2-2": {
            question: "¿Qué deberías hacer mientras se verifica el estado de autenticación?",
            options: [
              "Mostrar un mensaje de error",
              "Redirigir inmediatamente",
              "Mostrar un estado de carga",
              "Ocultar toda la página"
            ],
            explanation: "Deberías mostrar un estado de carga mientras se verifica la autenticación para proporcionar una buena experiencia de usuario."
          },
          "q3-2-3": {
            question: "¿Qué es la Seguridad a Nivel de Fila (RLS)?",
            options: [
              "Protección de rutas del lado del cliente",
              "Seguridad a nivel de base de datos que controla a qué filas pueden acceder los usuarios",
              "Un componente de React",
              "Un tipo de autenticación"
            ],
            explanation: "La Seguridad a Nivel de Fila (RLS) es una característica de la base de datos que controla qué filas pueden ver y modificar los usuarios."
          },
          "q3-2-4": {
            question: "¿Por qué deberías validar los permisos tanto en el cliente como en el servidor?",
            options: [
              "No es necesario",
              "Del lado del cliente para UX, del lado del servidor para seguridad",
              "Solo importa la validación del lado del servidor",
              "Solo se necesita validación del lado del cliente"
            ],
            explanation: "La validación del lado del cliente proporciona retroalimentación inmediata, mientras que la validación del lado del servidor garantiza la seguridad."
          }
        }
      },
      "lesson-3-3": {
        title: "Autenticación Social: La Vía Fácil",
        objective: "Implementar inicio de sesión con Google/GitHub",
        content: "# Autenticación Social: La Vía Fácil\n\n¿Por qué hacer que los usuarios recuerden otra contraseña cuando pueden simplemente hacer clic en 'Iniciar sesión con Google'?\n\n## Beneficios de la Autenticación Social:\n- Sin nueva contraseña que recordar\n- Proceso de registro más rápido\n- Proveedor de autenticación de confianza\n- Mayores tasas de conversión\n\n## Pasos de Implementación:\n1. Configura proveedores OAuth (Google, GitHub)\n2. Configura la autenticación social de Supabase\n3. Implementa botones de inicio de sesión social\n4. Maneja los datos del perfil del usuario\n5. Gestiona la vinculación de cuentas\n\n## Consideraciones de Seguridad:\n- Valida las URL de redirección\n- Usa HTTPS en producción\n- Maneja adecuadamente los conflictos de correo electrónico\n- Almacena datos mínimos del usuario\n\n## Mejores Prácticas:\n- Proporciona mensajes de error claros\n- Maneja los bloqueadores de ventanas emergentes\n- Prueba con diferentes proveedores\n- Monitorea las tasas de conversión",
        learningObjectives: [
          "Implementar autenticación social con Google y GitHub",
          "Manejar datos de autenticación social y perfiles de usuario",
          "Gestionar múltiples cuentas vinculadas por usuario",
          "Aplicar mejores prácticas de seguridad para la autenticación social"
        ],
        badgeName: "Mariposa Social",
        srcodeCommentary: "¿Por qué recordar otra contraseña cuando Google ya sabe todo sobre ti? Abraza la comodidad 😎",
        practiceDescription: "Implementa un sistema completo de autenticación social con Google y GitHub.",
        quizQuestions: {
          "q3-3-1": {
            question: "¿Cuál es el principal beneficio de la autenticación social para los usuarios?",
            options: [
              "Es más segura que las contraseñas",
              "No necesitan crear y recordar otra contraseña",
              "Es más rápida de implementar",
              "Funciona sin conexión"
            ],
            explanation: "La autenticación social elimina la necesidad de que los usuarios creen y recuerden otra contraseña."
          },
          "q3-3-2": {
            question: "¿Dónde configuras las URI de redirección OAuth?",
            options: [
              "En tu código frontend",
              "En la base de datos de Supabase",
              "En la consola de desarrollador del proveedor",
              "En tu package.json"
            ],
            explanation: "Las URI de redirección OAuth deben configurarse en la consola de desarrollador de cada proveedor por seguridad."
          },
          "q3-3-3": {
            question: "¿Cómo manejas múltiples cuentas sociales para un usuario?",
            options: [
              "Creando cuentas de usuario separadas",
              "Usando la vinculación de cuentas para conectar múltiples proveedores a un usuario",
              "Permitiendo solo un proveedor por usuario",
              "Fusionando cuentas automáticamente"
            ],
            explanation: "La vinculación de cuentas permite a los usuarios conectar múltiples proveedores sociales a una única cuenta de usuario."
          },
          "q3-3-4": {
            question: "¿Qué deberías hacer cuando ocurren conflictos de correo electrónico?",
            options: [
              "Crear una cuenta duplicada",
              "Rechazar el registro completamente",
              "Sugerir vincular la cuenta o iniciar sesión con el proveedor original",
              "Eliminar la cuenta existente"
            ],
            explanation: "Cuando ocurren conflictos de correo electrónico, guía a los usuarios para que vinculen su cuenta o inicien sesión con su método original."
          }
        }
      },
      "lesson-4-1": {
        title: "Netlify: Tu Mejor Amigo para el Despliegue",
        objective: "Desplegar usando la integración de Netlify",
        content: "# Netlify: Tu Mejor Amigo para el Despliegue\n\n¡Es hora de desplegar tu creación al mundo! Netlify hace que el despliegue sea mágico.\n\n## ¿Qué es Netlify?\n- Hosting de Sitios Estáticos con CDN global\n- Funciones Serverless\n- Despliegue Continuo\n- Manejo de Formularios\n- Pruebas A/B (Split Testing)\n\n## Proceso de Despliegue:\n1. Prepara tu proyecto (scripts de compilación, variables de entorno)\n2. Despliega desde bolt.new (un clic)\n3. Configura variables de entorno\n4. Configura un dominio personalizado\n5. Monitorea el rendimiento\n\n## Consejos de Optimización:\n- Carga diferida (Lazy load) de componentes\n- Optimiza imágenes\n- Usa división de código (code splitting)\n- Habilita la compresión\n- Configura un almacenamiento en caché adecuado\n\n## Mejores Prácticas:\n- Usa variables de entorno\n- Configura redirecciones para SPA\n- Monitorea los registros de compilación\n- Prueba la versión desplegada",
        learningObjectives: [
          "Desplegar aplicaciones en Netlify desde bolt.new",
          "Configurar variables de entorno para producción",
          "Optimizar aplicaciones para el despliegue en producción",
          "Solucionar problemas comunes de despliegue"
        ],
        badgeName: "Lanzador Espacial",
        srcodeCommentary: "Netlify + bolt.new es como Batman y Robin, pero para el despliegue. Y sí, tú eres Robin en esta analogía 🦸‍♂️",
        practiceDescription: "Despliega una aplicación completa en Netlify con la configuración adecuada de variables de entorno.",
        quizQuestions: {
          "q4-1-1": {
            question: "¿Cuál es el comando de compilación correcto para un proyecto Vite en Netlify?",
            options: ["npm start", "npm run build", "npm run dev", "vite build"],
            explanation: "El comando de compilación 'npm run build' ejecuta el script de compilación definido en package.json."
          },
          "q4-1-2": {
            question: "¿Dónde se deben configurar las variables de entorno para producción?",
            options: [
              "En el código fuente",
              "En el archivo .env confirmado en Git",
              "En la sección de variables de entorno de Netlify",
              "En package.json"
            ],
            explanation: "Las variables de entorno deben configurarse en el panel de Netlify por seguridad."
          },
          "q4-1-3": {
            question: "¿Qué regla de redirección es esencial para las SPA (Aplicaciones de Página Única)?",
            options: [
              "/api/* /backend/:splat 200",
              "/* /index.html 200",
              "/old /new 301",
              "/404 /error 200"
            ],
            explanation: "La redirección '/* /index.html 200' asegura que todas las rutas sean manejadas por el enrutamiento del lado del cliente de la SPA."
          },
          "q4-1-4": {
            question: "¿Cómo optimizas una aplicación React para producción?",
            options: [
              "Simplemente ejecutar npm run build",
              "Usar carga diferida, división de código y eliminar console.logs",
              "Solo minificar el código",
              "La optimización no es necesaria"
            ],
            explanation: "La optimización para producción incluye carga diferida, división de código y eliminación de código de desarrollo."
          }
        }
      },
      "lesson-4-2": {
        title: "Dominios Personalizados: Tu Marca Personal",
        objective: "Configurar dominios personalizados",
        content: "# Dominios Personalizados: Tu Marca Personal\n\n¡Es hora de darle a tu aplicación una dirección profesional!\n\n## Por Qué Importan los Dominios Personalizados:\n- Apariencia profesional\n- Reconocimiento de marca\n- Mejor SEO\n- Confianza del usuario\n- Más fácil de recordar\n\n## Proceso de Configuración:\n1. Compra un dominio\n2. Configura los ajustes de DNS\n3. Agrega el dominio a Netlify\n4. Verifica el certificado SSL\n5. Prueba todo\n\n## Configuración de DNS:\n- Registro A: Apunta al balanceador de carga de Netlify\n- CNAME: Apunta el subdominio a Netlify\n- SSL: Automático con Let's Encrypt\n\n## Mejores Prácticas:\n- Usa HTTPS en todas partes\n- Configura redirecciones www\n- Monitorea los certificados SSL\n- Prueba desde diferentes ubicaciones",
        learningObjectives: [
          "Comprar y configurar dominios personalizados",
          "Configurar correctamente los registros DNS",
          "Verificar certificados SSL",
          "Implementar mejores prácticas de dominio"
        ],
        badgeName: "Señor de los Dominios",
        srcodeCommentary: "Un dominio personalizado es como tener una dirección elegante. No más 'mi-app-aleatoria-123.netlify.app'",
        practiceDescription: "Configura un dominio personalizado para tu aplicación desplegada con la configuración DNS adecuada.",
        quizQuestions: {
          "q4-2-1": {
            question: "¿Qué tipo de registro DNS deberías usar para apuntar tu dominio raíz a Netlify?",
            options: ["CNAME", "Registro A", "Registro MX", "Registro TXT"],
            explanation: "Se utiliza un Registro A para apuntar el dominio raíz a la dirección IP de Netlify."
          },
          "q4-2-2": {
            question: "¿Cómo maneja Netlify los certificados SSL?",
            options: [
              "Debes comprarlos por separado",
              "SSL automático con Let's Encrypt",
              "SSL no es compatible",
              "Solo los planes de pago obtienen SSL"
            ],
            explanation: "Netlify proporciona automáticamente certificados SSL usando Let's Encrypt para todos los sitios."
          },
          "q4-2-3": {
            question: "¿Qué deberías hacer con el subdominio www?",
            options: [
              "Ignorarlo completamente",
              "Configurar una redirección a tu dominio principal",
              "Usarlo como dominio primario",
              "Eliminar el registro www"
            ],
            explanation: "Es una mejor práctica configurar una redirección de www a tu dominio principal (o viceversa) por consistencia."
          },
          "q4-2-4": {
            question: "¿Cuánto tiempo tarda típicamente la propagación de DNS?",
            options: [
              "Inmediatamente",
              "Hasta 48 horas",
              "Exactamente 24 horas",
              "Una semana"
            ],
            explanation: "La propagación de DNS puede tardar hasta 48 horas en completarse en todo el mundo, aunque a menudo es más rápida."
          }
        }
      },
      "lesson-4-3": {
        title: "CI/CD: El Futuro es Ahora",
        objective: "Configurar despliegues automáticos con GitHub",
        content: "# CI/CD: El Futuro es Ahora\n\nIntegración Continua y Despliegue Continuo: ¡tu mayordomo de despliegue personal!\n\n## ¿Qué es CI/CD?\n- **CI**: Integración Continua (pruebas automatizadas)\n- **CD**: Despliegue Continuo (despliegue automatizado)\n- Enviar código → Ejecutar pruebas → Desplegar automáticamente\n\n## Beneficios:\n- Ciclos de desarrollo más rápidos\n- Reducción de errores humanos\n- Despliegues consistentes\n- Pruebas automáticas\n- Retrocesos (Rollbacks) fáciles\n\n## Configuración de GitHub Actions:\n1. Conecta el repositorio de GitHub\n2. Configura los disparadores (triggers) de compilación\n3. Configura el pipeline de pruebas\n4. Despliega si las pruebas son exitosas\n5. Monitorea el estado del despliegue\n\n## Mejores Prácticas:\n- Prueba antes de desplegar\n- Usa entornos de staging (preproducción)\n- Monitorea las métricas de despliegue\n- Configura notificaciones\n- Planifica estrategias de rollback",
        learningObjectives: [
          "Entender los conceptos y beneficios de CI/CD",
          "Configurar despliegues automatizados con GitHub",
          "Configurar pipelines de pruebas",
          "Implementar mejores prácticas de despliegue"
        ],
        badgeName: "Maestro de la Automatización",
        srcodeCommentary: "CI/CD es como tener un mayordomo que hace todo por ti. Excepto que no necesitas pagarle ni darle vacaciones.",
        practiceDescription: "Configura un pipeline completo de CI/CD con GitHub Actions para pruebas y despliegue automatizados.",
        quizQuestions: {
          "q4-3-1": {
            question: "¿Qué significa CI/CD?",
            options: [
              "Integración de Código/Despliegue de Código",
              "Integración Continua/Despliegue Continuo",
              "Integración Central/Despliegue Central",
              "Integración Personalizada/Despliegue Personalizado"
            ],
            explanation: "CI/CD significa Integración Continua y Despliegue Continuo."
          },
          "q4-3-2": {
            question: "¿Qué sucede en un pipeline típico de CI/CD?",
            options: [
              "Solo despliegue de código",
              "Solo pruebas",
              "Envío de código → Ejecución de pruebas → Despliegue si las pruebas pasan",
              "Solo despliegue manual"
            ],
            explanation: "Un pipeline típico de CI/CD ejecuta pruebas automáticamente cuando se envía el código y despliega solo si las pruebas pasan."
          },
          "q4-3-3": {
            question: "¿Cuál es el principal beneficio del despliegue automatizado?",
            options: [
              "Es más caro",
              "Reduce el error humano y acelera el desarrollo",
              "Requiere más trabajo manual",
              "Es solo para grandes empresas"
            ],
            explanation: "El despliegue automatizado reduce el error humano, acelera los ciclos de desarrollo y asegura despliegues consistentes."
          },
          "q4-3-4": {
            question: "¿Cuándo deberías desplegar a producción?",
            options: [
              "Inmediatamente después de escribir código",
              "Solo después de que las pruebas pasen y la revisión de código esté completa",
              "Una vez al año",
              "Nunca usar automatización"
            ],
            explanation: "El código solo debe desplegarse a producción después de pasar todas las pruebas y completar los procesos de revisión de código."
          }
        }
      },
      "lesson-5-1": {
        title: "GitHub: Tu Red de Seguridad",
        objective: "Completar la integración con GitHub",
        content: "# GitHub: Tu Red de Seguridad\n\nGitHub es como un seguro para tu código: ¡nunca sabes cuándo lo necesitarás hasta que lo necesitas URGENTEMENTE!\n\n## Por Qué Importa la Integración con GitHub:\n- Control de versiones e historial\n- Capacidades de colaboración\n- Respaldo y recuperación\n- Compartir código y código abierto\n- Portafolio profesional\n\n## Características Clave:\n- Gestión de repositorios\n- Estrategias de ramas (branching)\n- Pull requests y revisión de código\n- Issues y gestión de proyectos\n- GitHub Actions para CI/CD\n\n## Mejores Prácticas:\n- Confirma (commit) temprano y a menudo\n- Escribe mensajes de confirmación significativos\n- Usa ramas para nuevas funcionalidades\n- Revisa el código antes de fusionar (merge)\n- Mantén los repositorios organizados\n\n## Integración con bolt.new:\n1. Conecta tu cuenta de GitHub\n2. Crea un repositorio\n3. Configura la sincronización automática\n4. Configura webhooks\n5. Habilita funciones colaborativas",
        learningObjectives: [
          "Configurar la integración de GitHub con bolt.new",
          "Entender los flujos de trabajo de Git y las mejores prácticas",
          "Implementar procesos de desarrollo colaborativo",
          "Usar GitHub para la gestión de proyectos"
        ],
        badgeName: "Gurú de Git",
        srcodeCommentary: "GitHub es como el seguro del coche para tu código. Nunca sabes cuándo lo necesitarás hasta que lo necesitas URGENTEMENTE.",
        practiceDescription: "Configura un repositorio de GitHub para tu proyecto y practica hacer commits, ramas y pull requests.",
        quizQuestions: {
          "q5-1-1": {
            question: "¿Cuál es el propósito principal del control de versiones?",
            options: [
              "Hacer el código más lento",
              "Rastrear cambios y permitir la colaboración",
              "Eliminar código antiguo",
              "Hacer el código más difícil de leer"
            ],
            explanation: "El control de versiones rastrea los cambios a lo largo del tiempo y permite que múltiples desarrolladores colaboren de forma segura."
          },
          "q5-1-2": {
            question: "¿Qué es una rama (branch) en Git?",
            options: [
              "Un componente de árbol",
              "Una versión paralela de la base de código para desarrollar funcionalidades",
              "Un tipo de commit",
              "Una configuración de GitHub"
            ],
            explanation: "Una rama es una versión paralela de la base de código que te permite desarrollar funcionalidades sin afectar el código principal."
          },
          "q5-1-3": {
            question: "¿Qué debe incluir un buen mensaje de commit?",
            options: [
              "Texto aleatorio",
              "Una descripción clara de los cambios realizados",
              "Tu información personal",
              "Solo la fecha actual"
            ],
            explanation: "Un buen mensaje de commit describe claramente qué cambios se hicieron y por qué."
          },
          "q5-1-4": {
            question: "¿Qué es un pull request?",
            options: [
              "Una solicitud para eliminar código",
              "Una solicitud para fusionar cambios de una rama a otra",
              "Una solicitud de más funcionalidades",
              "Una solicitud para descargar código"
            ],
            explanation: "Un pull request es una solicitud para fusionar cambios de una rama a otra, permitiendo la revisión del código."
          }
        }
      },
      "lesson-5-2": {
        title: "Stripe: ¡Enséñame la Pasta!",
        objective: "Integrar pagos con Stripe",
        content: "# Stripe: ¡Enséñame la Pasta!\n\n¡Es hora de monetizar tu obra maestra! Stripe hace que aceptar pagos sea tan fácil que podrías venderle agua embotellada a los peces.\n\n## ¿Por Qué Stripe?\n- Seguridad líder en la industria\n- Métodos de pago globales\n- APIs amigables para desarrolladores\n- Documentación extensa\n- Modelos de precios flexibles\n\n## Conceptos Fundamentales:\n- **Payment Intents**: Procesamiento seguro de pagos\n- **Customers**: Gestión de usuarios\n- **Subscriptions**: Pagos recurrentes\n- **Webhooks**: Notificaciones en tiempo real\n- **Products**: Lo que estás vendiendo\n\n## Pasos de Implementación:\n1. Crea una cuenta de Stripe\n2. Configura productos y precios\n3. Implementa formularios de pago\n4. Maneja webhooks\n5. Prueba exhaustivamente\n\n## Mejores Prácticas de Seguridad:\n- Usa HTTPS en todas partes\n- Valida en el lado del servidor\n- Maneja el cumplimiento de PCI\n- Asegura los endpoints de webhook\n- Nunca almacenes datos de tarjetas",
        learningObjectives: [
          "Configurar el procesamiento de pagos con Stripe",
          "Implementar pagos únicos y por suscripción",
          "Manejar webhooks para eventos de pago",
          "Aplicar mejores prácticas de seguridad en pagos"
        ],
        badgeName: "Hacedor de Dinero",
        srcodeCommentary: "Stripe hace que cobrar sea tan fácil que podrías venderle agua embotellada a los peces. Pero por favor, no lo hagas.",
        practiceDescription: "Implementa un sistema de pago completo con pagos únicos y suscripciones usando Stripe.",
        quizQuestions: {
          "q5-2-1": {
            question: "¿Qué es un Payment Intent en Stripe?",
            options: [
              "El deseo de un cliente de comprar algo",
              "Un objeto seguro que representa tu intención de cobrar un pago",
              "Un tipo de tarjeta de crédito",
              "Un empleado de Stripe"
            ],
            explanation: "Un Payment Intent es un objeto seguro que rastrea todo el proceso de pago desde la creación hasta la finalización."
          },
          "q5-2-2": {
            question: "¿Dónde deberías almacenar la información de las tarjetas de crédito?",
            options: [
              "En tu base de datos",
              "En el almacenamiento local (local storage)",
              "Nunca la almacenes - deja que Stripe se encargue",
              "En cookies"
            ],
            explanation: "Nunca debes almacenar información de tarjetas de crédito tú mismo; deja que Stripe maneje todos los datos de pago sensibles."
          },
          "q5-2-3": {
            question: "¿Para qué se usan los webhooks en Stripe?",
            options: [
              "Para pescar",
              "Para recibir notificaciones en tiempo real sobre eventos de pago",
              "Para almacenar datos de clientes",
              "Para procesar reembolsos"
            ],
            explanation: "Los webhooks notifican a tu aplicación en tiempo real cuando ocurren eventos de pago, como pagos exitosos o cargos fallidos."
          },
          "q5-2-4": {
            question: "¿Por qué se requiere HTTPS para el procesamiento de pagos?",
            options: [
              "No es requerido",
              "Para cifrar datos de pago sensibles en tránsito",
              "Para hacer el sitio más rápido",
              "Para un mejor SEO"
            ],
            explanation: "HTTPS cifra todos los datos entre el usuario y tu servidor, protegiendo la información de pago sensible."
          }
        }
      },
      "lesson-5-3": {
        title: "De Figma a Código: Pura Magia",
        objective: "Importar diseños desde Figma",
        content: "# De Figma a Código: Pura Magia\n\nConvertir diseños hermosos en código funcional: ¡es como ser un mago digital!\n\n## ¿Qué es Figma a Código?\n- Conversión automática de diseño a código\n- Implementaciones perfectas al píxel\n- Soporte para diseño responsivo\n- Extracción de componentes\n- Generación de estilos\n\n## Beneficios:\n- Desarrollo más rápido\n- Consistencia en el diseño\n- Reducción de la codificación manual\n- Mejor colaboración entre diseñador y desarrollador\n- Resultados perfectos al píxel\n\n## Proceso:\n1. Prepara los diseños de Figma\n2. Usa herramientas de Figma a Código\n3. Revisa el código generado\n4. Personaliza y optimiza\n5. Integra con tu aplicación\n\n## Mejores Prácticas:\n- Organiza las capas de Figma adecuadamente\n- Usa nombres consistentes\n- Crea componentes reutilizables\n- Prueba el comportamiento responsivo\n- Optimiza el código generado",
        learningObjectives: [
          "Convertir diseños de Figma en código funcional",
          "Optimizar el código generado para producción",
          "Mantener la consistencia del diseño",
          "Implementar patrones de diseño responsivo"
        ],
        badgeName: "Traductor de Diseños",
        srcodeCommentary: "De Figma a Código es como Google Translate pero para diseñadores. Y funciona mejor que Google Translate con el español 😂",
        practiceDescription: "Convierte un diseño completo de Figma en componentes React funcionales e intégralos en tu aplicación.",
        quizQuestions: {
          "q5-3-1": {
            question: "¿Cuál es el principal beneficio de la conversión de Figma a Código?",
            options: [
              "Hace que los diseños se vean peor",
              "Acelera el desarrollo y asegura la consistencia del diseño",
              "Es solo para aplicaciones móviles",
              "No requiere habilidades de diseño"
            ],
            explanation: "La conversión de Figma a Código acelera el desarrollo mientras mantiene una consistencia de diseño perfecta al píxel."
          },
          "q5-3-2": {
            question: "¿Qué deberías hacer con el código generado?",
            options: [
              "Usarlo exactamente como se generó",
              "Revisarlo, optimizarlo y personalizarlo para tus necesidades",
              "Eliminarlo inmediatamente",
              "Nunca modificar el código generado"
            ],
            explanation: "El código generado debe ser revisado, optimizado y personalizado para ajustarse a tus necesidades específicas y estándares de codificación."
          },
          "q5-3-3": {
            question: "¿Cómo deberías organizar los diseños de Figma para una mejor generación de código?",
            options: [
              "Nombrar todo aleatoriamente",
              "Usar nombres consistentes y organización de capas",
              "No organizar nada",
              "Solo usar capas de texto"
            ],
            explanation: "El uso de nombres consistentes y una organización adecuada de las capas en Figma conduce a un código generado mejor y más mantenible."
          },
          "q5-3-4": {
            question: "¿Qué deberías considerar al convertir diseños a código?",
            options: [
              "Solo versiones de escritorio",
              "Comportamiento responsivo en todos los tamaños de dispositivo",
              "Solo versiones móviles",
              "Los diseños no necesitan ser responsivos"
            ],
            explanation: "Siempre debes considerar el comportamiento responsivo para asegurar que tu diseño funcione bien en todos los tamaños de dispositivo."
          }
        }
      },
      "lesson-6-1": {
        title: "Proyecto Final: Aplicación Completa",
        objective: "Crear una aplicación full-stack con todas las integraciones",
        content: "# Proyecto Final: Aplicación Completa\n\n¡Este es tu momento Avengers: Endgame! Es hora de usar todo lo que has aprendido.\n\n## Requisitos del Proyecto:\n- Arquitectura full-stack\n- Autenticación de usuarios\n- Integración de base de datos\n- Procesamiento de pagos\n- Funcionalidades en tiempo real\n- Despliegue profesional\n\n## Fase de Planificación:\n1. Define el alcance del proyecto\n2. Crea el esquema de la base de datos\n3. Diseña los flujos de usuario\n4. Planifica la implementación de funcionalidades\n5. Establece un cronograma e hitos\n\n## Lista de Verificación de Implementación:\n- [ ] Sistema de autenticación de usuarios\n- [ ] Diseño y configuración de la base de datos\n- [ ] Desarrollo de funcionalidades principales\n- [ ] Integración de pagos\n- [ ] Funcionalidad en tiempo real\n- [ ] Pruebas y optimización\n- [ ] Despliegue en producción\n\n## Mejores Prácticas:\n- Organización del código\n- Manejo de errores\n- Optimización del rendimiento\n- Consideraciones de seguridad\n- Experiencia de usuario",
        learningObjectives: [
          "Aplicar todos los conceptos aprendidos en un proyecto completo",
          "Planificar y ejecutar una aplicación full-stack",
          "Implementar prácticas de desarrollo profesional",
          "Crear una aplicación digna de un portafolio"
        ],
        badgeName: "Maestro de Vibe Coding",
        srcodeCommentary: "Este es tu momento Avengers: Endgame. Hora de usar todo lo que aprendiste. ¡No me decepciones! 🚀",
        practiceDescription: "Construye una aplicación full-stack completa incorporando todas las tecnologías y conceptos de lecciones anteriores.",
        quizQuestions: {
          "q6-1-1": {
            question: "¿Qué deberías hacer antes de empezar a codificar tu proyecto final?",
            options: [
              "Empezar a codificar inmediatamente",
              "Planificar el alcance del proyecto, el esquema de la base de datos y los flujos de usuario",
              "Solo pensar en el diseño",
              "Omitir la planificación por completo"
            ],
            explanation: "Una planificación adecuada, que incluya el alcance, el diseño de la base de datos y los flujos de usuario, es esencial para el éxito del proyecto."
          },
          "q6-1-2": {
            question: "¿Qué define una aplicación full-stack?",
            options: [
              "Solo código frontend",
              "Frontend, backend, base de datos y despliegue",
              "Solo base de datos",
              "Solo un diseño bonito"
            ],
            explanation: "Una aplicación full-stack incluye frontend, lógica de backend, base de datos y un despliegue adecuado."
          },
          "q6-1-3": {
            question: "¿Por qué son importantes las pruebas en tu proyecto final?",
            options: [
              "No son importantes",
              "Para asegurar que la funcionalidad opere correctamente y detectar errores temprano",
              "Para hacer que el proyecto tarde más",
              "Solo para grandes empresas"
            ],
            explanation: "Las pruebas aseguran que tu aplicación funcione correctamente y ayudan a detectar errores antes de que los usuarios los encuentren."
          },
          "q6-1-4": {
            question: "¿Qué deberías considerar para la experiencia de usuario?",
            options: [
              "Solo cómo se ve",
              "Estados de carga, manejo de errores y navegación intuitiva",
              "Solo los colores",
              "La UX no importa"
            ],
            explanation: "Una buena UX incluye estados de carga, manejo adecuado de errores, navegación intuitiva y diseño responsivo."
          }
        }
      },
      "lesson-6-2": {
        title: "Optimización y Rendimiento",
        objective: "Optimizar la aplicación para producción",
        content: "# Optimización y Rendimiento\n\nUna aplicación lenta es como un chiste mal contado: nadie tiene paciencia para esperar el remate.\n\n## Core Web Vitals:\n- **LCP**: Largest Contentful Paint (carga)\n- **FID**: First Input Delay (interactividad)\n- **CLS**: Cumulative Layout Shift (estabilidad visual)\n\n## Estrategias de Rendimiento:\n- División de código y carga diferida (lazy loading)\n- Optimización de imágenes\n- Estrategias de caché\n- Optimización del tamaño del paquete (bundle size)\n- Optimización de consultas de base de datos\n\n## Herramientas de Monitoreo:\n- Auditorías Lighthouse\n- Extensión Web Vitals\n- Analíticas de rendimiento\n- Monitoreo de usuarios reales (RUM)\n\n## Implementación:\n1. Audita el rendimiento actual\n2. Identifica cuellos de botella\n3. Implementa optimizaciones\n4. Mide las mejoras\n5. Monitorea continuamente\n\n## Mejores Prácticas:\n- Optimiza imágenes y activos\n- Minimiza los paquetes de JavaScript\n- Usa CDN para activos estáticos\n- Implementa un almacenamiento en caché adecuado\n- Monitorea las métricas de rendimiento",
        learningObjectives: [
          "Entender los Core Web Vitals y las métricas de rendimiento",
          "Implementar técnicas de optimización del rendimiento",
          "Usar herramientas de monitoreo del rendimiento",
          "Alcanzar un rendimiento listo para producción"
        ],
        badgeName: "Demonio de la Velocidad",
        srcodeCommentary: "Una aplicación lenta es como un chiste mal contado: nadie tiene paciencia para esperar el remate.",
        practiceDescription: "Optimiza tu aplicación para alcanzar una puntuación de Lighthouse de 95+ en todas las métricas.",
        quizQuestions: {
          "q6-2-1": {
            question: "¿Qué mide el LCP?",
            options: [
              "Velocidad de carga del elemento de contenido más grande",
              "Tiempo total de carga de la página",
              "Tiempo de ejecución de JavaScript",
              "Tiempo de consulta de la base de datos"
            ],
            explanation: "LCP (Largest Contentful Paint) mide cuán rápido se vuelve visible para los usuarios el elemento de contenido más grande."
          },
          "q6-2-2": {
            question: "¿Qué es la división de código (code splitting)?",
            options: [
              "Dividir el código en múltiples archivos aleatoriamente",
              "Dividir el código en fragmentos más pequeños que se cargan cuando se necesitan",
              "Eliminar código no utilizado",
              "Hacer el código más difícil de leer"
            ],
            explanation: "La división de código divide tu aplicación en fragmentos más pequeños que se cargan bajo demanda, reduciendo el tamaño inicial del paquete."
          },
          "q6-2-3": {
            question: "¿Por qué deberías optimizar las imágenes?",
            options: [
              "Para que se vean peor",
              "Para reducir el tamaño del archivo y mejorar la velocidad de carga",
              "Las imágenes no necesitan optimización",
              "Para aumentar el tamaño de la página"
            ],
            explanation: "La optimización de imágenes reduce el tamaño de los archivos, lo que mejora la velocidad de carga y el rendimiento general."
          },
          "q6-2-4": {
            question: "¿Qué deberías monitorear continuamente?",
            options: [
              "Solo durante el desarrollo",
              "Métricas de rendimiento en producción",
              "Nada necesita monitoreo",
              "Solo las tasas de error"
            ],
            explanation: "El monitoreo continuo de las métricas de rendimiento en producción ayuda a identificar y abordar problemas de rendimiento rápidamente."
          }
        }
      },
      "lesson-6-3": {
        title: "Certificación SrCode",
        objective: "Examen final de Vibe Coding",
        content: "# Certificación SrCode\n\n¡Bienvenido a la batalla final contra el jefe! Es hora de demostrar que realmente aprendiste algo.\n\n## Requisitos de Certificación:\n- Completar las 18 lecciones\n- Aprobar el examen final completo (85%+)\n- Demostrar habilidades prácticas\n- Mostrar comprensión de los conceptos básicos\n- Aplicar mejores prácticas\n\n## Cobertura del Examen:\n- Fundamentos de bolt.new\n- Ingeniería de prompts\n- Diseño e integración de bases de datos\n- Autenticación y seguridad\n- Despliegue y optimización\n- Resolución de problemas del mundo real\n\n## Lo Que Recibirás:\n- Certificación Oficial SrCode\n- Insignia digital para LinkedIn\n- Ejemplos de proyectos para portafolio\n- Recomendaciones profesionales\n- Acceso a la comunidad\n\n## Beneficios Profesionales:\n- Experiencia validada en bolt.new\n- Credibilidad profesional\n- Oportunidades laborales\n- Capacidades para freelancing\n- Ruta de aprendizaje continuo\n\n## Palabras Finales de SrCode:\n¡Has recorrido un largo camino! Desde no saber qué era bolt.new hasta construir aplicaciones full-stack. Apruebes o no este examen, ya has logrado algo increíble. ¡Ahora ve y construye algo extraordinario!",
        learningObjectives: [
          "Demostrar maestría en todos los conceptos del curso",
          "Aplicar conocimientos para resolver problemas complejos",
          "Mostrar habilidades de desarrollo profesional",
          "Obtener la certificación oficial"
        ],
        badgeName: "Aprobado por SrCode",
        srcodeCommentary: "Si apruebas este examen, oficialmente sabes más sobre bolt.new que el 90% de los desarrolladores. Si no... bueno, siempre puedes intentar ser influencer 😏",
        practiceDescription: "Completa el examen final exhaustivo que cubre todos los temas del curso y demuestra tu maestría a través de un proyecto final (capstone).",
        quizQuestions: {
          "q6-3-1": {
            question: "¿Cuál es la habilidad más importante que has aprendido en este curso?",
            options: [
              "Memorizar la sintaxis del código",
              "Entender cómo desglosar problemas y construir soluciones sistemáticamente",
              "Usar solo herramientas específicas",
              "Copiar código de tutoriales"
            ],
            explanation: "La habilidad más valiosa es aprender a desglosar problemas complejos y construir soluciones sistemáticas utilizando herramientas modernas."
          },
          "q6-3-2": {
            question: "¿Qué hace a un buen desarrollador de bolt.new?",
            options: [
              "Conocer cada característica de memoria",
              "Escribir prompts claros, entender el stack completo y aplicar mejores prácticas",
              "Solo enfocarse en el frontend",
              "Evitar las bases de datos"
            ],
            explanation: "Un buen desarrollador de bolt.new combina comunicación clara, comprensión del stack completo y mejores prácticas profesionales."
          },
          "q6-3-3": {
            question: "¿Cómo deberías abordar la construcción de una nueva aplicación?",
            options: [
              "Empezar a codificar inmediatamente",
              "Planificar a fondo, construir incrementalmente, probar continuamente y desplegar con confianza",
              "Solo enfocarse en el diseño",
              "Construir todo de una vez"
            ],
            explanation: "El desarrollo profesional implica planificar, construir incrementalmente, probar continuamente y desplegar con confianza."
          },
          "q6-3-4": {
            question: "¿Cuál es el secreto para el éxito continuo como desarrollador?",
            options: [
              "Dejar de aprender después de este curso",
              "Seguir aprendiendo, construyendo y compartiendo conocimiento con la comunidad",
              "Solo usar bolt.new para siempre",
              "Evitar nuevas tecnologías"
            ],
            explanation: "El éxito continuo proviene del aprendizaje permanente, la construcción constante y la participación activa en la comunidad de desarrolladores."
          }
        }
      }
    },
    quiz: {
      title: 'Quiz',
      question: 'Pregunta {{current}} de {{total}}',
      backToLesson: 'Volver a la Lección',
      congratulations: '¡Felicidades!',
      keepTrying: '¡Sigue Intentando!',
      passedMessage: '¡Has completado exitosamente "{{lessonTitle}}" y ganado la insignia "{{badgeName}}"!',
      failedMessage: 'Necesitas 85% o más para aprobar. Obtuviste {{score}}%. ¡Revisa la lección e inténtalo de nuevo!',
      badgeEarned: '🏆 Insignia Ganada: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continuar Aprendiendo',
      reviewLesson: 'Revisar Lección',
      retakeQuiz: 'Repetir Quiz',
      bestScore: 'Mejor Puntuación: {{score}}%',
      explanation: 'Explicación',
      loadError: 'No se pudieron cargar las preguntas del quiz.'
    },
    badges: {
      title: 'Colección de Insignias',
      earned: '{{earned}} de {{total}} insignias ganadas',
      earnedOn: 'Ganada el {{date}}',
      unlockHint: 'Completa las lecciones del Nivel {{level}} para desbloquear'
    },
    certificate: {
      title: 'Certificado',
      congratulations: '¡Felicidades! 🎉',
      earned: '¡Has completado las 18 lecciones y ganado tu certificado!',
      download: 'Descargar Certificado',
      keepLearning: '¡Sigue Aprendiendo!',
      progress: 'Completa las 18 lecciones para ganar tu certificado',
      remaining: '{{count}} lecciones restantes',
      certificateOf: 'CERTIFICADO DE FINALIZACIÓN',
      academyName: 'Vibe Coding Academy',
      certifies: 'Esto certifica que',
      hasCompleted: 'ha completado exitosamente las 18 lecciones del',
      courseName: 'Curso de Maestría bolt.new',
      totalXP: 'XP Total: {{xp}}',
      completionDate: 'Fecha de Finalización: {{date}}',
      certifiedBy: 'Certificado por SrCode',
      seniorMentor: 'Mentor Senior de IA',
      studentNamePlaceholder: '[Nombre del Estudiante]'
    },
    srcode: {
      title: 'SrCode',
      subtitle: 'Mentor IA',
      placeholder: 'Pregúntale a SrCode sobre esta lección...',
      thinking: 'SrCode está pensando...',
      welcomeMessage: '¡Hola! 👋 Soy SrCode, tu mentor de IA para "{{lessonTitle}}". ¿Listo para sumergirte en la magia de bolt.new? ¡Pregúntame lo que quieras sobre esta lección!',
      errorMessage: '¡Ups! Estoy teniendo algunas dificultades técnicas. ¡Intenta de nuevo en un momento! 🔧',
      offline: 'Actualmente estoy desconectado, ¡pero volveré pronto! 💻'
    }
  },
  fr: {
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      cancel: 'Annuler',
      save: 'Enregistrer',
      delete: 'Supprimer',
      edit: 'Modifier',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      continue: 'Continuer',
      finish: 'Terminer',
      retry: 'Réessayer'
    },
    navigation: {
      home: 'Accueil',
      dashboard: 'Tableau de bord',
      lessons: 'Mes Leçons',
      badges: 'Badges',
      certificate: 'Certificat',
      profile: 'Profil',
      settings: 'Paramètres',
      logout: 'Déconnexion'
    },
    auth: {
      login: 'Connexion',
      signup: 'S\'inscrire',
      logout: 'Déconnexion',
      email: 'Adresse Email',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      firstName: 'Prénom',
      lastName: 'Nom',
      welcomeBack: 'Bon retour !',
      joinVibeCoding: 'Rejoindre Vibe Coding',
      continueJourney: 'Continuez votre parcours d\'apprentissage avec SrCode',
      startAdventure: 'Commencez votre aventure de codage alimentée par l\'IA',
      forgotPassword: 'Mot de passe oublié ?',
      noAccount: 'Vous n\'avez pas de compte ?',
      haveAccount: 'Vous avez déjà un compte ?',
      signInInstead: 'Se connecter',
      signUpInstead: 'S\'inscrire',
      passwordMinLength: 'Le mot de passe doit contenir au moins 8 caractères',
      passwordsNoMatch: 'Les mots de passe ne correspondent pas',
      emailRequired: 'L\'email est requis',
      invalidEmail: 'Veuillez saisir un email valide',
      checkEmail: 'Succès ! Vérifiez votre email pour confirmer votre compte.',
      backToHome: 'Retour à l\'accueil'
    },
    landing: {
      hero: {
        title: 'Maîtrisez bolt.new avec le mentorat IA',
        subtitle: 'Apprenez à créer des applications full-stack avec SrCode, votre mentor IA personnel. De l\'ingénierie des prompts au déploiement - maîtrisez l\'avenir du développement web.',
        startJourney: 'Commencez votre voyage',
        watchDemo: 'Voir la démo',
        aiPowered: 'Plateforme d\'apprentissage alimentée par l\'IA'
      },
      features: {
        title: 'Pourquoi choisir Vibe Coding ?',
        subtitle: 'Découvrez l\'avenir de l\'éducation au codage avec notre plateforme alimentée par l\'IA',
        aiLearning: {
          title: 'Apprentissage alimenté par l\'IA',
          description: 'Apprenez avec SrCode, votre mentor IA personnel qui s\'adapte à votre rythme'
        },
        realProjects: {
          title: 'Construisez de vrais projets',
          description: 'Maîtrisez bolt.new en construisant de vraies applications, pas seulement de la théorie'
        },
        certificates: {
          title: 'Obtenez des certificats',
          description: 'Obtenez des certificats reconnus par l\'industrie pour booster votre carrière'
        }
      },
      stats: {
        students: 'Étudiants formés',
        lessons: 'Leçons complètes',
        successRate: 'Taux de réussite',
        support: 'Support IA'
      },
      testimonials: {
        title: 'Histoires de succès',
        subtitle: 'Rejoignez des milliers de développeurs qui ont transformé leur carrière',
        alex: {
          name: 'Alex Chen',
          role: 'Développeur Full-Stack',
          content: 'SrCode m\'a appris bolt.new plus vite que n\'importe quel bootcamp. Maintenant, je crée des applications de production en jours, pas en mois.'
        },
        maria: {
          name: 'Maria Rodriguez',
          role: 'Fondatrice de Startup',
          content: 'Le mentor IA interactif est incroyable. C\'est comme avoir un développeur senior qui vous guide 24/7.'
        },
        david: {
          name: 'David Kim',
          role: 'Chef de Produit',
          content: 'De zéro au déploiement d\'applications full-stack. La gamification m\'a gardé engagé tout au long du parcours.'
        }
      },
      cta: {
        title: 'Prêt à construire l\'avenir ?',
        subtitle: 'Rejoignez la nouvelle génération de développeurs maîtrisant le développement web alimenté par l\'IA',
        startFree: 'Commencez gratuitement aujourd\'hui',
        noCreditCard: 'Aucune carte de crédit requise'
      },
      footer: {
        tagline: 'Construire l\'avenir, un développeur à la fois.'
      }
    },
    dashboard: {
      title: 'Tableau de bord',
      welcomeBack: 'Bon retour, {{name}} !',
      myLessons: 'Mes Leçons',
      badges: 'Badges',
      certificate: 'Certificat',
      stats: {
        completedLessons: 'Leçons Terminées',
        totalXP: 'XP Total',
        badgesEarned: 'Badges Gagnés',
        progress: 'Progrès'
      },
      tabs: {
        lessons: 'Mes Leçons',
        badges: 'Badges',
        certificate: 'Certificat'
      }
    },
    lessons: {
      title: 'Leçons',
      level: 'Niveau {{level}}',
      lesson: 'Leçon {{level}}.{{order}}',
      objective: 'Objectif',
      learningObjectives: 'Objectifs d\'Apprentissage',
      practiceExercise: 'Exercice Pratique',
      takeQuiz: 'Passer le Quiz',
      retakeQuiz: 'Repasser le Quiz',
      requiredScore: '{{score}}% requis pour réussir',
      readingTime: 'Temps de Lecture: ~{{minutes}} min',
      lessonNotFound: 'Leçon Non Trouvée',
      lessonNotAvailable: 'Cette leçon n\'existe pas ou n\'est pas disponible.',
      backToDashboard: 'Retour au Tableau de Bord',
      srCodeSays: 'SrCode dit :',
      levels: {
        foundations: 'Fondations',
        databases: 'Bases de Données',
        authentication: 'Authentification',
        deployment: 'Déploiement',
        integrations: 'Intégrations',
        mastery: 'Maîtrise'
      },
      descriptions: {
        foundations: 'Apprenez les bases de bolt.new et de l\'ingénierie des prompts',
        databases: 'Maîtrisez l\'intégration de Supabase et la conception de bases de données',
        authentication: 'Implémentez des systèmes d\'authentification utilisateur sécurisés',
        deployment: 'Déployez vos applications dans le monde entier',
        integrations: 'Connectez-vous à des services externes et des API',
        mastery: 'Devenez un expert bolt.new avec des projets avancés'
      },
      status: {
        locked: 'Terminez la leçon précédente pour débloquer',
        available: 'Disponible pour commencer',
        inProgress: 'En cours',
        completed: 'Terminée',
        score: 'Score : {{score}}%'
      },
      continueNext: '🎉 Félicitations ! Vous avez terminé "{{currentLessonTitle}}". Voulez-vous continuer avec "{{nextLessonTitle}}"?',
      nextLessonDefaultTitle: "la leçon suivante",
      "lesson-1-1": {
        title: "C'est quoi ce bolt.new ?",
        objective: "Comprendre bolt.new en tant qu'agent de développement web IA",
        content: "# C'est quoi ce bolt.new ?\n\nBienvenue à votre première leçon à la Vibe Coding Academy ! Je suis SrCode, et je serai votre mentor tout au long de ce voyage.\n\n## Qu'est-ce que bolt.new ?\n\nbolt.new est un agent de développement web révolutionnaire alimenté par l'IA qui vous permet de créer des applications full-stack en utilisant des invites en langage naturel. Voyez cela comme avoir un développeur senior qui :\n\n- Ne se fatigue jamais et ne s'énerve jamais\n- N'a pas besoin de pauses café\n- Ne se dispute jamais sur les normes de codage\n- Peut créer des applications entières à partir de zéro\n- S'intègre de manière transparente avec les outils modernes\n\n## Fonctionnalités Clés :\n\n### 🚀 **Développement Alimenté par l'IA**\nbolt.new utilise une IA avancée pour comprendre vos besoins et générer du code complet et fonctionnel. Vous décrivez ce que vous voulez, et il le construit.\n\n### 🌐 **Capacités Full-Stack**\n- Développement Frontend (React, Vue, Svelte)\n- Intégration Backend (API, bases de données)\n- Style (CSS, Tailwind, styled-components)\n- Gestion de l'état\n- Systèmes d'authentification\n\n### ⚡ **Déploiement Instantané**\nIntégration native avec :\n- Netlify pour l'hébergement\n- Supabase pour les bases de données\n- GitHub pour le contrôle de version\n- Domaines personnalisés\n\nRappelez-vous : La qualité de votre résultat dépend de la qualité de votre invite. Apprendre à rédiger des invites efficaces est crucial !",
        learningObjectives: [
          "Définir ce qu'est bolt.new et son objectif principal",
          "Identifier les principaux avantages par rapport au développement traditionnel",
          "Reconnaître les cas d'utilisation idéaux pour les projets bolt.new",
          "Comprendre le flux de travail de base pour créer avec bolt.new"
        ],
        badgeName: "Premier Contact",
        srcodeCommentary: "bolt.new, c'est comme avoir un développeur senior qui ne fatigue jamais, ne demande jamais de café et ne discute jamais des tabulations contre les espaces. Incroyable, non ?",
        practiceDescription: "Explorez l'interface de bolt.new et essayez de créer un projet simple 'Hello World' pour vous familiariser avec la plateforme.",
        quizQuestions: {
          "q1-1-1": {
            question: "Qu'est-ce que bolt.new ?",
            options: [
              "Un éditeur de code traditionnel",
              "Un agent de développement web alimenté par l'IA",
              "Un outil de gestion de base de données",
              "Un logiciel de conception"
            ],
            explanation: "bolt.new est un agent de développement web alimenté par l'IA qui vous permet de créer des applications full-stack en utilisant des invites en langage naturel."
          },
          "q1-1-2": {
            question: "Quel est le principal avantage d'utiliser bolt.new ?",
            options: [
              "C'est complètement gratuit",
              "Cela ne fonctionne qu'avec JavaScript",
              "Il peut créer des applications à partir de descriptions en langage naturel",
              "Il remplace tous les autres outils de développement"
            ],
            explanation: "Le principal avantage est que bolt.new peut comprendre des descriptions en langage naturel et générer des applications complètes et fonctionnelles."
          },
          "q1-1-3": {
            question: "Laquelle de ces affirmations n'est PAS une fonctionnalité de bolt.new ?",
            options: [
              "Développement alimenté par l'IA",
              "Déploiement instantané",
              "Configuration matérielle physique",
              "Capacités full-stack"
            ],
            explanation: "bolt.new est entièrement basé sur le Web et ne nécessite aucune configuration matérielle physique."
          },
          "q1-1-4": {
            question: "Pour quel type de projets bolt.new est-il idéal ?",
            options: [
              "Uniquement les applications mobiles",
              "Applications Web, SaaS, pages de destination et e-commerce",
              "Uniquement les sites Web statiques",
              "Uniquement les applications de bureau"
            ],
            explanation: "bolt.new est idéal pour divers projets Web, notamment les applications SaaS, les pages de destination, les sites de commerce électronique, etc."
          }
        }
      },
      "lesson-1-2": {
        title: "L'Art de l'Invite Parfaite",
        objective: "Rédiger des invites efficaces pour bolt.new",
        content: "# L'Art de l'Invite Parfaite\n\nMaintenant que vous savez ce qu'est bolt.new, apprenons à communiquer efficacement avec lui. Rédiger de bonnes invites, c'est comme être un grand architecte : vous devez être précis, clair et détaillé.\n\n## Qu'est-ce qui Fait une Invite Parfaite ?\n\n### 🎯 **La Spécificité est Essentielle**\nNe dites pas : \"Fais-moi un site web cool\"\nDites : \"Crée une page de destination pour une application de fitness avec une section héros, un tableau de prix, des témoignages et un formulaire de contact en utilisant un thème sombre\"\n\n### 📋 **Structurez Vos Demandes**\nUne bonne invite contient ces éléments :\n1. **Type de Projet** : Ce que vous construisez\n2. **Fonctionnalités** : Fonctionnalités spécifiques nécessaires\n3. **Design** : Préférences visuelles et style\n4. **Exigences Techniques** : Intégrations, frameworks, etc.\n\n## La Méthode CLEAR :\n- **C**ontexte : Quel type de projet\n- **L**iste : Fonctionnalités spécifiques nécessaires\n- **E**xemple : Référence à des projets similaires\n- **A**esthétique : Préférences de design\n- **R**equis : Spécifications techniques\n\n## Erreurs Courantes à Éviter :\n1. **Trop Vague** : \"Fais en sorte que ça ait l'air bien\"\n2. **Trop Complexe** : Tout demander en même temps\n3. **Pas de Contexte** : Ne pas expliquer le but\n4. **Exigences Manquantes** : Oublier la réactivité mobile\n5. **Priorités Peu Claires** : Ne pas spécifier ce qui est le plus important",
        learningObjectives: [
          "Rédiger des invites claires et spécifiques pour bolt.new",
          "Comprendre la méthode CLEAR pour la structure des invites",
          "Éviter les erreurs courantes de prompting",
          "Utiliser le prompting itératif pour affiner"
        ],
        badgeName: "Murmureur d'IA",
        srcodeCommentary: "Une bonne invite, c'est comme une recette de cuisine : spécifique, claire et sans ingrédients bizarres. Pas de bêtises du genre 'fais-moi une application cool', s'il vous plaît 🙄",
        practiceDescription: "Créez une invite détaillée pour une page de destination de votre choix, puis testez-la dans bolt.new pour voir les résultats.",
        quizQuestions: {
          "q1-2-1": {
            question: "Que signifie le 'C' dans la méthode CLEAR ?",
            options: ["Couleur", "Contexte", "Code", "Composants"],
            explanation: "Dans la méthode CLEAR, 'C' signifie Contexte - expliquer quel type de projet vous construisez."
          },
          "q1-2-2": {
            question: "Quel est un exemple d'une invite bien structurée ?",
            options: [
              "Fais-moi une application cool",
              "Construis quelque chose avec React",
              "Crée un site e-commerce avec catalogue de produits, panier d'achat et intégration Stripe en utilisant un design moderne",
              "J'ai besoin d'un site web"
            ],
            explanation: "Une invite bien structurée est spécifique, inclut des fonctionnalités et mentionne les exigences techniques et les préférences de design."
          },
          "q1-2-3": {
            question: "Que devez-vous faire si votre première invite ne donne pas des résultats parfaits ?",
            options: [
              "Abandonner et recommencer",
              "Utiliser le prompting itératif pour affiner",
              "Toujours utiliser la même invite",
              "Ne jamais faire de changements"
            ],
            explanation: "Le prompting itératif vous permet d'affiner et d'améliorer votre application avec des demandes de suivi."
          },
          "q1-2-4": {
            question: "Quel élément N'EST PAS essentiel dans une bonne invite ?",
            options: [
              "Fonctionnalités spécifiques nécessaires",
              "Exigences techniques",
              "Votre histoire personnelle",
              "Préférences de design"
            ],
            explanation: "Les informations personnelles ne sont pas pertinentes pour la création d'applications - concentrez-vous plutôt sur les exigences du projet."
          }
        }
      },
      "lesson-1-3": {
        title: "WebContainers : La Magie Derrière le Rideau",
        objective: "Comprendre l'environnement de développement StackBlitz",
        content: "# WebContainers : La Magie Derrière le Rideau\n\nVous êtes-vous déjà demandé comment bolt.new exécute un environnement de développement entier dans votre navigateur ? La réponse est WebContainers - une technologie révolutionnaire qui apporte Node.js au navigateur.\n\n## Que Sont les WebContainers ?\n\nLes WebContainers sont un runtime basé sur navigateur pour exécuter des applications Node.js et des commandes du système d'exploitation. Considérez-les comme :\n- Un environnement Node.js complet dans votre navigateur\n- Aucun téléchargement ni installation requis\n- Accès complet au terminal et gestion des paquets\n- Capacités de collaboration en temps réel\n\n## Comment Fonctionnent les WebContainers :\n\n### 🌐 **Natif du Navigateur**\n- S'exécute entièrement dans votre navigateur en utilisant WebAssembly\n- Aucune exécution côté serveur nécessaire\n- Votre code reste privé et sécurisé\n- Fonctionne hors ligne une fois chargé\n\n### ⚡ **Avantages en Termes de Performances**\n- Temps de démarrage instantanés\n- Remplacement à chaud des modules (Hot Module Replacement)\n- Mises à jour de l'aperçu en temps réel\n- Utilisation efficace des ressources\n\n### 🔒 **Fonctionnalités de Sécurité**\n- Environnement d'exécution isolé (sandbox)\n- Aucun accès à votre système de fichiers local\n- Sécurisé par conception\n- Isolation réseau\n\n## Avantages Clés :\n- **Configuration Instantanée** : Aucune configuration d'environnement\n- **Accès Universel** : Fonctionne sur n'importe quel appareil doté d'un navigateur\n- **Efficacité des Ressources** : Aucune utilisation du stockage local\n- **Prêt pour la Collaboration** : Partagez des projets avec une URL",
        learningObjectives: [
          "Comprendre ce que sont les WebContainers et comment ils fonctionnent",
          "Naviguer efficacement dans l'IDE StackBlitz",
          "Utiliser le terminal intégré pour les tâches de développement",
          "Reconnaître les avantages et les limites du développement basé sur navigateur"
        ],
        badgeName: "Détective Technologique",
        srcodeCommentary: "Les WebContainers, c'est comme Docker mais pour votre navigateur. Oui, c'est aussi cool que ça en a l'air. Non, vous n'avez pas besoin de comprendre Docker pour ça 😉",
        practiceDescription: "Explorez l'interface de l'IDE StackBlitz, ouvrez le terminal et essayez d'exécuter des commandes de base comme 'npm --version' et 'ls'.",
        quizQuestions: {
          "q1-3-1": {
            question: "Que sont les WebContainers ?",
            options: [
              "Des conteneurs Docker pour applications web",
              "Un runtime basé sur navigateur pour les applications Node.js",
              "Un type de serveur web",
              "Une technologie de base de données"
            ],
            explanation: "Les WebContainers sont un runtime basé sur navigateur qui permet aux applications Node.js de s'exécuter entièrement dans le navigateur en utilisant WebAssembly."
          },
          "q1-3-2": {
            question: "Quel est un avantage clé des WebContainers ?",
            options: [
              "Ils nécessitent une installation locale",
              "Ils ne fonctionnent que sur des systèmes d'exploitation spécifiques",
              "Ils offrent une configuration instantanée sans téléchargement requis",
              "Ils sont plus lents que le développement traditionnel"
            ],
            explanation: "Les WebContainers offrent une configuration instantanée sans téléchargement ni installation requis, rendant le développement immédiatement accessible."
          },
          "q1-3-3": {
            question: "Comment installez-vous des paquets dans un WebContainer ?",
            options: [
              "En les téléchargeant manuellement",
              "En utilisant npm ou yarn dans le terminal intégré",
              "En téléversant directement des fichiers",
              "Les WebContainers ne prennent pas en charge les paquets"
            ],
            explanation: "Vous pouvez installer des paquets en utilisant les commandes npm ou yarn dans le terminal intégré, comme dans le développement traditionnel."
          },
          "q1-3-4": {
            question: "Qu'est-ce qui alimente l'exécution de Node.js dans les WebContainers ?",
            options: [
              "Traitement côté serveur",
              "Système de fichiers local",
              "WebAssembly",
              "Plugins de navigateur"
            ],
            explanation: "Les WebContainers utilisent WebAssembly pour exécuter des applications Node.js entièrement dans le navigateur sans traitement côté serveur."
          }
        }
      },
      "lesson-2-1": {
        title: "Connecter Supabase comme un pro",
        objective: "Configurer Supabase dans bolt.new étape par étape",
        content: "# Connecter Supabase comme un pro\n\nBienvenue au niveau 2 ! Nous entrons maintenant dans le vif du sujet du développement web moderne. Supabase va devenir votre nouveau meilleur ami - considérez-le comme Firebase, mais en version conviviale pour les développeurs.\n\n## Qu'est-ce que Supabase ?\n\nSupabase est un Backend-as-a-Service (BaaS) open-source qui fournit :\n- **Base de données PostgreSQL** : Du vrai SQL, pas des sottises NoSQL\n- **Authentification** : Gestion des utilisateurs intégrée\n- **Abonnements en temps réel** : Mises à jour des données en direct\n- **Edge Functions** : Fonctions serverless à la périphérie du réseau\n- **Stockage** : Gestion des fichiers et des images\n- **API auto-générées** : RESTful et GraphQL\n\n## Processus de connexion étape par étape :\n\n### **Étape 1 : Créez votre projet Supabase**\n1. Allez sur supabase.com\n2. Inscrivez-vous ou connectez-vous\n3. Cliquez sur \"Nouveau Projet\"\n4. Choisissez votre organisation\n5. Remplissez les détails du projet\n6. Cliquez sur \"Créer un nouveau projet\"\n\n### **Étape 2 : Obtenez vos identifiants de projet**\n1. Allez dans Paramètres → API\n2. Copiez l'URL du projet et la clé anonyme (Anon Key)\n\n### **Étape 3 : Connectez-vous dans bolt.new**\n1. Dans votre projet, allez dans les intégrations\n2. Sélectionnez \"Supabase\"\n3. Entrez vos identifiants\n4. Testez la connexion\n\n## Meilleures pratiques :\n- N'exposez jamais les clés de rôle de service (service role keys) dans le code frontend\n- Utilisez les politiques de sécurité au niveau des lignes (RLS)\n- Validez les données côté client et côté serveur\n- Utilisez des variables d'environnement pour les identifiants",
        learningObjectives: [
          "Créer et configurer un projet Supabase",
          "Connecter Supabase à bolt.new avec succès",
          "Comprendre les variables d'environnement et la sécurité",
          "Dépanner les problèmes de connexion courants"
        ],
        badgeName: "Connecteur Suprême",
        srcodeCommentary: "Paramètres > Applications > Connecter. Plus facile que d'assembler des meubles IKEA... et avec moins de larmes.",
        practiceDescription: "Créez votre propre projet Supabase et connectez-le avec succès à un nouveau projet bolt.new.",
        quizQuestions: {
          "q2-1-1": {
            question: "Quelle est la première étape pour connecter Supabase à bolt.new ?",
            options: [
              "Écrire des requêtes de base de données",
              "Créer un projet Supabase et obtenir les identifiants",
              "Installer la CLI Supabase",
              "Configurer l'authentification"
            ],
            explanation: "Vous devez d'abord créer un projet Supabase et obtenir l'URL de votre projet et vos clés API avant de vous connecter."
          },
          "q2-1-2": {
            question: "Quelle clé Supabase devez-vous utiliser dans le code frontend ?",
            options: ["Clé de rôle de service", "Clé secrète", "Clé anonyme (Anon Key)", "Clé maître"],
            explanation: "La clé anonyme (Anon Key) peut être utilisée en toute sécurité dans le code frontend car elle respecte les politiques de sécurité au niveau des lignes (RLS)."
          },
          "q2-1-3": {
            question: "Où devez-vous stocker vos identifiants Supabase pour des raisons de sécurité ?",
            options: [
              "Directement dans le code",
              "Dans les commentaires",
              "Dans des variables d'environnement",
              "Dans un fichier public"
            ],
            explanation: "Les variables d'environnement gardent vos identifiants en sécurité et séparés de votre base de code."
          },
          "q2-1-4": {
            question: "Que signifie RLS dans Supabase ?",
            options: [
              "Streaming en direct réel",
              "Sécurité au niveau des lignes (Row Level Security)",
              "Système de chargement rapide",
              "Service de connexion à distance"
            ],
            explanation: "La sécurité au niveau des lignes (RLS) garantit que les utilisateurs ne peuvent accéder qu'aux données qu'ils sont autorisés à voir."
          }
        }
      },
      "lesson-2-2": {
        title: "Schémas de base de données : Votre nouveau meilleur ami",
        objective: "Concevoir des schémas de base de données efficaces",
        content: "# Schémas de base de données : Votre nouveau meilleur ami\n\nIl est temps de parler des fondations de toute grande application : le schéma de la base de données. Considérez-le comme le plan directeur de votre manoir de données.\n\n## Qu'est-ce qu'un schéma de base de données ?\n\nUn schéma de base de données est la structure qui définit :\n- **Tables** : Où résident vos données\n- **Colonnes** : Quelles données vous stockez\n- **Relations** : Comment les données se connectent\n- **Contraintes** : Règles que vos données doivent suivre\n- **Index** : Comment trouver rapidement les données\n\n## Principes fondamentaux de conception de schémas :\n\n### 🎯 **Normalisation (mais pas trop)**\n- Supprimez les données en double\n- Créez des relations logiques\n- Ne normalisez pas à l'excès (la duplication est parfois acceptable)\n\n### 🔗 **Les relations comptent**\n- **Un-à-Un** : Utilisateur → Profil\n- **Un-à-Plusieurs** : Utilisateur → Messages\n- **Plusieurs-à-Plusieurs** : Utilisateurs ↔ Rôles\n\n### 📝 **Les types de données sont importants**\n- Utilisez le type approprié pour la tâche\n- Tenez compte du stockage et des performances\n- Prévoyez la croissance future\n\n## Concepts clés des schémas :\n\n### **Clés primaires**\n- Identifiant unique pour chaque ligne\n- Utilisez UUID pour une meilleure distribution\n- Ne jamais modifier ni réutiliser\n\n### **Clés étrangères**\n- Lient les tables entre elles\n- Assurent l'intégrité référentielle\n- Définissent le comportement en cascade\n\n### **Contraintes**\n- CHECK : Valident les valeurs des données\n- UNIQUE : Empêchent les doublons\n- NOT NULL : Exigent des valeurs",
        learningObjectives: [
          "Concevoir des schémas de base de données efficaces",
          "Comprendre les relations et les contraintes des tables",
          "Mettre en œuvre la sécurité au niveau des lignes (RLS) dans Supabase",
          "Appliquer les meilleures pratiques de conception de schémas"
        ],
        badgeName: "Architecte de Données",
        srcodeCommentary: "Un bon schéma, c'est comme une maison bien fondée. Sans cela, tout s'effondre plus vite que mes régimes de janvier.",
        practiceDescription: "Concevez un schéma pour une application de blog avec des utilisateurs, des messages, des commentaires et des catégories.",
        quizQuestions: {
          "q2-2-1": {
            question: "Qu'est-ce qu'un schéma de base de données ?",
            options: [
              "Un type de base de données",
              "La structure qui définit les tables, les colonnes et les relations",
              "Un langage de requête",
              "Un système de sauvegarde"
            ],
            explanation: "Un schéma de base de données est la structure qui définit comment les données sont organisées, y compris les tables, les colonnes, les relations et les contraintes."
          },
          "q2-2-2": {
            question: "Quel type de relation connecte les Utilisateurs aux Messages où chaque utilisateur peut avoir plusieurs messages ?",
            options: ["Un-à-Un", "Un-à-Plusieurs", "Plusieurs-à-Plusieurs", "Plusieurs-à-Un"],
            explanation: "La relation Un-à-Plusieurs permet à un utilisateur d'avoir plusieurs messages, mais chaque message n'appartient qu'à un seul utilisateur."
          },
          "q2-2-3": {
            question: "Que signifie RLS dans Supabase ?",
            options: [
              "Streaming en direct en temps réel",
              "Sécurité au niveau des lignes (Row Level Security)",
              "Système logique relationnel",
              "Service de connexion à distance"
            ],
            explanation: "La sécurité au niveau des lignes (RLS) contrôle quels utilisateurs peuvent accéder à quelles lignes dans une table en fonction de politiques."
          },
          "q2-2-4": {
            question: "Pourquoi devriez-vous utiliser UUID pour les clés primaires ?",
            options: [
              "Ils sont plus petits que les entiers",
              "Ils offrent une meilleure distribution et évitent les conflits",
              "Ils sont plus faciles à retenir",
              "Ils sont requis par Supabase"
            ],
            explanation: "Les UUID offrent une meilleure distribution entre les systèmes et évitent les conflits lors de la fusion de données provenant de différentes sources."
          }
        }
      },
      "lesson-2-3": {
        title: "Edge Functions : Puissance illimitée",
        objective: "Créer et gérer des Edge Functions",
        content: "# Edge Functions : Puissance illimitée\n\nBienvenue du côté puissant de Supabase ! Les Edge Functions, c'est comme avoir des super-pouvoirs pour votre backend.\n\n## Que sont les Edge Functions ?\n\nLes Edge Functions sont des fonctions serverless qui s'exécutent sur le réseau périphérique mondial de Supabase. Considérez-les comme :\n- Des **mini-serveurs** qui exécutent votre logique personnalisée\n- Des **points de terminaison d'API** que vous pouvez entièrement personnaliser\n- Des **gestionnaires d'événements** qui réagissent aux modifications de la base de données\n- Des **processeurs de données** qui transforment les informations\n\n## Pourquoi les Edge Functions déchirent :\n\n### ⚡ **Performances**\n- S'exécutent près de vos utilisateurs dans le monde entier\n- Temps de réponse inférieurs à 100 ms\n- Mise à l'échelle automatique en fonction de la demande\n\n### 🔒 **Sécurité**\n- Exécution côté serveur (les secrets restent secrets)\n- Contexte d'authentification intégré\n- Intégration de la sécurité au niveau des lignes (RLS)\n\n### 🛠️ **Flexibilité**\n- Utilisez n'importe quel code JavaScript/TypeScript\n- Accès à l'écosystème Node.js complet\n- Implémentation de la logique métier personnalisée\n\n## Cas d'utilisation courants :\n\n### **1. Intégrations d'API**\n- Traitement des paiements avec Stripe\n- Envoi d'e-mails avec SendGrid\n- Intégrations de médias sociaux\n- Appels d'API tierces\n\n### **2. Traitement des données**\n- Redimensionnement et optimisation d'images\n- Validation et nettoyage des données\n- Calculs complexes\n- Génération de rapports\n\n### **3. Webhooks**\n- Confirmations de paiement\n- Notifications aux utilisateurs\n- Synchronisation des données\n- Mises à jour en temps réel\n\n### **4. Logique d'authentification**\n- Authentification multi-facteurs\n- Validation utilisateur personnalisée\n- Autorisations basées sur les rôles\n- OAuth tiers",
        learningObjectives: [
          "Comprendre ce que sont les Edge Functions et leurs avantages",
          "Créer et déployer des Edge Functions dans Supabase",
          "Mettre en œuvre des cas d'utilisation courants comme les intégrations d'API",
          "Appliquer les meilleures pratiques de sécurité pour les fonctions serverless"
        ],
        badgeName: "Seigneur de la Périphérie",
        srcodeCommentary: "Les Edge Functions, c'est comme avoir des super-pouvoirs. Utilisez-les à bon escient, jeune Padawan 🌟",
        practiceDescription: "Créez une Edge Function qui valide les adresses e-mail et vérifie si elles proviennent de services d'e-mail jetables.",
        quizQuestions: {
          "q2-3-1": {
            question: "Que sont les Edge Functions ?",
            options: [
              "Des requêtes de base de données qui s'exécutent plus rapidement",
              "Des fonctions serverless qui s'exécutent sur le réseau périphérique mondial de Supabase",
              "Des composants frontend",
              "Des fonctions de style CSS"
            ],
            explanation: "Les Edge Functions sont des fonctions serverless qui s'exécutent sur le réseau périphérique mondial de Supabase, fournissant une logique backend rapide et évolutive."
          },
          "q2-3-2": {
            question: "Quand devriez-vous utiliser les Edge Functions plutôt que les routes API ?",
            options: [
              "Toujours utiliser les Edge Functions",
              "Lorsque vous avez besoin d'une logique côté serveur, d'appels d'API externes ou d'une authentification personnalisée",
              "Uniquement pour les opérations de base de données",
              "Ne jamais utiliser les Edge Functions"
            ],
            explanation: "Les Edge Functions sont idéales pour la logique côté serveur, les intégrations d'API externes, le traitement des paiements et toute logique nécessitant des secrets."
          },
          "q2-3-3": {
            question: "Comment gérez-vous les erreurs dans les Edge Functions ?",
            options: [
              "Les ignorer",
              "Utiliser des blocs try-catch et renvoyer des réponses d'erreur appropriées",
              "Les laisser planter la fonction",
              "Seulement les consigner dans la console"
            ],
            explanation: "Une gestion appropriée des erreurs avec des blocs try-catch et des réponses d'erreur significatives garantit des fonctions robustes."
          },
          "q2-3-4": {
            question: "Où devez-vous stocker les clés API dans les Edge Functions ?",
            options: [
              "Directement dans le code",
              "Dans les commentaires",
              "Dans des variables d'environnement",
              "Dans le nom de la fonction"
            ],
            explanation: "Les variables d'environnement gardent vos clés API et secrets en sécurité et séparés de votre code."
          }
        }
      },
      "lesson-3-1": {
        title: "Bases de l'authentification : Qui êtes-vous ?",
        objective: "Mettre en place une connexion/inscription de base",
        content: "# Bases de l'authentification : Qui êtes-vous ?\n\nL'authentification consiste à vérifier l'identité déclarée d'une personne. C'est comme vérifier une pièce d'identité à l'entrée.\n\n## Authentification vs Autorisation\n- **Authentification** : Qui êtes-vous ? (Connexion)\n- **Autorisation** : Que pouvez-vous faire ? (Permissions)\n\n## Fonctionnalités d'authentification de Supabase :\n- Authentification par e-mail/mot de passe\n- Connexion sociale (Google, GitHub, etc.)\n- Liens magiques (sans mot de passe)\n- Jetons JWT pour les sessions\n- Intégration de la sécurité au niveau des lignes (RLS)\n\n## Implémentation de base :\n1. Configurez Supabase Auth\n2. Créez des fonctions d'inscription/connexion\n3. Gérez les changements d'état d'authentification\n4. Mettez en place une gestion des erreurs appropriée\n\n## Meilleures pratiques :\n- Validez le format de l'e-mail\n- Imposez des mots de passe forts\n- Utilisez HTTPS partout\n- Gérez correctement les cas limites",
        learningObjectives: [
          "Comprendre les concepts et la terminologie de l'authentification",
          "Mettre en œuvre l'inscription et la connexion des utilisateurs avec Supabase",
          "Créer des formulaires d'authentification avec une validation appropriée",
          "Gérer l'état d'authentification dans les applications React"
        ],
        badgeName: "Gardien Numérique",
        srcodeCommentary: "Supabase Auth est si facile que même moi, je pourrais le faire... et je suis une IA sans doigts 🤖",
        practiceDescription: "Construisez un système d'authentification complet avec des fonctionnalités d'inscription, de connexion et de déconnexion.",
        quizQuestions: {
          "q3-1-1": {
            question: "Quelle est la différence entre l'authentification et l'autorisation ?",
            options: [
              "C'est la même chose",
              "L'authentification vérifie l'identité, l'autorisation détermine les permissions",
              "L'autorisation vérifie l'identité, l'authentification détermine les permissions",
              "Il n'y a pas de différence"
            ],
            explanation: "L'authentification répond à 'qui êtes-vous ?' tandis que l'autorisation répond à 'que pouvez-vous faire ?'"
          },
          "q3-1-2": {
            question: "Comment Supabase gère-t-il la sécurité des mots de passe ?",
            options: [
              "Les mots de passe sont stockés en texte clair",
              "Les mots de passe sont automatiquement hachés et sécurisés",
              "Les utilisateurs doivent hacher leurs propres mots de passe",
              "Les mots de passe sont chiffrés avec un algorithme simple"
            ],
            explanation: "Supabase gère automatiquement le hachage des mots de passe en utilisant des algorithmes standard de l'industrie."
          },
          "q3-1-3": {
            question: "Que devez-vous valider lorsqu'un utilisateur s'inscrit ?",
            options: [
              "Seulement le format de l'e-mail",
              "Seulement la force du mot de passe",
              "Le format de l'e-mail, la force du mot de passe et la confirmation du mot de passe",
              "Rien - faites confiance à l'utilisateur"
            ],
            explanation: "Une validation appropriée inclut le format de l'e-mail, les exigences de force du mot de passe et la confirmation du mot de passe."
          },
          "q3-1-4": {
            question: "Comment écoutez-vous les changements d'état d'authentification dans Supabase ?",
            options: [
              "Vérifier manuellement chaque seconde",
              "Utiliser supabase.auth.onAuthStateChange()",
              "Actualiser la page",
              "L'état d'authentification ne change jamais"
            ],
            explanation: "supabase.auth.onAuthStateChange() fournit des mises à jour en temps réel lorsque l'état d'authentification change."
          }
        }
      },
      "lesson-3-2": {
        title: "Protéger les routes comme Fort Knox",
        objective: "Middleware et protection des routes",
        content: "# Protéger les routes comme Fort Knox\n\nLa protection des routes garantit que seuls les utilisateurs autorisés accèdent au contenu protégé.\n\n## Types de routes protégées :\n- **Authentification requise** : Tableau de bord, profil\n- **Accès basé sur les rôles** : Panneaux d'administration, outils de modération\n- **Accès conditionnel** : Fonctionnalités d'abonnement\n\n## Modèles d'implémentation :\n1. Composant de route protégée\n2. Gardes de route basés sur les rôles\n3. Protection basée sur l'abonnement\n4. Sécurité au niveau des lignes (RLS)\n\n## Meilleures pratiques :\n- Validez côté client et côté serveur\n- Affichez des états de chargement pendant les vérifications d'authentification\n- Fournissez des messages d'erreur clairs\n- Utilisez RLS pour la protection au niveau de la base de données\n\n## Tests :\n- Testez avec différents types d'utilisateurs\n- Testez les sessions expirées\n- Testez les cas limites",
        learningObjectives: [
          "Mettre en œuvre une protection des routes basée sur l'authentification",
          "Créer des systèmes de contrôle d'accès basés sur les rôles",
          "Utiliser efficacement les gardes de React Router",
          "Appliquer la sécurité au niveau des lignes (RLS) pour la protection des données"
        ],
        badgeName: "Gardien de Nuit",
        srcodeCommentary: "Une route non protégée, c'est comme laisser sa porte ouverte avec un panneau 'entrée libre'. Spoiler : personne ne respecte ces panneaux.",
        practiceDescription: "Créez un système de protection des routes à plusieurs niveaux avec différents niveaux d'accès.",
        quizQuestions: {
          "q3-2-1": {
            question: "Quel est le but de la protection des routes ?",
            options: [
              "Rendre l'application plus rapide",
              "S'assurer que seuls les utilisateurs autorisés peuvent accéder à certaines pages",
              "Améliorer le SEO",
              "Réduire la taille du bundle"
            ],
            explanation: "La protection des routes garantit que seuls les utilisateurs authentifiés et autorisés peuvent accéder aux pages protégées."
          },
          "q3-2-2": {
            question: "Que devez-vous faire pendant la vérification de l'état d'authentification ?",
            options: [
              "Afficher un message d'erreur",
              "Rediriger immédiatement",
              "Afficher un état de chargement",
              "Masquer toute la page"
            ],
            explanation: "Vous devez afficher un état de chargement pendant la vérification de l'authentification pour offrir une bonne expérience utilisateur."
          },
          "q3-2-3": {
            question: "Qu'est-ce que la sécurité au niveau des lignes (RLS) ?",
            options: [
              "Protection des routes côté client",
              "Sécurité au niveau de la base de données qui contrôle les lignes auxquelles les utilisateurs peuvent accéder",
              "Un composant React",
              "Un type d'authentification"
            ],
            explanation: "La sécurité au niveau des lignes (RLS) est une fonctionnalité de base de données qui contrôle les lignes que les utilisateurs peuvent voir et modifier."
          },
          "q3-2-4": {
            question: "Pourquoi devriez-vous valider les permissions côté client et côté serveur ?",
            options: [
              "Ce n'est pas nécessaire",
              "Côté client pour l'UX, côté serveur pour la sécurité",
              "Seule la validation côté serveur compte",
              "Seule la validation côté client est nécessaire"
            ],
            explanation: "La validation côté client fournit un retour immédiat, tandis que la validation côté serveur garantit la sécurité."
          }
        }
      },
      "lesson-3-3": {
        title: "Authentification sociale : La voie facile",
        objective: "Mettre en œuvre la connexion Google/GitHub",
        content: "# Authentification sociale : La voie facile\n\nPourquoi obliger les utilisateurs à se souvenir d'un autre mot de passe alors qu'ils peuvent simplement cliquer sur 'Se connecter avec Google' ?\n\n## Avantages de l'authentification sociale :\n- Pas de nouveau mot de passe à retenir\n- Processus d'inscription plus rapide\n- Fournisseur d'authentification de confiance\n- Taux de conversion plus élevés\n\n## Étapes d'implémentation :\n1. Configurez les fournisseurs OAuth (Google, GitHub)\n2. Configurez l'authentification sociale Supabase\n3. Mettez en œuvre les boutons de connexion sociale\n4. Gérez les données de profil utilisateur\n5. Gérez la liaison de comptes\n\n## Considérations de sécurité :\n- Validez les URL de redirection\n- Utilisez HTTPS en production\n- Gérez correctement les conflits d'e-mails\n- Stockez un minimum de données utilisateur\n\n## Meilleures pratiques :\n- Fournissez des messages d'erreur clairs\n- Gérez les bloqueurs de fenêtres contextuelles\n- Testez avec différents fournisseurs\n- Surveillez les taux de conversion",
        learningObjectives: [
          "Mettre en œuvre l'authentification sociale Google et GitHub",
          "Gérer les données d'authentification sociale et les profils utilisateur",
          "Gérer plusieurs comptes liés par utilisateur",
          "Appliquer les meilleures pratiques de sécurité en matière d'authentification sociale"
        ],
        badgeName: "Papillon Social",
        srcodeCommentary: "Pourquoi se souvenir d'un autre mot de passe quand Google sait déjà tout de vous ? Profitez de la commodité 😎",
        practiceDescription: "Mettez en œuvre un système d'authentification sociale complet avec Google et GitHub.",
        quizQuestions: {
          "q3-3-1": {
            question: "Quel est le principal avantage de l'authentification sociale pour les utilisateurs ?",
            options: [
              "C'est plus sécurisé que les mots de passe",
              "Ils n'ont pas besoin de créer et de se souvenir d'un autre mot de passe",
              "C'est plus rapide à mettre en œuvre",
              "Cela fonctionne hors ligne"
            ],
            explanation: "L'authentification sociale élimine le besoin pour les utilisateurs de créer et de se souvenir d'un autre mot de passe."
          },
          "q3-3-2": {
            question: "Où configurez-vous les URI de redirection OAuth ?",
            options: [
              "Dans votre code frontend",
              "Dans la base de données Supabase",
              "Dans la console développeur du fournisseur",
              "Dans votre package.json"
            ],
            explanation: "Les URI de redirection OAuth doivent être configurées dans la console développeur de chaque fournisseur pour des raisons de sécurité."
          },
          "q3-3-3": {
            question: "Comment gérez-vous plusieurs comptes sociaux pour un seul utilisateur ?",
            options: [
              "Créer des comptes utilisateur séparés",
              "Utiliser la liaison de comptes pour connecter plusieurs fournisseurs à un seul utilisateur",
              "N'autoriser qu'un seul fournisseur par utilisateur",
              "Fusionner les comptes automatiquement"
            ],
            explanation: "La liaison de comptes permet aux utilisateurs de connecter plusieurs fournisseurs sociaux à un seul compte utilisateur."
          },
          "q3-3-4": {
            question: "Que devez-vous faire en cas de conflit d'e-mails ?",
            options: [
              "Créer un compte en double",
              "Rejeter complètement l'inscription",
              "Suggérer de lier le compte ou de se connecter avec le fournisseur d'origine",
              "Supprimer le compte existant"
            ],
            explanation: "En cas de conflit d'e-mails, guidez les utilisateurs pour qu'ils lient leur compte ou se connectent avec leur méthode d'origine."
          }
        }
      },
      "lesson-4-1": {
        title: "Netlify : Votre meilleur ami pour le déploiement",
        objective: "Déployer en utilisant l'intégration Netlify",
        content: "# Netlify : Votre meilleur ami pour le déploiement\n\nIl est temps de déployer votre création dans le monde entier ! Netlify rend le déploiement magique.\n\n## Qu'est-ce que Netlify ?\n- Hébergement de sites statiques avec CDN mondial\n- Fonctions Serverless\n- Déploiement continu\n- Gestion des formulaires\n- Tests A/B (Split Testing)\n\n## Processus de déploiement :\n1. Préparez votre projet (scripts de build, variables d'environnement)\n2. Déployez depuis bolt.new (en un clic)\n3. Configurez les variables d'environnement\n4. Configurez un domaine personnalisé\n5. Surveillez les performances\n\n## Conseils d'optimisation :\n- Chargez les composants en différé (Lazy loading)\n- Optimisez les images\n- Utilisez la division du code (code splitting)\n- Activez la compression\n- Mettez en place une mise en cache appropriée\n\n## Meilleures pratiques :\n- Utilisez des variables d'environnement\n- Configurez les redirections pour les SPA\n- Surveillez les journaux de build\n- Testez la version déployée",
        learningObjectives: [
          "Déployer des applications sur Netlify depuis bolt.new",
          "Configurer les variables d'environnement pour la production",
          "Optimiser les applications pour le déploiement en production",
          "Dépanner les problèmes de déploiement courants"
        ],
        badgeName: "Lanceur Spatial",
        srcodeCommentary: "Netlify + bolt.new, c'est comme Batman et Robin, mais pour le déploiement. Et oui, c'est vous Robin dans cette analogie 🦸‍♂️",
        practiceDescription: "Déployez une application complète sur Netlify avec une configuration appropriée des variables d'environnement.",
        quizQuestions: {
          "q4-1-1": {
            question: "Quelle est la commande de build correcte pour un projet Vite dans Netlify ?",
            options: ["npm start", "npm run build", "npm run dev", "vite build"],
            explanation: "La commande de build 'npm run build' exécute le script de build défini dans package.json."
          },
          "q4-1-2": {
            question: "Où les variables d'environnement doivent-elles être configurées pour la production ?",
            options: [
              "Dans le code source",
              "Dans le fichier .env commité sur Git",
              "Dans la section des variables d'environnement de Netlify",
              "Dans package.json"
            ],
            explanation: "Les variables d'environnement doivent être configurées dans le tableau de bord de Netlify pour des raisons de sécurité."
          },
          "q4-1-3": {
            question: "Quelle règle de redirection est essentielle pour les SPA (Single Page Applications) ?",
            options: [
              "/api/* /backend/:splat 200",
              "/* /index.html 200",
              "/old /new 301",
              "/404 /error 200"
            ],
            explanation: "La redirection '/* /index.html 200' garantit que toutes les routes sont gérées par le routage côté client de la SPA."
          },
          "q4-1-4": {
            question: "Comment optimisez-vous une application React pour la production ?",
            options: [
              "Simplement exécuter npm run build",
              "Utiliser le lazy loading, le code splitting et supprimer les console.logs",
              "Minifier seulement le code",
              "L'optimisation n'est pas nécessaire"
            ],
            explanation: "L'optimisation pour la production inclut le lazy loading, le code splitting et la suppression du code de développement."
          }
        }
      },
      "lesson-4-2": {
        title: "Domaines personnalisés : Votre marque personnelle",
        objective: "Configurer des domaines personnalisés",
        content: "# Domaines personnalisés : Votre marque personnelle\n\nIl est temps de donner à votre application une adresse professionnelle !\n\n## Pourquoi les domaines personnalisés sont-ils importants ?\n- Apparence professionnelle\n- Reconnaissance de la marque\n- Meilleur SEO\n- Confiance des utilisateurs\n- Plus facile à retenir\n\n## Processus de configuration :\n1. Achetez un domaine\n2. Configurez les paramètres DNS\n3. Ajoutez le domaine à Netlify\n4. Vérifiez le certificat SSL\n5. Testez tout\n\n## Configuration DNS :\n- Enregistrement A : Pointe vers l'équilibreur de charge de Netlify\n- CNAME : Pointe le sous-domaine vers Netlify\n- SSL : Automatique avec Let's Encrypt\n\n## Meilleures pratiques :\n- Utilisez HTTPS partout\n- Configurez les redirections www\n- Surveillez les certificats SSL\n- Testez depuis différents endroits",
        learningObjectives: [
          "Acheter et configurer des domaines personnalisés",
          "Configurer correctement les enregistrements DNS",
          "Vérifier les certificats SSL",
          "Mettre en œuvre les meilleures pratiques en matière de domaines"
        ],
        badgeName: "Seigneur des Domaines",
        srcodeCommentary: "Un domaine personnalisé, c'est comme avoir une adresse élégante. Fini les 'mon-appli-aleatoire-123.netlify.app'",
        practiceDescription: "Configurez un domaine personnalisé pour votre application déployée avec une configuration DNS appropriée.",
        quizQuestions: {
          "q4-2-1": {
            question: "Quel type d'enregistrement DNS devez-vous utiliser pour faire pointer votre domaine racine vers Netlify ?",
            options: ["CNAME", "Enregistrement A", "Enregistrement MX", "Enregistrement TXT"],
            explanation: "Un enregistrement A est utilisé pour faire pointer le domaine racine vers l'adresse IP de Netlify."
          },
          "q4-2-2": {
            question: "Comment Netlify gère-t-il les certificats SSL ?",
            options: [
              "Vous devez les acheter séparément",
              "SSL automatique avec Let's Encrypt",
              "Le SSL n'est pas pris en charge",
              "Seuls les plans payants bénéficient du SSL"
            ],
            explanation: "Netlify fournit automatiquement des certificats SSL en utilisant Let's Encrypt pour tous les sites."
          },
          "q4-2-3": {
            question: "Que devez-vous faire avec le sous-domaine www ?",
            options: [
              "L'ignorer complètement",
              "Configurer une redirection vers votre domaine principal",
              "L'utiliser comme domaine principal",
              "Supprimer l'enregistrement www"
            ],
            explanation: "Il est recommandé de configurer une redirection de www vers votre domaine principal (ou vice versa) par souci de cohérence."
          },
          "q4-2-4": {
            question: "Combien de temps prend généralement la propagation DNS ?",
            options: [
              "Immédiatement",
              "Jusqu'à 48 heures",
              "Exactement 24 heures",
              "Une semaine"
            ],
            explanation: "La propagation DNS peut prendre jusqu'à 48 heures pour se terminer dans le monde entier, bien qu'elle soit souvent plus rapide."
          }
        }
      },
      "lesson-4-3": {
        title: "CI/CD : Le futur, c'est maintenant",
        objective: "Configurer les déploiements automatiques avec GitHub",
        content: "# CI/CD : Le futur, c'est maintenant\n\nIntégration continue et déploiement continu - votre majordome personnel de déploiement !\n\n## Qu'est-ce que CI/CD ?\n- **CI** : Intégration Continue (tests automatisés)\n- **CD** : Déploiement Continu (déploiement automatisé)\n- Pousser le code → Tests exécutés → Déploiement automatique\n\n## Avantages :\n- Cycles de développement plus rapides\n- Réduction des erreurs humaines\n- Déploiements cohérents\n- Tests automatiques\n- Annulations (Rollbacks) faciles\n\n## Configuration de GitHub Actions :\n1. Connectez le dépôt GitHub\n2. Configurez les déclencheurs de build\n3. Mettez en place le pipeline de test\n4. Déployez en cas de tests réussis\n5. Surveillez l'état du déploiement\n\n## Meilleures pratiques :\n- Testez avant de déployer\n- Utilisez des environnements de préproduction (staging)\n- Surveillez les métriques de déploiement\n- Configurez des notifications\n- Planifiez des stratégies d'annulation (rollback)",
        learningObjectives: [
          "Comprendre les concepts et les avantages de CI/CD",
          "Configurer des déploiements automatisés avec GitHub",
          "Configurer des pipelines de test",
          "Mettre en œuvre les meilleures pratiques de déploiement"
        ],
        badgeName: "Maître de l'Automatisation",
        srcodeCommentary: "CI/CD, c'est comme avoir un majordome qui fait tout pour vous. Sauf que vous n'avez pas besoin de le payer ni de lui donner des jours de congé.",
        practiceDescription: "Mettez en place un pipeline CI/CD complet avec GitHub Actions pour des tests et des déploiements automatisés.",
        quizQuestions: {
          "q4-3-1": {
            question: "Que signifie CI/CD ?",
            options: [
              "Intégration de Code/Déploiement de Code",
              "Intégration Continue/Déploiement Continu",
              "Intégration Centrale/Déploiement Central",
              "Intégration Personnalisée/Déploiement Personnalisé"
            ],
            explanation: "CI/CD signifie Intégration Continue et Déploiement Continu."
          },
          "q4-3-2": {
            question: "Que se passe-t-il dans un pipeline CI/CD typique ?",
            options: [
              "Seulement le déploiement du code",
              "Seulement les tests",
              "Poussée du code → Exécution des tests → Déploiement si les tests réussissent",
              "Déploiement manuel uniquement"
            ],
            explanation: "Un pipeline CI/CD typique exécute automatiquement les tests lorsque le code est poussé et ne déploie que si les tests réussissent."
          },
          "q4-3-3": {
            question: "Quel est le principal avantage du déploiement automatisé ?",
            options: [
              "C'est plus cher",
              "Réduit les erreurs humaines et accélère le développement",
              "Cela demande plus de travail manuel",
              "C'est seulement pour les grandes entreprises"
            ],
            explanation: "Le déploiement automatisé réduit les erreurs humaines, accélère les cycles de développement et garantit des déploiements cohérents."
          },
          "q4-3-4": {
            question: "Quand devez-vous déployer en production ?",
            options: [
              "Immédiatement après avoir écrit le code",
              "Seulement après que les tests aient réussi et que la revue de code soit terminée",
              "Une fois par an",
              "Ne jamais utiliser l'automatisation"
            ],
            explanation: "Le code ne doit être déployé en production qu'après avoir passé tous les tests et terminé les processus de revue de code."
          }
        }
      },
      "lesson-5-1": {
        title: "GitHub : Votre filet de sécurité",
        objective: "Finaliser l'intégration de GitHub",
        content: "# GitHub : Votre filet de sécurité\n\nGitHub, c'est comme une assurance pour votre code - vous ne savez jamais quand vous en aurez besoin jusqu'à ce que vous en ayez BESOIN D'URGENCE !\n\n## Pourquoi l'intégration GitHub est-elle importante ?\n- Contrôle de version et historique\n- Capacités de collaboration\n- Sauvegarde et récupération\n- Partage de code et open source\n- Portfolio professionnel\n\n## Fonctionnalités clés :\n- Gestion des dépôts\n- Stratégies de branches\n- Pull requests et revue de code\n- Tickets (Issues) et gestion de projet\n- GitHub Actions pour CI/CD\n\n## Meilleures pratiques :\n- Committez tôt et souvent\n- Rédigez des messages de commit significatifs\n- Utilisez des branches pour les fonctionnalités\n- Révisez le code avant de fusionner\n- Gardez les dépôts organisés\n\n## Intégration avec bolt.new :\n1. Connectez votre compte GitHub\n2. Créez un dépôt\n3. Configurez la synchronisation automatique\n4. Configurez les webhooks\n5. Activez les fonctionnalités collaboratives",
        learningObjectives: [
          "Configurer l'intégration de GitHub avec bolt.new",
          "Comprendre les flux de travail Git et les meilleures pratiques",
          "Mettre en œuvre des processus de développement collaboratif",
          "Utiliser GitHub pour la gestion de projet"
        ],
        badgeName: "Gourou de Git",
        srcodeCommentary: "GitHub, c'est comme une assurance auto pour votre code. Vous ne savez jamais quand vous en aurez besoin jusqu'à ce que vous en ayez BESOIN D'URGENCE.",
        practiceDescription: "Configurez un dépôt GitHub pour votre projet et entraînez-vous à faire des commits, des branches et des pull requests.",
        quizQuestions: {
          "q5-1-1": {
            question: "Quel est l'objectif principal du contrôle de version ?",
            options: [
              "Rendre le code plus lent",
              "Suivre les modifications et permettre la collaboration",
              "Supprimer l'ancien code",
              "Rendre le code plus difficile à lire"
            ],
            explanation: "Le contrôle de version suit les modifications au fil du temps et permet à plusieurs développeurs de collaborer en toute sécurité."
          },
          "q5-1-2": {
            question: "Qu'est-ce qu'une branche dans Git ?",
            options: [
              "Un composant d'arbre",
              "Une version parallèle de la base de code pour développer des fonctionnalités",
              "Un type de commit",
              "Un paramètre GitHub"
            ],
            explanation: "Une branche est une version parallèle de la base de code qui vous permet de développer des fonctionnalités sans affecter le code principal."
          },
          "q5-1-3": {
            question: "Que doit inclure un bon message de commit ?",
            options: [
              "Un texte aléatoire",
              "Une description claire des modifications apportées",
              "Vos informations personnelles",
              "Seulement la date actuelle"
            ],
            explanation: "Un bon message de commit décrit clairement les modifications apportées et pourquoi."
          },
          "q5-1-4": {
            question: "Qu'est-ce qu'une pull request ?",
            options: [
              "Une demande de suppression de code",
              "Une demande de fusion des modifications d'une branche à une autre",
              "Une demande de fonctionnalités supplémentaires",
              "Une demande de téléchargement de code"
            ],
            explanation: "Une pull request est une demande de fusion des modifications d'une branche dans une autre, permettant la revue du code."
          }
        }
      },
      "lesson-5-2": {
        title: "Stripe : Montrez-moi l'argent !",
        objective: "Intégrer les paiements avec Stripe",
        content: "# Stripe : Montrez-moi l'argent !\n\nIl est temps de monétiser votre chef-d'œuvre ! Stripe rend l'acceptation des paiements si facile que vous pourriez vendre de l'eau en bouteille à des poissons.\n\n## Pourquoi Stripe ?\n- Sécurité de pointe\n- Méthodes de paiement mondiales\n- API conviviales pour les développeurs\n- Documentation complète\n- Modèles de tarification flexibles\n\n## Concepts de base :\n- **Payment Intents** : Traitement sécurisé des paiements\n- **Customers** : Gestion des utilisateurs\n- **Subscriptions** : Paiements récurrents\n- **Webhooks** : Notifications en temps réel\n- **Products** : Ce que vous vendez\n\n## Étapes d'implémentation :\n1. Créez un compte Stripe\n2. Configurez les produits et la tarification\n3. Mettez en œuvre les formulaires de paiement\n4. Gérez les webhooks\n5. Testez minutieusement\n\n## Meilleures pratiques de sécurité :\n- Utilisez HTTPS partout\n- Validez côté serveur\n- Gérez la conformité PCI\n- Sécurisez les points de terminaison des webhooks\n- Ne stockez jamais les données de carte",
        learningObjectives: [
          "Configurer le traitement des paiements Stripe",
          "Mettre en œuvre les paiements uniques et par abonnement",
          "Gérer les webhooks pour les événements de paiement",
          "Appliquer les meilleures pratiques de sécurité des paiements"
        ],
        badgeName: "Faiseur d'Argent",
        srcodeCommentary: "Stripe rend la facturation si facile que vous pourriez vendre de l'eau en bouteille à des poissons. Mais s'il vous plaît, ne le faites pas.",
        practiceDescription: "Mettez en œuvre un système de paiement complet avec des paiements uniques et des abonnements en utilisant Stripe.",
        quizQuestions: {
          "q5-2-1": {
            question: "Qu'est-ce qu'un Payment Intent dans Stripe ?",
            options: [
              "Le souhait d'un client d'acheter quelque chose",
              "Un objet sécurisé qui représente votre intention de collecter un paiement",
              "Un type de carte de crédit",
              "Un employé de Stripe"
            ],
            explanation: "Un Payment Intent est un objet sécurisé qui suit l'ensemble du processus de paiement, de la création à la finalisation."
          },
          "q5-2-2": {
            question: "Où devez-vous stocker les informations de carte de crédit ?",
            options: [
              "Dans votre base de données",
              "Dans le stockage local",
              "Ne jamais les stocker - laissez Stripe s'en occuper",
              "Dans les cookies"
            ],
            explanation: "Vous ne devez jamais stocker vous-même les informations de carte de crédit - laissez Stripe gérer toutes les données de paiement sensibles."
          },
          "q5-2-3": {
            question: "À quoi servent les webhooks dans Stripe ?",
            options: [
              "À attraper du poisson",
              "À recevoir des notifications en temps réel sur les événements de paiement",
              "À stocker les données des clients",
              "À traiter les remboursements"
            ],
            explanation: "Les webhooks notifient votre application en temps réel lorsque des événements de paiement se produisent, comme des paiements réussis ou des frais échoués."
          },
          "q5-2-4": {
            question: "Pourquoi HTTPS est-il requis pour le traitement des paiements ?",
            options: [
              "Ce n'est pas requis",
              "Pour crypter les données de paiement sensibles en transit",
              "Pour rendre le site plus rapide",
              "Pour un meilleur SEO"
            ],
            explanation: "HTTPS crypte toutes les données entre l'utilisateur et votre serveur, protégeant les informations de paiement sensibles."
          }
        }
      },
      "lesson-5-3": {
        title: "De Figma au code : Pure magie",
        objective: "Importer des designs depuis Figma",
        content: "# De Figma au code : Pure magie\n\nTransformer de magnifiques designs en code fonctionnel - c'est comme être un sorcier numérique !\n\n## Qu'est-ce que Figma vers Code ?\n- Conversion automatique du design en code\n- Implémentations au pixel près\n- Prise en charge du design réactif\n- Extraction de composants\n- Génération de styles\n\n## Avantages :\n- Développement plus rapide\n- Cohérence du design\n- Réduction du codage manuel\n- Meilleure collaboration designer-développeur\n- Résultats au pixel près\n\n## Processus :\n1. Préparez les designs Figma\n2. Utilisez les outils Figma vers Code\n3. Révisez le code généré\n4. Personnalisez et optimisez\n5. Intégrez à votre application\n\n## Meilleures pratiques :\n- Organisez correctement les calques Figma\n- Utilisez une dénomination cohérente\n- Créez des composants réutilisables\n- Testez le comportement réactif\n- Optimisez le code généré",
        learningObjectives: [
          "Convertir des designs Figma en code fonctionnel",
          "Optimiser le code généré pour la production",
          "Maintenir la cohérence du design",
          "Mettre en œuvre des modèles de design réactif"
        ],
        badgeName: "Traducteur de Design",
        srcodeCommentary: "Figma vers Code, c'est comme Google Traduction mais pour les designers. Et ça marche mieux que Google Traduction avec l'espagnol 😂",
        practiceDescription: "Convertissez un design Figma complet en composants React fonctionnels et intégrez-les dans votre application.",
        quizQuestions: {
          "q5-3-1": {
            question: "Quel est le principal avantage de la conversion Figma vers Code ?",
            options: [
              "Cela dégrade l'apparence des designs",
              "Cela accélère le développement et garantit la cohérence du design",
              "C'est uniquement pour les applications mobiles",
              "Cela ne nécessite aucune compétence en design"
            ],
            explanation: "La conversion Figma vers Code accélère le développement tout en maintenant une cohérence de design au pixel près."
          },
          "q5-3-2": {
            question: "Que devez-vous faire avec le code généré ?",
            options: [
              "L'utiliser tel quel",
              "Le réviser, l'optimiser et le personnaliser selon vos besoins",
              "Le supprimer immédiatement",
              "Ne jamais modifier le code généré"
            ],
            explanation: "Le code généré doit être révisé, optimisé et personnalisé pour répondre à vos besoins spécifiques et à vos normes de codage."
          },
          "q5-3-3": {
            question: "Comment devez-vous organiser les designs Figma pour une meilleure génération de code ?",
            options: [
              "Nommer tout de manière aléatoire",
              "Utiliser une dénomination cohérente et une organisation des calques",
              "Ne rien organiser",
              "Utiliser uniquement des calques de texte"
            ],
            explanation: "Une dénomination cohérente et une organisation appropriée des calques dans Figma permettent d'obtenir un code généré de meilleure qualité et plus facile à maintenir."
          },
          "q5-3-4": {
            question: "Que devez-vous prendre en compte lors de la conversion de designs en code ?",
            options: [
              "Uniquement les versions de bureau",
              "Le comportement réactif sur toutes les tailles d'appareils",
              "Uniquement les versions mobiles",
              "Les designs n'ont pas besoin d'être réactifs"
            ],
            explanation: "Vous devez toujours tenir compte du comportement réactif pour vous assurer que votre design fonctionne bien sur toutes les tailles d'appareils."
          }
        }
      },
      "lesson-6-1": {
        title: "Projet final : Application complète",
        objective: "Créer une application full-stack avec toutes les intégrations",
        content: "# Projet final : Application complète\n\nC'est votre moment Avengers : Endgame ! Il est temps d'utiliser tout ce que vous avez appris.\n\n## Exigences du projet :\n- Architecture full-stack\n- Authentification des utilisateurs\n- Intégration de base de données\n- Traitement des paiements\n- Fonctionnalités en temps réel\n- Déploiement professionnel\n\n## Phase de planification :\n1. Définissez la portée du projet\n2. Créez le schéma de la base de données\n3. Concevez les flux utilisateurs\n4. Planifiez l'implémentation des fonctionnalités\n5. Établissez un calendrier et des jalons\n\n## Liste de contrôle de l'implémentation :\n- [ ] Système d'authentification des utilisateurs\n- [ ] Conception et configuration de la base de données\n- [ ] Développement des fonctionnalités de base\n- [ ] Intégration des paiements\n- [ ] Fonctionnalités en temps réel\n- [ ] Tests et optimisation\n- [ ] Déploiement en production\n\n## Meilleures pratiques :\n- Organisation du code\n- Gestion des erreurs\n- Optimisation des performances\n- Considérations de sécurité\n- Expérience utilisateur",
        learningObjectives: [
          "Appliquer tous les concepts appris dans un projet complet",
          "Planifier et exécuter une application full-stack",
          "Mettre en œuvre des pratiques de développement professionnel",
          "Créer une application digne d'un portfolio"
        ],
        badgeName: "Maître Vibe Coding",
        srcodeCommentary: "C'est votre moment Avengers : Endgame. Il est temps d'utiliser tout ce que vous avez appris. Ne me décevez pas ! 🚀",
        practiceDescription: "Construisez une application full-stack complète intégrant toutes les technologies et tous les concepts des leçons précédentes.",
        quizQuestions: {
          "q6-1-1": {
            question: "Que devez-vous faire avant de commencer à coder votre projet final ?",
            options: [
              "Commencer à coder immédiatement",
              "Planifier la portée du projet, le schéma de la base de données et les flux utilisateurs",
              "Penser uniquement au design",
              "Sauter complètement la planification"
            ],
            explanation: "Une planification appropriée, comprenant la portée, la conception de la base de données et les flux utilisateurs, est essentielle à la réussite du projet."
          },
          "q6-1-2": {
            question: "Qu'est-ce qui constitue une application full-stack ?",
            options: [
              "Uniquement du code frontend",
              "Frontend, backend, base de données et déploiement",
              "Uniquement la base de données",
              "Juste un joli design"
            ],
            explanation: "Une application full-stack comprend le frontend, la logique backend, la base de données et un déploiement approprié."
          },
          "q6-1-3": {
            question: "Pourquoi les tests sont-ils importants dans votre projet final ?",
            options: [
              "Ce n'est pas important",
              "Pour s'assurer que les fonctionnalités fonctionnent correctement et détecter les bogues tôt",
              "Pour que le projet prenne plus de temps",
              "Seulement pour les grandes entreprises"
            ],
            explanation: "Les tests garantissent que votre application fonctionne correctement et aident à détecter les bogues avant que les utilisateurs ne les rencontrent."
          },
          "q6-1-4": {
            question: "Que devez-vous prendre en compte pour l'expérience utilisateur ?",
            options: [
              "Seulement l'apparence",
              "Les états de chargement, la gestion des erreurs et une navigation intuitive",
              "Juste les couleurs",
              "L'UX n'a pas d'importance"
            ],
            explanation: "Une bonne UX comprend les états de chargement, une gestion appropriée des erreurs, une navigation intuitive et un design réactif."
          }
        }
      },
      "lesson-6-2": {
        title: "Optimisation et performances",
        objective: "Optimiser l'application pour la production",
        content: "# Optimisation et performances\n\nUne application lente, c'est comme une blague mal racontée - personne n'a la patience d'attendre la chute.\n\n## Core Web Vitals :\n- **LCP** : Largest Contentful Paint (chargement)\n- **FID** : First Input Delay (interactivité)\n- **CLS** : Cumulative Layout Shift (stabilité visuelle)\n\n## Stratégies de performance :\n- Division du code (Code splitting) et chargement différé (lazy loading)\n- Optimisation des images\n- Stratégies de mise en cache\n- Optimisation de la taille du bundle\n- Optimisation des requêtes de base de données\n\n## Outils de surveillance :\n- Audits Lighthouse\n- Extension Web Vitals\n- Analyses de performances\n- Surveillance des utilisateurs réels (RUM)\n\n## Implémentation :\n1. Auditez les performances actuelles\n2. Identifiez les goulots d'étranglement\n3. Mettez en œuvre les optimisations\n4. Mesurez les améliorations\n5. Surveillez en continu\n\n## Meilleures pratiques :\n- Optimisez les images et les actifs\n- Minimisez les bundles JavaScript\n- Utilisez un CDN pour les actifs statiques\n- Mettez en place une mise en cache appropriée\n- Surveillez les métriques de performance",
        learningObjectives: [
          "Comprendre les Core Web Vitals et les métriques de performance",
          "Mettre en œuvre des techniques d'optimisation des performances",
          "Utiliser des outils de surveillance des performances",
          "Atteindre des performances prêtes pour la production"
        ],
        badgeName: "Démon de la Vitesse",
        srcodeCommentary: "Une application lente, c'est comme une blague mal racontée : personne n'a la patience d'attendre la chute.",
        practiceDescription: "Optimisez votre application pour atteindre un score Lighthouse de 95+ sur toutes les métriques.",
        quizQuestions: {
          "q6-2-1": {
            question: "Que mesure le LCP ?",
            options: [
              "La vitesse de chargement du plus grand élément de contenu",
              "Le temps de chargement total de la page",
              "Le temps d'exécution de JavaScript",
              "Le temps de requête de la base de données"
            ],
            explanation: "Le LCP (Largest Contentful Paint) mesure la rapidité avec laquelle le plus grand élément de contenu devient visible pour les utilisateurs."
          },
          "q6-2-2": {
            question: "Qu'est-ce que la division du code (code splitting) ?",
            options: [
              "Diviser le code en plusieurs fichiers de manière aléatoire",
              "Diviser le code en plus petits morceaux qui se chargent en cas de besoin",
              "Supprimer le code inutilisé",
              "Rendre le code plus difficile à lire"
            ],
            explanation: "La division du code (code splitting) divise votre application en plus petits morceaux qui sont chargés à la demande, réduisant ainsi la taille initiale du bundle."
          },
          "q6-2-3": {
            question: "Pourquoi devriez-vous optimiser les images ?",
            options: [
              "Pour les rendre moins belles",
              "Pour réduire la taille des fichiers et améliorer la vitesse de chargement",
              "Les images n'ont pas besoin d'être optimisées",
              "Pour augmenter la taille de la page"
            ],
            explanation: "L'optimisation des images réduit la taille des fichiers, ce qui améliore la vitesse de chargement et les performances globales."
          },
          "q6-2-4": {
            question: "Que devez-vous surveiller en continu ?",
            options: [
              "Seulement pendant le développement",
              "Les métriques de performance en production",
              "Rien n'a besoin d'être surveillé",
              "Seulement les taux d'erreur"
            ],
            explanation: "La surveillance continue des métriques de performance en production aide à identifier et à résoudre rapidement les problèmes de performance."
          }
        }
      },
      "lesson-6-3": {
        title: "Certification SrCode",
        objective: "Examen final de Vibe Coding",
        content: "# Certification SrCode\n\nBienvenue au combat final contre le boss ! Il est temps de prouver que vous avez réellement appris quelque chose.\n\n## Exigences de certification :\n- Terminer les 18 leçons\n- Réussir l'examen final complet (85 % et plus)\n- Démontrer des compétences pratiques\n- Montrer une compréhension des concepts de base\n- Appliquer les meilleures pratiques\n\n## Contenu de l'examen :\n- Fondamentaux de bolt.new\n- Ingénierie des prompts\n- Conception et intégration de bases de données\n- Authentification et sécurité\n- Déploiement et optimisation\n- Résolution de problèmes du monde réel\n\n## Ce que vous recevrez :\n- Certification officielle SrCode\n- Badge numérique pour LinkedIn\n- Exemples de projets pour portfolio\n- Recommandations professionnelles\n- Accès à la communauté\n\n## Avantages pour la carrière :\n- Expertise validée en bolt.new\n- Crédibilité professionnelle\n- Opportunités d'emploi\n- Capacités de freelance\n- Parcours d'apprentissage continu\n\n## Derniers mots de SrCode :\nVous avez parcouru un long chemin ! De l'ignorance de ce qu'était bolt.new à la création d'applications full-stack. Que vous réussissiez cet examen ou non, vous avez déjà accompli quelque chose d'incroyable. Maintenant, allez de l'avant et construisez quelque chose d'extraordinaire !",
        learningObjectives: [
          "Démontrer la maîtrise de tous les concepts du cours",
          "Appliquer les connaissances pour résoudre des problèmes complexes",
          "Montrer des compétences de développement professionnel",
          "Obtenir la certification officielle"
        ],
        badgeName: "Approuvé par SrCode",
        srcodeCommentary: "Si vous réussissez cet examen, vous en savez officiellement plus sur bolt.new que 90 % des développeurs. Sinon... eh bien, vous pouvez toujours essayer d'être un influenceur 😏",
        practiceDescription: "Réussissez l'examen final complet couvrant tous les sujets du cours et démontrez votre maîtrise à travers un projet de fin d'études (capstone).",
        quizQuestions: {
          "q6-3-1": {
            question: "Quelle est la compétence la plus importante que vous ayez acquise dans ce cours ?",
            options: [
              "Mémoriser la syntaxe du code",
              "Comprendre comment décomposer les problèmes et construire des solutions de manière systématique",
              "Utiliser uniquement des outils spécifiques",
              "Copier le code des tutoriels"
            ],
            explanation: "La compétence la plus précieuse est d'apprendre à décomposer des problèmes complexes et à construire des solutions systématiques en utilisant des outils modernes."
          },
          "q6-3-2": {
            question: "Qu'est-ce qui fait un bon développeur bolt.new ?",
            options: [
              "Connaître chaque fonctionnalité par cœur",
              "Rédiger des invites claires, comprendre l'ensemble de la stack et appliquer les meilleures pratiques",
              "Se concentrer uniquement sur le frontend",
              "Éviter les bases de données"
            ],
            explanation: "Un bon développeur bolt.new combine une communication claire, une compréhension de l'ensemble de la stack et des meilleures pratiques professionnelles."
          },
          "q6-3-3": {
            question: "Comment devez-vous aborder la création d'une nouvelle application ?",
            options: [
              "Commencer à coder immédiatement",
              "Planifier minutieusement, construire de manière incrémentielle, tester en continu et déployer avec confiance",
              "Se concentrer uniquement sur le design",
              "Construire tout en même temps"
            ],
            explanation: "Le développement professionnel implique la planification, la construction incrémentielle, les tests continus et le déploiement en toute confiance."
          },
          "q6-3-4": {
            question: "Quel est le secret du succès continu en tant que développeur ?",
            options: [
              "Arrêter d'apprendre après ce cours",
              "Continuer à apprendre, à construire et à partager ses connaissances avec la communauté",
              "Utiliser uniquement bolt.new pour toujours",
              "Éviter les nouvelles technologies"
            ],
            explanation: "Le succès continu vient de l'apprentissage tout au long de la vie, de la construction constante et de la participation active à la communauté des développeurs."
          }
        }
      }
    },
    quiz: {
      title: 'Quiz',
      question: 'Question {{current}} sur {{total}}',
      backToLesson: 'Retour à la Leçon',
      congratulations: 'Félicitations !',
      keepTrying: 'Continuez d\'essayer !',
      passedMessage: 'Vous avez terminé avec succès "{{lessonTitle}}" et gagné le badge "{{badgeName}}" !',
      failedMessage: 'Vous avez besoin de 85% ou plus pour réussir. Votre score est de {{score}}%. Révisez la leçon et réessayez !',
      badgeEarned: '🏆 Badge Gagné : {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continuer l\'Apprentissage',
      reviewLesson: 'Réviser la Leçon',
      retakeQuiz: 'Repasser le Quiz',
      bestScore: 'Meilleur Score : {{score}}%',
      explanation: 'Explication',
      loadError: 'Les questions du quiz n\'ont pas pu être chargées.'
    },
    badges: {
      title: 'Collection de Badges',
      earned: '{{earned}} sur {{total}} badges gagnés',
      earnedOn: 'Gagné le {{date}}',
      unlockHint: 'Terminez les leçons du Niveau {{level}} pour débloquer'
    },
    certificate: {
      title: 'Certificat',
      congratulations: 'Félicitations ! 🎉',
      earned: 'Vous avez terminé les 18 leçons et obtenu votre certificat !',
      download: 'Télécharger le Certificat',
      keepLearning: 'Continuez d\'Apprendre !',
      progress: 'Terminez les 18 leçons pour obtenir votre certificat',
      remaining: '{{count}} leçons restantes',
      certificateOf: 'CERTIFICAT DE RÉUSSITE',
      academyName: 'Vibe Coding Academy',
      certifies: 'Ceci certifie que',
      hasCompleted: 'a terminé avec succès les 18 leçons du',
      courseName: 'Cours de Maîtrise bolt.new',
      totalXP: 'XP Total : {{xp}}',
      completionDate: 'Date d\'Achèvement : {{date}}',
      certifiedBy: 'Certifié par SrCode',
      seniorMentor: 'Mentor IA Senior',
      studentNamePlaceholder: '[Nom de l\'Étudiant]'
    },
    srcode: {
      title: 'SrCode',
      subtitle: 'Mentor IA',
      placeholder: 'Demandez à SrCode n\'importe quoi sur cette leçon...',
      thinking: 'SrCode réfléchit...',
      welcomeMessage: 'Salut ! 👋 Je suis SrCode, votre mentor IA pour "{{lessonTitle}}". Prêt à plonger dans la magie de bolt.new ? Demandez-moi n\'importe quoi sur cette leçon !',
      errorMessage: 'Oups ! J\'ai quelques difficultés techniques. Réessayez dans un instant ! 🔧',
      offline: 'Je suis actuellement hors ligne, mais je serai bientôt de retour ! 💻'
    }
  }
};
