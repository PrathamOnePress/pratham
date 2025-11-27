/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

'use client';
import { useState } from 'react';

export default function NewRelease(){
  const [title,setTitle] = useState('');
  const [excerpt,setExcerpt] = useState('');
  async function createRelease(){
    const res = await fetch('/api/releases', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title,excerpt})});
    const j = await res.json();
    alert('Created: '+(j.id||'error'));
    location.href='/admin/dashboard';
  }
  return (
    <div className="container">
      <h1 className="section-title">New Release</h1>
      <div className="card">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%',padding:10}}/>
        <textarea placeholder="Excerpt" value={excerpt} onChange={e=>setExcerpt(e.target.value)} style={{width:'100%',padding:10,marginTop:8}}/>
        <div style={{marginTop:12}}>
          <button className="btn-primary" onClick={createRelease}>Create Release</button>
        </div>
      </div>
    </div>
  );
}
