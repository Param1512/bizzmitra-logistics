import { createClient } from '@supabase/supabase-js';

// Connected Supabase Database (PostgreSQL 16)
export const SUPABASE_URL = "https://pyqbmgkusnvyyjdsyqyj.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_UNXcq8DuZlHhTimGfZVx4A_qVCnnnZh";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
  },
});
