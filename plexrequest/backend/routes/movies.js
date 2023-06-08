const express = require('express');

const router = express.Router();

//get all 
router.get('/', (req,res) => {
  res.json({
    mssg: 'GET movies'
  })
});

//get by genre
router.get('/:genre', (req,res) => {
  res.json({
    mssg: 'GET by genre'
  })
});

router.post('/', (req,res) => {

});

module.exports = router