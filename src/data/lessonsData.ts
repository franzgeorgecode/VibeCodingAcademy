export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  level: number;
  orderInLevel: number;
  title: string;
  objective: string;
  content: string;
  learningObjectives: string[];
  quizQuestions: QuizQuestion[];
  badgeName: string;
  badgeXp: number;
  srcodeCommentary: string;
  practiceDescription?: string;
}

export const lessonsData: Record<string, Lesson> = {
  "lesson-1-1": {
    id: "lesson-1-1",
    level: 1,
    orderInLevel: 1,
    title: "What the Hell is bolt.new?",
    objective: "Understand bolt.new as an AI web development agent",
    content: "# What the Hell is bolt.new?\n\nWelcome to your first lesson in the Vibe Coding Academy! I'm SrCode, and I'll be your mentor throughout this journey.\n\n## What is bolt.new?\n\nbolt.new is a revolutionary AI-powered web development agent that allows you to build full-stack applications using natural language prompts. Think of it as having a senior developer who:\n\n- Never gets tired or frustrated\n- Doesn't need coffee breaks\n- Never argues about coding standards\n- Can build entire applications from scratch\n- Integrates seamlessly with modern tools\n\n## Key Features:\n\n### 🚀 **AI-Powered Development**\nbolt.new uses advanced AI to understand your requirements and generate complete, functional code. You describe what you want, and it builds it.\n\n### 🌐 **Full-Stack Capabilities**\n- Frontend development (React, Vue, Svelte)\n- Backend integration (APIs, databases)\n- Styling (CSS, Tailwind, styled-components)\n- State management\n- Authentication systems\n\n### ⚡ **Instant Deployment**\nBuilt-in integration with:\n- Netlify for hosting\n- Supabase for databases\n- GitHub for version control\n- Custom domains\n\nRemember: The quality of your output depends on the quality of your input. Learning to write effective prompts is crucial!",
    learningObjectives: [
      "Define what bolt.new is and its core purpose",
      "Identify the main advantages over traditional development",
      "Recognize ideal use cases for bolt.new projects",
      "Understand the basic workflow of building with bolt.new"
    ],
    quizQuestions: [
      {
        id: "q1-1-1",
        question: "What is bolt.new?",
        options: [
          "A traditional code editor",
          "An AI-powered web development agent",
          "A database management tool",
          "A design software"
        ],
        correctAnswer: 1,
        explanation: "bolt.new is an AI-powered web development agent that allows you to build full-stack applications using natural language prompts."
      },
      {
        id: "q1-1-2",
        question: "What is the main advantage of using bolt.new?",
        options: [
          "It's completely free",
          "It only works with JavaScript",
          "It can build applications from natural language descriptions",
          "It replaces all other development tools"
        ],
        correctAnswer: 2,
        explanation: "The main advantage is that bolt.new can understand natural language descriptions and generate complete, functional applications."
      },
      {
        id: "q1-1-3",
        question: "Which of these is NOT a feature of bolt.new?",
        options: [
          "AI-powered development",
          "Instant deployment",
          "Physical hardware setup",
          "Full-stack capabilities"
        ],
        correctAnswer: 2,
        explanation: "bolt.new is entirely web-based and doesn't require any physical hardware setup."
      },
      {
        id: "q1-1-4",
        question: "What type of projects is bolt.new ideal for?",
        options: [
          "Only mobile applications",
          "Web applications, SaaS, landing pages, and e-commerce",
          "Only static websites",
          "Desktop applications only"
        ],
        correctAnswer: 1,
        explanation: "bolt.new is ideal for various web-based projects including SaaS applications, landing pages, e-commerce sites, and more."
      }
    ],
    badgeName: "First Contact",
    badgeXp: 10,
    srcodeCommentary: "bolt.new is like having a senior developer who never gets tired, never asks for coffee, and never argues about tabs vs spaces. Amazing, right?",
    practiceDescription: "Explore the bolt.new interface and try creating a simple 'Hello World' project to get familiar with the platform."
  },

  "lesson-1-2": {
    id: "lesson-1-2",
    level: 1,
    orderInLevel: 2,
    title: "The Art of the Perfect Prompt",
    objective: "Write effective prompts for bolt.new",
    content: "# The Art of the Perfect Prompt\n\nNow that you know what bolt.new is, let's learn how to communicate with it effectively. Writing good prompts is like being a great architect - you need to be specific, clear, and detailed.\n\n## What Makes a Perfect Prompt?\n\n### 🎯 **Specificity is Key**\nDon't say: \"Make me a cool website\"\nDo say: \"Create a landing page for a fitness app with a hero section, pricing table, testimonials, and contact form using a dark theme\"\n\n### 📋 **Structure Your Requests**\nA good prompt has these elements:\n1. **Project Type**: What you're building\n2. **Features**: Specific functionality needed\n3. **Design**: Visual preferences and styling\n4. **Technical Requirements**: Integrations, frameworks, etc.\n\n## The CLEAR Method:\n- **C**ontext: What type of project\n- **L**ist: Specific features needed\n- **E**xample: Reference similar projects\n- **A**esthetics: Design preferences\n- **R**equirements: Technical specifications\n\n## Common Mistakes to Avoid:\n1. **Too Vague**: \"Make it look good\"\n2. **Too Complex**: Asking for everything at once\n3. **No Context**: Not explaining the purpose\n4. **Missing Requirements**: Forgetting mobile responsiveness\n5. **Unclear Priorities**: Not specifying what's most important",
    learningObjectives: [
      "Write clear and specific prompts for bolt.new",
      "Understand the CLEAR method for prompt structure",
      "Avoid common prompting mistakes",
      "Use iterative prompting for refinement"
    ],
    quizQuestions: [
      {
        id: "q1-2-1",
        question: "What does the 'C' in the CLEAR method stand for?",
        options: ["Color", "Context", "Code", "Components"],
        correctAnswer: 1,
        explanation: "In the CLEAR method, 'C' stands for Context - explaining what type of project you're building."
      },
      {
        id: "q1-2-2",
        question: "Which is an example of a well-structured prompt?",
        options: [
          "Make me a cool app",
          "Build something with React",
          "Create an e-commerce site with product catalog, shopping cart, and Stripe integration using modern design",
          "I need a website"
        ],
        correctAnswer: 2,
        explanation: "A well-structured prompt is specific, includes features, and mentions technical requirements and design preferences."
      },
      {
        id: "q1-2-3",
        question: "What should you do if your first prompt doesn't give perfect results?",
        options: [
          "Give up and start over",
          "Use iterative prompting to refine",
          "Always use the same prompt",
          "Never make changes"
        ],
        correctAnswer: 1,
        explanation: "Iterative prompting allows you to refine and improve your application with follow-up requests."
      },
      {
        id: "q1-2-4",
        question: "Which element is NOT essential in a good prompt?",
        options: [
          "Specific features needed",
          "Technical requirements",
          "Your personal life story",
          "Design preferences"
        ],
        correctAnswer: 2,
        explanation: "Personal information is not relevant to building applications - focus on project requirements instead."
      }
    ],
    badgeName: "AI Whisperer",
    badgeXp: 15,
    srcodeCommentary: "A good prompt is like a cooking recipe: specific, clear, and without weird ingredients. None of that 'make me a cool app' nonsense, please 🙄",
    practiceDescription: "Create a detailed prompt for a landing page of your choice, then test it in bolt.new to see the results."
  },

  "lesson-1-3": {
    id: "lesson-1-3",
    level: 1,
    orderInLevel: 3,
    title: "WebContainers: The Magic Behind the Curtain",
    objective: "Understand StackBlitz development environment",
    content: "# WebContainers: The Magic Behind the Curtain\n\nEver wondered how bolt.new runs an entire development environment in your browser? The answer is WebContainers - a revolutionary technology that brings Node.js to the browser.\n\n## What Are WebContainers?\n\nWebContainers are a browser-based runtime for executing Node.js applications and operating system commands. Think of them as:\n- A complete Node.js environment in your browser\n- No downloads or installations required\n- Full terminal access and package management\n- Real-time collaboration capabilities\n\n## How WebContainers Work:\n\n### 🌐 **Browser-Native**\n- Runs entirely in your browser using WebAssembly\n- No server-side execution needed\n- Your code stays private and secure\n- Works offline once loaded\n\n### ⚡ **Performance Benefits**\n- Instant startup times\n- Hot module replacement\n- Real-time preview updates\n- Efficient resource usage\n\n### 🔒 **Security Features**\n- Sandboxed execution environment\n- No access to your local file system\n- Secure by design\n- Network isolation\n\n## Key Advantages:\n- **Instant Setup**: No environment configuration\n- **Universal Access**: Works on any device with a browser\n- **Resource Efficiency**: No local storage usage\n- **Collaboration Ready**: Share projects with a URL",
    learningObjectives: [
      "Understand what WebContainers are and how they work",
      "Navigate the StackBlitz IDE effectively",
      "Use the integrated terminal for development tasks",
      "Recognize the advantages and limitations of browser-based development"
    ],
    quizQuestions: [
      {
        id: "q1-3-1",
        question: "What are WebContainers?",
        options: [
          "Docker containers for web apps",
          "A browser-based runtime for Node.js applications",
          "A type of web server",
          "A database technology"
        ],
        correctAnswer: 1,
        explanation: "WebContainers are a browser-based runtime that allows Node.js applications to run entirely in the browser using WebAssembly."
      },
      {
        id: "q1-3-2",
        question: "What is a key advantage of WebContainers?",
        options: [
          "They require local installation",
          "They only work on specific operating systems",
          "They provide instant setup with no downloads required",
          "They are slower than traditional development"
        ],
        correctAnswer: 2,
        explanation: "WebContainers provide instant setup with no downloads or installations required, making development immediately accessible."
      },
      {
        id: "q1-3-3",
        question: "How do you install packages in a WebContainer?",
        options: [
          "Download them manually",
          "Use npm or yarn in the integrated terminal",
          "Upload files directly",
          "WebContainers don't support packages"
        ],
        correctAnswer: 1,
        explanation: "You can install packages using npm or yarn commands in the integrated terminal, just like in traditional development."
      },
      {
        id: "q1-3-4",
        question: "What powers the execution of Node.js in WebContainers?",
        options: [
          "Server-side processing",
          "Local file system",
          "WebAssembly",
          "Browser plugins"
        ],
        correctAnswer: 2,
        explanation: "WebContainers use WebAssembly to run Node.js applications entirely in the browser without server-side processing."
      }
    ],
    badgeName: "Tech Detective",
    badgeXp: 20,
    srcodeCommentary: "WebContainers are like Docker but for your browser. Yes, it's as cool as it sounds. No, you don't need to understand Docker for this 😉",
    practiceDescription: "Explore the StackBlitz IDE interface, open the terminal, and try running some basic commands like 'npm --version' and 'ls'."
  },

  "lesson-2-1": {
    id: "lesson-2-1",
    level: 2,
    orderInLevel: 1,
    title: "Connecting Supabase Like a Pro",
    objective: "Set up Supabase in bolt.new step by step",
    content: "# Connecting Supabase Like a Pro\n\nWelcome to Level 2! Now we're getting into the real meat and potatoes of modern web development. Supabase is going to be your new best friend - think of it as Firebase, but actually developer-friendly.\n\n## What is Supabase?\n\nSupabase is an open-source Backend-as-a-Service (BaaS) that provides:\n- **PostgreSQL Database**: Real SQL, not some NoSQL nonsense\n- **Authentication**: Built-in user management\n- **Real-time subscriptions**: Live data updates\n- **Edge Functions**: Serverless functions at the edge\n- **Storage**: File and image handling\n- **Auto-generated APIs**: RESTful and GraphQL\n\n## Step-by-Step Connection Process:\n\n### **Step 1: Create Your Supabase Project**\n1. Go to supabase.com\n2. Sign up or log in\n3. Click \"New Project\"\n4. Choose your organization\n5. Fill in project details\n6. Click \"Create new project\"\n\n### **Step 2: Get Your Project Credentials**\n1. Go to Settings → API\n2. Copy Project URL and Anon Key\n\n### **Step 3: Connect in bolt.new**\n1. In your project, go to integrations\n2. Select \"Supabase\"\n3. Enter your credentials\n4. Test the connection\n\n## Best Practices:\n- Never expose service role keys in frontend code\n- Use Row Level Security (RLS) policies\n- Validate data on both client and server sides\n- Use environment variables for credentials",
    learningObjectives: [
      "Create and configure a Supabase project",
      "Connect Supabase to bolt.new successfully",
      "Understand environment variables and security",
      "Troubleshoot common connection issues"
    ],
    quizQuestions: [
      {
        id: "q2-1-1",
        question: "What is the first step to connect Supabase to bolt.new?",
        options: [
          "Write database queries",
          "Create a Supabase project and get credentials",
          "Install Supabase CLI",
          "Configure authentication"
        ],
        correctAnswer: 1,
        explanation: "You must first create a Supabase project and obtain your project URL and API keys before connecting."
      },
      {
        id: "q2-1-2",
        question: "Which Supabase key should you use in frontend code?",
        options: ["Service Role Key", "Secret Key", "Anon Key", "Master Key"],
        correctAnswer: 2,
        explanation: "The Anon Key is safe to use in frontend code as it respects Row Level Security policies."
      },
      {
        id: "q2-1-3",
        question: "Where should you store your Supabase credentials for security?",
        options: [
          "Directly in the code",
          "In comments",
          "In environment variables",
          "In a public file"
        ],
        correctAnswer: 2,
        explanation: "Environment variables keep your credentials secure and separate from your codebase."
      },
      {
        id: "q2-1-4",
        question: "What does RLS stand for in Supabase?",
        options: [
          "Real Live Streaming",
          "Row Level Security",
          "Rapid Loading System",
          "Remote Login Service"
        ],
        correctAnswer: 1,
        explanation: "Row Level Security (RLS) ensures that users can only access data they're authorized to see."
      }
    ],
    badgeName: "Supreme Connector",
    badgeXp: 25,
    srcodeCommentary: "Settings > Applications > Connect. Easier than assembling IKEA furniture... and with fewer tears",
    practiceDescription: "Create your own Supabase project and successfully connect it to a new bolt.new project."
  },

  "lesson-2-2": {
    id: "lesson-2-2",
    level: 2,
    orderInLevel: 2,
    title: "Database Schemas: Your New Best Friend",
    objective: "Design effective database schemas",
    content: "# Database Schemas: Your New Best Friend\n\nTime to talk about the foundation of any great application - the database schema. Think of it as the blueprint for your data mansion.\n\n## What is a Database Schema?\n\nA database schema is the structure that defines:\n- **Tables**: Where your data lives\n- **Columns**: What data you store\n- **Relationships**: How data connects\n- **Constraints**: Rules your data must follow\n- **Indexes**: How to find data quickly\n\n## Core Schema Design Principles:\n\n### 🎯 **Normalization (But Not Too Much)**\n- Remove duplicate data\n- Create logical relationships\n- Don't over-normalize (sometimes duplication is okay)\n\n### 🔗 **Relationships Matter**\n- **One-to-One**: User → Profile\n- **One-to-Many**: User → Posts\n- **Many-to-Many**: Users ↔ Roles\n\n### 📝 **Data Types Are Important**\n- Use the right type for the job\n- Consider storage and performance\n- Plan for future growth\n\n## Key Schema Concepts:\n\n### **Primary Keys**\n- Unique identifier for each row\n- Use UUID for better distribution\n- Never change or reuse\n\n### **Foreign Keys**\n- Link tables together\n- Enforce referential integrity\n- Define cascade behavior\n\n### **Constraints**\n- CHECK: Validate data values\n- UNIQUE: Prevent duplicates\n- NOT NULL: Require values",
    learningObjectives: [
      "Design efficient database schemas",
      "Understand table relationships and constraints",
      "Implement Row Level Security in Supabase",
      "Apply schema design best practices"
    ],
    quizQuestions: [
      {
        id: "q2-2-1",
        question: "What is a database schema?",
        options: [
          "A type of database",
          "The structure that defines tables, columns, and relationships",
          "A query language",
          "A backup system"
        ],
        correctAnswer: 1,
        explanation: "A database schema is the structure that defines how data is organized, including tables, columns, relationships, and constraints."
      },
      {
        id: "q2-2-2",
        question: "Which relationship type connects Users to Posts where each user can have many posts?",
        options: ["One-to-One", "One-to-Many", "Many-to-Many", "Many-to-One"],
        correctAnswer: 1,
        explanation: "One-to-Many relationship allows one user to have multiple posts, but each post belongs to only one user."
      },
      {
        id: "q2-2-3",
        question: "What does RLS stand for in Supabase?",
        options: [
          "Real-time Live Streaming",
          "Row Level Security",
          "Relational Logic System",
          "Remote Login Service"
        ],
        correctAnswer: 1,
        explanation: "Row Level Security (RLS) controls which users can access which rows in a table based on policies."
      },
      {
        id: "q2-2-4",
        question: "Why should you use UUID for primary keys?",
        options: [
          "They are smaller than integers",
          "They provide better distribution and avoid conflicts",
          "They are easier to remember",
          "They are required by Supabase"
        ],
        correctAnswer: 1,
        explanation: "UUIDs provide better distribution across systems and avoid conflicts when merging data from different sources."
      }
    ],
    badgeName: "Data Architect",
    badgeXp: 30,
    srcodeCommentary: "A good schema is like a well-founded house. Without it, everything collapses faster than my January diets",
    practiceDescription: "Design a schema for a blog application with users, posts, comments, and categories."
  },

  "lesson-2-3": {
    id: "lesson-2-3",
    level: 2,
    orderInLevel: 3,
    title: "Edge Functions: Unlimited Power",
    objective: "Create and manage Edge Functions",
    content: "# Edge Functions: Unlimited Power\n\nWelcome to the powerful side of Supabase! Edge Functions are like having superpowers for your backend.\n\n## What Are Edge Functions?\n\nEdge Functions are serverless functions that run on Supabase's global edge network. Think of them as:\n- **Mini servers** that run your custom logic\n- **API endpoints** you can customize completely\n- **Event handlers** that respond to database changes\n- **Data processors** that transform information\n\n## Why Edge Functions Rock:\n\n### ⚡ **Performance**\n- Run close to your users worldwide\n- Sub-100ms response times\n- Auto-scaling based on demand\n\n### 🔒 **Security**\n- Server-side execution (secrets stay secret)\n- Built-in authentication context\n- Row Level Security integration\n\n### 🛠️ **Flexibility**\n- Use any JavaScript/TypeScript code\n- Access to full Node.js ecosystem\n- Custom business logic implementation\n\n## Common Use Cases:\n\n### **1. API Integrations**\n- Payment processing with Stripe\n- Email sending with SendGrid\n- Social media integrations\n- Third-party API calls\n\n### **2. Data Processing**\n- Image resizing and optimization\n- Data validation and sanitization\n- Complex calculations\n- Report generation\n\n### **3. Webhooks**\n- Payment confirmations\n- User notifications\n- Data synchronization\n- Real-time updates\n\n### **4. Authentication Logic**\n- Multi-factor authentication\n- Custom user validation\n- Role-based permissions\n- Third-party OAuth",
    learningObjectives: [
      "Understand what Edge Functions are and their benefits",
      "Create and deploy Edge Functions in Supabase",
      "Implement common use cases like API integrations",
      "Apply security best practices for serverless functions"
    ],
    quizQuestions: [
      {
        id: "q2-3-1",
        question: "What are Edge Functions?",
        options: [
          "Database queries that run faster",
          "Serverless functions that run on Supabase's global edge network",
          "Frontend components",
          "CSS styling functions"
        ],
        correctAnswer: 1,
        explanation: "Edge Functions are serverless functions that run on Supabase's global edge network, providing fast, scalable backend logic."
      },
      {
        id: "q2-3-2",
        question: "When should you use Edge Functions vs API routes?",
        options: [
          "Always use Edge Functions",
          "When you need server-side logic, external API calls, or custom authentication",
          "Only for database operations",
          "Never use Edge Functions"
        ],
        correctAnswer: 1,
        explanation: "Edge Functions are ideal for server-side logic, external API integrations, payment processing, and any logic that requires secrets."
      },
      {
        id: "q2-3-3",
        question: "How do you handle errors in Edge Functions?",
        options: [
          "Ignore them",
          "Use try-catch blocks and return appropriate error responses",
          "Let them crash the function",
          "Only log them to console"
        ],
        correctAnswer: 1,
        explanation: "Proper error handling with try-catch blocks and meaningful error responses ensures robust functions."
      },
      {
        id: "q2-3-4",
        question: "Where should you store API keys in Edge Functions?",
        options: [
          "Directly in the code",
          "In comments",
          "In environment variables",
          "In the function name"
        ],
        correctAnswer: 2,
        explanation: "Environment variables keep your API keys and secrets secure and separate from your code."
      }
    ],
    badgeName: "Edge Lord",
    badgeXp: 40,
    srcodeCommentary: "Edge Functions are like having superpowers. Use them wisely, young Padawan 🌟",
    practiceDescription: "Create an Edge Function that validates email addresses and checks if they're from disposable email services."
  },

  "lesson-3-1": {
    id: "lesson-3-1",
    level: 3,
    orderInLevel: 1,
    title: "Auth Basics: Who Are You?",
    objective: "Implement basic login/registration",
    content: "# Auth Basics: Who Are You?\n\nAuthentication is verifying who someone claims to be. It's like checking ID at the door.\n\n## Authentication vs Authorization\n- **Authentication**: Who are you? (Login)\n- **Authorization**: What can you do? (Permissions)\n\n## Supabase Auth Features:\n- Email/password authentication\n- Social login (Google, GitHub, etc.)\n- Magic links (passwordless)\n- JWT tokens for sessions\n- Row Level Security integration\n\n## Basic Implementation:\n1. Configure Supabase Auth\n2. Create sign up/sign in functions\n3. Handle auth state changes\n4. Implement proper error handling\n\n## Best Practices:\n- Validate email format\n- Enforce strong passwords\n- Use HTTPS everywhere\n- Handle edge cases properly",
    learningObjectives: [
      "Understand authentication concepts and terminology",
      "Implement user registration and login with Supabase",
      "Create auth forms with proper validation",
      "Manage authentication state in React applications"
    ],
    quizQuestions: [
      {
        id: "q3-1-1",
        question: "What is the difference between authentication and authorization?",
        options: [
          "They are the same thing",
          "Authentication verifies identity, authorization determines permissions",
          "Authorization verifies identity, authentication determines permissions",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Authentication answers 'who are you?' while authorization answers 'what can you do?'"
      },
      {
        id: "q3-1-2",
        question: "How does Supabase handle password security?",
        options: [
          "Passwords are stored in plain text",
          "Passwords are automatically hashed and secured",
          "Users must hash their own passwords",
          "Passwords are encrypted with a simple algorithm"
        ],
        correctAnswer: 1,
        explanation: "Supabase automatically handles password hashing using industry-standard algorithms."
      },
      {
        id: "q3-1-3",
        question: "What should you validate when a user registers?",
        options: [
          "Only email format",
          "Only password strength",
          "Email format, password strength, and confirm password match",
          "Nothing - trust the user"
        ],
        correctAnswer: 2,
        explanation: "Proper validation includes email format, password strength requirements, and password confirmation."
      },
      {
        id: "q3-1-4",
        question: "How do you listen for authentication state changes in Supabase?",
        options: [
          "Check manually every second",
          "Use supabase.auth.onAuthStateChange()",
          "Refresh the page",
          "Authentication state never changes"
        ],
        correctAnswer: 1,
        explanation: "supabase.auth.onAuthStateChange() provides real-time updates when authentication state changes."
      }
    ],
    badgeName: "Digital Guardian",
    badgeXp: 35,
    srcodeCommentary: "Supabase Auth is so easy that even I could do it... and I'm an AI without fingers 🤖",
    practiceDescription: "Build a complete authentication system with registration, login, and logout functionality."
  },

  "lesson-3-2": {
    id: "lesson-3-2",
    level: 3,
    orderInLevel: 2,
    title: "Protecting Routes Like Fort Knox",
    objective: "Middleware and route protection",
    content: "# Protecting Routes Like Fort Knox\n\nRoute protection ensures only authorized users access protected content.\n\n## Types of Protected Routes:\n- **Authentication Required**: Dashboard, profile\n- **Role-Based Access**: Admin panels, moderator tools\n- **Conditional Access**: Subscription features\n\n## Implementation Patterns:\n1. Protected Route component\n2. Role-based route guards\n3. Subscription-based protection\n4. Row Level Security (RLS)\n\n## Best Practices:\n- Validate on both client and server\n- Show loading states during auth checks\n- Provide clear error messages\n- Use RLS for database-level protection\n\n## Testing:\n- Test with different user types\n- Test expired sessions\n- Test edge cases",
    learningObjectives: [
      "Implement authentication-based route protection",
      "Create role-based access control systems",
      "Use React Router guards effectively",
      "Apply Row Level Security for data protection"
    ],
    quizQuestions: [
      {
        id: "q3-2-1",
        question: "What is the purpose of route protection?",
        options: [
          "To make the app faster",
          "To ensure only authorized users can access certain pages",
          "To improve SEO",
          "To reduce bundle size"
        ],
        correctAnswer: 1,
        explanation: "Route protection ensures that only authenticated and authorized users can access protected pages."
      },
      {
        id: "q3-2-2",
        question: "What should you do while checking authentication status?",
        options: [
          "Show an error message",
          "Redirect immediately",
          "Show a loading state",
          "Hide the entire page"
        ],
        correctAnswer: 2,
        explanation: "You should show a loading state while checking authentication to provide good user experience."
      },
      {
        id: "q3-2-3",
        question: "What is Row Level Security (RLS)?",
        options: [
          "Client-side route protection",
          "Database-level security that controls which rows users can access",
          "A React component",
          "A type of authentication"
        ],
        correctAnswer: 1,
        explanation: "Row Level Security (RLS) is a database feature that controls which rows users can see and modify."
      },
      {
        id: "q3-2-4",
        question: "Why should you validate permissions on both client and server?",
        options: [
          "It's not necessary",
          "Client-side for UX, server-side for security",
          "Only server-side validation matters",
          "Only client-side validation is needed"
        ],
        correctAnswer: 1,
        explanation: "Client-side validation provides immediate feedback, while server-side validation ensures security."
      }
    ],
    badgeName: "Night Watchman",
    badgeXp: 45,
    srcodeCommentary: "An unprotected route is like leaving your door open with a 'free entry' sign. Spoiler: nobody respects those signs",
    practiceDescription: "Create a multi-level route protection system with different access levels."
  },

  "lesson-3-3": {
    id: "lesson-3-3",
    level: 3,
    orderInLevel: 3,
    title: "Social Auth: The Easy Way",
    objective: "Implement Google/GitHub login",
    content: "# Social Auth: The Easy Way\n\nWhy make users remember another password when they can just click 'Login with Google'?\n\n## Benefits of Social Auth:\n- No new password to remember\n- Faster registration process\n- Trusted authentication provider\n- Higher conversion rates\n\n## Implementation Steps:\n1. Configure OAuth providers (Google, GitHub)\n2. Set up Supabase social auth\n3. Implement social login buttons\n4. Handle user profile data\n5. Manage account linking\n\n## Security Considerations:\n- Validate redirect URLs\n- Use HTTPS in production\n- Handle email conflicts properly\n- Store minimal user data\n\n## Best Practices:\n- Provide clear error messages\n- Handle popup blockers\n- Test with different providers\n- Monitor conversion rates",
    learningObjectives: [
      "Implement Google and GitHub social authentication",
      "Handle social auth data and user profiles",
      "Manage multiple linked accounts per user",
      "Apply social auth security best practices"
    ],
    quizQuestions: [
      {
        id: "q3-3-1",
        question: "What is the main benefit of social authentication for users?",
        options: [
          "It's more secure than passwords",
          "They don't need to create and remember another password",
          "It's faster to implement",
          "It works offline"
        ],
        correctAnswer: 1,
        explanation: "Social authentication eliminates the need for users to create and remember another password."
      },
      {
        id: "q3-3-2",
        question: "Where do you configure OAuth redirect URIs?",
        options: [
          "In your frontend code",
          "In Supabase database",
          "In the provider's developer console",
          "In your package.json"
        ],
        correctAnswer: 2,
        explanation: "OAuth redirect URIs must be configured in each provider's developer console for security."
      },
      {
        id: "q3-3-3",
        question: "How do you handle multiple social accounts for one user?",
        options: [
          "Create separate user accounts",
          "Use account linking to connect multiple providers to one user",
          "Only allow one provider per user",
          "Merge accounts automatically"
        ],
        correctAnswer: 1,
        explanation: "Account linking allows users to connect multiple social providers to a single user account."
      },
      {
        id: "q3-3-4",
        question: "What should you do when email conflicts occur?",
        options: [
          "Create a duplicate account",
          "Reject the signup completely",
          "Suggest linking the account or signing in with the original provider",
          "Delete the existing account"
        ],
        correctAnswer: 2,
        explanation: "When email conflicts occur, guide users to either link their account or sign in with their original method."
      }
    ],
    badgeName: "Social Butterfly",
    badgeXp: 50,
    srcodeCommentary: "Why remember another password when Google already knows everything about you? Embrace the convenience 😎",
    practiceDescription: "Implement a complete social authentication system with Google and GitHub."
  },

  "lesson-4-1": {
    id: "lesson-4-1",
    level: 4,
    orderInLevel: 1,
    title: "Netlify: Your Best Friend for Deploy",
    objective: "Deploy using Netlify integration",
    content: "# Netlify: Your Best Friend for Deploy\n\nTime to deploy your creation to the world! Netlify makes deployment magical.\n\n## What is Netlify?\n- Static Site Hosting with global CDN\n- Serverless Functions\n- Continuous Deployment\n- Form Handling\n- Split Testing\n\n## Deployment Process:\n1. Prepare your project (build scripts, env vars)\n2. Deploy from bolt.new (one-click)\n3. Configure environment variables\n4. Set up custom domain\n5. Monitor performance\n\n## Optimization Tips:\n- Lazy load components\n- Optimize images\n- Use code splitting\n- Enable compression\n- Set up proper caching\n\n## Best Practices:\n- Use environment variables\n- Set up SPA redirects\n- Monitor build logs\n- Test deployed version",
    learningObjectives: [
      "Deploy applications to Netlify from bolt.new",
      "Configure environment variables for production",
      "Optimize applications for production deployment",
      "Troubleshoot common deployment issues"
    ],
    quizQuestions: [
      {
        id: "q4-1-1",
        question: "What is the correct build command for a Vite project in Netlify?",
        options: ["npm start", "npm run build", "npm run dev", "vite build"],
        correctAnswer: 1,
        explanation: "The build command 'npm run build' runs the build script defined in package.json."
      },
      {
        id: "q4-1-2",
        question: "Where should environment variables be configured for production?",
        options: [
          "In the source code",
          "In the .env file committed to Git",
          "In Netlify's environment variables section",
          "In package.json"
        ],
        correctAnswer: 2,
        explanation: "Environment variables should be configured in Netlify's dashboard for security."
      },
      {
        id: "q4-1-3",
        question: "What redirect rule is essential for SPAs?",
        options: [
          "/api/* /backend/:splat 200",
          "/* /index.html 200",
          "/old /new 301",
          "/404 /error 200"
        ],
        correctAnswer: 1,
        explanation: "The '/* /index.html 200' redirect ensures all routes are handled by the SPA's client-side routing."
      },
      {
        id: "q4-1-4",
        question: "How do you optimize a React app for production?",
        options: [
          "Just run npm run build",
          "Use lazy loading, code splitting, and remove console.logs",
          "Only minify the code",
          "Optimization is not necessary"
        ],
        correctAnswer: 1,
        explanation: "Production optimization includes lazy loading, code splitting, and removing development code."
      }
    ],
    badgeName: "Space Launcher",
    badgeXp: 55,
    srcodeCommentary: "Netlify + bolt.new is like Batman and Robin, but for deployment. And yes, you're Robin in this analogy 🦸‍♂️",
    practiceDescription: "Deploy a complete application to Netlify with proper environment variable configuration."
  },

  "lesson-4-2": {
    id: "lesson-4-2",
    level: 4,
    orderInLevel: 2,
    title: "Custom Domains: Your Personal Brand",
    objective: "Configure custom domains",
    content: "# Custom Domains: Your Personal Brand\n\nTime to give your app a professional address!\n\n## Why Custom Domains Matter:\n- Professional appearance\n- Brand recognition\n- Better SEO\n- User trust\n- Easier to remember\n\n## Setup Process:\n1. Purchase a domain\n2. Configure DNS settings\n3. Add domain to Netlify\n4. Verify SSL certificate\n5. Test everything\n\n## DNS Configuration:\n- A record: Points to Netlify's load balancer\n- CNAME: Points subdomain to Netlify\n- SSL: Automatic with Let's Encrypt\n\n## Best Practices:\n- Use HTTPS everywhere\n- Set up www redirects\n- Monitor SSL certificates\n- Test from different locations",
    learningObjectives: [
      "Purchase and configure custom domains",
      "Set up DNS records correctly",
      "Verify SSL certificates",
      "Implement domain best practices"
    ],
    quizQuestions: [
      {
        id: "q4-2-1",
        question: "What DNS record type should you use to point your root domain to Netlify?",
        options: ["CNAME", "A record", "MX record", "TXT record"],
        correctAnswer: 1,
        explanation: "An A record is used to point the root domain to Netlify's IP address."
      },
      {
        id: "q4-2-2",
        question: "How does Netlify handle SSL certificates?",
        options: [
          "You must purchase them separately",
          "Automatic SSL with Let's Encrypt",
          "SSL is not supported",
          "Only paid plans get SSL"
        ],
        correctAnswer: 1,
        explanation: "Netlify automatically provides SSL certificates using Let's Encrypt for all sites."
      },
      {
        id: "q4-2-3",
        question: "What should you do with the www subdomain?",
        options: [
          "Ignore it completely",
          "Set up a redirect to your main domain",
          "Use it as the primary domain",
          "Delete the www record"
        ],
        correctAnswer: 1,
        explanation: "It's best practice to set up a redirect from www to your main domain (or vice versa) for consistency."
      },
      {
        id: "q4-2-4",
        question: "How long does DNS propagation typically take?",
        options: [
          "Immediately",
          "Up to 48 hours",
          "Exactly 24 hours",
          "One week"
        ],
        correctAnswer: 1,
        explanation: "DNS propagation can take up to 48 hours to complete worldwide, though it's often faster."
      }
    ],
    badgeName: "Domain Lord",
    badgeXp: 60,
    srcodeCommentary: "A custom domain is like having an elegant address. No more 'my-random-app-123.netlify.app'",
    practiceDescription: "Set up a custom domain for your deployed application with proper DNS configuration."
  },

  "lesson-4-3": {
    id: "lesson-4-3",
    level: 4,
    orderInLevel: 3,
    title: "CI/CD: The Future is Now",
    objective: "Configure automatic deployments with GitHub",
    content: "# CI/CD: The Future is Now\n\nContinuous Integration and Deployment - your personal deployment butler!\n\n## What is CI/CD?\n- **CI**: Continuous Integration (automated testing)\n- **CD**: Continuous Deployment (automated deployment)\n- Push code → Tests run → Deploy automatically\n\n## Benefits:\n- Faster development cycles\n- Reduced human error\n- Consistent deployments\n- Automatic testing\n- Easy rollbacks\n\n## GitHub Actions Setup:\n1. Connect GitHub repository\n2. Configure build triggers\n3. Set up testing pipeline\n4. Deploy on successful tests\n5. Monitor deployment status\n\n## Best Practices:\n- Test before deploying\n- Use staging environments\n- Monitor deployment metrics\n- Set up notifications\n- Plan rollback strategies",
    learningObjectives: [
      "Understand CI/CD concepts and benefits",
      "Set up automated deployments with GitHub",
      "Configure testing pipelines",
      "Implement deployment best practices"
    ],
    quizQuestions: [
      {
        id: "q4-3-1",
        question: "What does CI/CD stand for?",
        options: [
          "Code Integration/Code Deployment",
          "Continuous Integration/Continuous Deployment",
          "Central Integration/Central Deployment",
          "Custom Integration/Custom Deployment"
        ],
        correctAnswer: 1,
        explanation: "CI/CD stands for Continuous Integration and Continuous Deployment."
      },
      {
        id: "q4-3-2",
        question: "What happens in a typical CI/CD pipeline?",
        options: [
          "Only code deployment",
          "Only testing",
          "Code push → Tests run → Deploy if tests pass",
          "Manual deployment only"
        ],
        correctAnswer: 2,
        explanation: "A typical CI/CD pipeline runs tests automatically when code is pushed and deploys only if tests pass."
      },
      {
        id: "q4-3-3",
        question: "What is the main benefit of automated deployment?",
        options: [
          "It's more expensive",
          "Reduces human error and speeds up development",
          "It requires more manual work",
          "It's only for large companies"
        ],
        correctAnswer: 1,
        explanation: "Automated deployment reduces human error, speeds up development cycles, and ensures consistent deployments."
      },
      {
        id: "q4-3-4",
        question: "When should you deploy to production?",
        options: [
          "Immediately after writing code",
          "Only after tests pass and code review is complete",
          "Once a year",
          "Never use automation"
        ],
        correctAnswer: 1,
        explanation: "Code should only be deployed to production after passing all tests and completing code review processes."
      }
    ],
    badgeName: "Automation Master",
    badgeXp: 70,
    srcodeCommentary: "CI/CD is like having a butler who does everything for you. Except you don't need to pay them or give them vacation days",
    practiceDescription: "Set up a complete CI/CD pipeline with GitHub Actions for automated testing and deployment."
  },

  "lesson-5-1": {
    id: "lesson-5-1",
    level: 5,
    orderInLevel: 1,
    title: "GitHub: Your Safety Net",
    objective: "Complete GitHub integration",
    content: "# GitHub: Your Safety Net\n\nGitHub is like insurance for your code - you never know when you'll need it until you URGENTLY need it!\n\n## Why GitHub Integration Matters:\n- Version control and history\n- Collaboration capabilities\n- Backup and recovery\n- Code sharing and open source\n- Professional portfolio\n\n## Key Features:\n- Repository management\n- Branch strategies\n- Pull requests and code review\n- Issues and project management\n- GitHub Actions for CI/CD\n\n## Best Practices:\n- Commit early and often\n- Write meaningful commit messages\n- Use branches for features\n- Review code before merging\n- Keep repositories organized\n\n## Integration with bolt.new:\n1. Connect GitHub account\n2. Create repository\n3. Set up automatic sync\n4. Configure webhooks\n5. Enable collaborative features",
    learningObjectives: [
      "Set up GitHub integration with bolt.new",
      "Understand Git workflows and best practices",
      "Implement collaborative development processes",
      "Use GitHub for project management"
    ],
    quizQuestions: [
      {
        id: "q5-1-1",
        question: "What is the main purpose of version control?",
        options: [
          "To make code slower",
          "To track changes and enable collaboration",
          "To delete old code",
          "To make code harder to read"
        ],
        correctAnswer: 1,
        explanation: "Version control tracks changes over time and enables multiple developers to collaborate safely."
      },
      {
        id: "q5-1-2",
        question: "What is a branch in Git?",
        options: [
          "A tree component",
          "A parallel version of the codebase for developing features",
          "A type of commit",
          "A GitHub setting"
        ],
        correctAnswer: 1,
        explanation: "A branch is a parallel version of the codebase that allows you to develop features without affecting the main code."
      },
      {
        id: "q5-1-3",
        question: "What should a good commit message include?",
        options: [
          "Random text",
          "A clear description of what changes were made",
          "Your personal information",
          "The current date only"
        ],
        correctAnswer: 1,
        explanation: "A good commit message clearly describes what changes were made and why."
      },
      {
        id: "q5-1-4",
        question: "What is a pull request?",
        options: [
          "A request to delete code",
          "A request to merge changes from one branch to another",
          "A request for more features",
          "A request to download code"
        ],
        correctAnswer: 1,
        explanation: "A pull request is a request to merge changes from one branch into another, allowing for code review."
      }
    ],
    badgeName: "Git Guru",
    badgeXp: 65,
    srcodeCommentary: "GitHub is like car insurance for your code. You never know when you'll need it until you URGENTLY need it",
    practiceDescription: "Set up a GitHub repository for your project and practice making commits, branches, and pull requests."
  },

  "lesson-5-2": {
    id: "lesson-5-2",
    level: 5,
    orderInLevel: 2,
    title: "Stripe: Show Me The Money",
    objective: "Integrate payments with Stripe",
    content: "# Stripe: Show Me The Money\n\nTime to monetize your masterpiece! Stripe makes accepting payments so easy you could sell bottled water to fish.\n\n## Why Stripe?\n- Industry-leading security\n- Global payment methods\n- Developer-friendly APIs\n- Extensive documentation\n- Flexible pricing models\n\n## Core Concepts:\n- **Payment Intents**: Secure payment processing\n- **Customers**: User management\n- **Subscriptions**: Recurring payments\n- **Webhooks**: Real-time notifications\n- **Products**: What you're selling\n\n## Implementation Steps:\n1. Create Stripe account\n2. Set up products and pricing\n3. Implement payment forms\n4. Handle webhooks\n5. Test thoroughly\n\n## Security Best Practices:\n- Use HTTPS everywhere\n- Validate on server-side\n- Handle PCI compliance\n- Secure webhook endpoints\n- Never store card data",
    learningObjectives: [
      "Set up Stripe payment processing",
      "Implement one-time and subscription payments",
      "Handle webhooks for payment events",
      "Apply payment security best practices"
    ],
    quizQuestions: [
      {
        id: "q5-2-1",
        question: "What is a Payment Intent in Stripe?",
        options: [
          "A customer's wish to buy something",
          "A secure object that represents your intent to collect payment",
          "A type of credit card",
          "A Stripe employee"
        ],
        correctAnswer: 1,
        explanation: "A Payment Intent is a secure object that tracks the entire payment process from creation to completion."
      },
      {
        id: "q5-2-2",
        question: "Where should you store credit card information?",
        options: [
          "In your database",
          "In local storage",
          "Never store it - let Stripe handle it",
          "In cookies"
        ],
        correctAnswer: 2,
        explanation: "You should never store credit card information yourself - let Stripe handle all sensitive payment data."
      },
      {
        id: "q5-2-3",
        question: "What are webhooks used for in Stripe?",
        options: [
          "To catch fish",
          "To receive real-time notifications about payment events",
          "To store customer data",
          "To process refunds"
        ],
        correctAnswer: 1,
        explanation: "Webhooks notify your application in real-time when payment events occur, like successful payments or failed charges."
      },
      {
        id: "q5-2-4",
        question: "Why is HTTPS required for payment processing?",
        options: [
          "It's not required",
          "To encrypt sensitive payment data in transit",
          "To make the site faster",
          "For better SEO"
        ],
        correctAnswer: 1,
        explanation: "HTTPS encrypts all data between the user and your server, protecting sensitive payment information."
      }
    ],
    badgeName: "Money Maker",
    badgeXp: 75,
    srcodeCommentary: "Stripe makes charging so easy you could sell bottled water to fish. But please, don't do that",
    practiceDescription: "Implement a complete payment system with both one-time payments and subscriptions using Stripe."
  },

  "lesson-5-3": {
    id: "lesson-5-3",
    level: 5,
    orderInLevel: 3,
    title: "Figma to Code: Pure Magic",
    objective: "Import designs from Figma",
    content: "# Figma to Code: Pure Magic\n\nTurning beautiful designs into functional code - it's like being a digital wizard!\n\n## What is Figma to Code?\n- Automatic design-to-code conversion\n- Pixel-perfect implementations\n- Responsive design support\n- Component extraction\n- Style generation\n\n## Benefits:\n- Faster development\n- Design consistency\n- Reduced manual coding\n- Better designer-developer collaboration\n- Pixel-perfect results\n\n## Process:\n1. Prepare Figma designs\n2. Use Figma to Code tools\n3. Review generated code\n4. Customize and optimize\n5. Integrate with your app\n\n## Best Practices:\n- Organize Figma layers properly\n- Use consistent naming\n- Create reusable components\n- Test responsive behavior\n- Optimize generated code",
    learningObjectives: [
      "Convert Figma designs to functional code",
      "Optimize generated code for production",
      "Maintain design consistency",
      "Implement responsive design patterns"
    ],
    quizQuestions: [
      {
        id: "q5-3-1",
        question: "What is the main benefit of Figma to Code conversion?",
        options: [
          "It makes designs look worse",
          "It speeds up development and ensures design consistency",
          "It's only for mobile apps",
          "It requires no design skills"
        ],
        correctAnswer: 1,
        explanation: "Figma to Code conversion speeds up development while maintaining pixel-perfect design consistency."
      },
      {
        id: "q5-3-2",
        question: "What should you do with generated code?",
        options: [
          "Use it exactly as generated",
          "Review, optimize, and customize for your needs",
          "Delete it immediately",
          "Never modify generated code"
        ],
        correctAnswer: 1,
        explanation: "Generated code should be reviewed, optimized, and customized to fit your specific needs and coding standards."
      },
      {
        id: "q5-3-3",
        question: "How should you organize Figma designs for better code generation?",
        options: [
          "Randomly name everything",
          "Use consistent naming and layer organization",
          "Don't organize anything",
          "Only use text layers"
        ],
        correctAnswer: 1,
        explanation: "Consistent naming and proper layer organization in Figma leads to better, more maintainable generated code."
      },
      {
        id: "q5-3-4",
        question: "What should you consider when converting designs to code?",
        options: [
          "Only desktop versions",
          "Responsive behavior across all device sizes",
          "Only mobile versions",
          "Designs don't need to be responsive"
        ],
        correctAnswer: 1,
        explanation: "You should always consider responsive behavior to ensure your design works well across all device sizes."
      }
    ],
    badgeName: "Design Translator",
    badgeXp: 80,
    srcodeCommentary: "Figma to Code is like Google Translate but for designers. And it works better than Google Translate with Spanish 😂",
    practiceDescription: "Convert a complete Figma design to functional React components and integrate them into your application."
  },

  "lesson-6-1": {
    id: "lesson-6-1",
    level: 6,
    orderInLevel: 1,
    title: "Final Project: Complete App",
    objective: "Create full-stack app with all integrations",
    content: "# Final Project: Complete App\n\nThis is your Avengers: Endgame moment! Time to use everything you've learned.\n\n## Project Requirements:\n- Full-stack architecture\n- User authentication\n- Database integration\n- Payment processing\n- Real-time features\n- Professional deployment\n\n## Planning Phase:\n1. Define project scope\n2. Create database schema\n3. Design user flows\n4. Plan feature implementation\n5. Set timeline and milestones\n\n## Implementation Checklist:\n- [ ] User authentication system\n- [ ] Database design and setup\n- [ ] Core feature development\n- [ ] Payment integration\n- [ ] Real-time functionality\n- [ ] Testing and optimization\n- [ ] Production deployment\n\n## Best Practices:\n- Code organization\n- Error handling\n- Performance optimization\n- Security considerations\n- User experience",
    learningObjectives: [
      "Apply all learned concepts in a complete project",
      "Plan and execute a full-stack application",
      "Implement professional development practices",
      "Create a portfolio-worthy application"
    ],
    quizQuestions: [
      {
        id: "q6-1-1",
        question: "What should you do before starting to code your final project?",
        options: [
          "Start coding immediately",
          "Plan the project scope, database schema, and user flows",
          "Only think about the design",
          "Skip planning entirely"
        ],
        correctAnswer: 1,
        explanation: "Proper planning including scope, database design, and user flows is essential for project success."
      },
      {
        id: "q6-1-2",
        question: "What makes a full-stack application?",
        options: [
          "Only frontend code",
          "Frontend, backend, database, and deployment",
          "Only database",
          "Just a pretty design"
        ],
        correctAnswer: 1,
        explanation: "A full-stack application includes frontend, backend logic, database, and proper deployment."
      },
      {
        id: "q6-1-3",
        question: "Why is testing important in your final project?",
        options: [
          "It's not important",
          "To ensure functionality works correctly and catch bugs early",
          "To make the project take longer",
          "Only for large companies"
        ],
        correctAnswer: 1,
        explanation: "Testing ensures your application works correctly and helps catch bugs before users encounter them."
      },
      {
        id: "q6-1-4",
        question: "What should you consider for user experience?",
        options: [
          "Only how it looks",
          "Loading states, error handling, and intuitive navigation",
          "Just the colors",
          "UX doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "Good UX includes loading states, proper error handling, intuitive navigation, and responsive design."
      }
    ],
    badgeName: "Vibe Coding Master",
    badgeXp: 100,
    srcodeCommentary: "This is your Avengers: Endgame moment. Time to use everything you learned. Don't disappoint me! 🚀",
    practiceDescription: "Build a complete full-stack application incorporating all the technologies and concepts from previous lessons."
  },

  "lesson-6-2": {
    id: "lesson-6-2",
    level: 6,
    orderInLevel: 2,
    title: "Optimization and Performance",
    objective: "Optimize application for production",
    content: "# Optimization and Performance\n\nA slow app is like a poorly told joke - nobody has the patience to wait for the punchline.\n\n## Core Web Vitals:\n- **LCP**: Largest Contentful Paint (loading)\n- **FID**: First Input Delay (interactivity)\n- **CLS**: Cumulative Layout Shift (visual stability)\n\n## Performance Strategies:\n- Code splitting and lazy loading\n- Image optimization\n- Caching strategies\n- Bundle size optimization\n- Database query optimization\n\n## Monitoring Tools:\n- Lighthouse audits\n- Web Vitals extension\n- Performance analytics\n- Real user monitoring\n\n## Implementation:\n1. Audit current performance\n2. Identify bottlenecks\n3. Implement optimizations\n4. Measure improvements\n5. Monitor continuously\n\n## Best Practices:\n- Optimize images and assets\n- Minimize JavaScript bundles\n- Use CDN for static assets\n- Implement proper caching\n- Monitor performance metrics",
    learningObjectives: [
      "Understand Core Web Vitals and performance metrics",
      "Implement performance optimization techniques",
      "Use performance monitoring tools",
      "Achieve production-ready performance"
    ],
    quizQuestions: [
      {
        id: "q6-2-1",
        question: "What does LCP measure?",
        options: [
          "Loading speed of the largest content element",
          "Total page load time",
          "JavaScript execution time",
          "Database query time"
        ],
        correctAnswer: 0,
        explanation: "LCP (Largest Contentful Paint) measures how quickly the largest content element becomes visible to users."
      },
      {
        id: "q6-2-2",
        question: "What is code splitting?",
        options: [
          "Breaking code into multiple files randomly",
          "Dividing code into smaller chunks that load when needed",
          "Deleting unused code",
          "Making code harder to read"
        ],
        correctAnswer: 1,
        explanation: "Code splitting divides your application into smaller chunks that are loaded on-demand, reducing initial bundle size."
      },
      {
        id: "q6-2-3",
        question: "Why should you optimize images?",
        options: [
          "To make them look worse",
          "To reduce file size and improve loading speed",
          "Images don't need optimization",
          "To increase page size"
        ],
        correctAnswer: 1,
        explanation: "Image optimization reduces file sizes, which improves loading speed and overall performance."
      },
      {
        id: "q6-2-4",
        question: "What should you monitor continuously?",
        options: [
          "Only during development",
          "Performance metrics in production",
          "Nothing needs monitoring",
          "Only error rates"
        ],
        correctAnswer: 1,
        explanation: "Continuous monitoring of performance metrics in production helps identify and address performance issues quickly."
      }
    ],
    badgeName: "Speed Demon",
    badgeXp: 90,
    srcodeCommentary: "A slow app is like a poorly told joke: nobody has the patience to wait for the punchline",
    practiceDescription: "Optimize your application to achieve a Lighthouse score of 95+ across all metrics."
  },

  "lesson-6-3": {
    id: "lesson-6-3",
    level: 6,
    orderInLevel: 3,
    title: "SrCode Certification",
    objective: "Final Vibe Coding exam",
    content: "# SrCode Certification\n\nWelcome to the final boss fight! Time to prove you actually learned something.\n\n## Certification Requirements:\n- Complete all 18 lessons\n- Pass final comprehensive exam (85%+)\n- Demonstrate practical skills\n- Show understanding of core concepts\n- Apply best practices\n\n## Exam Coverage:\n- bolt.new fundamentals\n- Prompt engineering\n- Database design and integration\n- Authentication and security\n- Deployment and optimization\n- Real-world problem solving\n\n## What You'll Receive:\n- Official SrCode Certification\n- Digital badge for LinkedIn\n- Portfolio project examples\n- Professional recommendations\n- Community access\n\n## Career Benefits:\n- Validated bolt.new expertise\n- Professional credibility\n- Job opportunities\n- Freelancing capabilities\n- Continued learning path\n\n## Final Words from SrCode:\nYou've come a long way! From not knowing what bolt.new was to building full-stack applications. Whether you pass this exam or not, you've already accomplished something amazing. Now go forth and build something incredible!",
    learningObjectives: [
      "Demonstrate mastery of all course concepts",
      "Apply knowledge to solve complex problems",
      "Show professional development skills",
      "Earn official certification"
    ],
    quizQuestions: [
      {
        id: "q6-3-1",
        question: "What is the most important skill you've learned in this course?",
        options: [
          "Memorizing code syntax",
          "Understanding how to break down problems and build solutions systematically",
          "Using specific tools only",
          "Copying code from tutorials"
        ],
        correctAnswer: 1,
        explanation: "The most valuable skill is learning to break down complex problems and build systematic solutions using modern tools."
      },
      {
        id: "q6-3-2",
        question: "What makes a good bolt.new developer?",
        options: [
          "Knowing every feature by heart",
          "Writing clear prompts, understanding the full stack, and applying best practices",
          "Only focusing on frontend",
          "Avoiding databases"
        ],
        correctAnswer: 1,
        explanation: "A good bolt.new developer combines clear communication, full-stack understanding, and professional best practices."
      },
      {
        id: "q6-3-3",
        question: "How should you approach building a new application?",
        options: [
          "Start coding immediately",
          "Plan thoroughly, build incrementally, test continuously, and deploy confidently",
          "Only focus on design",
          "Build everything at once"
        ],
        correctAnswer: 1,
        explanation: "Professional development involves planning, incremental building, continuous testing, and confident deployment."
      },
      {
        id: "q6-3-4",
        question: "What's the secret to continued success as a developer?",
        options: [
          "Stop learning after this course",
          "Keep learning, building, and sharing knowledge with the community",
          "Only use bolt.new forever",
          "Avoid new technologies"
        ],
        correctAnswer: 1,
        explanation: "Continued success comes from lifelong learning, consistent building, and active participation in the developer community."
      }
    ],
    badgeName: "SrCode Approved",
    badgeXp: 200,
    srcodeCommentary: "If you pass this exam, you officially know more than 90% of developers about bolt.new. If not... well, you can always try being an influencer 😏",
    practiceDescription: "Complete the comprehensive final exam covering all course topics and demonstrate your mastery through a capstone project."
  }
};
export default lessonsData;
