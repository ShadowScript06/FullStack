import { subscriberClient } from "./subscriber";



export async function startSubscriber() {
  console.log("Subscriber started, listening to posts_notifications channel");

  await subscriberClient.subscribe("posts_notifications", (message: string) => {
    const post = JSON.parse(message);
    console.log("Received new post:", post.title, "| ID:", post.postId, "| Created At:", new Date(post.createdAt).toLocaleTimeString());
  });
}


