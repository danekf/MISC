const express = require('express');
const Movie = require('../schemas/movieSchema');
//controllers
const { 
  getAllMovies,
  getMoviesByGenre,
  addMovie 
} = require('../controllers/moviesController')

const router = express.Router();

router.get('/', getAllMovies);
router.get('/genre/:genre', getMoviesByGenre);
router.post('/', addMovie);

module.exports = router