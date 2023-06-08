const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.json({
    mssg: 'GET shows'
  })
});

router.post('/', (req,res) => {

});

module.exports = router