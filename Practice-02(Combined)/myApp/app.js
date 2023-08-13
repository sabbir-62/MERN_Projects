const express = require('express');
const path = require('path');
const router = require('./src/routes/api');

const app = express();

//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//import mongoose
const mongoose = require('mongoose');


//security middleware implementation
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


//parse json data
app.use(express.json());


//Rate Limiter Implementation
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,    // 1 minute
    max: 10,
    message: 'Too many request from this IP. Please try again later'
})
app.use(limiter);

//database connection
const uri = "mongodb+srv://<username>:<password>@cluster0.cpgrk48.mongodb.net/CRUD";
const options = {
    user: "sabbir",
    pass: "sabbir5313",
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  
  mongoose.connect(uri, options)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });




//Frontend connection
app.use(express.static('client/dist'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})



//routing
app.use('/api/v1', router);

module.exports = app;