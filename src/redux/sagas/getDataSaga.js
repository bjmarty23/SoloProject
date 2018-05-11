import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

// Wrap geolocation in a promise so that it can be used with yield
const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
     location => resolve(location),
     error => reject(error),
    )
});

//grabs function before getting to store, and processes.
function* getData(action){
    console.log('in getDataSaga')
    try {
        const location = yield call(getUserLocation);
        const {latitude, longitude} = location.coords;
        console.log('YOU ARE HERE', latitude, longitude);
        const getDataResponse = yield call(axios.get, '/api/location');
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {}
}

function* getDataSaga() {
    // When GET_LOCATION, GET_DETAILS is dispached, call the function
    yield takeEvery('GET_LOCATION', getData);
    // yield takeEvery('GET_DETAILS', getDetails);
}

export default getDataSaga;
