import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import SrCodeChat from './SrCodeChat';
import SrCodeAvatar from './SrCodeAvatar';

const SrCodeChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center z-40 hover:bg-primary-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <MessageSquare size={24} />
          <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <span className="ml-2 mr-1">Ask SrCode</span>
      </motion.button>
      
      <SrCodeChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SrCodeChatButton;