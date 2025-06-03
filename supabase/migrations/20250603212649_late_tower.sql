/*
  # Add user registration RLS policy

  1. Changes
    - Add INSERT policy to users table to allow new user registration
    
  2. Security
    - Allows users to create their own profile during registration
    - Only allows inserting rows where the user ID matches their auth ID
*/

CREATE POLICY "Users can create their own profile"
  ON public.users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);