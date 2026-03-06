const mongoose=require("mongoose");
require("dotenv").config();


const MONGO_URI=process.env.MONGO_URI;

const connectDB=async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB IS CONNECTED");
    } catch (error) {
        console.log("DB connection Failed");
        console.log(error.message);

    }
}

module.exports=connectDB;