import { motion } from 'framer-motion';
import { Badge } from '@/stores/userProgressStore';

interface BadgeCardProps {
  badge: Badge;
  isLocked?: boolean;
  onCardClick?: () => void;
}

const BadgeCard = ({ badge, isLocked = false, onCardClick }: BadgeCardProps) => {
  // Rarity colors
  const rarityColors = {
    common: 'bg-gray-100 border-gray-300 text-gray-700',
    rare: 'bg-blue-100 border-blue-300 text-blue-700',
    epic: 'bg-purple-100 border-purple-300 text-purple-700',
    legendary: 'bg-orange-100 border-orange-300 text-orange-700'
  };
  
  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden cursor-pointer ${isLocked ? 'opacity-50' : 'shadow-md'}`}
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onCardClick}
    >
      <div className={`border ${rarityColors[badge.rarity]} p-4 flex flex-col items-center`}>
        {/* Badge icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3">
          <span className="text-2xl">{badge.icon}</span>
        </div>
        
        {/* Badge info */}
        <h3 className="font-medium text-center">{badge.name}</h3>
        <p className="text-xs text-gray-600 text-center mt-1">{badge.description}</p>
        
        {/* Rarity tag */}
        <span className="mt-2 px-2 py-1 text-xs rounded-full capitalize">
          {badge.rarity}
        </span>
        
        {/* Locked overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center">
            <span className="text-white text-sm font-medium">🔒 Locked</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BadgeCard;