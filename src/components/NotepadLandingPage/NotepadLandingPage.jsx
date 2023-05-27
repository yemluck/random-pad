import React from "react";
import {useHistory } from 'react-router-dom';
import NotepadContainerBox from './NotepadContainerBox';
import './NotepadLandingPage.css';

// MUI components
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function NotepadLandingPage() {

  const history = useHistory()

  const userPage = () => {
    history.push('/user')
  }

  const newNoteFunction = () => {
    history.push('/newNote')
  }
  return (
    <>
      <div className="createDiv">
          <center>
            <Button onClick={newNoteFunction} variant="contained" endIcon={<AddIcon />}
              sx={{ color: 'white', background: '#9a287b', ":hover": { bgcolor: '#ff00ae'} }}
            >
              New Note
            </Button>
          </center>
      </div><br></br>
      <div>
        <NotepadContainerBox />
      </div>
      <div>
        <center>
          <Button onClick={userPage} variant="contained" endIcon={<KeyboardReturnIcon fontSize="lg"/>}
            sx={{ padding: '10px', marginBottom: '10px' ,color: 'white', background: '#9a287b', ":hover": { bgcolor: '#ff00ae' } }}
          >
            User Homepage
          </Button>
        </center>
      </div>
      <div></div>
    </>
  )
}

export default NotepadLandingPage;
