const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const addPost = (title, body) => ({
  type: ADD_POST,
  payload: { title, body }
});

const deletePost = postId => ({
  type: DELETE_POST,
  payload: postId
});

const updatePost = (postId, titleUpdate, bodyUpdate) => ({
  type: UPDATE_POST,
  payload: { postId, titleUpdate, bodyUpdate }
});

export {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  addPost,
  deletePost,
  updatePost
};
