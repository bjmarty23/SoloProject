const getDataReducer = (state = [], action)=>{
// if else statment for all data and type data
    // if (action.payload === 'GET_LOCALDATA') {
    //     return action.payload;
    // }else(action.payload === 'GET_TYPEDATA') {
    //     return action.payload;
    // } return state;



//inital code for local data working not type 
    // if(action.type === 'GET_TYPEDATA'){
    //     console.log('in type reducer', action.payload);
    //     return action.payload;
    // } return state;
    if(action.type === 'GET_LOCALDATA'){
        console.log('in get data reducer', action.payload);
        return action.payload;
    } return state;
}
     
export default getDataReducer;

// const INITIAL_STATE = {
//     data: [],
//     loading: false,
//     error: ''
//   };
  
 
    // switch (action.type) {
    // //   case 'GET_TYPEDATA':
    // //     return {
    // //       ...state,
         
    // //     };
    //     case "GET_LOCALDATA": {
    //         return {
    //         ...state,
    //     };
    //     break;
    // }
    //     default:
    // }


    
// }
// export default getDataReducer;
