import { useQuery } from '@tanstack/react-query';
import { getGeofences } from '../../../services/geofence.service';

export function useGeofences() {
  return useQuery({
    queryKey: ['geofences'],
    queryFn: () => getGeofences(),
  });
}
