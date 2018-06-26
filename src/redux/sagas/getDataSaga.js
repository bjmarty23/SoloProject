import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

// Wrap geolocation in a promise so that it can be used with yield used for production
const getUserLocation = () => new Promise((resolve, reject) => {
    console.log('requesting user location');
    navigator.geolocation.getCurrentPosition(
     location => resolve(location),
     error => reject(error),
    )
});



function * getType(action){
    console.log('in getType saga')
    try{ //getting type for search
        console.log (action.payload)
        console.log()
        // const type = this.props.state.location.type
        const getType = yield call(axios.get, `/api/location/${action.payload}`);
        console.log('type', getType)
        yield put({
            type: 'GET_TYPEDATA',
            payload: getType.data
        })
    }catch (error) {
        console.log('error in get type saga', error);
    }
}

//grabs function before getting to store, and processes.
function* getData(action){
    console.log('in getDataSaga')
    try {// this is your location
        // const latitude = 44.9780926;  // used for testing
        // const longitude = -93.2632734; // used for testing
        // this is grabbig current location of AMEN
        const location = yield call(getUserLocation); // used for production
        const {latitude, longitude} = location.coords; // used for production
        console.log('YOU ARE HERE', latitude, longitude);
        //pulling get on database for location of amen
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
    yield takeEvery('GET_TYPE', getType);
    // yield takeEvery('GET_DETAILS', getDetails);
}

export default getDataSaga;
