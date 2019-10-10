const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/add', async (req, res) => {
    console.log('adding a monster, req.body is', req.body)
    let connection = await pool.connect();
    try {
        await connection.query('BEGIN');
        await connection.query('INSERT INTO monsters (name, challenge_rating) VALUES ($1, $2) returning id;',[req.body.name, req.body.challenge_rating]);
        await connection.query('COMMIT');
        res.send(response)
    }
    catch (error) {
        console.log(error);
        await connection.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        connection.release();
    }
})

module.exports = router;