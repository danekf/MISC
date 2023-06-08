require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

//routes
const defaultRoute = require('./routes/home');
const movieRoutes  = require('./routes/movies');
const showRoutes = require('./routes/shows')

//MIDDLEWARE

  //--access json data in requests
app.use(express.json());

  //--log requests
app.use( (req, res, next ) => {
  console.log('incoming request...');
  console.log(req.path, req.method);
  next();
})

//ROUTES
app.use('/', defaultRoute);
app.use('/api/movies', movieRoutes);
app.use('/api/shows', showRoutes)


//MONGOOSE
const username = process.env.P_CLUSTER_USERNAME;
const password = process.env.P_CLUSTER_PASSWORD;
const uri = "mongodb+srv://" + username + ":" + password + "@p-cluster.cbwratb.mongodb.net/?retryWrites=true&w=majority";

//connect to db
mongoose.connect(uri)
.then(()=>{
  console.log('connected to db')
    //listener
    app.listen(PORT, ()=>{
      console.log('listneing on port', PORT, '...')
    })
  })
  .catch((error)=>{
    console.log(error);
  })