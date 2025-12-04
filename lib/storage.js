import { supabase } from './supabaseClient';

export async function createSignedUploadUrl(bucket, path, expires=60) {
  // Generate a presigned url for direct upload using Supabase Storage
  const { data, error } = await supabase.storage.from(bucket).createSignedUploadUrl(path, expires);
  if (error) throw error;
  return data;
}

export async function makePublic(bucket, path) {
  const { data, error } = await supabase.storage.from(bucket).update(path, {});
  return { data, error };
}
