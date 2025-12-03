'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function SignUp() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [message,setMessage]=useState('');

  async function handleSignup(e){
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setMessage(error.message);
    else {
      setMessage('Signup successful. Please check your email for confirmation link.');
      // call profile init so profiles table has an entry (fallback for projects without trigger)
      try {
        if (data?.user) {
          await fetch('/api/profile/init',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({id: data.user.id, email})});
        }
      } catch(e) { console.warn('profile init failed', e); }
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button type='submit' disabled={loading}>{loading ? 'Please wait' : 'Create account'}</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
