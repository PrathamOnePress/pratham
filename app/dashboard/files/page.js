'use client';
import { useEffect, useState } from 'react';

export default function FilesManager(){
  const [files,setFiles]=useState([]);
  async function load(){
    const token = (await (await import('../../../lib/supabaseClient')).supabase.auth.getSession()).data.session?.access_token;
    const res = await fetch('/api/storage/mylist',{headers:{'Authorization':'Bearer '+token}}).then(r=>r.json());
    setFiles(res || []);
  }
  useEffect(()=>{ load(); },[]);
  return (<div><h2>My Files</h2><div>{files.map(f=> <div key={f.id} className='card' style={{marginTop:8}}><div>{f.filename || f.storage_path}</div><div>Book: {f.book_id}</div></div>)}</div></div>);
}
