import { createClient, RedisClientType } from "redis";
const dotenv = require("dotenv");

const REDIS_URL = process.env.REDIS_URL;

// GENERAL CLIENT
let generalRedisClient: ReturnType<typeof createClient> | null = null;
let generalConnectingPromise: Promise<ReturnType<typeof createClient>> | null = null;

export async function getGeneralRedisClient(): Promise<ReturnType<typeof createClient>> {
  if (generalRedisClient) return generalRedisClient;

  if (generalConnectingPromise) return generalConnectingPromise;

  generalConnectingPromise = (async () => {
    try {
      const client = createClient({ url: REDIS_URL });

      client.on("error", (error) => {
        console.error("❌ Redis General Error:", error);
      });

      await client.connect();

      console.log("✅ Redis General Client Connected");

      generalRedisClient = client;
      return client;
    } catch (error) {
      generalConnectingPromise = null;
      throw error;
    }
  })();

  return generalConnectingPromise;
}





// QUEUE CLIENT BLOCKING BLPOP
let queueRedisClient: ReturnType<typeof createClient> | null = null;
let queueConnectingPromise: Promise<ReturnType<typeof createClient>> |null=null;

export async function getQueueRedisClient(): Promise<ReturnType<typeof createClient>> {
  if (queueRedisClient) return queueRedisClient;

  if (queueConnectingPromise) return queueConnectingPromise;

  queueConnectingPromise = (async () => {
    try {
      const client = createClient({ url: REDIS_URL });

      client.on("error", (error) => {
        console.error("❌ Redis Queue Error:", error);
      });

      await client.connect();

      console.log("✅ Redis Queue Client Connected");

      queueRedisClient = client;
      return client;
    } catch (error) {
      queueConnectingPromise = null;
      throw error;
    }
  })();

  return queueConnectingPromise;
}



// PUB CLIENT
let pubRedisClient: ReturnType<typeof createClient> | null = null;
let pubConnectingPromise: Promise<ReturnType<typeof createClient>> |null=null;

export async function getPubRedisClient(): Promise<ReturnType<typeof createClient>> {
  if (pubRedisClient) return pubRedisClient;

  if (pubConnectingPromise) return pubConnectingPromise;

  pubConnectingPromise = (async () => {
    try {
      const client = createClient({ url: REDIS_URL });

      client.on("error", (error) => {
        console.error("❌ Redis PUB Error:", error);
      });

      await client.connect();

      console.log("✅ Redis PUB Client Connected");

      pubRedisClient = client;
      return client;
    } catch (error) {
      pubConnectingPromise = null;
      throw error;
    }
  })();

  return pubConnectingPromise;
}

let subRedisClient: ReturnType<typeof createClient>| null = null;
let subConnectingPromise: Promise<ReturnType<typeof createClient>> |null=null;

export async function getSubRedisClient(): Promise<ReturnType<typeof createClient>> {
  if (subRedisClient) return subRedisClient;

  if (subConnectingPromise) return subConnectingPromise;

  subConnectingPromise = (async () => {
    try {
      const client = createClient({ url: REDIS_URL });

      client.on("error", (error) => {
        console.error("❌ Redis SUB Error:", error);
      });

      await client.connect();

      console.log("✅ Redis SUB Client Connected");

      subRedisClient = client;
      return client;
    } catch (error) {
      subConnectingPromise = null;
      throw error;
    }
  })();

  return subConnectingPromise;
}






let rateRedisClient: ReturnType<typeof createClient>| null = null;
let rateConnectingPromise: Promise<ReturnType<typeof createClient>> |null=null;

export async function getRateRedisClient(): Promise<ReturnType<typeof createClient>> {
  if (rateRedisClient) return rateRedisClient;

  if (rateConnectingPromise) return rateConnectingPromise;

  rateConnectingPromise = (async () => {
    try {
      const client = createClient({ url: REDIS_URL });

      client.on("error", (error) => {
        console.error("❌ Redis SUB Error:", error);
      });

      await client.connect();

      console.log("✅ Redis SUB Client Connected");

      rateRedisClient = client;
      return client;
    } catch (error) {
      rateConnectingPromise = null;
      throw error;
    }
  })();

  return rateConnectingPromise;
}