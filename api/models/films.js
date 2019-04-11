const mongoose = require('mongoose')

const films = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    Year: Number,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Metascore: Number,
    imdbRating: Number,
    imdbVotes: Number,
    imdbID: String,
    Type: String,
    Response: Boolean,
    Images: Array,
    totalSeasons: Number,
})

module.exports = mongoose.model('films', films)