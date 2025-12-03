'use client';
import { useEffect, useState } from 'react';

export default function ManageUsers(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('/api/admin/users').then(r=>r.json()).then(d=> setUsers(d.data || []));
  },[]);
  return (
    <div>
      <h2>Manage Users</h2>
      <div>{users.length ? users.map(u=> <div key={u.id} className='card' style={{marginTop:8}}>{u.email || u.id}</div>) : <p>No users</p>}</div>
    </div>
  );
}
