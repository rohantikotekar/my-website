import { PrismaClient } from "@prisma/client";

/**
 * Prisma client singleton.
 * In development, Next.js hot-reloading would otherwise create a new client
 * on every change and exhaust database connections, so we cache it on the
 * global object.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
