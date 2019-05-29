export const getPosts = state => Object.values(state.posts);
export const getPost = (state, id) => state.posts[id];

