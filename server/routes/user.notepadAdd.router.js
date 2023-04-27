const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
//Post request to save user entries from notepad into database
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
      
//get request to retrieve notepad entries and display on notepad homepage
//Triggered in notepad.saga via "FETCH_NOTES", triggered on page load @ notepadLandingPage
    router.get('/notes', rejectUnauthenticated, (req, res) => {
        const queryText = 
                            `SELECT 
                                "id",
                                TO_CHAR("date",'YYYY-MM-DD') as "date",
                                "header", 
                                "description"
                            FROM 
                                "notepad"
                            WHERE
                                "user_id" = $1
                            `
        const queryParam = [req.user.id]
        pool.query(queryText, queryParam)
        .then(dbRes => {
            res.send(dbRes.rows)
        }).catch(err => {
            console.log('error on the get notes from notepad.router', err)
            res.sendStatus(500);
        })
    });



//Delete request triggered by 'DELETE_NOTE'
    
router.delete('/notes/:id', rejectUnauthenticated, (req, res) => {
    console.log('note id is', req.params.id);
  
    const queryText = `DELETE FROM notepad
                        WHERE user_id = $1 AND id = $2 
                      `
    const queryParams = [req.user.id, req.params.id];
  
    pool.query(queryText, queryParams)
                .then(() => {res.sendStatus(200)
                console.log('successful delete');
                })
                .catch((err) => {
                  console.log('Error completing note DELETE', err);
                  res.sendStatus(500);
                })
  });


    module.exports = router;
    
    
    