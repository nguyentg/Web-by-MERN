/* User.js : quản lí các bộ phim*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genres: {
        id: [String], 
        name: [String]
    },
    vote_average:{
        type: String
    },
    homepage: {
        type: String
    },
    overview:{
        type: String
    },
    status:{
        type: String,
        enum: ['Released', 'Post Production', 'Rumored']
    }
})
module.exports = mongoose.model('movies', MovieSchema)