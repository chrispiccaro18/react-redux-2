import shortId from 'shortid';
import { ADD_POST, DELETE_POST } from '../actions/PostActions';

const initialState = {};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_POST:
      return addPostWithId(state, payload);
    case DELETE_POST:
      return deletePostWithId(state, payload);
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
