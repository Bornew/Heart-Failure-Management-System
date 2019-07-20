import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  clicked: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);

  }
  if(action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  if(action.type === constants.ADD_PATIENT) {
    return state.set('clicked', true);
  }
  if(action.type === constants.CANCEL_PATIENT) {
    return state.set('clicked', false);
  }
  return state;
}