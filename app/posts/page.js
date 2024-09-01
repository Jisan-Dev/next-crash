import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: {
    absolute: 'Posts',
  },
  description: 'This is the posts page',
  keywords: ['posts', 'lorem'],
};

export default async function Posts() {
  const posts = await getAllPosts();
  // console.log(posts);
  return (
    <div>
      <h1 className="text-xl mb-4">All Posts</h1>

      <ol>
        {posts.map((post) => (
          <li className="list-decimal list-inside" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
