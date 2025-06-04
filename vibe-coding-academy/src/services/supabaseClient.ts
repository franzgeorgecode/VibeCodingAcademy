import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error("Error: REACT_APP_SUPABASE_URL is not defined. Please check your .env file.");
  // Potentially throw an error or handle this case more gracefully
}

if (!supabaseAnonKey) {
  console.error("Error: REACT_APP_SUPABASE_ANON_KEY is not defined. Please check your .env file.");
  // Potentially throw an error or handle this case more gracefully
}

export const supabase = createClient(
  supabaseUrl || '', // Fallback to empty string if undefined, though checks above should catch this
  supabaseAnonKey || '' // Fallback to empty string
);
