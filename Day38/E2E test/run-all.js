const { spawn, execSync } = require("child_process");

const PROJECT = "test-env";
let serverProcess = null;

function run(cmd) {
  console.log(`\n👉 ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// simple wait (no db push ❌)
async function waitForDB() {
  console.log("⏳ Waiting for DB...");
  await wait(5000);
}

async function startServer() {
  console.log("\n🚀 Starting server...");

  serverProcess = spawn("npx", ["tsx", "src/app.ts"], {
    stdio: "inherit",
    shell: true,
  });

  // give server time to boot
  await wait(5000);
}

async function stopServer() {
  if (serverProcess) {
    console.log("\n🛑 Stopping server...");
    serverProcess.kill();
  }
}

(async () => {
  try {
    // 1. Start DB
    run(`docker compose -p ${PROJECT} up -d`);

    // 2. Wait for DB
    await waitForDB();

    // 3. Prisma setup (correct order)
    run("npx prisma generate");
    run("npx prisma migrate dev --name init");
    run("npx prisma migrate reset --force");

    // 4. Start backend
    await startServer();

    // 5. Run Cypress
    run("npx cypress run");

  } catch (err) {
    console.error("\n❌ Error:", err.message);
  } finally {
    // 6. Cleanup
    await stopServer();

    console.log("\n🧹 Cleaning up Docker...");
    try {
      run(`docker compose -p ${PROJECT} down`);
    } catch (e) {
      console.error("Failed to stop Docker");
    }

    console.log("\n✅ Done");
  }
})();