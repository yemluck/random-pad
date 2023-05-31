require('dotenv').config()
const express = require('express')
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Get request for memes
router.get('/meme', rejectUnauthenticated, (req, res) => {
  axios({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/random',
    params: {
      api_key: process.env.GIPHY_API_KEY,
      limit: 1
    }
  })
  .then((apiRes) => {
    console.log('response from api', apiRes.data);
    
    res.send(apiRes.data)
  })
  .catch((err) => {
    console.log('Error getting data from API', err);
    res.sendStatus(500)
  })
})



module.exports = router;