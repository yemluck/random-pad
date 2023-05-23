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
      console.log('req.body is ', req.body)
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

  // get drafts endpoint
router.get('/notes/noteDetail', (req, res) => {
    // console.log('This is the req', req.query.id);
    
    // Add query to fetch drafts
    const queryText = `
      SELECT 
            "id",
            TO_CHAR("date",'YYYY-MM-DD') as "date",
            "header", 
            "description"
      FROM
        "notepad"
      WHERE
        "id" = $1
    `;
  
    const queryParam = [req.query.id]
    pool.query(queryText, queryParam)
      .then(result => {
        res.send(result.rows[0])
        // console.log('this is result.rows', result.rows[0]);
        
      })
      .catch(err => {
        console.log('Error fetching note detail', err);
        res.sendStatus(500)
      })
  })


// put request endpoint triggered by 'UPDATE_NOTE_DETAIL' in notepadDetailPage
router.put('/:id', (req, res) => {
  console.log('query params are,', req.query);
  console.log('req.body', req.body);
  let queryText = `
    UPDATE "notepad"
    SET "header"=$1, "description"=$2,
    WHERE "id"=$3 AND user_id=$4;

  `
  let queryParam = [
    req.body.header,
    req.body.description,
    req.body.id,
    req.user.id
  ]

  pool.query(queryText, queryParam)
  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    console.error('ERROR in PUT request on notepad router,', err);
    res.sendStatus(500);
})
});
    module.exports = router;
    
    
    