const express = require('express');
const Show = require('../schemas/showSchema');

//controllers
const { 
  getAllShows,
  getShowsByGenre,
  addShow, 
  deleteShow,
  updateShow,
} = require('../controllers/showsController')

const router = express.Router();

router.get('/', getAllShows);
router.get('/genre/:genre', getShowsByGenre);
router.post('/', addShow);
router.delete('/:title', deleteShow);
router.patch('/:title', supdateShow);

module.exports = router