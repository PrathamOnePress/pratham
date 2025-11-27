/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v3)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Fully Fixed Version — force-dynamic applied to ALL API routes.
 */

import { createClient } from '@supabase/supabase-js';
export const supabaseAdmin = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL||'',
 process.env.SUPABASE_SERVICE_ROLE_KEY||'',
 { auth:{persistSession:false} }
);
