import { addPost, ADD_POST } from './PostActions';

describe('post actions', () => {
  it('can add a post', () => {
    expect(addPost('test title', 'test body')).toEqual({
      type: ADD_POST,
      payload: {
        title: 'test title',
        body: 'test body'
      }
    });
  });
});
