import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { env } from './env.config.js';

let io: Server;

export const initSocket = (server: HttpServer) => {
  io = new Server(server, {
    cors: {
      origin: env.CLIENT_ORIGIN,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`🔌 Client connected to Socket.IO: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔌 Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIo = () => {
  if (!io) {
    throw new Error('Socket.IO chưa được khởi tạo!');
  }
  return io;
};

// Hàm helper để phát sóng các sự kiện
export const emitVehicleLocation = (vehicleId: number, data: any) => {
  if (io) io.emit(`vehicle:${vehicleId}:location`, data);
  if (io) io.emit('location:update', { vehicleId, ...data });
};

export const emitVehicleAlert = (vehicleId: number, data: any) => {
  if (io) io.emit(`vehicle:${vehicleId}:alert`, data);
  if (io) io.emit('alert:new', { vehicleId, ...data });
};

export const emitVehicleStatus = (vehicleId: number, status: 'online' | 'offline') => {
  if (io) io.emit(`vehicle:${vehicleId}:status`, { status });
  if (io) io.emit('status:update', { vehicleId, status });
};
