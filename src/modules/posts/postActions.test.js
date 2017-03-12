import {
  CREATE_POST,
  createPost
} from './actions';

describe('POST ACTIONS', () => {
  describe('#createPost()', () => {
    it('should return an item and a type === CREATE_POST', () => {
      const item = { name: 'hello' };
      const expectedAction = {
        type: CREATE_POST,
        item
      }
      expect(createPost(item)).toEqual(expectedAction);
    });
  });
})