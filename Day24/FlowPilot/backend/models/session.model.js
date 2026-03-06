const mongoose=require("mongoose");
const { number } = require("zod");

const sessionSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    plannedDuration:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["CREATED","STARTED","PAUSED","COMPLETED"],
        default:"CREATED"
    },
    startDate:Date,

    pausedAt:Date,

    totalPausedDuration:{
        type:Number,
        default:0
    },
    completedAt:Date

},{timeStamps:true});

const sessionModel=mongoose.model("Session",sessionSchema);

module.exports=sessionModel;
