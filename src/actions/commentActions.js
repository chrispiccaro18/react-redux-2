const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

const addComment = body => ({
  type: ADD_COMMENT,
  payload: body
});

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  payload: commentId
});

const updateComment = (commentId, commentUpdate) => ({
  type: UPDATE_COMMENT,
  payload: {
    commentId,
    commentUpdate
  }
});

export {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  addComment,
  deleteComment,
  updateComment
};
