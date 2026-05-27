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
    _sum: { /* rentalFee: true */ },
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return {
    totalRevenue: 0,
  };
};
