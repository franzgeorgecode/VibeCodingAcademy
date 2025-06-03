/*
  # Fix Users Table RLS Policies

  1. Changes
    - Add INSERT policy for public role to allow user registration
    - Modify existing policies for better security

  2. Security
    - Enable RLS on users table (already enabled)
    - Add policy for public registration
    - Ensure users can only access their own data
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Enable user registration" ON public.users;
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;

-- Recreate policies with correct permissions
CREATE POLICY "Enable user registration"
ON public.users
FOR INSERT
TO public
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own data"
ON public.users
FOR SELECT
TO public
USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
ON public.users
FOR UPDATE
TO public
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);