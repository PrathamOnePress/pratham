/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
'use client';import { useEffect,useState } from 'react';export default function EditRelease({ params }: any){ const id = params.id; const [release,setRelease]=useState<any>(null); useEffect(()=>{ fetch('/api/releases/'+id).then(r=>r.json()).then(d=>setRelease(d)) },[id]); if(!release) return <div className="container"><p>Loading...</p></div>; return (<div className="container"><h1 style={{fontSize:28}}>Edit Release</h1><div className="card"><input defaultValue={release.title} style={{width:'100%',padding:10}}/><div style={{marginTop:12}}><button className="btn-primary">Save</button></div></div></div>)}