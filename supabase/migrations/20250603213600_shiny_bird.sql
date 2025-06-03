/*
  # Fix Users Table RLS Policies

  1. Changes
    - Remove conflicting policies for user registration
    - Add clear, specific policies for:
      - Registration (INSERT)
      - Profile management (SELECT, UPDATE)
  
  2. Security
    - Enable RLS (already enabled)
    - Add proper policies for user registration and profile management
    - Ensure users can only access and modify their own data
*/

-- First, drop the conflicting policies
DROP POLICY IF EXISTS "Enable insert for registration" ON public.users;
DROP POLICY IF EXISTS "Users can create own profile" ON public.users;

-- Create a single, clear policy for registration
CREATE POLICY "Enable user registration" ON public.users
  FOR INSERT
  TO public
  WITH CHECK (auth.uid() = id);

-- Keep existing policies for reading and updating own data
-- Note: These are already present based on the schema, no need to recreate