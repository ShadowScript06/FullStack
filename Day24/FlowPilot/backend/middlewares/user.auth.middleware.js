const jwt=require("jsonwebtoken");


function userAuth(req,res,next){

    const token=req.cookies.token;

    
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    }

    const decoded=jwt.decode(token);


    req.userId=decoded.userId;


    next();
}

module.exports = userAuth;