// Cấu hình và validate biến môi trường

import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

// Schema validate biến môi trường bắt buộc
const envSchema = z.object({
  PORT: z.string().default('3000'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL là bắt buộc'),
  JWT_SECRET: z.string().min(10, 'JWT_SECRET phải có ít nhất 10 ký tự'),
  JWT_EXPIRES_IN: z.string().default('1d'),
  MQTT_BROKER_URL: z.string().default('mqtt://broker.emqx.io:1883'),
  SMTP_HOST: z.string().default('smtp.gmail.com'),
  SMTP_PORT: z.string().default('587'),
  SMTP_USER: z.string().default(''),
  SMTP_PASS: z.string().default(''),
  SMTP_FROM: z.string().default('VehicleTracking <noreply@example.com>'),
  CLIENT_ORIGIN: z.string().default('http://localhost:5173'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Parse và validate — throw lỗi rõ ràng nếu thiếu biến môi trường
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Lỗi cấu hình môi trường:');
  console.error(parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;
