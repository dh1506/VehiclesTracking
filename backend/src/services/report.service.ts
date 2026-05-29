// backend/src/services/report.service.ts
import { prisma } from '../configs/db.config.js';

export const getDashboardStats = async () => {
  const [totalVehicles, totalUsers, activeRentals, unresolvedAlerts] = await Promise.all([
    prisma.vehicle.count(),
    prisma.user.count(),
    prisma.rental.count({ where: { rentalStatus: 'active' } }),
    prisma.vehicleAlert.count({ where: { isAcknowledged: false } }),
  ]);

  const vehicleStatusCounts = await prisma.vehicle.groupBy({
    by: ['status'],
    _count: { vehicleId: true },
  });

  return {
    totalVehicles,
    totalUsers,
    activeRentals,
    unresolvedAlerts,
    vehicleStatusCounts,
  };
};

export const getRentalRevenue = async (startDate: Date, endDate: Date) => {
  const result = await prisma.rental.aggregate({
    _sum: {
      rentalFee: true, // 1. MỞ COMMENT TRƯỜNG NÀY ĐỂ PRISMA TÍNH TỔNG DOANH THU
    },
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
      // (Tùy chọn) Chỉ tính doanh thu của các hợp đồng đang hoạt động hoặc đã hoàn thành
      rentalStatus: {
        in: ['active', 'completed']
      }
    },
  });

  return {
    // 2. TRẢ VỀ DOANH THU THỰC TẾ (Nếu kết quả null thì mặc định trả về 0)
    totalRevenue: Number(result._sum.rentalFee || 0), 
  };
};