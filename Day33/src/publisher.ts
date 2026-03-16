import { createClient } from "redis";

export const publisherClient=createClient({
    url:"redis://localhost:6379"
});

publisherClient.on("error", (err)=>{
    console.log("Publisher Redis Error: ",err);
});



