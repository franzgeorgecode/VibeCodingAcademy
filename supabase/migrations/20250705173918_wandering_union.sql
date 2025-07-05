/*
  # Fix user_progress table schema and constraints

  1. Schema Updates
    - Ensure all required columns exist with proper types
    - Add proper unique constraints
    - Fix any missing indexes

  2. Data Integrity
    - Update existing records to match new schema
    - Ensure proper relationships

  3. Performance
    - Add optimized indexes for common queries
*/

-- First, let's check and fix the user_progress table structure
DO $$
BEGIN
  -- Add completed column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed boolean DEFAULT false NOT NULL;
  END IF;

  -- Ensure all other required columns exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed_at'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed_at timestamptz DEFAULT null;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'time_spent'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN time_spent integer DEFAULT null;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'hints_used'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN hints_used integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'score'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN score integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'attempts'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN attempts integer DEFAULT 1;
  END IF;
END $$;

-- Drop existing unique constraint if it exists and recreate with proper name
DO $$
BEGIN
  -- Drop any existing constraints that might conflict
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE table_name = 'user_progress' 
    AND constraint_type = 'UNIQUE'
    AND constraint_name != 'user_progress_user_id_lesson_id_key'
  ) THEN
    -- Get the constraint name and drop it
    DECLARE
      constraint_name_var text;
    BEGIN
      SELECT constraint_name INTO constraint_name_var
      FROM information_schema.table_constraints 
      WHERE table_name = 'user_progress' 
      AND constraint_type = 'UNIQUE'
      AND constraint_name != 'user_progress_user_id_lesson_id_key'
      LIMIT 1;
      
      IF constraint_name_var IS NOT NULL THEN
        EXECUTE 'ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS ' || constraint_name_var;
      END IF;
    END;
  END IF;
END $$;

-- Create the proper unique constraint
ALTER TABLE user_progress 
DROP CONSTRAINT IF EXISTS user_progress_user_id_lesson_id_key;

ALTER TABLE user_progress 
ADD CONSTRAINT user_progress_user_id_lesson_id_key 
UNIQUE (user_id, lesson_id);

-- Update existing records to set completed = true where score >= 85
UPDATE user_progress 
SET completed = true, completed_at = COALESCE(completed_at, now())
WHERE score >= 85 AND completed = false;

-- Create optimized indexes
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_user ON user_progress(lesson_id, user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_score ON user_progress(user_id, score);

-- Ensure badges table has proper structure
CREATE TABLE IF NOT EXISTS badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon text,
  xp_reward integer DEFAULT 0,
  rarity text DEFAULT 'common'
);

-- Enable RLS on badges if not already enabled
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

-- Create policy for badges if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'badges' AND policyname = 'Anyone can read badges'
  ) THEN
    CREATE POLICY "Anyone can read badges" ON badges
      FOR SELECT TO authenticated
      USING (true);
  END IF;
END $$;

-- Insert default badges for lessons if they don't exist
INSERT INTO badges (id, name, description, icon, xp_reward, rarity) VALUES
  ('lesson-1-1', 'First Contact', 'Completed your first lesson', '🏆', 10, 'common'),
  ('lesson-1-2', 'AI Whisperer', 'Mastered prompt engineering', '🤖', 15, 'common'),
  ('lesson-1-3', 'Tech Detective', 'Explored the bolt.new interface', '🔍', 20, 'common'),
  ('lesson-2-1', 'Supreme Connector', 'Connected to databases', '🔗', 25, 'rare'),
  ('lesson-2-2', 'Data Architect', 'Mastered advanced database operations', '🏗️', 30, 'rare'),
  ('lesson-2-3', 'Edge Lord', 'Implemented real-time features', '⚡', 40, 'rare'),
  ('lesson-3-1', 'Digital Guardian', 'Secured user authentication', '🛡️', 35, 'epic'),
  ('lesson-3-2', 'Night Watchman', 'Implemented advanced security', '🌙', 45, 'epic'),
  ('lesson-3-3', 'Social Butterfly', 'Added social authentication', '🦋', 50, 'epic'),
  ('lesson-4-1', 'Space Launcher', 'Deployed to the cloud', '🚀', 55, 'epic'),
  ('lesson-4-2', 'Domain Lord', 'Mastered custom domains', '👑', 60, 'epic'),
  ('lesson-4-3', 'Automation Master', 'Set up CI/CD pipelines', '⚙️', 70, 'legendary'),
  ('lesson-5-1', 'Git Guru', 'Mastered version control', '📚', 65, 'legendary'),
  ('lesson-5-2', 'Money Maker', 'Integrated payment systems', '💰', 75, 'legendary'),
  ('lesson-5-3', 'Design Translator', 'Converted designs to code', '🎨', 80, 'legendary'),
  ('lesson-6-1', 'Speed Demon', 'Optimized for performance', '💨', 100, 'legendary'),
  ('lesson-6-2', 'Vibe Coding Master', 'Mastered advanced techniques', '🎯', 90, 'legendary'),
  ('lesson-6-3', 'SrCode Approved', 'Achieved ultimate mastery', '✨', 200, 'legendary')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  xp_reward = EXCLUDED.xp_reward,
  rarity = EXCLUDED.rarity;