import { createPost } from './actions';
import postReducer from './reducer';

describe('POST REDUCER', () => {
  const INITIAL_STATE = [
    {
      name: 'Emanuel'
    }
  ]
  it('should add an item an the end of the array', () => {
    const item = { name: 'Thinkful' };
    const expectedReducer = [{ name: 'Emanuel' }, { name: 'Thinkful' }];
    expect(postReducer(INITIAL_STATE, createPost(item)))
      .toEqual(expectedReducer);
    expect(postReducer(INITIAL_STATE, createPost(item)).length)
      .toEqual(2);
  });
});