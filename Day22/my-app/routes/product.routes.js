const express=require("express");

const Product=require("../models/product.model");

const router=express.Router();

router.get("/",async(req,res)=>{
    const{search,category,page=1,limit=5}=req.query;

    let query={};


    // regex search
    if(search){
        query.name={$regex:search, $options:"i"}
    }

    if(category){
        query.category=category
    }

    const products=(await Product.find(query)).toSorted({price:1}).skip((page-1)*limit).limit(Number(limit));

    res.json(products);
})

module.exports=router;