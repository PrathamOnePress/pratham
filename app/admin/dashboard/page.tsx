/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
'use client';
import { useEffect, useState } from 'react';
export default function Dashboard(){ const [releases,setReleases]=useState([]); useEffect(()=>{ fetch('/api/releases').then(r=>r.json()).then(d=>setReleases(d||[])) },[]); return (<div className="container"><h2>Admin Dashboard</h2><div style={{display:'grid',gap:12,marginTop:12}}><a className="btn" href="/admin/new-release">New Release</a><div><h3>Releases</h3><div style={{display:'grid',gap:8,marginTop:8}}>{releases.map((r:any)=>(<div key={r.id} className="card"><strong>{r.title}</strong><div style={{marginTop:8}}><a href={`/admin/edit-release/${r.id}`} style={{marginRight:12}}>Edit</a><a href={`/releases/${r.slug}`}>View</a></div></div>))}</div></div></div></div>)}