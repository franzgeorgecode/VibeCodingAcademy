import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import SrCodeAvatar from '@/components/srcode/SrCodeAvatar';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="p-8 text-center">
          <div className="mb-6">
            <SrCodeAvatar 
              mood="sarcastic" 
              message="¡404! Parece que te has perdido en el ciberespacio. Eso, o intentaste hackear mi academia... 🤔" 
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-gray-600 mb-6">
            La página que buscas no existe o ha sido movida a otro universo paralelo.
          </p>
          
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            <Home size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;