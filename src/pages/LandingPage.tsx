import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Award, BookOpen, Star, Users, Shield } from 'lucide-react';
import SrCodeAvatar from '../components/srcode/SrCodeAvatar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <Star className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm">The Future of Web Development Learning</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master Web Development with AI-Powered Learning
              </h1>
              <p className="text-xl mb-8 text-primary-100 leading-relaxed">
                Join thousands of developers learning to build amazing web applications with bolt.new. Get personalized guidance from SrCode, your AI mentor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium flex items-center justify-center group"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  className="btn border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-center backdrop-blur-sm"
                >
                  Already have an account?
                </Link>
              </div>

              <div className="mt-8 flex items-center space-x-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-200 mr-2" />
                  <span className="text-primary-100">10K+ Students</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary-200 mr-2" />
                  <span className="text-primary-100">100% Free</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center relative z-10"
            >
              <div className="relative">
                <div className="absolute -z-10 w-72 h-72 bg-primary-400 rounded-full opacity-20 blur-3xl"></div>
                <SrCodeAvatar 
                  size="lg"
                  mood="sarcastic" 
                  message="Hey future bolt.new wizard! I'm SrCode, and I'm here to turn you into a true Vibe developer... if you can handle my jokes 😏" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Learn with SrCode?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience a revolutionary approach to coding education with a mentor that makes learning fun, engaging, and highly effective.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-primary-600" />,
                title: 'Interactive Learning Path',
                description: 'Follow a personalized curriculum that adapts to your progress, with hands-on projects and real-time feedback.'
              },
              {
                icon: <Zap className="h-10 w-10 text-orange-500" />,
                title: 'Learn by Building',
                description: 'Create real projects with bolt.new and get instant, witty feedback from your AI mentor, SrCode.'
              },
              {
                icon: <Award className="h-10 w-10 text-teal-500" />,
                title: 'Achievement System',
                description: 'Stay motivated with XP rewards, unlock badges, and compete on the global leaderboard as you master new skills.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100 text-lg">
            Join our community of developers and start building amazing web applications with the guidance of SrCode.
          </p>
          <Link
            to="/register"
            className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium inline-flex items-center group"
          >
            <span>Get Started Now</span>
            <Code className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code className="h-8 w-8 text-primary-400 mr-2" />
              <span className="font-bold text-xl">Vibe Coding Academy</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vibe Coding Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;