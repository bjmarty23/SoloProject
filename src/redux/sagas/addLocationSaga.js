import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addNewLocation(action) {
    console.log('in addNewLocation')
    try {
        console.log('ACTION HERE', action)
        const addLocation = yield call(axios.post, '/api/location', action.payload);
        console.log('added item', addLocation);
        yield put({
            type: 'POST_LOCATION',
            payload: addLocation.data
        })
    } catch (error) {
        console.log('POSTLOCATION ERROR', error)
    }
}

function* addNewLocationSaga(){
    yield takeEvery('ADD_LOCATION', addNewLocation);
}

export default addNewLocationSaga;