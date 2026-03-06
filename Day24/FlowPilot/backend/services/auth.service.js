const User=require('../models/user.model');

const bcrypt=require("bcrypt");

const AppError = require("../utils/AppError");

async function registerUser(name,email,password){
    const existingUser=await User.findOne({email});

    if(existingUser){
        throw new AppError("User already exist",409);
    }

    const hashedPassword= await bcrypt.hash(password,10);

    const user=await User.create({
        name,
        email,
        password:hashedPassword
    });

    return user
}

async function loginUser(email,password){
    const user= await User.findOne({email});

    if(!user){
        throw new AppError("User does not exist",404);
    }

    const isMatch= await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new AppError ("Incorrect Password.,409")
    }

    return user;
}



module.exports={
    registerUser,
    loginUser
}