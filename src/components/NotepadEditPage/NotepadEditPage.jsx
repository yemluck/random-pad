import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './NotepadEditPage.css';

// MUI Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


function EditNotepad() {

  // react hooks
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  // mui function
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  })); // end function MUI

  // fetch note
  useEffect(() => {
    dispatch({
      type:'GET_NOTE_DETAIL',
      payload: params.id
    })
  }, [params.id])

  // note from store
  const note = useSelector(store => store.noteDetail)

  // run on submit
  // function updates database
  const submitEditNote = (e) => {
    e.preventDefault()
    console.log('this is the note to send:', note.date);
    note.date = new Date().toDateString()
    console.log('second date is:', note.date);
    // need to dispatch the changes to update database
    dispatch({
      type: 'UPDATE_NOTE_CHANGES',
      payload: note
    })
    // afterwards redirect back to detail page
    history.push(`/notepad/detail/${note.id}`)
  } // end function submitEditNote


  return(
    <center>
      <Box
        component='form'
        onSubmit={submitEditNote}
        sx={{
          '& > :not(style)': { m: 1.2, width: '25ch', },
          // marginLeft: "500px"
          margin: 'auto'
        }}
        autoComplete='off'
      >
        <TextField id='standard-basic'
          label='Title'
          type='text'
          required
          value={note.header}
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_ACTIVE_NOTE',
              payload: {header: e.target.value}
            })
          }}
          variant='standard'
        /><br></br>
        <TextField id='filled-multiline-static'
          label='Note'
          multiline
          value={note.description}
          required
          rows={10}
          variant='filled'
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_ACTIVE_NOTE',
              payload: {description: e.target.value}
            })
          }}
          /><br></br>
          <input style={{
            'backgroundColor': '#9a287b',
            'color': 'white',
            'tabSize': '20px'

          }}
            type='submit'
            value="DONE"
          /><br></br><br></br><br></br>
        <LightTooltip title='Cancel edit and go back to note list'>
          <CancelIcon sx={{ color: '#9a287b' }} fontSize='large' onClick={() => history.push('/notepad')}> Back </CancelIcon>
        </LightTooltip>
      </Box>
    </center>
  )
}

export default EditNotepad;