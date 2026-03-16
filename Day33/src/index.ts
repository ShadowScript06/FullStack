import express, {Request,Response} from "express";
import client from "./redis";
import startWorker from "./worker";
import { publisherClient } from "./publisher";
import { subscriberClient } from "./subscriber";
import { startSubscriber } from "./SubscribeWorker";
import { rateClient, ratelimiter } from "./ratelimiter";





const app=express();


app.use(express.json());
app.use(ratelimiter);

function getUserFromDb(id:number):Promise<{id:number,name:string, age:number}>{
    console.log("DB HIT");
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                id,
                name:"prajwal",
                age:22
            });
        },3000);
    });
}



app.post('/upload', async(request:Request,response:Response)=>{
    const {imageUrl}=request.body;

    const job = {
    type: "process_image",
    imageUrl,
    createdAt: Date.now()
  };

  await client.rPush("image_queue", JSON.stringify(job));

  response.json({
    message: "Image uploaded. Processing started."
  });

})   ;


app.get("/users/:id", async(request:Request, response:Response)=>{
    const id=request.params.id;

    const cacheduser=await client.get(`user:${id}`);

        if(cacheduser){
            console.log("CACHE hit");

            return response.status(200).json(JSON.parse(cacheduser));
        }
       
        const user =await getUserFromDb(Number(id));

        await client.set (`user:${id}`, JSON.stringify(user));

        response.status(200).json(user);



});


// publisher 
app.post("/create-post", async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const post = {
    postId: 1,
    title,
    createdAt: Date.now(),
  };

  try {
    await publisherClient.publish("posts_notifications", JSON.stringify(post));
    res.json({ message: "Post created and notification sent", post });
  } catch (err) {
    console.error("Publish error:", err);
    res.status(500).json({ error: "Failed to send notification" });
  }
});



app.get("/",(request:Request,response:Response)=>{
    response.json({message:"healthy"});
});


async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");


    // connectr publisher subscriber client
    await publisherClient.connect();
    await subscriberClient.connect();

    console.log("Publisher-Subscriber connected");


    // start subscription
    startSubscriber();
    // Start worker after Redis is ready
    startWorker();


    // rate limiter
    await rateClient.connect();
    console.log("Ratelimiter client connected");

    // Now start Express server
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();


