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


  // Reducers
  const noteEntry = useSelector(store=> store.notepad);

  // Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_TODO'
        });
    }, [])


export default TodoContainerBox;