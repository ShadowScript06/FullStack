const mongoose=require("mongoose");

const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://.mongodb.net/");
        console.log("Db is connected");
    } catch (error) {
        console.log(error);
    }
    
}

module.exports=connectDB;
