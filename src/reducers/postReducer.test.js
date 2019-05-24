import postReducer from './postReducer';
import { addPost, deletePost, updatePost } from '../actions/PostActions';

describe('post reducer tests', () => {
  it('can handle add post, empty initial state', () => {
    const initialState = {};
    const newState = postReducer(initialState, addPost('testTitle', 'testBody'));

    expect(Object.values(newState)).toEqual([{
      id: expect.anything(),
      title: 'testTitle',
      body: 'testBody'
    }]);
    expect(initialState).toEqual({});
  });
  
  it('can handle add post', () => {
    const initialState = {
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    };
    const newState = postReducer(initialState, addPost('testTitle1', 'testBody1'));

    expect(Object.values(newState)).toEqual([
      { id: '001', title: 'testTitle', body: 'testBody' },
      { id: '002', title: 'testTitle', body: 'testBody' },
      { id: '003', title: 'testTitle', body: 'testBody' },
      {
        id: expect.anything(),
        title: 'testTitle1',
        body: 'testBody1'
      }
    ]);
    expect(initialState).toEqual({
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    });
  });

  it('can handle delete post', () => {
    const initialState = {
      '001': { id: '001', title: 'testTitle', body: 'testBody' }
    };
    const newState = postReducer(initialState, deletePost('001'));

    expect(Object.values(newState)).toEqual([]);
    expect(initialState).toEqual({
      '001': { id: '001', title: 'testTitle', body: 'testBody' }
    });
  });
  
  it('can handle delete post, multiple posts', () => {
    const initialState = {
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    };
    const newState = postReducer(initialState, deletePost('002'));

    expect(Object.values(newState)).toEqual([
      { id: '001', title: 'testTitle', body: 'testBody' },
      { id: '003', title: 'testTitle', body: 'testBody' }
    ]);
    expect(initialState).toEqual({
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    });
  });
  
  it('can handle update post, multiple posts', () => {
    const initialState = {
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    };
    const newState = postReducer(initialState, updatePost('001', 'title update', 'body update'));

    expect(Object.values(newState)).toEqual([
      { id: '001', title: 'title update', body: 'body update' },
      { id: '002', title: 'testTitle', body: 'testBody' },
      { id: '003', title: 'testTitle', body: 'testBody' }
    ]);
    expect(initialState).toEqual({
      '001': { id: '001', title: 'testTitle', body: 'testBody' },
      '002': { id: '002', title: 'testTitle', body: 'testBody' },
      '003': { id: '003', title: 'testTitle', body: 'testBody' }
    });
  });
});
