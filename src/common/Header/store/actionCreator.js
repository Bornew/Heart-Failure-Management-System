import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const addPatient = () => ({
  type: constants.ADD_PATIENT,
})

export const cancelAdd = () => ({
  type: constants.CANCEL_PATIENT,
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});


export const getList = () => {
  return (dispatch) => {
    axios.get('').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error');
    });
  };
};