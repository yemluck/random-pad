
const noteDetail= (state=[], action) => {
    switch(action.type) {
        case 'SET_NOTE_DETAIL': 
            return action.payload
        default:
            return state;
    }
  }; // End note detail reducer

export default noteDetail;
  