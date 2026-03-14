const express=require("express");

const app=express();

app.use(express.json());


const queue=require("./queue");
const pubsub=require("./pubsub");
const notificationService=require("./ssc");



queue.process ((job)=>{
    console.log("Processing job: ",job);

    pubsub.publish("notification", job);
});

pubsub.subscribe("notifiaction", (data)=> {
    notificationService.notifyAll(data);
});


app.post("/notify", (req, res) => {
  const { message } = req.body;

  queue.add({
    message,
    time: Date.now(),
  });

  res.json({ status: "queued" });
});


app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  notificationService.addClient(res);

  res.write("data: Connected\n\n");
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000.");
});

