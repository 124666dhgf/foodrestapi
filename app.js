const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const foodRoute= require('./routes/foods');
app.use('/foods',foodRoute);

//Routes//listening
mongoose.connect("mongodb://localhost:27017/myparvathydb",()=>{
    console.log("Connected to DB");
});

app.listen(8080);