import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './UserPage.css';
function UserPage() {
  //Hooks:
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user); 
    const history = useHistory();

    const notepadApp = () => {
      console.log('in notepad app');
      history.push('/notepad')
    }    
    
    const todoListApp = () => {
      console.log('in todoList app');
      history.push('/todoList')
      
    }    
    
    const dadJokesApp = () => {
      console.log('in dadJokes app');
    }    
    
    const memeGeneratorApp = () => {
      console.log('in memeGenerator app');
    }

  return (
    <div className="container">
      
      <div className='gridContainer' >
        <div className="gridItem" onClick={notepadApp}>
          <img src='notepad.png' alt='notepad' />
          <h2>Notepad</h2>
        </div>

        <div className="gridItem" onClick={todoListApp}>
          <img src='todoList.png' alt='todoList' />
          <h2>To-Do List</h2>
        </div> 

        <div className='gridItem' onClick={dadJokesApp}>
          <img src='dadJokes.png' alt='dad Joke' />
          <h2> Dad Jokes</h2>
        </div>        
        
        <div className='gridItem' onClick={memeGeneratorApp}>
          <img src='memeGenerator.png' alt='Meme generator' />
          <h2>Meme generator</h2>
        </div>


      </div>



      <center><LogOutButton className="btn" /></center>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
