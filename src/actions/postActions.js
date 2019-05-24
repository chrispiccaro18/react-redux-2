const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

const addPost = (title, body) => ({
  type: ADD_POST,
  payload: { title, body }
});

const deletePost = postId => ({
  type: DELETE_POST,
  payload: postId
});

export {
  ADD_POST,
  DELETE_POST,
  addPost,
  deletePost
};
