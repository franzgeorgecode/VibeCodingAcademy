import React from 'react';
import { Award, Lock } from 'lucide-react';

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

export default function BadgesTab({ userBadges }) {
  const earnedBadgeNames = userBadges.map(badge => badge.badge_name);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Badge Collection</h2>
        <p className="text-purple-100">
          {earnedBadgeNames.length} of {ALL_BADGES.length} badges earned
        </p>
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-4">
          <div
            className="bg-white rounded-full h-4 transition-all duration-500"
            style={{ width: `${(earnedBadgeNames.length / ALL_BADGES.length) * 100}%` }}
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
                  {badge.name}
                </h3>

                <div className={`text-sm mb-2 ${
                  isEarned ? 'text-yellow-700' : 'text-gray-400'
                }`}>
                  Level {badge.level} • {badge.xp} XP
                </div>

                {isEarned && earnedBadge && (
                  <div className="text-xs text-yellow-600">
                    Earned {new Date(earnedBadge.earned_at).toLocaleDateString()}
                  </div>
                )}

                {!isEarned && (
                  <div className="text-xs text-gray-400">
                    Complete Level {badge.level} lessons to unlock
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
