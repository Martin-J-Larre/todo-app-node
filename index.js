const express = require('express');
app = express(); 

// imports
const router = require('./routes/todoListRouter');

const PORT= 5000;

//middlewares
app.use(express.json());

//routes
app.use('/api', router);



app.listen(PORT, () =>{
    console.log(`Server is listening on port http://localhost:${PORT}`);
});