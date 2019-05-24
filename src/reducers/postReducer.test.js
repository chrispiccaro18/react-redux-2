import postReducer from './postReducer';
import { addPost } from '../actions/PostActions';

describe('post reducer tests', () => {
  it('can handle add post', () => {
    const initialState = {};
    const newState = postReducer(initialState, addPost('testTitle', 'testBody'));
    expect(Object.values(newState)).toEqual([{
      id: expect.anything(),
      title: 'testTitle',
      body: 'testBody'
    }]);
    expect(initialState).toEqual({});
  });
});
