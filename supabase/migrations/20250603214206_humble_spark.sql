/*
  # Fix Users Table RLS Policies
  
  1. Changes
    - Drop existing INSERT policy that was causing the 401 error
    - Create new INSERT policy that allows profile creation during registration
    - Keep existing SELECT and UPDATE policies as they are correct
  
  2. Security
    - Ensures users can only create their own profile
    - Maintains existing read/update restrictions
*/

-- Drop the problematic INSERT policy
DROP POLICY IF EXISTS "Enable insert during registration" ON public.users;

-- Create new INSERT policy that properly handles registration
CREATE POLICY "Enable insert for registration" ON public.users
FOR INSERT 
TO public
WITH CHECK (
  -- Allow insert when the row's ID matches the user's ID
  -- This works for both registration and admin operations
  auth.uid() = id
);