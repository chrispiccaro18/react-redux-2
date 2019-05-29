import React from 'react';
import Post from './posts/Post';

export default function App() {
  const post = { id: '22', title: 'hi', body: 'there' };
  return (
    <ul>
      <Post post={post}></Post>
    </ul>
  );
}
