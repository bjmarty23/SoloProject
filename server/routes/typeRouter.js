const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:type', (req, res) => {
    console.log('location GET type route'); 
    let queryText = `SELECT * FROM location WHERE "type" = $1;`
    pool.query(queryText, [req.params.type])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;