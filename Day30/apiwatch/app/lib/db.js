"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
var adapter_pg_1 = require("@prisma/adapter-pg");
var client_1 = require("@/app/generated/prisma/client");
var adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL
});
var prisma = new client_1.PrismaClient({ adapter: adapter });
exports.prisma = prisma;
