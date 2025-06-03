import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Award, BookOpen } from 'lucide-react';
import SrCodeAvatar from '../components/srcode/SrCodeAvatar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Master Vibe Coding with SrCode
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Your sarcastic AI mentor on the journey to bolt.new mastery
              </p>
              
              <div className="flex space-x-4">
                <Link
                  to="/register"
                  className="btn bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="btn border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium"
                >
                  Log In
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Learn with SrCode?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the revolution in coding education with a mentor that makes learning fun, addictive, and actually effective.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-primary-600" />,
                title: 'Structured Learning Path',
                description: 'Follow a clear, progressive curriculum from basics to mastery with hands-on projects at every step.'
              },
              {
                icon: <Zap className="h-10 w-10 text-orange-500" />,
                title: 'Learn by Doing',
                description: 'No boring lectures. Build real projects with bolt.new and get instant, sarcastic feedback from SrCode.'
              },
              {
                icon: <Award className="h-10 w-10 text-teal-500" />,
                title: 'Gamified Experience',
                description: 'Earn XP, unlock badges, and climb the ranks as you master new skills and complete challenges.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Vibe Coding?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Join thousands of developers learning to build amazing web apps with bolt.new and the guidance of SrCode.
          </p>
          <Link
            to="/register"
            className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium inline-flex items-center"
          >
            <span>Start Your Journey</span>
            <Code className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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