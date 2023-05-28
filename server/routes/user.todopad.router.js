const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

//GET request to retrieve todo list entries and display on notepad homepage
//Triggered in todo.saga via "FETCH_TODO", triggered on page load @ todoContainer
router.get('/todo', rejectUnauthenticated, (req, res) => {
   console.log('req.body is', req.body);
    const queryText = 
                        `SELECT 
                            "id",
                            TO_CHAR("date_created",'YYYY-MM-DD') as "date",
                            "task", 
                            "status",
                            "priority"
                        FROM 
                            "todo_pad"
                        WHERE
                            "user_id" = $1
                        ORDER BY
                             "id" DESC
                        `
    const queryParam = [req.user.id]
    pool.query(queryText, queryParam)
    .then(dbRes => {
        res.send(dbRes.rows)
    }).catch(err => {
        console.log('error on the get todo from todopad.router', err)
        res.sendStatus(500);
    })
});



//Post request to save user's task entries from todopad into database
router.post('/todo', rejectUnauthenticated, (req, res) => {
    console.log('req.body is ', req.body)
          const insertNoteQuery = `
                              INSERT INTO todo_pad ( 
                                  "date_created", 
                                  "task",  
                                  "status",
                                  "priority",
                                 "user_id"
                                  )
                              VALUES
                                  ($1, $2, $3, $4, $5);
                               ` 
          const queryParams= [
                              req.body.date_created,
                              req.body.task,  
                              req.body.status,
                              req.body.priority,
                              req.user.id
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