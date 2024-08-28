'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.includes('dashboard')) return;
  return (
    <div>
      {/* {!pathname.includes('dashboard') ? ( */}
      <nav className="px-16 py-8  border-b">
        <ul className="flex items-center gap-4">
          <li className="border-r-2 pr-4">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="border-r-2 pr-4">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="border-r-2 pr-4">
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li className="border-r-2 pr-4">
            <Link href={'/posts'}>posts</Link>
          </li>
          <li className="border-r-2 pr-4">
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <Link href={'/dashboard/overview'}>Dashboard-Overview</Link>
          </li>
        </ul>
      </nav>
      {/* ) : null} */}
    </div>
  );
}
