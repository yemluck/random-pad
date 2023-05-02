import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './TodoListLandingPage.css';


function TodoListLandingPage() {

 // Hooks 
    const dispatch = useDispatch();
// Reducers 
   
// State Variables 
    let [date, setDate] = useState('');
    let [priority, setPriority] = useState('');
    let [task, setTask] = useState('');
    let [status, setStatus] = useState(FALSE);

// Create notepad and descriptions, send to reducer via dispatch
let ToDoToAdd = 
{
    date_created: date,
    task: task,
    status: status, 
    priority: priority
}
    
// Page Load Functions:

// Button Functions 
    // function to send noteToAdd to saga 
function handleSubmit(event){
    alert('Your Task is set to ' + this.state.value + 'Priority')
    event.preventDefault();
}

    // function to clear inputs after client has entered data
    function handleClear(){
        setDate('');
        setPriority('');
        setTask('');
    }

   // function to send Todo to saga 
   function sendTodo(){
    setStatus(FALSE);
    dispatch({
        type: 'ADD_TASK',
        payload: ToDoToAdd
    })
    setDate('');
    setPriority('');
    setTask('');
}
  return (
    <>
    <div className="TodoListHeader"> 
        <h2> Welcome to your personalized To Do List, 
            Where To-Do is turned into TA - DA!!! 
        </h2>
        <img 
            src= "https://www.pngitem.com/pimgs/m/71-719717_to-do-list-png-transparent-cartoons-png-download.png"           
            width= {600}
            height={450}
            alt= "picture of the master to do list"
        />
    </div>
    <div className= "todoList formContainer">
   
        <h3> Start an Entry:</h3>
    <div className= "entryInput">
          <label> Enter The Date Here 
          <input
            required
            type="date"
            name= "dateEntry"
            id="dateEntry"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          </label>
          </div>
          <div className="InputAndBtn">
          <label> Enter Your Task:
            <input
            id="taskText"
            placeholder="Task Here"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          </label>
          </div>
         <form onSubmit= {handleSubmit}> 
          <label> Set Priority:
           <select value={priority} 
                    onChange={(e) => { setPriority(e.target.value); }}> 
                <option value= "1" > High </option>
                <option value="2"> Moderate </option>
                <option value="3"> Low </option>
           </select>
          </label>

          </form>
          {/* Submit button will need onClick function to send the state variables to the reducer saga */}
        <button className="formSubmitBtn" onClick={sendTodo} >
            <h2> Submit</h2> 
        </button>
        {/* Clear entry button has onClick function that clears the useState variables */}
        <button className="formSubmitBtn" onClick={handleClear} >
            <h2> Clear Entry</h2>
        </button>

    </div>
    </>
  )
}

export default TodoListLandingPage;
