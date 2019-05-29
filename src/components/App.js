import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './posts/Post';

export default function App() {
  const post = { id: '22', title: 'hi', body: 'there' };
  return (
    <Router>
      <ul>
        <Post post={post}></Post>
      </ul>
    </Router>
  );
}
