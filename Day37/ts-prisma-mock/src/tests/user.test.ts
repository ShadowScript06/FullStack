import { vi } from "vitest";

// mock BEFORE importing app
vi.mock("../prisma/client", () => {
  return {
    prisma: {
      user: {
        findUnique: vi.fn(),
      },
    },
  };
});

import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../app";
import { prisma } from "../prisma/client";

describe("GET /users/:id", () => {
  it("should return user", async () => {
    (prisma.user.findUnique as any).mockResolvedValue({
      id: "123",
      name: "Prajwal",
      email: "test@test.com",
    });

    const res = await request(app).get("/users/123");

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Prajwal");
  });
});