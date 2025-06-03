import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';
import { useSrCodeStore, ChatMessage } from '@/stores/srCodeStore';
import SrCodeAvatar from './SrCodeAvatar';

interface SrCodeChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const SrCodeChat = ({ isOpen, onClose }: SrCodeChatProps) => {
  const [input, setInput] = useState('');
  const { 
    mood, 
    conversationHistory, 
    addUserMessage, 
    addSrCodeMessage, 
    setTyping 
  } = useSrCodeStore();
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when new messages come in
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversationHistory]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message to history
    addUserMessage(input);
    setInput('');
    
    // Set SrCode to typing state
    setTyping(true);
    
    // Simulate AI response (in a real app, this would call OpenRouter API)
    setTimeout(() => {
      // Generate dynamic response
      const responses = [
        "Excellent question! Though with that logic you might as well ask a toaster how to make coffee... 😏",
        "Hmm, interesting approach. You know what else is interesting? When people read the docs before asking. Just kidding! Let's solve this.",
        "That's so simple even a junior could do it. Let me show you... with style!",
        "Have you tried turning your brain off and on again? Sometimes it works. Meanwhile, here's the real solution..."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      addSrCodeMessage(randomResponse);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-4 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden z-50"
        >
          {/* Header */}
          <div className="bg-primary-600 text-white p-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <SrCodeAvatar size="sm" showMessage={false} />
              <span className="font-medium">Chat with SrCode</span>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat content */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {conversationHistory.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center">
                <SrCodeAvatar 
                  mood="happy" 
                  message="Hi! I'm SrCode, your Vibe Coding mentor. How can I help you today? I promise to be more helpful than Stack Overflow... with 90% less judgment!" 
                />
              </div>
            ) : (
              <div className="space-y-4">
                {conversationHistory.map((message: ChatMessage) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'srcode' && (
                      <div className="mr-2 mt-1">
                        <SrCodeAvatar size="sm\" showMessage={false} />
                      </div>
                    )}
                    
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p className={message.sender === 'user' ? 'text-white' : 'text-gray-800'}>
                        {message.content}
                      </p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-200' : 'text-gray-400'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask SrCode anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SrCodeChat;