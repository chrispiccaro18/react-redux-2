import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

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
});
