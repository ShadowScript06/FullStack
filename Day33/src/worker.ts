import { createClient } from "redis";

const client= createClient({
    url:"redis://localhost:6379"
});

client.on("error", (err)=> console.log("Redis client error", err));



async function startWorker(){
    await client.connect();
    console.log("Worker Started");

    while(true){
        const result=await client.blPop("image_queue", 0);

        if(!result || !result.element){
            continue;
        }

        const job=JSON.parse(result.element);

         console.log("Processing job:", job);


          await processImage(job.imageUrl);
    }
}


async function processImage(url:string){
    console.log("Processing Image: ", url);

    await new Promise(resolve => setTimeout(resolve,4000));

    console.log("Image Procesed for ,", url)
}


export default startWorker;