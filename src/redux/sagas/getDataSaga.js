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

//****** call type and distance in saga to get both option in reducer *******/
// ********going to switch back to two sagas that aim to the same reducer*******
//grabs function before getting to store, and processes.
function* getType(action){
    console.log('in gettypeSaga')
    try {// this is your location
        // const latitude = 44.9780926;  // used for testing
        // const longitude = -93.2632734; // used for testing
        // this is grabbing current location of user
        console.log(action.payload)
        const type = action.payload;
        const location = yield call(getUserLocation); // used for production
        const {latitude, longitude} = location.coords; // used for production
        console.log('YOU ARE HERE', latitude, longitude, type);
        //pulling get on database for location of amen
        const getDataResponse = yield call(axios.get, `/api/location/type/${latitude}/${longitude}/${type}`);
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {
        console.log('ERROR in getDataSaga', error);
    }
}
//orginal distance call 
//getData saga that works before adding type param
function* getData(action){
    console.log('in getDataSaga')
    try {// this is your location
        // const latitude = 44.9780926;  // used for testing
        // const longitude = -93.2632734; // used for testing
        // this is grabbing current location of user
        const location = yield call(getUserLocation); // used for production
        const {latitude, longitude} = location.coords; // used for production
        console.log('YOU ARE HERE', latitude, longitude);
        //pulling get on database for location of amen
        const getDataResponse = yield call(axios.get, `/api/location/distance/${latitude}/${longitude}`);
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {
        console.log('ERROR in getDataSaga', error);
    }
}
//original call type only 
// function* getType(action){
//     console.log('getType, in dataSaga')
//     try{ //getting type for search
//         console.log (action.payload)
//         const type = action.payload;
//         console.log(type)
//         // const type = this.props.location.type
//         const getType = yield call(axios.get, `/api/location/type/${type}`);
//         console.log('type', getType.data)
//         yield put({
//             type: 'GET_TYPEDATA',
//             payload: getType.data
//         })
//     }catch (error) {
//         console.log('error in get type saga', error);
//     }
// }


function* getDataSaga() {
    // When GET_LOCATION, GET_DETAILS, GET_TYPE is dispached, call the function
    yield takeEvery('GET_LOCATION', getData);
    yield takeEvery('GET_TYPE', getType);
    // yield takeEvery('GET_DETAILS', getDetails);
}

export default getDataSaga;
