import Link from 'next/link';
import React from 'react';

export default function DashboardNav() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-center text-indigo-500">Dashboard Page Nav</h1>
        <nav>
          <Link href={'/dashboard'}>Home</Link> | <Link href={'/dashboard/overview'}>Overview</Link> | <Link href={'/goals'}>Goals</Link>
        </nav>
      </div>
    </div>
  );
}
