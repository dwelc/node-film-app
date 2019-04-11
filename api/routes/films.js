const express = require('express')
const cors = require('cors')
const router = express.Router()

const films = require('../models/films')

// Return all Films, sorted by title
router.get('/', (req, res) => {
    films.find()
    .sort({Title : 1})
    .then(films => {
        res.json(films)
    })
    .catch(err => {
        res.json(err.message)
        console.log(err)
    })
})

// Enter Film into the database
router.post('/', (req, res) => {
    const newFilm = new films({

        Title: req.body.Title
    })

    newFilm.save().then(films => res.json(films))
})

module.exports = router