
import Link from 'next/link'
import { supabase } from '../../lib/supabaseClient'

async function getBooks(){
  try{
    const { data } = await supabase.from('books').select('*').order('id', { ascending: true }).limit(50)
    return data || []
  }catch(err){
    return []
  }
}

export default async function Books(){
  const books = await getBooks()
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Books</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {books.map(b=> (
          <Link key={b.id} href={`/books/${b.id}`} className="card">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.author}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
