
'use client'
import { useState } from 'react'

export default function Contact(){
  const [s, setS] = useState('')
  const [ok, setOk] = useState(null)
  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/contact', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ name: e.target.name.value, email:e.target.email.value, message:e.target.message.value }) })
    const json = await res.json()
    setOk(json.success)
    setS(json.message || '')
  }
  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form className="mt-4" onSubmit={submit}>
        <input name="name" placeholder="Your name" className="block w-full border p-2 mb-2" required/>
        <input name="email" placeholder="Email" className="block w-full border p-2 mb-2" required/>
        <textarea name="message" placeholder="Message" className="block w-full border p-2 mb-2" rows="5" required/>
        <button className="header-cta" type="submit">Send</button>
      </form>
      {ok === true && <div className="mt-4 text-green-600">Message sent</div>}
      {ok === false && <div className="mt-4 text-red-600">Failed: {s}</div>}
    </section>
  )
}
