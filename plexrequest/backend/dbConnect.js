const mongoose = require('mongoose');

const username = process.env.REACT_APP_P_CLUSTER_USERNAME;
const password = process.env.REACT_APP_P_CLUSTER_PASSWORD;
const uri = "mongodb+srv://" + username + ":" + password + "@p-cluster.cbwratb.mongodb.net/?retryWrites=true&w=majority";

//connect to db
mongoose.connect(uri)
.then(()=>{
  console.log('connected to db')
})
.catch((error)=>{
  console.log(error);
})