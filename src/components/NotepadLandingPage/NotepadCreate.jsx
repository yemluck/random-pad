import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './NotepadCreate.css';

function NotepadCreate() {

  //Hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // State Variables 
  let [newDateAdded, setNewDateAdded] = useState('');
  let [description, setDescription] = useState('');
  let [header, setHeader] = useState('');

  // Create notepad and descriptions, send to reducer via dispatch
  let noteToAdd =
  {
    date: newDateAdded,
    header: header,
    description: description
  }

  // Button Functions 
  // function to send noteToAdd to saga 
  function addNoteToNotepad() {
    dispatch({
      type: 'ADD_NOTE_TO_NOTEPAD',
      payload: noteToAdd
    })
    console.log('your note has been sent');
    setNewDateAdded('')
    setDescription('')
    setHeader('')
    history.push('/Notepad')

  }



  return(
    <>
     <h2> create New Note</h2>

      <div className="formContainer">
        <div className="entryInput">
          <label> Enter The Date Here
            <input
              required
              type="date"
              name="dateEntry"
              id="dateEntry"
              value={newDateAdded}
              onChange={(e) => {
                setNewDateAdded(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="InputAndBtn">
          <label> Set a Header for the Entry:
            <input
              id="headerText"
              placeholder="Note Header"
              required
              value={header}
              onChange={(e) => {
                setHeader(e.target.value);
              }}
            />
          </label>
        </div>


        <div className="InputAndBtn">
          <label> What is it that You Cannot Forget?
            <input
              id="descriptionText"
              placeholder="Your Thoughts Here"
              required
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
  )
}

export default NotepadCreate;
