const mongoose=require("mongoose");

const Product=require("../models/product.model");

const Order=require("../models/order.model");

const buyProduct=async(req,res)=>{
    const{productId,quantity,userId}=req.body;

    const session=await mongoose.startSession();

    session.startTransaction();

    try {
        const product=await Product.findById(productId).session(session);

        if(!product || product.stock <quantity){
            throw new Error ("Out of Stock")
        }

        // reduce stock
        await Product.updateOne(
            {_id:productId},
            {$inc:{stock:-quantity}},
            {session}
        )

        // create order
        await Order.create([{
            userId,
            productId,
            quantity,
            totalPrice:product.price*quantity
        }]);

        await session.commitTransaction();

        session.endSession();

        res.json({message: "Order Placed succesfully"});

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(400).json({error:error.message});
    }
}

module.exports=buyProduct;