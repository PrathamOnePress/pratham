'use client';
import Link from 'next/link';

export default function Sidebar(){ return (
  <aside className='w-64 pr-4'>
    <div className='p-4 border rounded'>
      <h3>PrathamOne</h3>
      <nav className='mt-2 space-y-2'>
        <Link href='/dashboard'>Overview</Link><br/>
        <Link href='/dashboard/books'>My Books</Link><br/>
        <Link href='/dashboard/upload'>Upload</Link><br/>
        <Link href='/dashboard/manuscripts'>Manuscripts</Link><br/>
        <Link href='/dashboard/files'>My Files</Link><br/>
        <Link href='/dashboard/templates'>Templates</Link><br/>
        <Link href='/dashboard/profile'>Profile</Link><br/>
      </nav>
    </div>
  </aside>
); }
