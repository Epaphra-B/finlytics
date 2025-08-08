import { PrismaClient } from "../generated/prisma-client/client";
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate());

const globalForPrisma = globalThis as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


export const db = prisma;