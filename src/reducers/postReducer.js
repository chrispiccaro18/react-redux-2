import shortId from 'shortid';
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = {};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_POST:
      return addPostWithId(state, payload);
    case DELETE_POST:
      return deletePostWithId(state, payload);
    case UPDATE_POST:
      return updatePostWithId(state, payload);
    default:
      return state;
  }
}

function addPostWithId(state, payload) {
  const id = shortId.generate();
  const { title, body } = payload;
  return {
    ...state,
    [id]: {
      id,
      title,
      body
    }
  };
}

function deletePostWithId(state, id) {
  // eslint-disable-next-line no-unused-vars
  const { [id]: _, ...newState } = state;
  return newState;
}

function updatePostWithId(state, payload) {
  const { postId, titleUpdate, bodyUpdate } = payload;
  const oldPost = state[postId];
  if(!titleUpdate) {
    return { ...state, [postId]: { title: oldPost.title, body: bodyUpdate, id: postId } };
  } else if(!bodyUpdate) {
    return { ...state, [postId]: { title: titleUpdate, body: oldPost.body, id: postId } };
  } else {
    return { ...state, [postId]: { title: titleUpdate, body: bodyUpdate, id: postId } };
  }
}
