import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import NotepadContainerBox from './NotepadContainerBox';
import NotepadCreate from './NotepadCreate';
import './NotepadLandingPage.css';

function NotepadLandingPage() {



    




 

  return (
    <>
      <Link to='/newNote'><button> create</button></Link>
    {/* <NotepadCreate />     */}

      <NotepadContainerBox />

    </>
  )
}

export default NotepadLandingPage;
