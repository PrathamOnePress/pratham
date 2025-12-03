'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function ProfilePage(){
  const [profile,setProfile]=useState(null);
  const [name,setName]=useState('');
  useEffect(()=>{
    async function load(){
      const token = (await supabase.auth.getSession()).data.session?.access_token;
      const res = await fetch('/api/profile',{headers: {'Authorization':'Bearer '+token}}).then(r=>r.json()).catch(()=>null);
      setProfile(res); if (res) setName(res.full_name||'');
    }
    load();
  },[]);

  async function save(e){
    e.preventDefault();
    const token = (await supabase.auth.getSession()).data.session?.access_token;
    const res = await fetch('/api/profile',{method:'PATCH', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify({full_name:name})}).then(r=>r.json());
    setProfile(res);
    alert('Profile updated');
  }

  if (!profile) return <div>Please sign in</div>;
  return (
    <div>
      <h2>Profile</h2>
      <div className='card'>
        <div><strong>Email:</strong> {profile.email}</div>
        <div><strong>Role:</strong> {profile.role}</div>
        <form onSubmit={save}>
          <label>Full name</label><br/>
          <input value={name} onChange={e=>setName(e.target.value)} /><br/>
          <button className='btn' type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
}
