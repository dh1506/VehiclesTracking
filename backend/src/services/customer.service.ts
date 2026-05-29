import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import type { CreateCustomerInput, UpdateCustomerInput } from '../schemas/customer.schema.js';

const cleanData = <T extends object>(obj: T): T => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  ) as T;
};

export const getAllCustomers = async (filters: { search?: string }) => {
  const where: any = {};
  if (filters.search) {
    where.OR = [
      { fullName: { contains: filters.search } },
      { phone: { contains: filters.search } },
    ];
  }
  return prisma.customer.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
};

export const getCustomerById = async (customerId: number) => {
  const customer = await prisma.customer.findUnique({ where: { customerId } });
  if (!customer) throw new AppError('Khách hàng không tồn tại', 404, 'CUSTOMER_NOT_FOUND');
  return customer;
};

export const createCustomer = async (data: CreateCustomerInput) => {
  return prisma.customer.create({
    data: {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || null,
      identityNumber: data.identityNumber || null,
      address: data.address || null,
    },
  });
};

export const updateCustomer = async (
  customerId: number,
  data: UpdateCustomerInput
) => {
  await getCustomerById(customerId);

  return prisma.customer.update({
    where: { customerId },
    data: {
      ...(data.fullName !== undefined && { fullName: data.fullName }),
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.email !== undefined && {
        email: data.email || null,
      }),
      ...(data.identityNumber !== undefined && {
        identityNumber: data.identityNumber || null,
      }),
      ...(data.address !== undefined && {
        address: data.address || null,
      }),
    },
  });
};

export const deleteCustomer = async (customerId: number) => {
  await getCustomerById(customerId);
  return prisma.customer.delete({ where: { customerId } });
};