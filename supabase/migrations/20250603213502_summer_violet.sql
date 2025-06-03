/*
  # Fix users table RLS policies

  1. Changes
    - Add RLS policy to allow new users to insert their own profile data
    - Keep existing policies for SELECT and UPDATE operations

  2. Security
    - Users can only insert their own profile (id must match auth.uid())
    - Maintains existing security for reading and updating own data
*/

-- Add policy to allow users to insert their own profile
CREATE POLICY "Users can create own profile"
ON public.users
FOR INSERT
TO public
WITH CHECK (auth.uid() = id);