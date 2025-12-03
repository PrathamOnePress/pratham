
import Link from 'next/link';
export default function Header(){ return (
  <header style={{padding:20,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div style={{fontWeight:600}}>PrathamOne</div>
    <nav><Link href='/'>Home</Link> | <Link href='/contact'>Contact</Link></nav>
  </header>
) }
