import request from "supertest";
import { describe, it, beforeEach, expect } from "vitest";
import app from "../app";
import {prisma } from "../prisma/client"

describe("User API", () => {
 // Clean DB before each test
 beforeEach(async () => {
 await prisma.user.deleteMany();
 });

 
 it("should create a new user", async () => {
 const res = await request(app)
 .post("/users")
 .send({ name: "Alice", email: "alice@test.com" });
 expect(res.status).toBe(201);
 expect(res.body).toHaveProperty("id");
 expect(res.body.name).toBe("Alice");
 });


 it("should list all users", async () => {
 // Create a user first
 await prisma.user.create({ data: { name: "Bob", email: "bob@test.com" } });
 const res = await request(app).get("/users");
 expect(res.status).toBe(200);
 expect(res.body.length).toBe(1);
 expect(res.body[0].name).toBe("Bob");
 });
});
