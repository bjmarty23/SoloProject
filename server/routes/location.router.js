const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('location GET route');
    let queryText = `SELECT * FROM LOCATION;`
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});


router.post('/', (req, res) => {
    console.log('Location POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) { //in order to post an item, user must be signed in
        let queryText = `INSERT INTO location ("latitude", "longitude", "name", "type", "person_id") VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [req.body.latitude,
                                req.body.longitude,
                                req.body.name,
                                req.body.type,
                                req.user.id
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