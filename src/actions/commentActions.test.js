import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT, UPDATE_COMMENT, updateComment } from './commentActions';

describe('comment actions', () => {
  it('can add a comment', () => {
    expect(addComment('111', 'test comment')).toEqual({
      type: ADD_COMMENT,
      payload: {
        postId: '111',
        commentBody: 'test comment'
      }
    });
  });

  it('can delete a comment', () => {
    expect(deleteComment('111', '001')).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postId: '111',
        commentId: '001'
      }
    });
  });
  
  it('can update a comment', () => {
    expect(updateComment('111', '001', 'test update comment')).toEqual({
      type: UPDATE_COMMENT,
      payload: {
        postId: '111',
        commentId: '001',
        commentUpdate: 'test update comment'
      }
    });
  });
});
