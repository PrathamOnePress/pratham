'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function BooksPage(){
  const [books,setBooks]=useState([]);
  const [title,setTitle]=useState('');
  useEffect(()=>{
    async function fetchBooks(){
      const token = (await supabase.auth.getSession()).data.session?.access_token;
      const h = token ? { 'Authorization': 'Bearer ' + token } : {};
      const res = await fetch('/api/books',{headers:h}).then(r=>r.json()).catch(()=>[]);
      setBooks(res || []);
    }
    fetchBooks();
  },[]);

  async function createBook(e){
    e.preventDefault();
    const token = (await supabase.auth.getSession()).data.session?.access_token;
    const h = token ? { 'Authorization': 'Bearer ' + token, 'Content-Type':'application/json' } : {'Content-Type':'application/json'};
    const res = await fetch('/api/books',{method:'POST', headers:h, body: JSON.stringify({title})}).then(r=>r.json());
    setBooks([...(books||[]), res]);
    setTitle('');
  }

  return (
    <div>
      <h2>My Books</h2>
      <div className='card'>
        <form onSubmit={createBook}>
          <input placeholder='Book title' value={title} onChange={e=>setTitle(e.target.value)} />
          <button className='btn' type='submit'>Create</button>
        </form>
      </div>
      <div style={{marginTop:12}}>
        {(books||[]).map(b=> <div key={b.id} className='card' style={{marginTop:8}}><strong>{b.title}</strong><div style={{fontSize:12,color:'#666'}}>{b.status}</div></div>)}
      </div>
    </div>
  );
}
