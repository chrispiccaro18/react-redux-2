export const getComments = (state, postId) => {
  return state.comments[postId] || [];
};

export const getComment = (state, postId, commentId) => {
  for(let i = 0; i < state.comments[postId].length; i++) {
    if(state.comments[postId][i].id === commentId) {
      return state.comments[postId][i];
    }
  }
  
};
