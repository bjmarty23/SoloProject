const deleteReducer = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_LOCATION':
        console.log('payload', action.payload)
            return 
                
            
        default:
            return state;
    }
}
// const getDetailReducer= (state = [], action) => {
//     switch (action.type) {
//         case 'GET_ID':
//         console.log(action.payload.allData)
//         let clickedLocation = action.payload.allData.filter(location => 
//             location.id  === action.payload.oneId);
//             console.log('clicked location', clickedLocation)
//             // return action.payload.filter((location) => {
                
//             //     return location.id === action.payload.id
//             // })
//         default:
//             return state;
//     }
// }


export default deleteReducer;