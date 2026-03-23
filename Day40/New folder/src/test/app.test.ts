import request from "supertest";
import { describe, it, expect } from "vitest";
import {app} from "../app";

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello CI/CD 🚀");
  });
});
