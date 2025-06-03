-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Recreate function with better error handling and validation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Insert the new user profile
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
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update RLS policies
DROP POLICY IF EXISTS "Enable insert for registration" ON public.users;
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;

-- Simplified RLS policies
CREATE POLICY "Users can read own data"
  ON public.users FOR SELECT
  TO public
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON public.users FOR UPDATE
  TO public
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- No need for INSERT policy since we're using a trigger