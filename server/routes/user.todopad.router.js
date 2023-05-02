const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
//Post request to save user's task entries from todopad into database
router.post('/todo', rejectUnauthenticated, (req, res) => {
    console.log('req.booty is ', req.body)
          const insertNoteQuery = `
                              INSERT INTO todo_pad (
                                  "user_id", 
                                  "date_created", 
                                  "task",  
                                  "status"
                                  )
                              VALUES
                                  ($1, $2, $3, $4);
                               ` 
          const queryParams= [
                              req.user.id, 
                              req.body.date,
                              req.body.task,  
                              req.body.priority,
                              ]
            pool.query(insertNoteQuery, queryParams)
            .then(dbRes => {
                res.sendStatus(200);
            })
            .catch(err => {
                console.log('error occurred completing the POST request on the todopad.router', err);
                res.sendStatus(500);
            })
  });



module.exports = router;