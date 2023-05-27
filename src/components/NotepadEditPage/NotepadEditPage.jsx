import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './NotepadEditPage.css';

function EditNotepad() {

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

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