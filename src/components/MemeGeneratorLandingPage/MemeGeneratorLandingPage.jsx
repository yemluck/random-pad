import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './MemeGeneratorLandingPage.css';


function MemeGeneratorLandingPage () {

  const history = useHistory();
  const dispatch = useDispatch();
  const meme = useSelector(store => store.meme)




  // on page load, dispatch call to fetch random meme
    useEffect(() => {
      dispatch({
        type: 'GET_MEME'
      })
    }, [])

    //console.log('this is the meme object from store', meme['data'][0].url);

    // function to run on click of generate new meme
    const getRandomMeme = () => {
      console.log('in getRandom meme');
      dispatch({
        type: 'GET_MEME'
      })
    } // end function getRandom Meme

    // function to run on saveMeme
    const saveMeme = () => {
      dispatch({
        type: 'SAVE_MEME'
      })
    } // end saveMeme function


  return (
    <center>
      <marquee
        width='57%'
        bgcolor='#9a287b'
      > 
      <h2 style={{color: 'white'}}>Welcome to MemePad, ease your stress with top tier meme entertainment</h2>
      </marquee>
      <div className='gridParent'>
        <div className='gridChild image'>
          {/* <img className='imageDiv' src='' alt='Meme here' height='500px' width='500px' /> */}
        </div>
        <div className='gridChild button'>
          <button className='btn1' onClick={getRandomMeme}>Generate New Meme</button><br></br>
          <button className='btn2'onClick={saveMeme}>Save Meme</button><br></br>
          <button className='btn3' onClick={() => history.push('/favoriteMeme')}> Meme History</button><br></br>
        </div>
      </div><br></br>
      <br></br>
      <Link to='/user'><button> User Homepage</button></Link>
    </center>
  )
}

export default MemeGeneratorLandingPage;