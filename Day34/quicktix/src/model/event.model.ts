import mongoose from "mongoose";



const EventSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    totalTickets:{
        type:Number,  required:true
    },
    ticketsLeft:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
        
    }
},{timestamps:true});

export const Event=mongoose.model("Event", EventSchema);





