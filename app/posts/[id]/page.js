import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
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

// to make this dynamic page(server render on demand with api call each time with different param id) to a SSG(Static Site Generation). so that the pages with given param ids below will be pre-rendered on the server no api call on demand. We can use this approach if we are sure that there will not be any new params in near future.
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
