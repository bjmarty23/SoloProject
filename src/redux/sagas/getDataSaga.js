import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

//grabs function before getting to store, and processes.
function* getData(action){
    console.log('in getDataSaga')
    try {
        const getDataResponse = yield call(axios.get, '/api/location');
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {}
}
// function* getDetails(action){
//     console.log('in getDetailsSaga', action.payload)
//     try {
//         const getDetailsResponse = yield call(axios.get, '/api/location/' + action.payload);
//         console.log('data',getDetailsResponse.data)
//         yield put({
//             type: 'GET_ID',
//             payload: {allData: getDetailsResponse.data, oneId : action.payload}
//         })
//     } catch (error) {}
// }

function* getDataSaga() {
    // When GET_LOCATION, GET_DETAILS is dispached, call the function
    yield takeEvery('GET_LOCATION', getData);
    // yield takeEvery('GET_DETAILS', getDetails);
}

export default getDataSaga;
