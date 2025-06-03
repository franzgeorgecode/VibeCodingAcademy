/*
  # Add default values to users table columns
  
  1. Changes
    - Add default values for total_xp, current_level, and streak_days columns in users table
    - This ensures these columns are automatically populated when a new user is created
    
  2. Reasoning
    - Prevents NOT NULL constraint violations during user signup
    - Maintains data consistency by providing sensible defaults
*/

DO $$ 
BEGIN
  -- Add default value for total_xp if it doesn't have one
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'total_xp' 
    AND column_default = '0'
  ) THEN
    ALTER TABLE users ALTER COLUMN total_xp SET DEFAULT 0;
  END IF;

  -- Add default value for current_level if it doesn't have one
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'current_level' 
    AND column_default = '1'
  ) THEN
    ALTER TABLE users ALTER COLUMN current_level SET DEFAULT 1;
  END IF;

  -- Add default value for streak_days if it doesn't have one
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'streak_days' 
    AND column_default = '0'
  ) THEN
    ALTER TABLE users ALTER COLUMN streak_days SET DEFAULT 0;
  END IF;
END $$;