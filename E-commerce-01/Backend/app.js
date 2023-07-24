const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(morgan('dev'));
app.use(xssClean());
app.use(express.json());
app.use(express.urlencoded({extended: true}))



const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,    // 1 minute
    max: 5,
    message: 'Too many request from this IP. Please try again later'
})

// app.use(rateLimiter);


app.get('/test', (req, res) => {
    res.status(200).json({
        "Name": "sabbir"
    })
})



// // Client error handle
// app.use((req, res, next) => {
//     createErrors(404, 'Router not found');
//     next();
// })


// //Server error handle
// app.use((err, req, res, next) => {
//     return res.status(err.status || 500).json({
//         success: false,
//         message: err.message
//     })
// })




// Client error handle
app.use((req, res, next) => {
  const error = createError(404, 'Router not found');
  next(error); // Pass the error to the next middleware
});



// Server error handle
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message
    });
  });
  


module.exports = app;