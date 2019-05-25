const ADD_COMMENT = 'ADD_COMMENT';

const addComment = body => ({
  type: ADD_COMMENT,
  payload: body
});

export {
  ADD_COMMENT,
  addComment
};
