import { createClient } from "@supabase/supabase-js";
const URL = "https://yeazzahaggxzlsvbehne.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllYXp6YWhhZ2d4emxzdmJlaG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwOTQsImV4cCI6MjA3Nzk1OTA5NH0.kjXIrknJPnXPQABsWRNz92_Lk_RwIXNMtaQa-qY-xMk";
export const supabase = createClient(URL, API_KEY);
