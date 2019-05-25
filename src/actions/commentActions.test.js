import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT, UPDATE_COMMENT, updateComment } from './commentActions';

describe('comment actions', () => {
  it('can add a comment', () => {
    expect(addComment('test comment')).toEqual({
      type: ADD_COMMENT,
      payload: 'test comment'
    });
  });

  it('can delete a comment', () => {
    expect(deleteComment('001')).toEqual({
      type: DELETE_COMMENT,
      payload: '001'
    });
  });
  
  it('can update a comment', () => {
    expect(updateComment('001', 'test update comment')).toEqual({
      type: UPDATE_COMMENT,
      payload: {
        commentId: '001',
        commentUpdate: 'test update comment'
      }
    });
  });
});
