import { useQuery } from '@tanstack/react-query';
import { getGeofence } from '../../../services/geofence.service';

export function useGeofence(id?: number) {
  return useQuery({
    queryKey: ['geofence', id],
    queryFn: () => (id ? getGeofence(id) : Promise.resolve(null as any)),
    enabled: !!id,
  });
}
