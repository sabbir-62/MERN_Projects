require("dotenv").config();


const serverPort = process.env.PORT || 3100;
const mongodbConnection = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/E-Com-MERN"

module.exports = {serverPort, mongodbConnection}