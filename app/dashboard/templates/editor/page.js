'use client';
import { useEffect, useState } from 'react';

export default function TemplateEditor(){
  const [templates,setTemplates]=useState([]);
  const [name,setName]=useState('');
  const [content,setContent]=useState('{"pages": 1, "style": "hybrid"}');
  useEffect(()=>{ fetch('/api/templates').then(r=>r.json()).then(d=> setTemplates(d || [])); },[]);
  async function save(e){
    e.preventDefault();
    try{
      const parsed = JSON.parse(content);
      await fetch('/api/templates/save',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({name, content: parsed})});
      setName(''); setContent('{"pages": 1, "style": "hybrid"}');
      const res = await fetch('/api/templates').then(r=>r.json()); setTemplates(res || []);
    } catch(err){ alert('Invalid JSON'); }
  }
  return (<div><h2>Template Editor</h2><p>Note: content must be JSON with keys 'pages' and 'style'.</p><form onSubmit={save} className='card'><input value={name} onChange={e=>setName(e.target.value)} placeholder='Template name' /><textarea value={content} onChange={e=>setContent(e.target.value)} rows={8} style={{width:'100%'}}></textarea><button className='btn' type='submit'>Save</button></form><div style={{marginTop:12}}>{templates.map(t=> <div key={t.id} className='card' style={{marginTop:8}}><strong>{t.name}</strong><pre style={{fontSize:12}}>{JSON.stringify(t.content,null,2)}</pre></div>)}</div></div>);
}
