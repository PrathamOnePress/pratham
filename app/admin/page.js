'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function AdminPage(){
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    supabase.auth.getUser().then(r=> setUser(r.data?.user || null));
    fetch('/api/projects').then(r=> r.json()).then(d=> setProjects(d || []));
  },[]);

  if (!user) return <div style={{padding:20}}><h2>Admin — Sign in required</h2></div>;

  return (
    <div style={{padding:20}}>
      <h2>Admin Console</h2>
      <p>User: {user.email}</p>
      <h3>Sample Projects (from /api/projects)</h3>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}
