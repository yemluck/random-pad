import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from 'react-router-dom';
import './NotepadDetailPage.css';


function NotepadDetailPage() {
    //Hooks:
    const params = useParams();
    const dispatch = useDispatch()

    //Reducers: 
    const note = useSelector(store=> store.noteDetail);
    console.log('note object is', note);

    // State Variables:
    let [newDateAdded, setNewDateAdded] = useState('');
    let [description, setDescription] = useState('');
    let [header, setHeader] = useState('');

    // function that runs on page load 
    useEffect(() => {
        dispatch({
          type: 'NOTE_DETAIL',
          payload: Number(params.id)
        })
      },[params.id])
    
  
      // function to send noteToAdd to saga 
      function addNoteToNotepad(){
        dispatch({
            type: 'ADD_NOTE_TO_NOTEPAD',
            payload: noteToAdd
        })
        console.log('your note has been sent');
        window.location.reload(false);
        setNewDateAdded('')
        setDescription('')
        setHeader('')
        history.push(`/notepad`)

    }
    return (
        <>
        <div className="container">
            <div>
                <div className="noteDetailColumn"> <h2><u>Date:</u></h2> <h3>{note.date}</h3> </div>
                <div className="InputAndBtn">
          <label> Edit your Header:
            <input
            id="headerText"
            placeholder={note.header}
            value={header}
            onChange={(e) => {
              setHeader(e.target.value);
            }}
          />
          </label>
          </div>
        </div>
        <div className="InputAndBtn">
          <label> What Would you Like to Change about Your Entry?
            <input
            id="descriptionText"
            placeholder={note.description}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            
          />
          </label>
          </div>


              {/* Submit button will need onClick function to send the state variables to the reducer saga */}
        <button className="formSubmitBtn" onClick={addNoteToNotepad} >
            <h2> Submit</h2> 
        </button>
        </div> 
        </>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default NotepadDetailPage;
  