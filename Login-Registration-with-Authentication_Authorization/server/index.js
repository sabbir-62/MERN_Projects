const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors())

app.use(cookieParser())


app.get("/", (req, res) => {
    res.cookie('sabbir', "amarsonarbangla")
    res.send("This is sabbir hossain. I am a student")
})

// app.get("/token", (req, res) => {
//     const token = res.cookies.mosh
//     res.send(token)
// })

app.get("/token", (req, res) => {
    const token = req.cookies.mosh; // Retrieve the "mosh" cookie from the request
    res.send(token);
});


app.listen(8080, () => {
    console.log("server is running on port 8080")
})