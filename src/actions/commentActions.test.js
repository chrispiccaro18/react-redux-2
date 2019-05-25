import { addComment, ADD_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('can add a comment', () => {
    expect(addComment('test comment')).toEqual({
      type: ADD_COMMENT,
      payload: 'test comment'
    });
  });
});
