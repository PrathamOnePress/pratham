'use client';
import { useEffect, useState } from 'react';

export default function AdminFiles(){
  const [files,setFiles]=useState([]);
  async function load(){
    const token = (await (await import('../../../lib/supabaseClient')).supabase.auth.getSession()).data.session?.access_token;
    const res = await fetch('/api/storage/list',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body: JSON.stringify({bucket:'manuscripts', prefix:''})}).then(r=>r.json());
    setFiles(res || []);
  }
  useEffect(()=>{ load(); },[]);
  async function del(name){
    const token = (await (await import('../../../lib/supabaseClient')).supabase.auth.getSession()).data.session?.access_token;
    await fetch('/api/storage/delete',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body: JSON.stringify({bucket:'manuscripts', path:name})});
    await load();
  }
  return (<div><h2>Admin File Explorer</h2><div>{files.map(f=> <div key={f.name} className='card' style={{marginTop:8}}><div>{f.name} ({f.size})</div><div><button className='btn' onClick={()=>del(f.name)}>Delete</button></div></div>)}</div></div>);
}
