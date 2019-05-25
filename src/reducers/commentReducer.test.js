import commentReducer from './commentReducer';
import { addComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('can handle add comment, empty initial state', () => {
    const initialState = {};
    const newState = commentReducer(initialState, addComment('001', 'test comment'));

    expect(newState).toEqual({
      '001': [
        { id: expect.anything(), commentBody: 'test comment' }
      ]
    });
    expect(initialState).toEqual({});
  });
  
  it('can handle add comment, non-empty initial state', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    };
    const newState = commentReducer(initialState, addComment('001', 'test comment'));

    expect(newState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment' },
        { id: expect.anything(), commentBody: 'test comment' }
      ]
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    });
  });
  
});
