import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getDataReducer from './getDataReducer';
import addNewReducer from './addNewReducer';
import getDetailReducer from './getDetailReducer';
// import deleteReducer from './deleteReducer';

//combines all the reducers as one package
const store = combineReducers({
  user,
  login,
  getDataReducer,
  addNewReducer,
  getDetailReducer,
  // deleteReducer,

});

export default store;
