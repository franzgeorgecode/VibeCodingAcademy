# Vibe Coding Academy

A modern, AI-powered coding education platform built with React, TypeScript, and Supabase. Learn bolt.new development with SrCode, your sarcastic AI mentor.

## 🚀 Features

- **AI-Powered Learning**: Interactive lessons with SrCode AI mentor
- **Authentication**: Secure login with Clerk (Google, GitHub, Email)
- **Progress Tracking**: Real-time progress monitoring and XP system
- **Gamification**: Badges, levels, and achievements
- **Multi-language Support**: Available in multiple languages
- **Real-time Chat**: Chat with SrCode AI for personalized help
- **Responsive Design**: Works on all devices
- **Certificate Generation**: Downloadable completion certificates

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **AI**: OpenRouter API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Clerk account
- OpenRouter account (optional, for AI features)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vibe-coding-academy.git
   cd vibe-coding-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key
   ```

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the migrations in the `supabase/migrations` folder
   - Enable Row Level Security (RLS) on all tables

5. **Set up Clerk**
   - Create a new Clerk application
   - Configure OAuth providers (Google, GitHub)
   - Add your domain to allowed origins

6. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

The application uses the following main tables:

- `users` - User profiles and progress
- `user_progress` - Lesson completion tracking
- `badges` - Available badges/achievements
- `user_badges` - User-earned badges
- `srcode_interactions` - AI chat history
- `leaderboard` - User rankings

## 🤖 AI Features

SrCode AI mentor provides:
- Contextual help during lessons
- Code review and suggestions
- Personalized learning guidance
- Sarcastic but helpful responses

## 🎨 Customization

### Themes
The app uses a purple/blue gradient theme. Customize colors in:
- `tailwind.config.js`
- `src/index.css`

### Languages
Add new languages by:
1. Adding translations to `src/data/translations.ts`
2. Updating the language selector in `src/hooks/useLanguage.ts`

### Lessons
Add new lessons by:
1. Creating lesson data in `src/data/lessonsData.ts`
2. Adding translations for lesson content
3. Creating quiz questions

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository to Netlify**
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy**

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📱 PWA Support

The app includes PWA features:
- Offline support
- Install prompt
- App-like experience on mobile

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Clerk](https://clerk.dev) for authentication
- [Supabase](https://supabase.com) for backend services
- [OpenRouter](https://openrouter.ai) for AI capabilities
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://framer.com/motion) for animations

## 📞 Support

For support, email support@vibecodingacademy.com or join our Discord community.

---

Built with ❤️ by the Vibe Coding Academy team