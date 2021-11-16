const { validationResult } = require('express-validator');
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/User')
const Movie = require('../models/Movie')

// CREATE MOVIE 
const createMovie = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
       return res.status(400).json({ errors: errors.array() });

    const { title, id, genres, status='Released', overview } = req.body;
    let  existingUser = await User.findOne({ _id: creator });
    if (!existingUser)
       return res.status(400).json({error : 'invalid user'});

    const movie = new Movie({
        title,
        id,
        genres,
        status,
        overview
    });

    try {
        await movie.save();
        res.status(200).json({
        message: "movie created successfully",
        movie: movie
      })
    } catch (error) {
         res.status(500).json(error.message);
    }
};

// GET MOVIE BY ID 
const getMovieById = async (req, res) => {
    const movieId = req.params.id;
    if(!ObjectId.isValid(movieId))
         return res.status(400).json({error : 'Invalid id'});

      try {
          const movie = await Movie.findById(movieId);
          if(!movie) 
             return res.status(404).json('there is no movie with this id.');
           res.status(200).json(movie)
      } catch (err) {
           res.status(500).json({error:err.message});
      }
    };

// GET ALL MOVIES 
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find().sort('vote_average:1').limit(20) 
        res.json({ success: true, movies})
    } catch {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
};

module.exports = {
    createMovie,
    getMovieById,
    getAllMovies
};