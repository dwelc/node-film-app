const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')

const app = express()

app.use(cors())

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

app.get('/', (req, res) => {
    console.log('Recieved Request')
    res.send('Hello this is a response from express!!!')
})

app.get('/films', (req, res) => {

})