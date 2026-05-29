import { prisma } from '../src/configs/db.config.js';
import bcrypt from 'bcrypt';

async function main() {
  console.log('Seeding database...');

  // 1. Tạo Roles
  const roles = [
    { roleName: 'Admin' },
    { roleName: 'Staff' },
    { roleName: 'Technician' },
  ];

  for (const r of roles) {
    await prisma.role.upsert({
      where: { roleName: r.roleName },
      update: {},
      create: r,
    });
  }
  console.log('✅ Roles seeded');

  // 2. Tạo Admin User mặc định
  const adminRole = await prisma.role.findUnique({ where: { roleName: 'Admin' } });
  
  if (adminRole) {
    const passwordHash = await bcrypt.hash('quan123456@', 10);
    await prisma.user.upsert({
      where: { email: 'quan@gmail.com' },
      update: {},
      create: {
        fullName: 'Đỗ Anh Quân',
        email: 'quan@gmail.com',
        passwordHash,
        phone: '0999999999',
        roleId: adminRole.roleId,
        status: 'active',
      },
    });
    console.log('✅ Admin user seeded (quan@gmail.com / quan123456@)');
  }

  // 3. Tạo vehicle và iot device để test MQTT
  const plate = '59A-999.99';
  const vehicle = await prisma.vehicle.upsert({
    where: { plateNumber: plate },
    update: {},
    create: {
      plateNumber: plate,
      vehicleName: 'Test Bike',
      vehicleType: 'motorbike',
      brand: 'Generic',
      model: 'ModelX',
    },
  });

  const serial = 'DEV001';
  const sim = '0896202919';
  const device = await prisma.iotDevice.upsert({
    where: { serialNumber: serial },
    update: { status: 'online', simNumber: sim },
    create: {
      serialNumber: serial,
      mqttTopic: '',
      simNumber: sim,
      status: 'online'
    },
  });

  // Link device và vehicle
  const existingAssign = await prisma.vehicleDeviceAssignment.findFirst({
    where: { vehicleId: vehicle.vehicleId, deviceId: device.deviceId }
  });
  if (!existingAssign) {
    await prisma.vehicleDeviceAssignment.create({
      data: {
        vehicleId: vehicle.vehicleId,
        deviceId: device.deviceId,
        isActive: true
      }
    });
  }
  console.log(`✅ Seeded vehicle ${plate} and device ${serial}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
