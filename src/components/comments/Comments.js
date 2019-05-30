import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentLis = comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ));
  return (
    <ul>
      {commentLis}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    commentBody: PropTypes.string.isRequired
  })).isRequired
};

export default Comments;
