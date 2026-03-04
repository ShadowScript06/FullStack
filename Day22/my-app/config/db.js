const mongoose=require("mongoose");

const connectDB=async ()=>{
    try {
        await mongoose.connect("mongo uri");
        console.log("Db is connected");
    } catch (error) {
        console.log(error);
    }
    
}

module.exports=connectDB;