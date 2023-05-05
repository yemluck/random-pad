import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams} from 'react-router-dom';
import './NotepadDetailPage.css';


function NotepadDetailPage() {
    //Hooks:
    const params = useParams();
    const dispatch = useDispatch()


  
  
    return (
        <>
        <div className="container">
        
        
        </div> 
        </>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default NotepadDetailPage;
  