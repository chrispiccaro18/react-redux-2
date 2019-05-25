import shortId from 'shortid';
import { ADD_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_COMMENT:
      return addCommentWithId(state, payload);
    default:
      return state;
  }
  
}

function addCommentWithId(state, payload) {
  const id = shortId.generate();
  const { postId, commentBody } = payload;
  return { ...state, [postId]: { id, commentBody } };
}
