/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

export default function Login(){
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');
  async function send() {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if(error) setMsg('Error: '+error.message); else setMsg('Magic link sent to '+email);
  }
  return (
    <div className="container">
      <h1 className="section-title">Admin Login</h1>
      <div className="card">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" style={{padding:10,width:'100%'}} />
        <div style={{marginTop:12}}>
          <button className="btn-primary" onClick={send}>Send Magic Link</button>
        </div>
        <p style={{marginTop:12}} className="small">{msg}</p>
      </div>
    </div>
  );
}
