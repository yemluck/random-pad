import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './NotepadEditPage.css';

function EditNotepad() {

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  // this isn't going to work yet as there's no function
  // fetching the note
  // Need a useEffect that dispatches a saga to fetch the note
  // using a payload of the params.id
  const note = useSelector(store => store.noteDetail)

  
  return(
    <>
      <h3> in edit Notepad</h3>
      <p> this is note id: {params.id} </p>
      <button onClick={() => history.push('/notepad')}> Back </button>
    </>
  )
}

export default EditNotepad;