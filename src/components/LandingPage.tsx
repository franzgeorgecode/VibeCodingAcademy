import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Brain,
  Rocket,
  Star,
  Users,
  Trophy,
  ArrowRight,
  Play,
  Check,
  Sparkles,
  Bot,
  Code2,
  Cpu
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-blue-400" />,
      title: "AI-Powered Learning",
      description: "Learn with SrCode, your personal AI mentor who adapts to your pace"
    },
    {
      icon: <Rocket className="h-12 w-12 text-purple-400" />,
      title: "Build Real Projects",
      description: "Master bolt.new by building actual applications, not just theory"
    },
    {
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      title: "Earn Certificates",
      description: "Get industry-recognized certificates to boost your career"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Trained" },
    { number: "18", label: "Comprehensive Lessons" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "SrCode taught me bolt.new faster than any bootcamp. Now I'm building production apps in days, not months.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The interactive AI mentor is incredible. It's like having a senior developer guiding you 24/7.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From zero to deploying full-stack apps. The gamification kept me engaged throughout the journey.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vibe Coding Academy
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start Learning
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">AI-Powered Learning Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              bolt.new
            </span>
            <br />
            with AI Mentorship
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn to build full-stack applications with <strong>SrCode</strong>, your personal AI mentor.
            From prompt engineering to deployment - master the future of web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => navigate('/signup')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-lg rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vibe Coding?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of coding education with our AI-powered platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white/10 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-500 ${
                      activeFeature === index ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-white/10'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">SrCode AI Mentor</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hey there! Ready to learn bolt.new? Let's start with the basics of prompt engineering...</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-purple-500/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Yes! How do I write better prompts?</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      👤
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Great question! The CLEAR method is key: Context, List, Example, Aesthetics, Requirements...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of developers who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the next generation of developers mastering AI-powered web development
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate('/signup')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              >
                Start Free Today
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center space-x-2 text-gray-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Vibe Coding Academy</span>
          </div>
          <p className="text-gray-400">
            © 2025 Vibe Coding Academy. Building the future, one developer at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
