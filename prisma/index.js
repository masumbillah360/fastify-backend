const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ["info", "error"],
});

module.exports = prisma;
