const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: [true],
        default: "customer",

    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Please add confirm password"],
        minLength: [6, "Password must be up to 6 characters"]
    }
})


const User = mongoose.model('users', userSchema);
module.exports = User;