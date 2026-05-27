import { useQuery } from '@tanstack/react-query'
import { getVehicles } from '../../../services/vehicle.service'

export function useVehicles() {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  })
}
