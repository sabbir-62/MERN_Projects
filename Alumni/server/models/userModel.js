const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
},
{
    timestamps: true,
    versionKey: false
})


// Hash the password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        // If the password hasn't been modified, skip hashing
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        this.confirmPassword = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});


const User = mongoose.model('users', userSchema);
module.exports = User;