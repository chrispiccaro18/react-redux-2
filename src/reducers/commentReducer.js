import shortId from 'shortid';
import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_COMMENT:
      return addCommentWithId(state, payload);
    case DELETE_COMMENT:
      return deleteCommentWithId(state, payload);
    case UPDATE_COMMENT:
      return updateCommentWithId(state, payload);
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

function updateCommentWithId(state, payload) {
  const { postId, commentId, commentUpdate } = payload;
  const indexOfUpdate = state[postId].findIndex(comment => comment.id === commentId);
  const newComment = { id: commentId, commentBody: commentUpdate };
  const newComments = [
    ...state[postId].slice(0, indexOfUpdate),
    newComment,
    ...state[postId].slice(indexOfUpdate + 1)
  ];
  return { ...state, [postId]: [...newComments] };
}
