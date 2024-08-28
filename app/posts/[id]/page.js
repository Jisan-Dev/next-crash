import Comments from '@/app/components/Comments';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div>
      <h1 className="text-indigo-500 text-xl mb-4">Title: {post.title} </h1>
      <p> Description: {post.body} </p>
      <hr className="my-4" />
      <h2 className="text-lg mb-2">Comments:</h2>
      <Suspense fallback="<h1>Comments are loading......</h1>">
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
