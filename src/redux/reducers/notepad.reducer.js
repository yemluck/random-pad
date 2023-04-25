import { combineReducers } from 'redux';


const notepadReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_NOTES_REDUCER': 
            return action.payload
        default:
            return state;
    }
  }; // End notepad reducer

export default combineReducers({
   notepadReducer
  });
  