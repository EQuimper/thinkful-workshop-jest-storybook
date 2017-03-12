import { CREATE_POST } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.item];
    default:
      return state;
  }
};