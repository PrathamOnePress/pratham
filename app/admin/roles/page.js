'use client';
import { useEffect, useState } from 'react';
export default function AdminRoles(){
  const [users,setUsers]=useState([]);
  const [role,setRole]=useState('author');
  useEffect(()=>{ fetch('/api/admin/users').then(r=>r.json()).then(d=> setUsers(d.data || [])); },[]);
  async function setRoleFor(id){
    await fetch('/api/admin/roles',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({profile_id:id, role})});
    alert('role updated');
  }
  return (<div><h2>Manage Roles</h2><div className='card'><select value={role} onChange={e=>setRole(e.target.value)}><option value='author'>author</option><option value='school'>school</option><option value='admin'>admin</option></select></div><div style={{marginTop:12}}>{users.map(u=> <div key={u.id} className='card' style={{marginTop:8}}><div>{u.email || u.id}</div><button className='btn' onClick={()=>setRoleFor(u.id)}>Set role</button></div>)}</div></div>);
}
