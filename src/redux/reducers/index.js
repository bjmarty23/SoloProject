import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getDataReducer from './getDataReducer';
import addNewReducer from './addNewReducer';

//combines all the reducers as one package
const store = combineReducers({
  user,
  login,
  getDataReducer,
  addNewReducer,
});

export default store;
