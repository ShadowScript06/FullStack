import { createClient } from "redis";

export const subscriberClient = createClient();

subscriberClient.on("error", (err) => console.log("Subscriber Redis Error:", err));

