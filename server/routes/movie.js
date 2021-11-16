const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie-controller')
const { check } = require('express-validator');

const {
    createMovie,
    getMovieById,
    getAllMovies} = movieController;

const validation = [ 
    check('title').not().isEmpty(),
    check('overview').not().isEmpty()]

// CREATE MOVIE 
router.post('/',validation,createMovie);

// GET MOVIE BY ID 
router.get('/:id', getMovieById);

// GET ALL MOVIES
router.get('/',getAllMovies);


module.exports = router;