// Khởi tạo Prisma Client singleton — tránh tạo nhiều kết nối trong development

import { PrismaClient } from '../generated/index.js';
import { env } from './env.config.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const connectionString = (env.DATABASE_URL as string).replace('mysql://', 'mariadb://');
const adapter = new PrismaMariaDb(connectionString);

/**
 * Khởi tạo Prisma Client (Singleton pattern để tránh connection exhaustion)
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
