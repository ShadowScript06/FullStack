const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    stock:Number
},{timestamps:true});



productSchema.index({category:1,price:1});

module.exports=mongoose.model("Product",productSchema);

