-- AlterTable
ALTER TABLE `gps_logs` ADD COLUMN `distance_from_home` DECIMAL(10, 2) NULL,
    ADD COLUMN `home_latitude` DECIMAL(10, 7) NULL,
    ADD COLUMN `home_longitude` DECIMAL(10, 7) NULL;

-- AlterTable
ALTER TABLE `vehicle_alerts` ADD COLUMN `resolved_at` DATETIME(3) NULL;
