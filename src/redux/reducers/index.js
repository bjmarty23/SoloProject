import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getDataReducer from './getDataReducer';

//combines all the reducers as one package
const store = combineReducers({
  user,
  login,
  getDataReducer,
});

export default store;
