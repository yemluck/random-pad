
const noteDetail= (state=[], action) => {
    switch(action.type) {
        case 'NOTE_DETAIL': 
            return action.payload
        default:
            return state;
    }
  }; // End note detail reducer

export default noteDetail;
  