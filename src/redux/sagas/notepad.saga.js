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

//function to send GET request of chosen note (via ID) from database, and fill the note detail reducer
function* fetchNoteDetail(action){
    try{
        const noteDetail = yield axios.get('/user/notes/noteDetail', 
          {params: {
            id: action.payload
          }
        });
        // send response from server to reducer
        yield put({type: 'SET_NOTE_DETAIL', payload: noteDetail.data})
      } catch(error) {
        console.log('Error fetching note detail', error);
      }
} // end function fetchNoteDetail


//function to trigger PUT request to update note detail
function* updateNoteDetail(action){
    try{
        yield axios.put(`/user/notes/noteDetail/${action.payload}`, action.payload), 
        console.log('action.payload.id', action.payload.id);
    
        // send response from server to reducer
        yield put({type: 'SET_NOTE_DETAIL', payload: data})
      } catch(error) {
        console.log('Error fetching note detail', error);
        
      }
}

// route is /user/notepad

function* addNoteToSaga(){
    yield takeEvery('ADD_NOTE_TO_NOTEPAD', addNoteToNotepad);
    yield takeEvery('FETCH_NOTES', fetchNotes);
    yield takeEvery('DELETE_NOTE', deleteNote);
    yield takeEvery('GET_NOTE_DETAIL', fetchNoteDetail);
    yield takeEvery('UPDATE_NOTE_DETAIL', updateNoteDetail);
}

export default addNoteToSaga;