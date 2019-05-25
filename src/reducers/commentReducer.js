import shortId from 'shortid';
import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_COMMENT:
      return addCommentWithId(state, payload);
    case DELETE_COMMENT:
      return deleteCommentWithId(state, payload);
    default:
      return state;
  }
  
}

function addCommentWithId(state, payload) {
  const id = shortId.generate();
  const { postId, commentBody } = payload;
  if(!state[postId]) {
    return { ...state, [postId]: [{ id, commentBody }] };
  }
  return { ...state, [postId]: [...state[postId], { id, commentBody }] };
}

function deleteCommentWithId(state, payload) {
  const { postId, commentId } = payload;
  const comments = state[postId];
  const updatedComments = comments.filter(comment => comment.id !== commentId);
  return { ...state, [postId]: [...updatedComments] };
}
