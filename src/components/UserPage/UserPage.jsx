import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './UserPage.css';
function UserPage() {
  //Hooks:
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user); 
    const history = useHistory();

  //Functions:
    //Bring the user to the notepad homepage on click of Notepad Homepage Button
    function goToNotepad(event){
      // you use event prevent default if you're submitting a form
      // I don't think you are so you don't need it
      event.preventDefault();
      history.push('/Notepad');
    }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      
      <div className="notepadNavigation"> 
      <h2> Capsulate your inner thoughts and ideas </h2>
      {/* You use a function to go to the page. You could just use a link 
      When you understand, you can clean this up.
      Also in the notepad page, you should put a button that will allow the user to 
      go back to the homepage
      BTW, where is the CSS you used to style the button? I couldn't find it
      */}
      <Link to="/notepad"><button className="notepadBtn"> <h1>Notepad Homepage</h1></button></Link>
      </div> 

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
