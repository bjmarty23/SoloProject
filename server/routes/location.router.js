const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('location GET route');
    
    
    let queryText = `SELECT * FROM location;`
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/:lat/:lon', (req, res) => {
    console.log('location GET local route');
    
    let queryText = `SELECT *, distance($1, $2, location.latitude, location.longitude) as distance FROM location ORDER BY distance ;`
    pool.query(queryText, [req.params.lat, req.params.lon]).then((result) => {
        res.send(result.rows);
        console.log(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

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
router.get('/:type', (req, res) => {
    console.log('location GET type route'); 
    let queryText = `SELECT * FROM location WHERE type = $1;`
    pool.query(queryText, [req.params.type])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
//add route for :id to get info from database for that specific item and send it back 
// reducer will hold onto that info

router.post('/', (req, res) => {
    console.log('Location POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) { //in order to post an item, user must be signed in
        let queryText = `INSERT INTO location ("latitude", "longitude", "name", "type", "notes", "person_id") VALUES ($1, $2, $3, $4, $5, $6);`;
        pool.query(queryText, [req.body.latitude,
                                req.body.longitude,
                                req.body.name,
                                req.body.type,
                                req.body.notes,
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

//delete the item by the id
// select all from location where :id = req.params.
router.delete('/:id', (req, res) => {  
    if (req.isAuthenticated()){
    let queryText = `DELETE FROM location WHERE "id" = $1 AND "person_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id]).then((result) => {
      console.log(result);
      if (result.rowCount === 0) {
        res.sendStatus(403);
      } else {
        res.sendStatus(200);
      }
    }).catch((err) => {
      res.sendStatus(500);
    })
    } else {
      res.sendStatus(403);
    }
  })

//   console.log('user', req.user);
//     if (req.isAuthenticated()) { //in order to post an item, user must be signed in
//         let queryText = `UPDATE location ("latitude", "longitude", "name",
//         "type", "notes", "person_id") VALUES ($1, $2, $3, $4, $5, $6);`;
//         // `UPDATE location SET "latitude" = $1, "longitude" = $2, "name" = $3,
//         //                                      "type" = $4, "notes" = $5, WHERE "person_id" = $6;`;
// // pool.query(queryText, [updatedFood.latitude,
// //                     updatedFood.longitude,
// //                      updatedFood.name,
// //                       updatedFood.type, 
// //                      updatedFood.notes, 
// //                      req.params.id]);
//         pool.query(queryText, [req.body.latitude,
//                               req.body.longitude,
//                                 req.body.name,
//                                 req.body.type,
//                                 req.body.notes,
//                                 req.user.id

/**
 * Update an item if it's something the logged in user added
 */
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