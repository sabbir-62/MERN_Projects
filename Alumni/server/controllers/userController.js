const User = require('../models/userModel');

exports.userRegistration = async(req, res) => {
    const {name, email, phone, role, password, confirmPassword} = req.body;
    
    try{
        if(!name || !email || !phone || !role || !password || !confirmPassword){
            return res.status(400).json({
                success: false,
                message: "All the fields are required"
            })
        }

        const existingUser = await User.findOne({email});
    
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
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
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
        else{
            return res.status(201).json({
                success: true,
                message: "Data save successfully"
            })
        }
    }
    catch (error) {
        // Handle MongoDB duplicate key error
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            return res.status(400).json({
                success: false,
                message: `User with email '${error.keyValue.email}' already exists.`,
            });
        }

        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

