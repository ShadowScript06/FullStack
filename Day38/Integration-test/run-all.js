import { execSync } from "child_process";

function run(cmd) {
  console.log(`\n👉 ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("Starting PostgreSQL via Docker...");
  run("docker-compose up -d");

  console.log("Waiting for the database to start...");
  await new Promise((res) => setTimeout(res, 5000));

  console.log("Generating Prisma client...");
  run("npx prisma generate");

  console.log("Running Prisma migration...");
  run("npx prisma migrate dev --name init");

  console.log("Running tests...");
  run("npm run test");

} catch (err) {
  console.error("❌ Error occurred:", err.message);
} finally {
  console.log("Bringing down Docker containers...");
  try {
    run("docker-compose down");
  } catch (e) {
    console.error("Failed to stop containers");
  }

  console.log("All done!");
}