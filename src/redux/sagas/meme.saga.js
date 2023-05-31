import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET request to fetch random memes
function* fetchMemes(){
  try{
    let meme = yield axios.get('/user/meme')
    console.log('response from API', meme.data);
    // put response in reducer
    yield put ({
      type: 'SET_MEME_REDUCER',
      payload: meme.data
    })
    

  } catch(error) {
    console.log('Error fetching meme', error);
    
  }

} // end function fetchMemes


function* memeGeneratorSaga(){
 yield takeLatest('GET_MEME', fetchMemes)
}

export default memeGeneratorSaga