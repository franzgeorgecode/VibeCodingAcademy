/*
  # Update Users Table RLS Policies

  1. Changes
    - Add policy to allow inserting new users during registration
    - Update existing policies for better clarity and security

  2. Security
    - Enable RLS on users table (already enabled)
    - Update policies to handle registration and profile management
*/

-- Drop existing policies to recreate them with correct permissions
DROP POLICY IF EXISTS "Enable user registration" ON public.users;
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;

-- Create new policies with correct permissions
CREATE POLICY "Enable insert during registration"
ON public.users
FOR INSERT
TO public
WITH CHECK (
  -- Allow insert during registration when the user's ID matches auth.uid()
  auth.uid() IS NULL OR auth.uid() = id
);

CREATE POLICY "Users can read own data"
ON public.users
FOR SELECT
TO public
USING (
  -- Users can only read their own data
  auth.uid() = id
);

CREATE POLICY "Users can update own data"
ON public.users
FOR UPDATE
TO public
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);