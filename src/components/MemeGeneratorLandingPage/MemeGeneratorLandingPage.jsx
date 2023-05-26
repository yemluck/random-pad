import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './MemeGeneratorLandingPage.css'


function MemeGeneratorLandingPage () {

  return (
    <>
      <h2> Meme Generator Landing Page</h2>
      <Link to='/user'><button> User Homepage</button></Link>
    </>
  )
}

export default MemeGeneratorLandingPage;