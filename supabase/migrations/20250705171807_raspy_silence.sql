/*
  # Fix user_progress table - Add completed column

  1. Changes
    - Add `completed` column to `user_progress` table if it doesn't exist
    - Set default value to false
    - Update existing records to have proper completed status based on score

  2. Security
    - Maintain existing RLS policies
*/

-- Add completed column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed boolean DEFAULT false NOT NULL;
  END IF;
END $$;

-- Update existing records to set completed = true where score >= 85
UPDATE user_progress 
SET completed = true 
WHERE score >= 85 AND completed = false;

-- Create index for better performance on completed queries
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_user ON user_progress(lesson_id, user_id);