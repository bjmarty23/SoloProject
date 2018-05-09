
const getDetailReducer= (state = [], action) => {

    if(action.type === 'GET_DETAILS'){
        console.log('in get details reducer', action.payload);
        return action.payload;
    } return state;
}

export default getDetailReducer;

// case 'GET_ID':
        // console.log(action.payload.allData)
        // let clickedLocation = action.payload.allData.filter(location => 
        //     location.id  === action.payload.oneId);
        //     console.log('clicked location', clickedLocation)
            // return action.payload.filter((location) => {
                
            //     return location.id === action.payload.id
            // })