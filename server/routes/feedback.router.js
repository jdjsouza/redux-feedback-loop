const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET /api/feedback');
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error GET /api/feedback', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(`In /api/feedback POST with`, req.body);

  const newFeedback = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "supports", "comments", "flagged", "date")
                         VALUES ($1, $2, $3, $4, $5, $6);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.supports,
      newFeedback.comments,
      newFeedback.flagged,
      newFeedback.date,
    ])
    .then((responseFromDatabase) => {
      console.log(responseFromDatabase);
      // 201 means "created"
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error in POST /api/feedback ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
