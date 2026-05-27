import { z } from 'zod'

// Schema Zod cho vehicle, dùng trong forms và validate client
export const vehicleSchema = z.object({
  plateNumber: z.string().min(1, { message: 'Biển số bắt buộc' }),
  vehicleName: z.string().optional(),
  vehicleType: z.string().min(1, { message: 'Loại phương tiện bắt buộc' }),
})

export type VehicleFormValues = z.infer<typeof vehicleSchema>

export default vehicleSchema
