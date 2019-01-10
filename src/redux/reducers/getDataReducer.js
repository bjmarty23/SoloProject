const getDataReducer = (state = [], action)=>{

    if(action.type === 'GET_LOCALDATA'){
        console.log('in get data reducer', action.payload);
        return action.payload;
    } return state;
}
     
export default getDataReducer;


