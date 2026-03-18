const express=require("express"
);

const app=express();


app.get("/", (request,response)=>{
    response.send("Server is running ")
})


app.listen(3000,()=>{
    console.log("Server is runnning on port 3000.")
});