import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './NotepadLandingPage.css';


function NotepadLandingPage() {

 // Hooks 
    const history = useHistory();
    const Dispatch = useDispatch();
// State Variables 
    let [newDateAdded, setNewDateAdded] = useState('');
    let [newDescription, setNewDescription] = useState('');
    let [header, setHeader] = useState('');

// Button Functions 
    // function to clear inputs after client has entered data
    function handleClear(){
        setNewDateAdded('');
        setNewDescription('');
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
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
          </label>
          </div>
          {/* Submit button will need onClick function to send the state variables to the reducer saga */}
        <button className="formSubmitBtn"  >
            <h2> Submit</h2>
        </button>
        {/* Clear entry button has onClick function that clears the useState variables */}
        <button className="formSubmitBtn" onClick={handleClear} >
            <h2> Clear Entry</h2>
        </button>
    </div>
    </>
  );
}

export default NotepadLandingPage;
