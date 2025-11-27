/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
export default function Login(){ const [email,setEmail]=useState(''); const [msg,setMsg]=useState(''); async function send(){ const { error } = await supabase.auth.signInWithOtp({ email }); if(error) setMsg('Error: '+error.message); else setMsg('Magic link sent'); } return (<div className="container"><h2>Admin Login</h2><div className="card"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" style={{padding:10,width:'100%'}}/><div style={{marginTop:12}}><button className="btn" onClick={send}>Send Magic Link</button></div><p className="small" style={{marginTop:12}}>{msg}</p></div></div>)}