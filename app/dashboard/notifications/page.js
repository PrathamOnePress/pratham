'use client';
import { useEffect, useState } from 'react';

export default function Notifications(){
  const [notes,setNotes]=useState([]);
  useEffect(()=>{
    fetch('/api/notifications').then(r=> r.json()).then(d=> setNotes(d || []));
  },[]);
  async function mark(id){
    await fetch('/api/notifications/mark-read',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({id})});
    setNotes(notes.map(n=> n.id===id ? {...n, read:true} : n));
  }
  return (
    <div>
      <h2>Notifications</h2>
      <div>{notes.map(n=> <div key={n.id} className='card' style={{marginTop:8}}><div><strong>{n.type}</strong> {n.read ? '(read)' : ''}</div><pre style={{fontSize:12}}>{JSON.stringify(n.payload,null,2)}</pre><div>{!n.read && <button className='btn' onClick={()=>mark(n.id)}>Mark read</button>}</div></div>)}</div>
    </div>
  );
}
