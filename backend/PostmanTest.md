Postman Test Plan for VehicleTracking Backend

Overview
- Base URL: http://localhost:3000 (API base path: /api)
- Use `Authorization: Bearer <token>` for protected endpoints.
- Create and keep tokens for Admin, Staff, Technician, and a normal user for role tests.

1. AUTH

1.1 Login - valid credentials
- Method: POST
- URL: /auth/login
- Body (JSON): { "email": "admin@system.com", "password": "admin123" }
- Expected: 200
- Response assertions: contains `accessToken` (string) and `user` object with `userId`, `email`, `roleName`.

1.2 Login - invalid credentials
- Method: POST
- URL: /auth/login
- Body: wrong password
- Expected: 401
- Assertions: error message, no token

1.3 Get current user (me) - without token
- Method: GET
- URL: /auth/me
- Expected: 401

1.4 Get current user (me) - with token
- Method: GET
- URL: /auth/me
- Header: Authorization: Bearer <admin-token>
- Expected: 200
- Assertions: user fields match token


2. USERS (Admin-only)

2.1 Get all users
- Method: GET
- URL: /users
- Auth: Admin
- Expected: 200, array of users
- Forbidden test: call with Staff -> 403

2.2 Get user by id
- Method: GET
- URL: /users/:id
- Auth: Admin
- Expected: 200
- Not found: id=999999 -> 404

2.3 Create user
- Method: POST
- URL: /users
- Auth: Admin
- Body: { "fullName":"Test User", "email":"test@example.com", "password":"pass1234", "phone":"0123456789", "roleId": <roleId> }
- Expected: 201
- Duplicate email -> 409

2.4 Update user
- Method: PUT
- URL: /users/:id
- Auth: Admin
- Body: partial fields
- Expected: 200

2.5 Delete user
- Method: DELETE
- URL: /users/:id
- Auth: Admin
- Expected: 200 or 204


3. VEHICLES

3.1 List vehicles
- Method: GET
- URL: /vehicles
- Auth: any authenticated user
- Expected: 200

3.2 Get vehicle
- Method: GET
- URL: /vehicles/:id
- Expected: 200 or 404

3.3 Create vehicle
- Method: POST
- URL: /vehicles
- Auth: Admin or Staff
- Body: { "plateNumber":"59A-999.99","vehicleName":"Test Bike","vehicleType":"motorbike" }
- Expected: 201
- Duplicate plate -> 409

3.4 Update vehicle
- Method: PUT
- URL: /vehicles/:id
- Auth: Admin or Staff
- Expected: 200

3.5 Delete vehicle
- Method: DELETE
- URL: /vehicles/:id
- Auth: Admin
- Expected: 200/204

3.6 Assign device to vehicle
- Method: POST
- URL: /vehicles/:id/assign-device
- Auth: Admin or Technician
- Body: { "deviceId": <numeric deviceId> }
- Expected: 200
- Edge: assign non-existing device -> 404

3.7 Unassign device
- Method: DELETE
- URL: /vehicles/:id/unassign-device
- Auth: Admin or Technician
- Body: { "deviceId": <numeric> } if required
- Expected: 200


4. IOT DEVICES

4.1 List devices
- Method: GET
- URL: /iot-devices
- Auth: Admin/Technician/Staff
- Expected: 200

4.2 Get device
- Method: GET
- URL: /iot-devices/:id
- Auth: Admin/Technician
- Expected: 200

4.3 Create device
- Method: POST
- URL: /iot-devices
- Auth: Admin/Technician
- Body: { "serialNumber":"DEV001","mqttTopic":"","simNumber":"0896202919" }
- Expected: 201
- Duplicate serial -> 409

4.4 Update device
- Method: PUT
- URL: /iot-devices/:id
- Auth: Admin/Technician
- Expected: 200

4.5 Delete device
- Method: DELETE
- URL: /iot-devices/:id
- Auth: Admin
- Expected: 200/204


5. GEOFENCES

5.1 List geofences
- Method: GET
- URL: /geofences
- Auth: authenticated
- Expected: 200

5.2 Create geofence
- Method: POST
- URL: /geofences
- Auth: Admin/Staff
- Body sample: { "name":"Home","type":"circle","center":{"lat":10.1,"lon":106.1},"radius":2600 }
- Expected: 201

5.3 Update geofence
- Method: PUT
- URL: /geofences/:id
- Auth: Admin/Staff
- Expected: 200

5.4 Delete geofence
- Method: DELETE
- URL: /geofences/:id
- Auth: Admin/Staff
- Expected: 200/204


6. TRACKING

