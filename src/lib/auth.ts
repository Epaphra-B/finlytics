import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./prisma"; // Adjust the import path as necessary

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "sqlite", // or "postgresql", "mysql", etc.
  }),
});