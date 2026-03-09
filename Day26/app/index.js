const express=require('express');

const app=express();

const User=require('./User.model');

const connectDB=require('./db');

app.use(express.json());

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running");
});

