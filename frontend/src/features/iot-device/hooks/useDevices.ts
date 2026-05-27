import { useQuery } from '@tanstack/react-query'
import { getDevices } from '../../../services/iot-device.service'

export function useDevices() {
  return useQuery({
    queryKey: ['iot-devices'],
    queryFn: () => getDevices(),
  })
}
