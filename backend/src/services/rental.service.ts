import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import type { CreateRentalInput, UpdateRentalInput } from '../schemas/rental.schema.js';

export const getAllRentals = async (filters: { status?: string; vehicleId?: number; customerId?: number }) => {
  const where: any = {};
  if (filters.status) where.status = filters.status;
  if (filters.vehicleId) where.vehicleId = filters.vehicleId;
  if (filters.customerId) where.customerId = filters.customerId;

  // map status -> rentalStatus (Prisma field)
  if (where.status !== undefined) {
    where.rentalStatus = where.status;
    delete where.status;
  }

  return prisma.rental.findMany({
    where,
    include: {
      vehicle: { select: { plateNumber: true, vehicleName: true } },
      customer: { select: { fullName: true, phone: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const getRentalById = async (rentalId: number) => {
  const rental = await prisma.rental.findUnique({
    where: { rentalId },
    include: {
      vehicle: { select: { plateNumber: true, vehicleName: true } },
      customer: { select: { fullName: true, phone: true } },
    },
  });

  if (!rental) {
    throw new AppError('Không tìm thấy hợp đồng', 404, 'RENTAL_NOT_FOUND');
  }

  return rental;
};

export const createRental = async (data: CreateRentalInput, createdBy: number) => {
  const vehicle = await prisma.vehicle.findUnique({ where: { vehicleId: data.vehicleId } });
  if (!vehicle) throw new AppError('Không tìm thấy xe', 404, 'VEHICLE_NOT_FOUND');
  if (vehicle.status !== 'available') {
    throw new AppError('Xe đang không sẵn sàng để thuê', 400, 'VEHICLE_UNAVAILABLE');
  }

  const customer = await prisma.user.findUnique({ where: { userId: data.customerId } });
  if (!customer) throw new AppError('Không tìm thấy khách hàng', 404, 'CUSTOMER_NOT_FOUND');

  const createData: any = {
    vehicleId: data.vehicleId,
    customerId: data.customerId,
    rentedBy: createdBy,
    startTime: data.startTime ? new Date(data.startTime) : new Date(),
    rentalStatus: 'active',
    rentalFee: data.rentalFee !== undefined ? Number(data.rentalFee) : 0
  };

  const contract = await prisma.rental.create({ data: createData });

  // Cập nhật trạng thái xe thành rented
  await prisma.vehicle.update({
    where: { vehicleId: data.vehicleId },
    data: { status: 'rented' },
  });

  return contract;
};

export const updateRental = async (rentalId: number, data: UpdateRentalInput) => {
  const existing = await getRentalById(rentalId);

  const updateData: any = {};
  if (data.status !== undefined) updateData.rentalStatus = data.status;
  if (data.endTime !== undefined) updateData.endTime = new Date(data.endTime);
  if (data.rentalFee !== undefined) updateData.rentalFee = Number(data.rentalFee);

  const updated = await prisma.rental.update({ where: { rentalId }, data: updateData });

  // Nếu hợp đồng hoàn tất hoặc bị hủy, cập nhật trạng thái xe về available
  if (data.status === 'completed' || data.status === 'cancelled') {
    if (existing.rentalStatus === 'active') {
      await prisma.vehicle.update({
        where: { vehicleId: existing.vehicleId },
        data: { status: 'available' },
      });
    }
  }

  return updated;
};
