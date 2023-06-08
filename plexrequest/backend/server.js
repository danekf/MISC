require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT;

//routes
const defaultRoute = require('./routes/home');
const movieRoutes  = require('./routes/movies');
const showRoutes = require('./routes/shows')

//middleware
app.use( (req, res, next ) => {
  console.log('incoming request...');
  console.log(req.path, req.method);
  next();
})

//routes
app.use('/', defaultRoute);
app.use('/api/movies', movieRoutes);
app.use('/api/shows', showRoutes)

//listener
app.listen(PORT, ()=>{
  console.log('listneing on port', PORT, '...')
})
