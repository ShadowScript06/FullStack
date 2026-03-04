const mongoose=require("mongoose");

const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://prajwaljadhav051_db_user:ALlEXXUzDHPqwclK@cluster0.d7slxgx.mongodb.net/");
        console.log("Db is connected");
    } catch (error) {
        console.log(error);
    }
    
}

module.exports=connectDB;