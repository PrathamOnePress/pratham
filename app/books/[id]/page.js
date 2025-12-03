
import { supabase } from '../../../lib/supabaseClient'

export default async function Book({ params }){
  const id = params.id
  const { data } = await supabase.from('books').select('*').eq('id', id).single()
  const book = data || { title: 'Not found', description:'' }
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-sm text-gray-600">By {book.author}</p>
      <div className="mt-4">{book.description}</div>
    </section>
  )
}
