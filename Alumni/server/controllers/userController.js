const User = require('../models/userModel');

exports.userRegistration = async(req, res) => {
    const {name, email, phone, role, password, confirmPassword} = req.body;
    
    if(!name || !email || !phone || !role || !password || !confirmPassword){
        res.status(400).json({
            success: false
        })
        console.log("All the fields are required");
    }
    const existingUser = await User.findOne({email});

    if(existingUser){
        console.log("User is already exist");
        res.status(400);
    }

    const user = await User.create({
        name,
        email,
        phone,
        role,
        password,
        confirmPassword
    })

    if(!user){
        console.log("Something went wrong");
    }
    else{
        console.log("User Data save successfully");
        res.status(201).json({
            success: true,
            message: "Data save successfully"
        })
    }
}

