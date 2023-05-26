import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import './DadJokesLandingPage.css';

function DadJokesLandingPage () {

  return(
    <>
      <h2> in Dad Jokes Landing Page </h2>
      <Link to='/user'><button> User Homepage</button></Link>
    </>
  )
}

export default DadJokesLandingPage;