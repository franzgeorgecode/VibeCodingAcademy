-- Add 'completed' column to user_progress table
ALTER TABLE public.user_progress
ADD COLUMN IF NOT EXISTS completed BOOLEAN DEFAULT FALSE NOT NULL;

-- Optional: Backfill existing rows.
-- For this exercise, we'll assume new rows will correctly set 'completed' via application logic.
-- If backfilling was critical for existing data, a statement like this would be used:
-- UPDATE public.user_progress
-- SET completed = TRUE
-- WHERE score >= 85 AND completed = FALSE;
-- However, application logic in LessonView.tsx already handles setting 'completed' to TRUE
-- when a lesson is passed (score >= 85), so this backfill might only be for historical data
-- not processed by the current app logic. For now, simply adding the column is sufficient.

-- It's also good practice to ensure an index exists if this column is frequently queried.
-- CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON public.user_progress(completed);
-- This is optional for now.

-- Update RLS policies if needed to explicitly grant access to the new 'completed' column.
-- Existing policies on user_progress might implicitly cover it if they don't specify columns,
-- or if they use 'USING (auth.uid() = user_id)' which grants access to all columns for owned rows.
-- For example, if a policy was 'SELECT (column1, column2)', it would need 'completed' added.
-- The current "Users can read own progress" policy from 20250603212012_misty_rice.sql is:
-- CREATE POLICY "Users can read own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
-- This does not restrict columns, so it should be fine.
-- Similarly for INSERT/UPDATE if they were column-specific.
-- The INSERT policy is: CREATE POLICY "Users can create own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
-- This also does not restrict columns, so it should allow inserting into the new 'completed' column.
-- An UPDATE policy would be needed for the upsert logic in LessonView to modify 'completed'.
-- Let's assume a suitable UPDATE policy exists or add a basic one.

-- Drop the old RLS policy for updating user_progress if it exists, then recreate it.
-- This ensures the policy uses the most up-to-date definition and applies to the correct operations.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'user_progress'
      AND policyname = 'Users can update own progress'
  ) THEN
    DROP POLICY "Users can update own progress" ON public.user_progress;
    RAISE NOTICE 'Policy "Users can update own progress" on table "user_progress" dropped.';
  END IF;

  CREATE POLICY "Users can update own progress"
    ON public.user_progress
    FOR UPDATE                             -- Specifies that this policy is for UPDATE operations
    TO authenticated                       -- Applies to any authenticated user
    USING (auth.uid() = user_id)           -- Allows updating rows where the user_id matches the authenticated user's ID
    WITH CHECK (auth.uid() = user_id);     -- Enforces that any new or modified row must also satisfy this condition
  RAISE NOTICE 'Policy "Users can update own progress" on table "user_progress" created/recreated.';
END $$;
