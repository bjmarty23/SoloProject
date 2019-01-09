const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:lat/:lon/:type', (req, res) => {
    console.log('distance /type GET local route');
    let queryText = `SELECT *, distance($1, $2, location.latitude, location.longitude) as distance FROM location WHERE "type" = $3 ORDER BY $3, distance;`
    pool.query(queryText, [req.params.lat, req.params.lon, req.params.type])
    .then((result) => {
        res.send(result.rows);
        console.log('req', req.params.type)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
module.exports = router;




// router.get('/:type', (req, res) => {
//     console.log('location GET type route'); 
//     let queryText = `SELECT * FROM location WHERE "type" = $1;`
//     pool.query(queryText, [req.params.type])
//     .then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });
// });

// module.exports = router;