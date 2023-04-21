import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import './UserPage.css';
function UserPage() {
  //Hooks:
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user); 



  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      
      <div className="notepadNavigation"> 
      <h2> Capsulate your inner thoughts and ideas </h2>

      <Link to="/notepad"><button className="notepadBtn"> <h1>Notepad Homepage</h1></button></Link>
      </div> 

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
