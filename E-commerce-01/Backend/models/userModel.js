const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const image = require('../public/users/user.png');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        max: [20, "User name max length 20 characters"],
        min: [3, "User name min length 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true, 
        unique: [true, "Please provide a unique email"],
        validate: [validator.isEmail, "provide a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [6, "User password min length 6 characters"],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    image: {
        type: String,
        default: image
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone no is required"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    }

},
{
    timestamps: true,
    versionKey: false
});


const users = mongoose.model('users', userSchema);
module.exports = users;