'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function SignIn() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');

  async function handleSignin(e){
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Signed in');
  }

  return (
    <div style={{padding:20}}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button type='submit'>Sign in</button>
      </form>
      <p>Or sign in with:</p>
      <button onClick={()=> supabase.auth.signInWithOAuth({ provider: 'google' })}>Google</button>
      <p>{message}</p>
    </div>
  );
}
