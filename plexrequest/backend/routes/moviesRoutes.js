const express = require('express');
const Movie = require('../schemas/movieSchema');
//controllers
const { 
  getAllMovies,
  getMoviesByGenre,
  addMovie,
  deleteMovie,
  updateMovie, 
} = require('../controllers/moviesController')

const router = express.Router();

router.get('/', getAllMovies);
router.get('/genre/:genre', getMoviesByGenre);
router.post('/', addMovie);
router.delete('/:title', deleteMovie);
router.patch('/:title', updateMovie);

module.exports = router