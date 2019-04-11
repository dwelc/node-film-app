const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

const films = require('./api/models/films')

const app = express()
app.use(cors())

mongoose.connect('mongodb://localhost:27017/films', { useNewUrlParser: true}).then(
    () => {console.log('Connected to MongoDB')},
    err => {console.log('Failed to connect to MongoDB Server: ' + err.address + ' On Port: ' + err.port)}
)

const db = mongoose.connection

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

app.get('/', (req, res) => {
    console.log('Recieved Request')
    res.send('Hello this is a response from express!!!')
})

app.get('/films', (req, res) => {    
    films.find()
    .then(films => {
        res.json({
            confirmation: 'success',
            data: films
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
        console.log(err)
    })
})