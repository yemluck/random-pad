import { combineReducers } from 'redux';


const notepadReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_NOTES': 
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer






export default combineReducers({
   notepadReducer
  });
  