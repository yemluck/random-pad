import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './MemeGeneratorLandingPage.css'


function MemeGeneratorLandingPage () {

  const history = useHistory();


  return (
    <center>
      <h2> Welcome to MemePad, ease your stress with top tier meme entertainment</h2>
      <div className='gridParent'>
        <div className='gridChild image'>
          <img className='imageDiv' src='' alt='Meme here' height='500px' width='500px' />
        </div>
        <div className='gridChild button'>
          <button className='btn1'>Generate New Meme</button><br></br>
          <button className='btn2'>Save Meme</button><br></br>
          <button className='btn3' onClick={() => history.push('/favoriteMeme')}> Meme History</button><br></br>
        </div>
      </div><br></br>
      <br></br>
      <Link to='/user'><button> User Homepage</button></Link>
    </center>
  )
}

export default MemeGeneratorLandingPage;