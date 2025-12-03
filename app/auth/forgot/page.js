'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function Forgot() {
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  async function handleReset(e){
    e.preventDefault();
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/auth/forgot' });
    if (error) setMessage(error.message);
    else setMessage('If the email exists, a reset link was sent.');
  }

  return (
    <div style={{padding:20}}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <button type='submit'>Send reset link</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
