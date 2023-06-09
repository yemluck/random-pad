import React, {useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './NotepadContainerBox.css';
// MUI components
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';

function NotepadContainerBox() {

  // Hooks
  const dispatch = useDispatch();
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
  }));

  // Reducers
  const noteEntry = useSelector(store=> store.notepad);

  // Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_NOTES'
        });
    }, [])

    //function to delete note:
    function handleDelete(id){
            dispatch({
                type: 'DELETE_NOTE',
                payload: id
            })
    } 

    //function to send user to detail page where they will edit their note entry
    const handleEdit = (note) => {  
      history.push(`notepad/edit/${note.id}`)
    }

    const detailNote = (note) => {
      history.push(`/notepad/detail/${note.id}`)
    }

  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg" height="lg"

      >
        <Box className='grid-container'  sx={{ height: '72vh', bgcolor: '#fff6fd', overflow: 'scroll', rowGap: '10px'}}
        key={noteEntry.id}>
          {noteEntry.map(note => {
              return(
                <div  key={note.id} >
                  <Card onClick={() => detailNote(note)}
                    className='grid-item' sx={{ width: '250px', height: '250px', overflowWrap: 'break-word', hyphens: 'manual', bgcolor:'#f3acbd', overflow: 'scroll'}}>
                    <CardContent>
                      <Typography> {note.date}</Typography><br></br>
                      <Typography variant='h5' component='div'>{note.header}</Typography><br></br>
                      <Typography variant='body2'> {note.description}</Typography>
                    </CardContent>
                  </Card>
                  <center>
                    <LightTooltip title='Delete'>
                      <DeleteForeverIcon fontSize='medium' onClick={() => handleDelete(note.id)} sx={{ marginRight: '40px' }}>Delete</DeleteForeverIcon>
                    </LightTooltip>
                    <LightTooltip title='Edit Note'>
                      <EditNoteIcon fontSize='medium' onClick={() => handleEdit(note)}> Edit </EditNoteIcon>
                    </LightTooltip>
                  </center>
                </div>
              )
              })}
        </Box>
      </Container><br></br>
    </>
  )
}

export default NotepadContainerBox;