import { useQuery } from '@tanstack/react-query'
import { getDevice } from '../../../services/iot-device.service'

export function useDevice(id?: number) {
  return useQuery({
    queryKey: ['iot-device', id],
    queryFn: () => (id ? getDevice(id) : Promise.resolve(null as any)),
    enabled: !!id,
  })
}
