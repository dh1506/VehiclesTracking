-- CreateTable
CREATE TABLE `roles` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `roles_role_name_key`(`role_name`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `role_id` INTEGER NOT NULL,
    `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `geofences` (
    `geofence_id` INTEGER NOT NULL AUTO_INCREMENT,
    `geofence_name` VARCHAR(100) NOT NULL,
    `geofence_type` ENUM('circle', 'polygon') NOT NULL,
    `center_lat` DECIMAL(10, 7) NULL,
    `center_lon` DECIMAL(10, 7) NULL,
    `radius_meter` DECIMAL(10, 2) NULL,
    `polygon_data` JSON NULL,
    `created_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`geofence_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicle_geofence_logs` (
    `geofence_log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `geofence_id` INTEGER NOT NULL,
    `event_type` ENUM('enter', 'exit') NOT NULL,
    `latitude` DECIMAL(10, 7) NOT NULL,
    `longitude` DECIMAL(10, 7) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `vehicle_geofence_logs_vehicle_id_created_at_idx`(`vehicle_id`, `created_at`),
    PRIMARY KEY (`geofence_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maintenance_logs` (
    `maintenance_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `maintenance_type` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `maintenance_date` DATE NOT NULL,
    `current_km` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `cost` DECIMAL(12, 2) NULL,
    `created_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`maintenance_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(150) NULL,
    `identity_number` VARCHAR(30) NULL,
    `address` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rentals` (
    `rental_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `rented_by` INTEGER NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NULL,
    `start_km` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `end_km` DECIMAL(10, 2) NULL,
    `rental_status` ENUM('active', 'completed') NOT NULL DEFAULT 'active',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`rental_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `monthly_reports` (
    `report_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `report_month` DATE NOT NULL,
    `total_km` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `total_alerts` INTEGER NOT NULL DEFAULT 0,
    `total_impacts` INTEGER NOT NULL DEFAULT 0,
    `total_out_of_zone` INTEGER NOT NULL DEFAULT 0,
    `generated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `monthly_reports_vehicle_id_report_month_key`(`vehicle_id`, `report_month`),
    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gps_logs` (
    `gps_log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `rental_id` INTEGER NULL,
    `latitude` DECIMAL(10, 7) NOT NULL,
    `longitude` DECIMAL(10, 7) NOT NULL,
    `speed_kmh` DECIMAL(5, 2) NOT NULL DEFAULT 0,
    `gps_status` ENUM('online', 'offline') NOT NULL DEFAULT 'online',
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `gps_logs_vehicle_id_recorded_at_idx`(`vehicle_id`, `recorded_at`),
    INDEX `gps_logs_rental_id_idx`(`rental_id`),
    PRIMARY KEY (`gps_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicle_alerts` (
    `alert_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `rental_id` INTEGER NULL,
    `alert_type` ENUM('accident', 'impact', 'out_of_zone', 'disconnected') NOT NULL,
    `latitude` DECIMAL(10, 7) NULL,
    `longitude` DECIMAL(10, 7) NULL,
    `alert_message` TEXT NULL,
    `is_acknowledged` BOOLEAN NOT NULL DEFAULT false,
    `acknowledged_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `vehicle_alerts_vehicle_id_created_at_idx`(`vehicle_id`, `created_at`),
    PRIMARY KEY (`alert_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicles` (
    `vehicle_id` INTEGER NOT NULL AUTO_INCREMENT,
    `plate_number` VARCHAR(20) NOT NULL,
    `vehicle_name` VARCHAR(100) NOT NULL,
    `vehicle_type` VARCHAR(50) NOT NULL,
    `brand` VARCHAR(50) NULL,
    `model` VARCHAR(50) NULL,
    `color` VARCHAR(30) NULL,
    `year_manufactured` INTEGER NULL,
    `status` ENUM('available', 'rented', 'maintenance') NOT NULL DEFAULT 'available',
    `total_km` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `vehicles_plate_number_key`(`plate_number`),
    PRIMARY KEY (`vehicle_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iot_devices` (
    `device_id` INTEGER NOT NULL AUTO_INCREMENT,
    `serial_number` VARCHAR(100) NOT NULL,
    `mqtt_topic` VARCHAR(200) NOT NULL,
    `sim_number` VARCHAR(20) NULL,
    `firmware_version` VARCHAR(50) NULL,
    `last_online_at` DATETIME(3) NULL,
    `status` ENUM('online', 'offline') NOT NULL DEFAULT 'offline',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `iot_devices_serial_number_key`(`serial_number`),
    PRIMARY KEY (`device_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicle_device_assignments` (
    `assignment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicle_id` INTEGER NOT NULL,
    `device_id` INTEGER NOT NULL,
    `assigned_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `removed_at` DATETIME(3) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`assignment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `geofences` ADD CONSTRAINT `geofences_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_geofence_logs` ADD CONSTRAINT `vehicle_geofence_logs_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_geofence_logs` ADD CONSTRAINT `vehicle_geofence_logs_geofence_id_fkey` FOREIGN KEY (`geofence_id`) REFERENCES `geofences`(`geofence_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_logs` ADD CONSTRAINT `maintenance_logs_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_logs` ADD CONSTRAINT `maintenance_logs_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentals` ADD CONSTRAINT `rentals_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentals` ADD CONSTRAINT `rentals_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentals` ADD CONSTRAINT `rentals_rented_by_fkey` FOREIGN KEY (`rented_by`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `monthly_reports` ADD CONSTRAINT `monthly_reports_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gps_logs` ADD CONSTRAINT `gps_logs_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gps_logs` ADD CONSTRAINT `gps_logs_rental_id_fkey` FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`rental_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_alerts` ADD CONSTRAINT `vehicle_alerts_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_alerts` ADD CONSTRAINT `vehicle_alerts_rental_id_fkey` FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`rental_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_device_assignments` ADD CONSTRAINT `vehicle_device_assignments_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicle_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_device_assignments` ADD CONSTRAINT `vehicle_device_assignments_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `iot_devices`(`device_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
