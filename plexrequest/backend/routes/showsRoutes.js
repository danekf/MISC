const express = require('express');
const Show = require('../schemas/showSchema');

//controllers
const { 
  getAllShows,
  getShowsByGenre,
  addShow, 
} = require('../controllers/showsController')

const router = express.Router();

router.get('/', getAllShows);
router.get('/genre/:genre', getShowsByGenre);
router.post('/', addShow);

module.exports = router