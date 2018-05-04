function addNewReducer(state = [], action) {
    // Change state with a return
    switch (action.type) {
      case 'POST_LOCATION':
        return action.payload;
      default:
        return state;
    }
  }

export default addNewReducer;