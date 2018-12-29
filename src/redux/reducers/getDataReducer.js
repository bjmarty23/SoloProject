 const getDataReducer = (state = [], action)=>{

    // if(action.type === 'GET_TYPEDATA'){
    //     console.log('in type reducer', action.payload);
    //     return action.payload;
    // } 
    // // return state;
    // else(action.type === 'GET_LOCALDATA'){
    //     console.log('in get data reducer', action.payload);
    //     return action.payload;
    // } return state;
// }
     
// export default getDataReducer;

// const INITIAL_STATE = {
//     data: [],
//     loading: false,
//     error: ''
//   };
  
 
    switch (action.type) {
      case 'GET_TYPEDATA':
        return {
          ...state,
         
        };
      case 'GET_LOCALDATA':
        return {
          ...state,
         
        };
      default:
        return state;
    }
}
export default getDataReducer;
