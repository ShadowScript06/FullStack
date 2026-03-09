const mongoose=require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect('mongodb://mongodb:27017');

        console.log("DB is conected");
    } catch (error) {
        console.log("DB connection error", error)
    }
}

module.exports=connectDB;