6.1 Get tracking history
- Method: GET
- URL: /tracking/history?vehicleId=<id>&startTime=<ISO>&endTime=<ISO>&limit=50
- Auth: authenticated
- Expected: 200, array of gps logs sorted by recordedAt
- Validate pagination and date filtering

6.2 Get alerts
- Method: GET
- URL: /tracking/alerts?vehicleId=<id>&from=&to=
- Auth: authenticated
- Expected: 200

*6.3 Resolve alert
- Method: PUT
- URL: /tracking/alerts/:id/resolve
- Auth: Admin/Staff
- Body: { "resolvedBy": <userId> }
- Expected: 200 and `resolvedAt` set


7. RENTALS

7.1 Get rentals
- Method: GET
- URL: /rentals
- Auth: Admin/Staff
- Expected: 200

7.2 Create rental
- Method: POST
- URL: /rentals
- Auth: Admin/Staff
- Body: { "vehicleId": <id>, "renterName": "A", "startDate":"ISO","endDate":"ISO" }
- Expected: 201

7.3 Update rental
- Method: PUT
- URL: /rentals/:id
- Expected: 200


8. MAINTENANCE

8.1 List maintenances
- Method: GET
- URL: /maintenances
- Auth: Admin/Staff/Technician
- Expected: 200

8.2 Create maintenance
- Method: POST
- URL: /maintenances
- Auth: Admin/Technician
- Body: { "vehicleId":<id>,"description":"...","cost":100 }
- Expected: 201

8.3 Update maintenance
- Method: PUT
- URL: /maintenances/:id
- Auth: Admin/Technician
- Expected: 200

8.4 Delete maintenance
- Method: DELETE
- URL: /maintenances/:id
- Auth: Admin
- Expected: 200/204


9. REPORTS

9.1 Dashboard stats
- Method: GET
- URL: /reports/dashboard
- Auth: Admin/Staff
- Expected: 200 with statistics (vehicles count, active rentals, alerts count, etc.)

9.2 Rental revenue
- Method: GET
- URL: /reports/revenue?from=<ISO>&to=<ISO>
- Auth: Admin/Staff
- Expected: 200 with grouped revenue data


10. VALIDATION & EDGE CASES

10.1 Schema validation errors
- For any POST/PUT, send malformed body -> Expect 400 and validation error details

10.2 Unauthorized access
- Call protected endpoints without token -> 401

10.3 Forbidden access
- Call Admin-only endpoints with Staff token -> 403

10.4 Not found
- Use non-existing IDs -> 404

10.5 Conflict
- Create resources with duplicate unique fields (email, plateNumber, serialNumber) -> 409

10.6 Server error
- Simulate internal error (malformed DB) -> 500 and helpful error body


11. MQTT INTEGRATION (manual tests)
- Postman cannot publish MQTT. Use a MQTT client (MQTT.fx, mosquitto_pub, MQTT Explorer) to publish payloads.
- Broker: mqtt://broker.emqx.io:1883 (as used in dev)

11.1 Publish location payload
- Topic: gps/location
- Payload example:
  { "serialNumber":"DEV001", "lat":10.123456, "lon":106.123456, "dist":12.3, "hLat":10.12, "hLon":106.12, "rad":2600 }
- Expected after publish:
  - DB: new `gps_logs` entry for the assigned vehicle
  - GET /tracking/history?vehicleId=<id> returns the new point

11.2 Publish alert payload (ACCIDENT)
- Topic: gps/alert
- Payload: { "serialNumber":"DEV001","alert":"ACCIDENT","lat":...,"lon":... }
- Expected: new `vehicle_alerts` row and GET /tracking/alerts returns it

11.3 Publish ping payload
- Topic: gps/ping
- Payload: { "serialNumber":"DEV001","status":"online" }
- Expected: `iot_devices.last_online_at` updated and GET /iot-devices shows status online


12. SCRIPTS & FOLDER
- Save these cases into a Postman collection (recommended) and create environment variables:
  - baseUrl = http://localhost:3000
  - adminToken, staffToken, techToken, userToken

13. SAMPLE TESTS TO ADD IN POSTMAN (Assertions)
- Response code is expected
- Response JSON schema includes required fields (id, createdAt)
- DB side-checks (when possible): after POST, call GET to confirm resource exists
- For auth: token is a non-empty string and decoded payload includes `email`


Notes
- Use seeded admin account: admin@system.com / admin123
- Use seeded test device: serialNumber = DEV001 (created by seed)
- If Arduino will send `plateNumber` instead of serial, we can extend `getVehicleId` to accept `plateNumber` — consider that for production.

End of PostmanTest
