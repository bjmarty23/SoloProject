const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//switching to two routers for distance and type
// router.get('/:lat/:lon/:type', (req, res) => {
//     console.log('location GET local route');
//     let queryText = `SELECT *, distance($1, $2, location.latitude, location.longitude) as distance FROM location WHERE "type" = $3 ORDER BY $3, distance;`
//     pool.query(queryText, [req.params.lat, req.params.lon, req.params.type])
//     .then((result) => {
//         res.send(result.rows);
//         console.log('req', req.params.type)
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });
// });
// module.exports = router;



// working distance without type param
// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

router.get('/:lat/:lon', (req, res) => {
    console.log('location GET local route');
    
    let queryText = `SELECT *, distance($1, $2, location.latitude, location.longitude) as distance FROM location ORDER BY distance ;`
    pool.query(queryText, [req.params.lat, req.params.lon]).then((result) => {
        res.send(result.rows);
        // console.log(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
module.exports = router;