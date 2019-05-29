import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Posts from './posts/Posts';
import PostForm from './posts/PostForm';

export default function App() {
  const posts = [
    { id: '001', title: 'title1', body: 'body1' },
    { id: '002', title: 'title2', body: 'body2' },
    { id: '003', title: 'title3', body: 'body3' }
  ];
  const postOnSubmit = (title, body) => console.log(title, body);
  return (
    <Router>
      <PostForm postOnSubmit={postOnSubmit} />
      <Posts posts={posts} />
    </Router>
  );
}
