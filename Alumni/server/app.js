const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const DB = process.env.DATABASE


app.use('/', (req, res) => {
    res.send("Hello Sabbir");
})

mongoose.connect(DB)
    .then(() => {
        console.log("Database Connect Successfully");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = app;