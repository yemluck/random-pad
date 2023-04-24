const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
router.post('/notes', rejectUnauthenticated, (req, res) => {
      console.log('req.booty is ', req.body)
            const insertNoteQuery = `
                                INSERT INTO notepad (
                                    "user_id", 
                                    "date", 
                                    "header",  
                                    "description"
                                    )
                                VALUES
                                    ($1, $2, $3, $4);
                                 ` 
            const queryParams= [
                                req.user.id, 
                                req.body.date,
                                req.body.header,  
                                req.body.description,
                                ]
              pool.query(insertNoteQuery, queryParams)
              .then(dbRes => {
                  res.sendStatus(200);
              })
              .catch(err => {
                  console.log('error occurred completing the POST request on the notepad.router', err);
                  res.sendStatus(500);
              })
    });
      
    
    module.exports = router;
    
    
    