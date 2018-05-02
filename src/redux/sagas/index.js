import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import sagas from './sagas';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    sagas(),
    // watchIncrementAsync()
  ]);
}
