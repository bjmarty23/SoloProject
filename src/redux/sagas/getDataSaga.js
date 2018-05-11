import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

// Wrap geolocation in a promise so that it can be used with yield
const getUserLocation = () => new Promise((resolve, reject) => {
    console.log('requesting user location');
    navigator.geolocation.getCurrentPosition(
     location => resolve(location),
     error => reject(error),
    )
});

//grabs function before getting to store, and processes.
function* getData(action){
    console.log('in getDataSaga')
    try {// this is your location
        const latitude = 44.9780926;  // used for testing
        const longitude = -93.2632734; // used for testing
        //const location = yield call(getUserLocation); // used for production
        //const {latitude, longitude} = location.coords; // used for production
        console.log('YOU ARE HERE', latitude, longitude);
        const getDataResponse = yield call(axios.get, `/api/location/${latitude}/${longitude}`);
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {
        console.log('ERROR in getDataSaga', error);
    }
}

function* getDataSaga() {
    // When GET_LOCATION, GET_DETAILS is dispached, call the function
    yield takeEvery('GET_LOCATION', getData);
    // yield takeEvery('GET_DETAILS', getDetails);
}

export default getDataSaga;
