import commentReducer from './commentReducer';
import { addComment, deleteComment, updateComment } from '../actions/commentActions';
import { deletePost } from '../actions/PostActions';

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
  
  it('can handle delete comment, post has 1 comment', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    };
    const newState = commentReducer(initialState, deleteComment('001', '0001'));

    expect(newState).toEqual({
      '001': []
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    });
  });
  
  it('can handle delete comment, post has multiple comment', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    };
    const newState = commentReducer(initialState, deleteComment('001', '0002'));

    expect(newState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
  });

  it('can handle update comment, post has 1 comment', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    };
    const newState = commentReducer(initialState, updateComment('001', '0001', 'update'));

    expect(newState).toEqual({
      '001': [
        { id: '0001', commentBody: 'update' }
      ]
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    });
  });

  it('can handle update comment, post has multiple comment', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    };
    const newState = commentReducer(initialState, updateComment('001', '0002', 'update'));

    expect(newState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'update' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
  });

  it('can handle delete post, post has 1 comment', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    };
    const newState = commentReducer(initialState, deletePost('001'));

    expect(newState).toEqual({});
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment' }
      ]
    });
  });

  it('can handle delete post, post has multiple comments and posts', () => {
    const initialState = {
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ],
      '002': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ],
      '003': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    };
    const newState = commentReducer(initialState, deletePost('002'));

    expect(newState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ],
      '003': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
    expect(initialState).toEqual({
      '001': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ],
      '002': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ],
      '003': [
        { id: '0001', commentBody: 'comment1' },
        { id: '0002', commentBody: 'comment2' },
        { id: '0003', commentBody: 'comment3' }
      ]
    });
  });
});
