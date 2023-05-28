import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory} from 'react-router-dom';
import './NotepadDetailPage.css';

// MUI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


function NotepadDetailPage() {
    //Hooks:
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

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

    // Load on page load
    useEffect(() => {
      dispatch({
        type: 'GET_NOTE_DETAIL',
        payload: params.id
      })
    },[params.id])


    //Reducers: 
    const note = useSelector(store=> store.noteDetail);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id
    })
    history.push('/notepad')
  } 

  
    return (
      <div className="detailBox">
        <Card>
          <CardContent>
            <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
              <u>{note.date}</u>
            </Typography>
            <Typography variant="h4" component='div'>
              {note.header}
            </Typography><br></br><br></br>
            <Typography variant="body" sx={{ maxWidth: '600px', overflowWrap: 'break-word' }}>
              {note.description}
            </Typography><br></br>
          </CardContent>
            <br></br>
            <div  style={{float: 'right'}}>
            <LightTooltip title='Edit note'>
              <EditNoteIcon fontSize='large' sx={{ paddingRight: '20px', color: '#9a287b' }} onClick={() => history.push(`/notepad/edit/${params.id}`)}>Edit</EditNoteIcon>
            </LightTooltip>
            <LightTooltip title='Delete Note'>
              <DeleteForeverIcon onClick={()=> handleDelete(note.id)} fontSize="large" sx={{ paddingRight: '20px', color: '#9a287b' }}> Delete </DeleteForeverIcon>
            </LightTooltip>
            <LightTooltip title='Return to Note list' sx={{color: 'red'}}>
              <CloseIcon fontSize="large" sx={{ paddingRight: '10px', color: '#9a287b' }} onClick={() => history.push('/notepad')}> Close </CloseIcon>
            </LightTooltip>
            </div>
        </Card>
        
      </div>
    );
  }
  
  export default NotepadDetailPage;
  