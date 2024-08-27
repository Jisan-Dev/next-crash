import getPost from '@/lib/getPost';
import React from 'react';

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h1 className="text-indigo-500 text-xl mb-4">Title: {post.title} </h1>
      <p> Description: {post.body} </p>
    </div>
  );
}
