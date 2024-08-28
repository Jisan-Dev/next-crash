import DashboardNav from '@/app/components/DashboardNav';
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardNav />
      <hr className="my-2" />
      <div className="min-h-[calc(100vh-180px)]">{children}</div>
      <footer className="text-center text-neutral-900 font-bold bg-indigo-500 text-sm p-10">This is the dashboard footer</footer>
    </div>
  );
}
