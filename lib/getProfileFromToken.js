import { verifySupabaseJwt } from './jwtVerify';
import { supabaseAdmin } from './supabaseServer';

export async function getProfileFromToken(token) {
  if (!token) throw new Error('No token');
  const payload = await verifySupabaseJwt(token);
  const uid = payload.sub;
  if (!uid) return null;
  const { data, error } = await supabaseAdmin.from('profiles').select('id, email, full_name, role').eq('id', uid).single();
  if (error) return null;
  return { ...data, uid };
}
