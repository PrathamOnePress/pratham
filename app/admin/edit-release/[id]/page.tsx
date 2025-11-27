/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
'use client';import { useEffect,useState } from 'react';export default function EditRelease({ params }: any){ const id = params.id; const [release,setRelease]=useState<any>(null); useEffect(()=>{ fetch('/api/releases/'+id).then(r=>r.json()).then(d=>setRelease(d)) },[id]); if(!release) return <div className="container"><p>Loading...</p></div>; return (<div className="container"><h2>Edit Release</h2><div className="card"><input defaultValue={release.title} style={{width:'100%',padding:10}}/><div style={{marginTop:12}}><button className="btn">Save</button></div></div></div>)}