/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

'use client';
import { useEffect, useState } from 'react';

export default function Dashboard(){
  const [releases,setReleases] = useState([]);
  useEffect(()=>{ fetch('/api/releases').then(r=>r.json()).then(d=>setReleases(d||[])) },[]);
  return (
    <div className="container">
      <h1 className="section-title">Admin Dashboard</h1>
      <div style={{display:'grid',gap:12,marginTop:12}}>
        <a className="btn-primary" href="/admin/new-release">New Release</a>
        <div>
          <h3>Releases</h3>
          <div style={{display:'grid',gap:8,marginTop:8}}>
            {releases.map((r:any)=>(
              <div key={r.id} className="card">
                <strong>{r.title}</strong>
                <div style={{marginTop:8}}>
                  <a href={`/admin/edit-release/${r.id}`} style={{marginRight:12}}>Edit</a>
                  <a href={`/releases/${r.slug}`}>View</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
