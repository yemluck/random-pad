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
  return (
    <>
    <div className="notepadIntro">
    <h1> Notepad </h1>
    <h2> The space for your thoughts has been awaiting your magic</h2>
    <img 
            src= "https://awaypoint.files.wordpress.com/2018/10/power-of-the-mind-singularity-0-poster-magic.jpg"            width= {600}
            height={450}
        />
    </div>
    <div className="formContainer">
        <h3> Start an Entry:</h3>
    <div className= "dateInput">
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
    </div>
    </>
  );
}

export default NotepadLandingPage;
