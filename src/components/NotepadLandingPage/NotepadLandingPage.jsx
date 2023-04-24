import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './NotepadLandingPage.css';


function NotepadLandingPage() {

 // Hooks 
    const dispatch = useDispatch();
// Reducers 
    const noteEntry = useSelector(store => store.notepadReducer);

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
    
// Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_NOTES'
        });
    }, [])

// Button Functions 
    // function to send noteToAdd to saga 
    function addNoteToNotepad(event){
        event.preventDefault();
        dispatch({
            type: 'ADD_NOTE_TO_NOTEPAD',
            payload: noteToAdd
        })
        console.log('your note has been sent');
    }


    // function to clear inputs after client has entered data
    function handleClear(){
        setNewDateAdded('');
        setDescription('');
        setHeader('');
    }


  return (
    <>
    <div className="notepadIntro">
    <h1> Notepad </h1>
    <h2> The space for your thoughts has been awaiting your magic</h2>
    <img 
            src= "https://awaypoint.files.wordpress.com/2018/10/power-of-the-mind-singularity-0-poster-magic.jpg"           
            width= {600}
            height={450}
            alt= "picture of your brain not loading"
        />
    </div>
    <div className="formContainer">
        <h3> Start an Entry:</h3>
    <div className= "entryInput">
          <label> Enter The Date Here 
          <input
            required
            type="date"
            name= "dateEntry"
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
        {/* Clear entry button has onClick function that clears the useState variables */}
        <button className="formSubmitBtn" onClick={handleClear} >
            <h2> Clear Entry</h2>
        </button>
    </div>

{/* Div to store previous notepad entries */}
    <div class="notesHistory">
        <div key={noteEntry.id}>
    {noteEntry.map(note => {
            return(
              <div key={note.id}>
              <div>
                  <h3>{note.date}</h3>
                  <h1>{note.header}</h1>
                  <h3>{note.description}</h3>
              </div>
            </div>
            )
            })}
  </div>

    {/* button styling is handled in the userPage.css  */}
    <Link to="/user"><button className="notepadBtn"> <h2>User Homepage</h2></button></Link>
</div>
    </>
  )
}

export default NotepadLandingPage;
