const express = require('express');
const Show = require('../schemas/showSchema');

const router = express.Router();

router.get('/', async (req,res) => {
  try {

  } catch (error){
    res.json({
      error: error.message,
    })
  }
});

router.post('/', async (req,res) => {
  const { title, year } = req.body;

  try {
    const show = await Show.create({title, year})
    res.status(200).json(show);
  } catch (error){
    res.status(400).json({
      error: error.message,
    })
  }
});

module.exports = router