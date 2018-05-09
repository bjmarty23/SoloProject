import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateLocation(action) {
    console.log('in updateLocation')
    try {
        console.log('ACTION HERE', action)
        const updateLocation = yield call(axios.put, '/api/location/' + action.payload);
        console.log('added item', updateLocation);
        yield put({
            type: 'GET_LOCATION',
            payload: updateLocation.data
        })
    } catch (error) {
        console.log('UPDATELOCATION ERROR', error)
    }
}

function* updateLocationSaga(){
    yield takeEvery('UPDATE_LOCATION', updateLocation);
}

export default updateLocationSaga;