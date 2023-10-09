const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const DB = process.env.DATABASE


const router = require('./routes/api');

app.use('/api/v1', router)

mongoose.connect(DB)
    .then(() => {
        console.log("Database Connect Successfully");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = app;