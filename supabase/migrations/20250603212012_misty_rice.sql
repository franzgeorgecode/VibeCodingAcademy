/*
  # Initial Schema Setup for Vibe Coding Academy

  1. New Tables
    - users: Store user profiles and progress
    - user_progress: Track lesson completion and scores
    - badges: Available achievements
    - user_badges: Track earned badges
    - srcode_interactions: Store AI mentor interactions
    - leaderboard: Global rankings

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Secure data access patterns
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  streak_days INTEGER DEFAULT 0,
  last_activity DATE
);

-- User progress tracking
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  score INTEGER DEFAULT 0,
  attempts INTEGER DEFAULT 1,
  time_spent INTEGER,
  hints_used INTEGER DEFAULT 0
);

-- Available badges
CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  xp_reward INTEGER DEFAULT 0,
  rarity TEXT DEFAULT 'common'
);

-- User earned badges
CREATE TABLE IF NOT EXISTS user_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  badge_id UUID REFERENCES badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- SrCode interactions
CREATE TABLE IF NOT EXISTS srcode_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL,
  context TEXT,
  user_message TEXT,
  srcode_response TEXT NOT NULL,
  mood TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Global leaderboard
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  weekly_xp INTEGER DEFAULT 0,
  monthly_xp INTEGER DEFAULT 0,
  all_time_xp INTEGER DEFAULT 0,
  week_start DATE,
  month_start DATE,
  UNIQUE(user_id, week_start, month_start)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE srcode_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can read own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can read badges"
  ON badges FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read own badges"
  ON user_badges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can earn badges"
  ON user_badges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own interactions"
  ON srcode_interactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create interactions"
  ON srcode_interactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read leaderboard"
  ON leaderboard FOR SELECT
  TO authenticated
  USING (true);

-- Insert initial badges
INSERT INTO badges (name, description, icon, xp_reward, rarity) VALUES
  ('First Steps', 'Complete your first lesson', '🏆', 10, 'common'),
  ('Quick Learner', 'Complete a lesson without using hints', '🚀', 20, 'rare'),
  ('Streak Master', 'Maintain a 7-day learning streak', '🔥', 30, 'epic'),
  ('Code Wizard', 'Complete all basic lessons', '🧙‍♂️', 50, 'legendary');