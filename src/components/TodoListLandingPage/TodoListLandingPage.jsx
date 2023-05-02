import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './TodoListLandingPage.css';


function TodoListLandingPage() {

 // Hooks 
    const dispatch = useDispatch();
// Reducers 
   
// State Variables 
    let [newDateAdded, setNewDateAdded] = useState('');
    let [description, setDescription] = useState('');
    let [header, setHeader] = useState('');

// Create notepad and descriptions, send to reducer via dispatch
let ToDoToAdd = 
{
    date: newDateAdded,
    header: header,
    description: description
}
    
// Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_TODOS'
        });
    }, [])

// Button Functions 
    // function to send noteToAdd to saga 


    // function to clear inputs after client has entered data
    function handleClear(){
        setNewDateAdded('');
        setDescription('');
        setHeader('');
    }


  return (
    <>
    <div className="TodoListHeader"> 
        <h2> Welcome to your personalized To Do List, 
            Where Todo is turned into TA - DA!!! 
        </h2>
    </div>
    </>
  )
}

export default TodoListLandingPage;
