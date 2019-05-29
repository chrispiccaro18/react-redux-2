import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postLis = posts.map(post => (
    <Post key={post.id} post={post} />
  ));
  return (
    <ul>
      {postLis}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string
    })
  ).isRequired
};

export default Posts;
