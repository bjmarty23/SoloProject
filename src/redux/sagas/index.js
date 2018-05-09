import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getDataSaga from './getDataSaga';
import addNewLocation from './addLocationSaga';
import deleteSaga from './deleteSaga';
import updateSaga from './updateSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getDataSaga(),
    addNewLocation(),
    deleteSaga(),
    updateSaga()
    // watchIncrementAsync()
  ]);
}
