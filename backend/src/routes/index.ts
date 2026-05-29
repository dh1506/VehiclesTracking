import { Router } from 'express';
import authRoute from './auth.route.js';
import vehicleRoute from './vehicle.route.js';
import iotDeviceRoute from './iot-device.route.js';
import userRoute from './user.route.js';
import geofenceRoute from './geofence.route.js';
import trackingRoute from './tracking.route.js';
import rentalRoute from './rental.route.js';
import maintenanceRoute from './maintenance.route.js';
import reportRoute from './report.route.js';
import customerRoute from './customer.route.js';

const router = Router();

router.use('/auth', authRoute);
router.use('/vehicles', vehicleRoute);
router.use('/iot-devices', iotDeviceRoute);
router.use('/users', userRoute);
router.use('/geofences', geofenceRoute);
router.use('/tracking', trackingRoute);
router.use('/rentals', rentalRoute);
router.use('/maintenances', maintenanceRoute);
router.use('/reports', reportRoute);
router.use('/customers', customerRoute);


export default router;
