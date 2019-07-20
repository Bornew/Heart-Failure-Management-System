// const defaultState = {};
//
// export default ( state= defaultState, action )=>{
//   if(action.type === 'search_focus'){
//     return {
//       focused: true
//     }
//   }
//   if(action.type === 'search_blur') {
//     return {
//       focused: false
//     }
//   }
//   return state;
// }
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store';  //将reducer起成一个别名

const reducer =  combineReducers({
  header: headerReducer,
})

export default reducer;