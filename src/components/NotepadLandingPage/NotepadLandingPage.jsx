import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './NotepadLandingPage.css';


function NotepadLandingPage() {

 //Hooks 
    const history = useHistory();
    const Dispatch = useDispatch();

  return (
    <>
    <div className="container">

    </div>
    </>
  );
}

export default NotepadLandingPage;
