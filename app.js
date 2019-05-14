const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const films = require('./api/models/films')
const filmr = require('./api/routes/films')
const filmsSlimr = require('./api/routes/films-slim')
const filmdetails = require('./api/routes/film-details')

const app = express()
//app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/films', { useNewUrlParser: true}).then(
    () => {console.log('Connected to MongoDB')},
    err => {console.log('Failed to connect to MongoDB Server: ' + err.address + ' On Port: ' + err.port)}
)

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

app.use('/films', filmr)
app.use('/filmsslim', filmsSlimr)
app.use('/film-details', filmdetails)

app.get('/', (req, res) => {
    res.send('Hello from Express')
    console.log('Hello')
})