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
    useEffect(() => {
        dispatch({
          type: 'NOTE_DETAIL',
          payload: Number(params.id)
        })
      },[params.id])
    
  
  
    return (
        <>
        <div className="container">
            <div>
        <p> {note.header}</p>
        </div>
        </div> 
        </>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default NotepadDetailPage;
  