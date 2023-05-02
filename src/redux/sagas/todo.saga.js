import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//function to post task to todo table via /todo
function addTaskToList(action){
    try{
        yield axios.post('/user/todo', action.payload)
        console.log('action payload is', action.payload);
    } catch(error){
        console.log('Error with creating notes', error);
    }
}







// route is /user/todo

function* addTaskSaga(){
    yield takeEvery('ADD_TASK', addTaskToList);
   
}



export default addTaskSaga;