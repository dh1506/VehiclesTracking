import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { env } from "./configs/env.config.js";
import routes from "./routes/index.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api", routes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint không tồn tại" });
});

import { initSocket } from './configs/socket.config.js';
import { initMqtt } from './configs/mqtt.config.js';

// Global Error Handler
app.use(globalErrorHandler);

const server = app.listen(env.PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${env.PORT}`);
});

// Khởi tạo Socket.IO
initSocket(server);

// Khởi tạo MQTT
initMqtt();
