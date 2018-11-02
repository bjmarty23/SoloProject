const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('location GET id route'); 
    let queryText = `SELECT * FROM location where id = $1;`
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
router.put('/:id', (req, res) => {
    console.log('Location PUT route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) { //in order to post an item, user must be signed in
        let queryText = `UPDATE location SET latitude = $1, longitude = $2, name = $3,
                                                     type = $4, notes = $5 WHERE id = $6;`
        pool.query(queryText, [req.body.latitude,
                                req.body.longitude,
                                req.body.name,
                                req.body.type,
                                req.body.notes,
                                req.params.id
        ]).then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(403);
    }
});





module.exports = router;