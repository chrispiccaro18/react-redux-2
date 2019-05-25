const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

const addComment = (postId, commentBody) => ({
  type: ADD_COMMENT,
  payload: {
    postId,
    commentBody
  }
});

const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: {
    postId,
    commentId
  }
});

const updateComment = (postId, commentId, commentUpdate) => ({
  type: UPDATE_COMMENT,
  payload: {
    postId,
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
