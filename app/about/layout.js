import Link from 'next/link';
import React from 'react';

export default function AboutLayout({ children }) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-center text-indigo-500">About Page Layout</h1>
        <nav>
          <Link href={'/about/mission'}>Mission</Link> | <Link href={'/about/vision'}>Vision</Link> | <Link href={'/about/goals'}>Goals</Link>
        </nav>
      </div>
      <hr className="my-2" />
      {children}
    </div>
  );
}
