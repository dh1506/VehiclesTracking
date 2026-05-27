import { z } from 'zod'

export const iotDeviceSchema = z.object({
  serialNumber: z.string().min(1, { message: 'Serial Number bắt buộc' }),
  mqttTopic: z.string().optional(),
  simNumber: z.string().optional(),
})

export type IotDeviceFormValues = z.infer<typeof iotDeviceSchema>

export default iotDeviceSchema
