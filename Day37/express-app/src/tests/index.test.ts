// test/app.test.js
import request from "supertest";

import app from "../index";


describe("GET /test", () => {
  test("should return ok message", async () => {
    const res = await request(app).get("/test");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("ok");
  });
});