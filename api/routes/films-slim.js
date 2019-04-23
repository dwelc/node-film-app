const express = require('express')
const cors = require('cors')
const router = express.Router()

const films = require('../models/films')

//Return Title and Poster URL of a film
router.get('/', (req, res) => {
    films.find()
    .select('Title Poster -_id')
    .sort({Title : 1})
    .then(films => {
        res.json(films)
    })
    .catch(err => {
        res.json(err.message)
    })
})

module.exports = router