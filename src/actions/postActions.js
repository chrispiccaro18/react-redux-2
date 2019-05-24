const ADD_POST = 'ADD_POST';

const addPost = (title, body) => ({
  type: ADD_POST,
  payload: { title, body }
});

export {
  ADD_POST,
  addPost
};
