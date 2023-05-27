import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './NotepadCreate.css';

// MUI components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';

function NotepadCreate() {

  //Hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // State Variables 
  let [newDateAdded, setNewDateAdded] = useState('');
  let [description, setDescription] = useState('');
  let [header, setHeader] = useState('');

  // Create notepad and descriptions, send to reducer via dispatch
  let noteToAdd = {
    date: newDateAdded,
    header: header,
    description: description
  }

  // Button Functions 
  // function to send noteToAdd to saga 
  const addNoteToNotepad = (evt) => {
    evt.preventDefault()

    dispatch({
      type: 'ADD_NOTE_TO_NOTEPAD',
      payload: noteToAdd
    })
    console.log('your note has been sent');

    history.push('/Notepad')

  } // end function addNoteToNotepad



  return(
    <center>
    <Box
      component='form'
      onSubmit={addNoteToNotepad}
      sx={{
        '& > :not(style)': { m: 1.2, width: '25ch',},
        // marginLeft: "500px"
        margin: 'auto'
      }}
      autoComplete='off'
    >
      <TextField id='standard-basic'
        label='Title'
        type='text'
        required
        value={header}
        onChange={(e) => {setHeader(e.target.value)}}
        variant='standard'
      /><br></br>
      <TextField id='standard-basic'
        variant='standard'
        required
        type='date'
        value={newDateAdded}
        onChange={(e) => {setNewDateAdded(e.target.value)}}
      /><br></br>
      <TextField id='filled-multiline-static'
        label='Note'
        multiline
        value={description}
        required
        rows={10}
        variant='filled'
        onChange={(e) => { setDescription(e.target.value) }}
      /><br></br>
        <input style={{ 
          'background-color': '#9a287b',
          'color' : 'white',
          'tab-size' : '20px'
        
        }}
        type='submit'
        value="CREATE"
      /><br></br><br></br><br></br>
      <Tooltip title='Cancel, go back to home'>
          <CancelIcon onClick={() => history.push('/notepad')}> Back </CancelIcon>
      </Tooltip>
    </Box>
    </center>
  )
}

export default NotepadCreate;
