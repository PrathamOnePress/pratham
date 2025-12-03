'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  const [user,setUser]=useState(null);
  const [books,setBooks]=useState([]);
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
    supabase.auth.getUser().then(r=> setUser(r.data?.user || null));
    async function fetchData(){
      const token = (await supabase.auth.getSession()).data.session?.access_token;
      // fetch protected APIs with bearer token
      const h = token ? { 'Authorization': 'Bearer ' + token } : {};
      const b = await fetch('/api/my/books',{headers:h}).then(r=> r.json()).catch(()=>[]);
      const p = await fetch('/api/projects',{headers:h}).then(r=> r.json()).catch(()=>[]);
      setBooks(b || []);
      setProjects(p || []);
    }
    fetchData();
    const sub = supabase.auth.onAuthStateChange((_, sess)=> {
      setUser(sess?.user || null);
    });
    return ()=> sub.subscription.unsubscribe();
  },[]);

  if (!user) return <div style={{padding:20}}><h2>Please sign in</h2></div>;

  return (
    <div style={{padding:20}}>
      <h2>Welcome {user.email}</h2>
      <section>
        <h3>My Books</h3>
        <ul>{books.map(b=> <li key={b.id}>{b.title || b.slug || 'Untitled'}</li>)}</ul>
      </section>
      <section>
        <h3>My Projects</h3>
        <ul>{projects.map(p=> <li key={p.id}>{p.title}</li>)}</ul>
      </section>
      <section>
        <h3>Actions</h3>
        <button onClick={()=> supabase.auth.signOut()}>Sign out</button>
      </section>
    </div>
  );
}
