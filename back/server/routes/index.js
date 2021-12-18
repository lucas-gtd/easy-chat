const express = require('express')
const db = require('../db')
const bcrypt = require('bcrypt')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        db.usersdb.all().then((results) => {
            res.json(results)
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        db.usersdb.one(req.params.id).then((results) => {
            res.json(results)
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/create', async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        try {
            db.usersdb.insert(req.body.email, hash, req.body.name).then((results) => {
                res.json(results)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    });
})

router.post('/login', async (req, res, next) => {
    try {
        db.usersdb.oneByMail(req.body.email).then((results) => {
            bcrypt.compare(req.body.password, results.password, (err, same) => {
                if (same) {
                    res.json({ validMsg: "connected successfuly !", user: results })
                } else {
                    res.json({ errorMsg: "wrong email or password" })
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router