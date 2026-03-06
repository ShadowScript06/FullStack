function validateInput(schema){
    return (request,response,next)=>{
        const result=schema.safeParse(request.body);

        if(!result.success){
            return response.status(400).json({
                success:false,
                message:"Invalid input."
            })
        }

        next();
    }
}

module.exports=validateInput;
