-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Recreate function with better error handling and validation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Insert the new user profile with validated username
  INSERT INTO public.users (
    id,
    username,
    created_at,
    total_xp,
    current_level,
    streak_days,
    last_activity
  ) VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    NOW(),
    0,
    1,
    0,
    CURRENT_DATE
  );
  
  -- Initialize leaderboard entry
  INSERT INTO public.leaderboard (
    user_id,
    weekly_xp,
    monthly_xp,
    all_time_xp,
    week_start,
    month_start
  ) VALUES (
    NEW.id,
    0,
    0,
    0,
    date_trunc('week', CURRENT_DATE),
    date_trunc('month', CURRENT_DATE)
  );

  RETURN NEW;
EXCEPTION
  WHEN unique_violation THEN
    -- Handle username conflict
    RAISE EXCEPTION 'Username already exists';
  WHEN OTHERS THEN
    -- Handle other errors
    RAISE EXCEPTION 'Error creating user profile: %', SQLERRM;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Ensure username uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS users_username_unique_idx ON public.users (lower(username));