
const noteDetailReducer= (state={}, action) => {
    switch(action.type) {
        case 'SET_NOTE_DETAIL': 
            return action.payload;
        case 'UPDATE_ACTIVE_NOTE':
            return {...state, ...action.payload}
        default:
            return state;
    }
  }; // End note detail reducer

export default noteDetailReducer;
  