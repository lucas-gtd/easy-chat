const express = require('express')
const db = require('../db')

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

module.exports = router