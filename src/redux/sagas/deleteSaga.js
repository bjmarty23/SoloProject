import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';


function* removeLocation(action){
    console.log('in getDetailsSaga', action.payload)
    try {
        yield call( axios.delete, '/api/location/' + action.payload.id)
        console.log('delete saga', action.payload.id)
        yield put({
            type: 'GET_LOCATION',
        })
    } catch (error) {}
}


function* deleteSaga() {
    // when REMOVE_LOCATION is dispatched run removeLocation()
    yield takeEvery('REMOVE_LOCATION', removeLocation);
}

export default deleteSaga;