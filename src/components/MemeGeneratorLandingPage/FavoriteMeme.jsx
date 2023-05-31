import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './FavoriteMeme.css';



function FavoriteMeme () {

  const history = useHistory();


  return(
    <>
      <h3> in saved favorite meme</h3>
      <button onClick={() => history.push('/memeGenerator')}>Return</button>
    </>
  )
}

export default FavoriteMeme;