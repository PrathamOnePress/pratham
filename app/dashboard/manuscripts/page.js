'use client';
import { useEffect, useState } from 'react';

export default function ManuscriptsManager(){
  const [items,setItems]=useState([]);
  useEffect(()=>{ fetch('/api/manuscripts').then(r=>r.json()).then(d=> setItems(d || [])); },[]);
  return (<div><h2>Manuscripts</h2><div>{items.map(i=> <div key={i.id} className='card' style={{marginTop:8}}><div>{i.filename || i.storage_path}</div><div>{i.status}</div></div>)}</div></div>);
}
