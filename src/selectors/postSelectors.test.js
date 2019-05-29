import { getPosts, getPost } from './postSelectors';

describe('post selectors test', () => {
  const state = {
    posts: {
      '001': { id: '001', title: 'title1', body: 'body1' },
      '002': { id: '002', title: 'title2', body: 'body2' },
      '003': { id: '003', title: 'title3', body: 'body3' }
    },
    comments: {
      '001': [{ id: '0001', commentBody: 'comment1' }, { id: '0002', commentBody: 'comment2' }],
      '002': [{ id: '0003', commentBody: 'comment3' }, { id: '0004', commentBody: 'comment4' }],
      '003': [{ id: '0005', commentBody: 'comment5' }, { id: '0006', commentBody: 'comment6' }]
    }
  };
  it('selects all posts', () => {
    expect(getPosts(state)).toEqual([
      { id: '001', title: 'title1', body: 'body1' },
      { id: '002', title: 'title2', body: 'body2' },
      { id: '003', title: 'title3', body: 'body3' }
    ]);
  });
  it('selects a post by id', () => {
    expect(getPost(state, '002')).toEqual({ 
      id: '002', title: 'title2', body: 'body2' 
    });
  });
});
