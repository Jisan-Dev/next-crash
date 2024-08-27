import Link from 'next/link';
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'This is the content of Blog 1',
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is the content of Blog 2',
    },
  ];

  return (
    <div className={poppins.className}>
      <h1 className="mb-2 text-xl underline font-semibold text-indigo-600">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-1">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
