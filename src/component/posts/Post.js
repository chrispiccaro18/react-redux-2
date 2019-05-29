import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const { title, id } = post;
  return (
    <Link to={`/post/${id}`}>
      <li>{title}</li>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    body: PropTypes.string
  }).isRequired,
};

export default Post;
