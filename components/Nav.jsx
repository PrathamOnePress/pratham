'use client';
import Link from 'next/link';

export default function Nav(){ return (
  <nav className='p-4 border-b'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='font-bold'>PrathamOne</div>
      <div className='space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/admin'>Admin</Link>
        <Link href='/auth/signin'>Sign in</Link>
      </div>
    </div>
  </nav>
); }
