'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function TemplatesPage(){
  const [templates,setTemplates]=useState([]);
  useEffect(()=>{
    async function fetchTemplates(){
      const res = await fetch('/api/templates').then(r=>r.json()).catch(()=>[]);
      setTemplates(res || []);
    }
    fetchTemplates();
  },[]);
  return (
    <div>
      <h2>Templates</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        {templates.map(t=> <div key={t.id} className='card'><strong>{t.name}</strong><pre style={{fontSize:12}}>{JSON.stringify(t.content,null,2)}</pre></div>)}
      </div>
    </div>
  );
}
