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

    // function that runs on page load 
    // useEffect(() => {
    //     dispatch({
    //       type: 'NOTE_DETAIL',
    //       payload: Number(params.id)
    //     })
    //   },[params.id])
    
  
  
    return (
        <>
        <div className="container">
            <div>
                <div className="noteDetailColumn"> <h2><u>Date:</u></h2> <h3>{note.date}</h3> </div>
                 <div className="noteDetailColumn"> <h2><u>Header:</u></h2><h2><b>{note.header}</b></h2></div>
                 <div className="noteDetailColumn"> <h2><u>Note:</u></h2><h3>{note.description}</h3></div>
        </div>
        </div> 
        </>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default NotepadDetailPage;
  