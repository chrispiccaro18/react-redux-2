import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  const { commentBody } = comment;
  return (
    <li>
      <p>{commentBody}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    commentBody: PropTypes.string.isRequired
  })
};

export default Comment;
