'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.includes('dashboard')) return;

  const links = [
    {
      sn: 1,
      title: 'Home',
      href: '/',
    },
    {
      sn: 2,
      title: 'About',
      href: '/about',
    },
    {
      sn: 3,
      title: 'Blogs',
      href: '/blogs',
    },
    {
      sn: 4,
      title: 'posts',
      href: '/posts',
    },
    {
      sn: 5,
      title: 'dashboard',
      href: '/dashboard',
    },
    {
      sn: 6,
      title: 'categories',
      href: '/categories',
    },
    {
      sn: 7,
      title: 'User',
      href: '/user',
    },
  ];

  return (
    <div>
      {/* {!pathname.includes('dashboard') ? ( */}
      <nav className="px-16 py-8  border-b flex justify-between">
        <ul className="flex items-center gap-4">
          {/* <li className="border-r-2 pr-4">
            <Link href={'/'}>Home</Link>
          </li> */}
          {links.map((link) => (
            <li key={link.sn} className={`${pathname === link.href && 'text-indigo-400 font-bold'} pr-4  capitalize ${link.sn === links.length ? 'border-none' : 'border-r-2'}`}>
              <Link href={link.href}> {link.title} </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => router.push('/blogs')} className="px-5 py-2 rounded-md bg-indigo-600">
          Login
        </button>
      </nav>

      {/* ) : null} */}
    </div>
  );
}
