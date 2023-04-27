import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST to send user entries into database
function* addNoteToNotepad(action){
    try{
        yield axios.post('/user/notes', action.payload)
        console.log('action payload is', action.payload);
    } catch(error){
        console.log('Error with creating notes', error);
    }

}
//GET request to retrieve user entries from notepad
function* fetchNotes(){
    let response = yield axios.get('/user/notes');
   
    yield put({
        type: 'SET_NOTES_REDUCER',
        payload: response.data
    })
}

//Function triggered when delete button is pushed 
function* deleteNote(action){
    try{
       let response = yield axios.delete(`/user/notes/${action.payload}`)
        console.log('action payload is', action.payload);

        yield put({
            type: 'FETCH_NOTES',
            payload: response.data
        })

    } catch(error){
        console.log('Error with creating notes', error);
    }

}

// route is /client/birds

function* addNoteToSaga(){
    yield takeEvery('ADD_NOTE_TO_NOTEPAD', addNoteToNotepad);
    yield takeEvery('FETCH_NOTES', fetchNotes);
    yield takeEvery('DELETE_NOTE', deleteNote);
}

export default addNoteToSaga;