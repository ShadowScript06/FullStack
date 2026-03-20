// test/app.test.ts
import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("API Tests", () => {
  test("GET /test", async () => {
    const res = await request(app).get("/test");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("ok");
  });

  test("POST /book success", async () => {
    const res = await request(app)
      .post("/book")
      .send({ tickets: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body.remaining).toBe(4);
  });

  test("POST /book fail", async () => {
    const res = await request(app)
      .post("/book")
      .send({ tickets: 0 });

    expect(res.statusCode).toBe(400);
  });
});