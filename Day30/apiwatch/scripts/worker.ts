import cron from "node-cron";
import axios from "axios";


import {prisma} from "../app/lib/db"

// Run every minute
cron.schedule("* * * * *", async () => {
  console.log("Cron job started at", new Date().toISOString());

  try {
    const endpoints = await prisma.endpoint.findMany();
    console.log(`Fetched ${endpoints.length} endpoints`);

    for (const ep of endpoints) {
      try {
        const start = Date.now();
        const res = await axios.get(ep.url, { timeout: 5000 });
        const duration = Date.now() - start;
        const isDown = res.status !== 200;

        // Check if a check already exists for this endpoint (latest one)
        const latestCheck = await prisma.check.findFirst({
          where: { endpointId: ep.id },
          orderBy: { createdAt: "desc" },
        });

        if (latestCheck) {
          // Update existing check
          await prisma.check.update({
            where: { id: latestCheck.id },
            data: {
              status: res.status,
              responseMs: duration,
              createdAt: new Date(),
            },
          });
        } else {
          // Create new check
          await prisma.check.create({
            data: {
              endpointId: ep.id,
              status: res.status,
              responseMs: duration,
            },
          });
        }

        // Update endpoint status
        await prisma.endpoint.update({
          where: { id: ep.id },
          data: { isDown },
        });

        console.log(`✅ Checked ${ep.name}: ${res.status} in ${duration}ms`);
      } catch (err: unknown) {
        console.error(`❌ Failed to check ${ep.name}:`, err);

        // Handle failed request: update existing check if exists
        const latestCheck = await prisma.check.findFirst({
          where: { endpointId: ep.id },
          orderBy: { createdAt: "desc" },
        });

        if (latestCheck) {
          await prisma.check.update({
            where: { id: latestCheck.id },
            data: {
              status: 0,
              responseMs: 0,
              createdAt: new Date(),
            },
          });
        } else {
          await prisma.check.create({
            data: {
              endpointId: ep.id,
              status: 0,
              responseMs: 0,
            },
          });
        }

        await prisma.endpoint.update({
          where: { id: ep.id },
          data: { isDown: true },
        });
      }
    }
  } catch (err) {
    console.error("Cron job failed:", err);
  }
});