import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNoteToNotepad(action){
    try{
        yield axios.post('/user/notes', action.payload)
        console.log('action payload is', action.payload);
    } catch(error){
        console.log('Error with creating notes', error);
    }

}

// route is /client/birds
function* addNoteToSaga(){
    yield takeEvery('ADD_NOTE_TO_NOTEPAD', addNoteToNotepad);
}

export default addNoteToSaga;