'use client';
import { useEffect, useState } from 'react';

export default function AdminAudit(){
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    fetch('/api/admin/audit').then(r=>r.json()).then(d=> setRows(d || []));
  },[]);
  return (<div><h2>Admin Audit Logs</h2><div>{rows.map(r=> <div key={r.id} className='card' style={{marginTop:8}}><div><strong>{r.action}</strong> by {r.actor_uuid} at {r.created_at}</div><pre style={{fontSize:12}}>{JSON.stringify(r.target,null,2)}</pre></div>)}</div></div>);
}
