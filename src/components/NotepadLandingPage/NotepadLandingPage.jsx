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
    <div className="container">
    <div className= "InputAndBtn">
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
