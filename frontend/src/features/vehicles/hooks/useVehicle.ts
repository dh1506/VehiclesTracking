import { useQuery } from '@tanstack/react-query'
import { getVehicle } from '../../../services/vehicle.service'

export function useVehicle(id?: number) {
  return useQuery({
    queryKey: ['vehicle', id],
    queryFn: () => (id ? getVehicle(id) : Promise.resolve(null as any)),
    enabled: !!id,
  })
}
