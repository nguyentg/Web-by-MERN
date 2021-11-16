const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const { route } = require('./auth')

// @route GET api/movies
// @desc GET movie
// @access Private
router.get('/', async(req, res) => {
    try {
        const movies = await Movie.findById(req.movies.id).select('title homepage overview genres').limit(20).sort('vote_average')
        res.json({ success: true, movies})
    } catch {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})


// @route POST api/movies
// @desc Create movie
// @access Private
router.post('/', async(req, res) => {
    const{title, genres, homepage, status, overview} = req.body

    // Simple validation
    if(!title)
    return res
    .status(400)
    .json({success: false, message: 'Title is requited'})

    try {
        const newMovie = new Movie({
            title, 
            genres,
            homepage: homepage.startsWith('https://') ? homepage : `https://${homepage}`,
            status: status || 'Released',
            overview
        })

        await newMovie.save()

        res.json({success: true, message: 'Happy learning!', movie: newMovie})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})

module.exports = router