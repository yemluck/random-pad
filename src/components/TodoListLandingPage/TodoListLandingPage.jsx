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
    let [task, setTask] = useState('');

// Create notepad and descriptions, send to reducer via dispatch
let ToDoToAdd = 
{
    date_created: newDateAdded,
    task: task,
    description: description
}
    
// Page Load Functions:

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
            value={newDateAdded}
            onChange={(e) => {
              setNewDateAdded(e.target.value);
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
         <form className="todoDropDown" onSubmit= {this.handleSubmit}> 
          <label> Set Priority:
           <select value={this.state.value} onChange={this.handleChange}> 
                <option value= "1"> High </option>
                <option value="2"> Moderate </option>
                <option value="3"> Low </option>
           </select>
          </label>
          <input type="submit" value="Submit" />

          </form>
          {/* Submit button will need onClick function to send the state variables to the reducer saga */}
        <button className="formSubmitBtn" onClick={addNoteToNotepad} >
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
