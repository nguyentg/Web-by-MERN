/* User.js : quản lí người dùng*/
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    movies_watched: {
        type: Schema.Types.ObjectId,
        ref: 'movies.id'
    }
})

module.exports = mongoose.model('users', UserSchema) /**'users': tên của table/collection trong mongoose*/