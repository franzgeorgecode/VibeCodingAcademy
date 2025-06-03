/*
  # Add default values for user columns

  1. Changes
    - Add default values for total_xp, current_level, and streak_days columns in users table
    - These defaults ensure new user registration works properly
    
  2. Reasoning
    - total_xp starts at 0 for new users
    - current_level starts at 1 for new users
    - streak_days starts at 0 for new users
*/

ALTER TABLE users 
ALTER COLUMN total_xp SET DEFAULT 0,
ALTER COLUMN current_level SET DEFAULT 1,
ALTER COLUMN streak_days SET DEFAULT 0;

-- Ensure any existing NULL values are updated to defaults
UPDATE users 
SET total_xp = 0 
WHERE total_xp IS NULL;

UPDATE users 
SET current_level = 1 
WHERE current_level IS NULL;

UPDATE users 
SET streak_days = 0 
WHERE streak_days IS NULL;