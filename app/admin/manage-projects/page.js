'use client';
import { useEffect, useState } from 'react';

export default function ManageProjects(){
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    fetch('/api/projects').then(r=>r.json()).then(d=> setProjects(d || []));
  },[]);

  async function changeStatus(id, status){
    await fetch('/api/admin/approve',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id, action:status})});
    setProjects(projects.map(p=> p.id===id ? {...p, status} : p));
  }

  return (
    <div>
      <h2>Manage Projects</h2>
      <div>{projects.map(p=> <div key={p.id} className='card' style={{marginTop:8}}>
        <div><strong>{p.title}</strong> <small style={{color:'#666'}}>{p.status}</small></div>
        <div style={{marginTop:8}}>
          <button className='btn' onClick={()=>changeStatus(p.id,'approved')}>Approve</button>
          <button className='btn' onClick={()=>changeStatus(p.id,'rejected')}>Reject</button>
        </div>
      </div>)}</div>
    </div>
  );
}
