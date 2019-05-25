const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const addComment = body => ({
  type: ADD_COMMENT,
  payload: body
});

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  payload: commentId
});

export {
  ADD_COMMENT,
  DELETE_COMMENT,
  addComment,
  deleteComment
};
