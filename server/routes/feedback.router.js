const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//   console.log('GET /api/feedback');
//   pool
//     .query('SELECT * from "feedback";')
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log('Error GET /api/feedback', error);
//       res.sendStatus(500);
//     });
// });

router.post('/', (req, res) => {
  console.log(`In / POST with`, req.body);
  const newFeedback = req.body;
  console.log(`newFeedback`, newFeedback);
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                         VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      Number(newFeedback.feeling),
      Number(newFeedback.understanding),
      Number(newFeedback.supports),
      newFeedback.comments,
    ])
    .then((responseFromDatabase) => {
      console.log(responseFromDatabase);
      // 201 means "created"
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error in POST / ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
