-- Create the public.users table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add first_name column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'first_name'
  ) THEN
    ALTER TABLE public.users ADD COLUMN first_name TEXT;
    RAISE NOTICE 'Column first_name added to public.users';
  END IF;
END $$;

-- Add last_name column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'last_name'
  ) THEN
    ALTER TABLE public.users ADD COLUMN last_name TEXT;
    RAISE NOTICE 'Column last_name added to public.users';
  END IF;
END $$;

-- Add created_at column if it doesn't exist (with default)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'created_at'
  ) THEN
    ALTER TABLE public.users ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
    RAISE NOTICE 'Column created_at added to public.users';
  END IF;
END $$;

-- Add updated_at column if it doesn't exist (with default)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE public.users ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    RAISE NOTICE 'Column updated_at added to public.users';
  END IF;
END $$;

-- Function to update updated_at column
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on row update
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'on_users_update_set_updated_at' AND tgrelid = 'public.users'::regclass
  ) THEN
    CREATE TRIGGER on_users_update_set_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
    RAISE NOTICE 'Trigger on_users_update_set_updated_at created for public.users';
  END IF;
END $$;

-- Enable RLS for the users table if not already enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- RLS Policies:
-- 1. Allow users to read their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'users' AND policyname = 'Users can read own profile'
  ) THEN
    CREATE POLICY "Users can read own profile"
      ON public.users FOR SELECT
      TO authenticated
      USING (auth.uid() = id);
    RAISE NOTICE 'RLS Policy "Users can read own profile" created for public.users';
  ELSE
    RAISE NOTICE 'RLS Policy "Users can read own profile" already exists for public.users';
  END IF;
END $$;

-- 2. Allow users to insert their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'users' AND policyname = 'Users can create own profile'
  ) THEN
    CREATE POLICY "Users can create own profile"
      ON public.users FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = id);
    RAISE NOTICE 'RLS Policy "Users can create own profile" created for public.users';
  ELSE
    RAISE NOTICE 'RLS Policy "Users can create own profile" already exists for public.users';
  END IF;
END $$;

-- 3. Allow users to update their own profile
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'users' AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON public.users FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
    RAISE NOTICE 'RLS Policy "Users can update own profile" created for public.users';
  ELSE
    -- If it exists, drop and recreate to ensure it's the latest definition (especially for the USING/WITH CHECK clauses)
    DROP POLICY "Users can update own profile" ON public.users;
    CREATE POLICY "Users can update own profile"
      ON public.users FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
    RAISE NOTICE 'RLS Policy "Users can update own profile" updated for public.users';
  END IF;
END $$;

COMMENT ON TABLE public.users IS 'Stores user profile information, extending auth.users.';
COMMENT ON COLUMN public.users.id IS 'References auth.users.id, primary key.';
COMMENT ON COLUMN public.users.first_name IS 'User''s first name.';
COMMENT ON COLUMN public.users.last_name IS 'User''s last name.';
