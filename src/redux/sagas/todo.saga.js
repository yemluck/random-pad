import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//function to post task to todo table via /todo
function* addTaskToList(action){
    try{
        yield axios.post('/user/todo', action.payload)
        console.log('action payload is', action.payload);
    } catch(error){
        console.log('Error with posting todo to table', error);
    }
}

//function to GET TODO lists from table via /todo
function* fetchTodoList(){
        let response = yield axios.get('/user/todo');
        console.log('response from GET request is', response.data)
    try{
        yield put({
            type: 'SET_TODO_LIST',
            payload: response.data
        })
    } catch(error) {
        console.log('something funky happened in the fetch todo list GET request Saga')   
    }

    }
    

// route is /user/todo

function* addTaskSaga(){
    yield takeEvery('ADD_TASK', addTaskToList);
    yield takeEvery('FETCH_TODO', fetchTodoList);
}



export default addTaskSaga;