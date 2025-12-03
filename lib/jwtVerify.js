import { jwtVerify } from 'jose';

export async function verifySupabaseJwt(token) {
  const secret = process.env.SUPABASE_JWT_SECRET;
  if (!secret) throw new Error('SUPABASE_JWT_SECRET is not set');
  const encoder = new TextEncoder();
  const key = encoder.encode(secret);
  try {
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch (err) {
    throw err;
  }
}
