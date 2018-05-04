import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getDataSaga from './getDataSaga';
import addNewLocation from './addLocationSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getDataSaga(),
    addNewLocation(),
    // watchIncrementAsync()
  ]);
}
