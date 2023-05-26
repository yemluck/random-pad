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
    let [status, setStatus] = useState('');

// Create notepad and descriptions, send to reducer via dispatch
let ToDoToAdd = 
{
    date_created: date,
    task: task,
    status: 'false', 
    priority: priority
}
    
// Page Load Functions:

// Button Functions 
    // function to clear inputs after client has entered data
    function handleClear(){
        setDate('');
        setPriority('');
        setTask('');
    }

   // function to send Todo to saga 
   function sendTask(){

    if (priority === "" || date=== "" || task==="") {
        alert('Oops, you have left an input blank, review entry to ensure all inputs are properly filled');
    } else {
    dispatch({
        type: 'ADD_TASK',
        payload: ToDoToAdd
    })
    setDate('');
    setPriority('');
    setTask('');
    }
}

  return (
    <>
    <div className="TodoListHeader"> 
        <h1> <i> Welcome to your personalized To Do List, 
            where To-Do is turned into TA - DA!!! </i>
        </h1>
        <img 
            src= "https://www.pngitem.com/pimgs/m/71-719717_to-do-list-png-transparent-cartoons-png-download.png"           
            width= {600}
            height={450}
            alt= "picture of the master to do list"
            className="todoImg"
        />
    </div>
    <div className= "todoList formContainer">
   
        <h2> Start Your Task Entry Here:</h2>
    <div className= "TodoInputAndBtn">
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
          <div className="TodoInputAndBtn">
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
         <div className="TodoInputAndBtn">
         <form> 
          <label>  Set Priority:
          <select value={priority} 
                    onChange={(e) => { setPriority(e.target.value); }}> 
                <option value="" >  Select Your Priority  </option>
                <option value= "High">  High  </option>
                <option value="Moderate"> Moderate </option>
                <option value="Low"> Low </option>
           </select>
          
          </label>
        
          </form>
          </div>
          </div>
          {/* Submit button will need onClick function to send the state variables to the reducer saga */}
        <button className="todoFormSubmitBtn" onClick={sendTask} >
            <h2> Submit</h2> 
        </button>
        {/* Clear entry button has onClick function that clears the useState variables */}
        <button className="todoFormSubmitBtn" onClick={handleClear} >
            <h2> Clear Entry</h2>
        </button><br></br>
          <Link to='/user'><button className="todoFormSubmitBtn"> <h2>User Homepage</h2></button></Link>

    
    </>
  )
}

export default TodoListLandingPage;
