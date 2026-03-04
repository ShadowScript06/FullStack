const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    productId:mongoose.Schema.Types.ObjectId,
    quantity:Number,
    totalPrice:Number
},{timestamps:true});

orderSchema.index({userId:1,createdAt:-1});

module.exports=mongoose.model("Order",orderSchema);