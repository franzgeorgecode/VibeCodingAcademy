import React from 'react';
import { Award, Lock } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext'; // Corrected path

const ALL_BADGES = [
  { name: "First Contact", xp: 10, level: 1 },
  { name: "AI Whisperer", xp: 15, level: 1 },
  { name: "Tech Detective", xp: 20, level: 1 },
  { name: "Supreme Connector", xp: 25, level: 2 },
  { name: "Data Architect", xp: 30, level: 2 },
  { name: "Edge Lord", xp: 40, level: 2 },
  { name: "Digital Guardian", xp: 35, level: 3 },
  { name: "Night Watchman", xp: 45, level: 3 },
  { name: "Social Butterfly", xp: 50, level: 3 },
  { name: "Space Launcher", xp: 55, level: 4 },
  { name: "Domain Lord", xp: 60, level: 4 },
  { name: "Automation Master", xp: 70, level: 4 },
  { name: "Git Guru", xp: 65, level: 5 },
  { name: "Money Maker", xp: 75, level: 5 },
  { name: "Design Translator", xp: 80, level: 5 },
  { name: "Speed Demon", xp: 90, level: 6 },
  { name: "Vibe Coding Master", xp: 100, level: 6 },
  { name: "SrCode Approved", xp: 200, level: 6 }
];

interface UserBadgeItem { // Renamed for clarity, assuming structure from Dashboard
  badge_name: string;
  earned_at: string; // Assuming ISO date string
  // lesson_id?: string; // If badges are tied to lessons
  // badge_xp?: number; // XP might be from ALL_BADGES
}

interface BadgesTabProps {
  userBadges: UserBadgeItem[];
  onBadgeUpdate?: () => void; // Kept as per plan, though not used in this snippet
}

export default function BadgesTab({ userBadges, onBadgeUpdate }: BadgesTabProps) {
  const { t } = useTranslation();
  const earnedBadgeNames = userBadges.map(badge => badge.badge_name);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t('badges.title')}</h2>
        <p className="text-purple-100">
          {t('badges.earned', {
            earned: userBadges.length,
            total: ALL_BADGES.length
          })}
        </p>
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-4">
          <div
            className="bg-white rounded-full h-4 transition-all duration-500"
            style={{ width: `${userBadges.length > 0 ? (userBadges.length / ALL_BADGES.length) * 100 : 0}%` }} // Added check for userBadges.length > 0
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_BADGES.map((badge) => {
          const isEarned = earnedBadgeNames.includes(badge.name);
          const earnedBadge = userBadges.find(b => b.badge_name === badge.name);

          return (
            <div
              key={badge.name}
              className={`p-6 rounded-lg border-2 transition-all ${
                isEarned
                  ? 'border-yellow-300 bg-yellow-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  isEarned ? 'bg-yellow-500' : 'bg-gray-300'
                }`}>
                  {isEarned ? (
                    <Award className="h-8 w-8 text-white" />
                  ) : (
                    <Lock className="h-8 w-8 text-white" />
                  )}
                </div>

                <h3 className={`font-bold text-lg mb-2 ${
                  isEarned ? 'text-yellow-800' : 'text-gray-500'
                }`}>
                  {badge.name} {/* Badge name remains hardcoded as per prompt's example */}
                </h3>

                <div className={`text-sm mb-2 ${
                  isEarned ? 'text-yellow-700' : 'text-gray-400'
                }`}>
                  {/* Re-using lessons.level translation key, or create a specific badges.level key if preferred */}
                  {t('lessons.level', { level: badge.level })} • {badge.xp} XP
                </div>

                {isEarned && earnedBadge && (
                  <div className="text-xs text-yellow-600">
                    {t('badges.earnedOn', {
                      date: new Date(earnedBadge.earned_at).toLocaleDateString()
                    })}
                  </div>
                )}

                {!isEarned && (
                  <div className="text-xs text-gray-400">
                    {t('badges.unlockHint', { level: badge.level })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
