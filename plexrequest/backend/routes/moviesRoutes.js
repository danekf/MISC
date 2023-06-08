const express = require('express');
const Movie = require('../schemas/movieSchema');
//controllers
const { 
  getAllMovies,
  addMovie 
} = require('../controllers/moviesController')

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:genre', );
router.post('/', addMovie);

module.exports = router