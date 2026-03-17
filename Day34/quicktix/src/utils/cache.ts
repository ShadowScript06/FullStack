import { getGeneralRedisClient } from "../config/redis";




export async function setTicketsLeft(eventId: string, ticketsLeft: number) {
  const redisClient = await getGeneralRedisClient();
  await redisClient.set(`ticketsLeft:${eventId}`, ticketsLeft.toString());
}

export async function getTicketsLeft(eventId: string) {
  const redisClient = await getGeneralRedisClient();
  const value = await redisClient.get(`ticketsLeft:${eventId}`);
  return Number(value);
}