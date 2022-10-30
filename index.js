const express = require('express');
app = express();
require('dotenv').config(); 

// imports
const router = require('./routes/todoListRouter');
const dbConnect  = require('./db/config');

const PORT= 5000;

//middlewares
app.use(express.json());

//routes
app.use('/api', router);

const connect = () => { 
  try {
    dbConnect();
    app.listen(PORT, () =>{
      console.log(`Server is listening on port http://localhost:${PORT}`)});
  } catch (err) {
    console.log(err);
  }
 }

 connect();
