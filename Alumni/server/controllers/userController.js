const User = require('../models/userModel');


//user registration
exports.userRegistration = async(req, res) => {
    const {name, email, phone, role, password, confirmPassword} = req.body;
    
    try{
        if(!name || !email || !phone || !role || !password || !confirmPassword){
            return res.status(400).json({
                success: false,
                message: "All the fields are required"
            })
        }
        
        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password are not matched"
            })
        }

        await User.findOne({email, password});
    
        // if(existingUser){
        //     return res.status(400).json({
        //         success: false,
        //         message: "Email is already exist",
        //     });
        // }
    
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



//user login
exports.userLogin = async(req, res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Email and Password are required'
            })
        }

        const existingUser = await User.findOne({email, password});

        if(!existingUser){
            return res.status(400).json({
                success: false,
                message: 'User does not exist'
            })
        }
        return res.status(200).json({
            success: true,
            message: existingUser
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
