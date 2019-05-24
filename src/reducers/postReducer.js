import shortId from 'shortid';
import { ADD_POST } from '../actions/PostActions';

const initialState = {};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_POST:
      return addPostWithId(state, payload);
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
