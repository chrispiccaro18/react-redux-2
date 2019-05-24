import { addPost, ADD_POST, deletePost, DELETE_POST } from './PostActions';

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
  
  it('can delete a post', () => {
    expect(deletePost('001')).toEqual({
      type: DELETE_POST,
      payload: '001'
    });
  });
});
