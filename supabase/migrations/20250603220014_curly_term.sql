/*
  # Add default values for user columns

  1. Changes
    - Add default values for total_xp, current_level, and streak_days columns in users table
    
  2. Reasoning
    - These columns are required for new user registration
    - Default values ensure successful user creation during signup
*/

ALTER TABLE users 
ALTER COLUMN total_xp SET DEFAULT 0,
ALTER COLUMN current_level SET DEFAULT 1,
ALTER COLUMN streak_days SET DEFAULT 0;