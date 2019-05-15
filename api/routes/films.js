const express = require('express')
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')

const films = require('../models/films')
const app = express()
app.use(bodyParser.json())


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

// Enter New Film into the database
router.post('/', (req, res) => {
    console.log(req.body)
    const newFilm = new films({
        Title: req.body.Title,
        Director: req.body.Director,
        Year: req.body.Year,
        Genre: req.body.Genre,
        Runtime: req.body.Runtime,
        Country: req.body.Country,
        imdbRating: req.body.imdbRating,
        Plot: req.body.Plot,
        Type: req.body.Type 
    })
    newFilm
    .save()
    .then(films => res.json(films))
})

module.exports = router