const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

app.use(express.json());

const DB = process.env.DATABASE


const router = require('./routes/api');

app.use('/', router)

mongoose.connect(DB)
    .then(() => {
        console.log("Database Connect Successfully");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = app;