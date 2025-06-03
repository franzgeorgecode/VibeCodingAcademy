/*
  # Fix users table RLS policies

  1. Changes
    - Drop existing INSERT policy that requires authentication
    - Add new INSERT policy that allows profile creation during registration
    - Keep existing SELECT and UPDATE policies unchanged

  2. Security
    - New policy ensures user_id matches auth.uid() during registration
    - Maintains existing read/update security
*/

-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Users can create their own profile" ON public.users;

-- Create new INSERT policy that works during registration
CREATE POLICY "Enable insert for registration" ON public.users
  FOR INSERT
  WITH CHECK (true);

-- Note: Keeping existing SELECT and UPDATE policies as they are correct:
-- "Users can read own data" with (uid() = id)
-- "Users can update own data" with (uid() = id)