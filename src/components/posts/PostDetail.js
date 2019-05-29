import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  const { title, body } = post;
  return (
    <section>
      <h2>{title}</h2>
      <pre>{body}</pre>
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
