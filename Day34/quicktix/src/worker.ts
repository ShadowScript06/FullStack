import { startBookingWorker } from "./workers/worker.service";

startBookingWorker().catch((err)=>{
    console.log("Worker failed to start: ", err);
});

