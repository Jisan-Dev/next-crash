import React from 'react';

export default async function Comments({ commentsPromise }) {
  const comments = await commentsPromise;
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="border-b border-gray-200 py-2 px-4">
          <p>{comment.body}</p>
          <small>By {comment.name}</small>
        </div>
      ))}
    </>
  );
}
