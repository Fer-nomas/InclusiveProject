import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://wssmoghhylwzpponwnom.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzc21vZ2hoeWx3enBwb253bm9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NjQ5NDMsImV4cCI6MjAwNTQ0MDk0M30.UR2rFD8pI_iG0LLOMo4IQWKvHhICV-R_WDddJSX8F4s"
);
