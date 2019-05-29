import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Posts from './posts/Posts';

export default function App() {
  const posts = [
    { id: '001', title: 'title1', body: 'body1' },
    { id: '002', title: 'title2', body: 'body2' },
    { id: '003', title: 'title3', body: 'body3' }
  ];
  return (
    <Router>
      <Posts posts={posts} />
    </Router>
  );
}
