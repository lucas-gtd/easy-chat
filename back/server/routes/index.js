const express = require('express')
const db = require('../db')
const bcrypt = require('bcrypt')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        db.all().then((results) => {
            res.json(results)
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        db.one(req.params.id).then((results) => {
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
            db.insert(req.body.email, hash, req.body.name).then((results) => {
                res.json(results)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    });

})

module.exports = router