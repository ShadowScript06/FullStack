// test/user.test.ts
import { describe, test, expect, vi } from "vitest";
import request from "supertest";
import app from "../app.js";

// 🔥 MOCK MongoDB Model
vi.mock("../models/user.model", () => ({
  User: {
    findById: vi.fn(),
  },
}));

// import AFTER mock
import { User } from "../models/user.model";

describe("GET /users/:id", () => {
  test("should return user", async () => {
    (User.findById as any).mockResolvedValue({
      _id: "123",
      name: "Prajwal",
    });

    const res = await request(app).get("/users/123");

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Prajwal");
  });

  test("should return 404 if not found", async () => {
    (User.findById as any).mockResolvedValue(null);

    const res = await request(app).get("/users/123");

    expect(res.statusCode).toBe(404);
  });
});