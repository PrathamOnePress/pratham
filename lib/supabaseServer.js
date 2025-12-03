import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.warn('Supabase server env vars are not set. Check .env.example');
}

export const supabaseAdmin = createClient(supabaseUrl || '', serviceKey || '');
