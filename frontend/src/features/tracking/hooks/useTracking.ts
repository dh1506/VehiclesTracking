import { useQuery } from '@tanstack/react-query';
import { getTrackingHistory, getAlerts, type TrackingHistoryFilters, type TrackingAlertsFilters } from '../../../services/tracking.service';

export function useTrackingHistory(filters?: TrackingHistoryFilters, enabled = true) {
  return useQuery({
    queryKey: ['trackingHistory', filters],
    queryFn: () => getTrackingHistory(filters),
    enabled,
  });
}

export function useTrackingAlerts(filters?: TrackingAlertsFilters, enabled = true) {
  return useQuery({
    queryKey: ['trackingAlerts', filters],
    queryFn: () => getAlerts(filters),
    enabled,
  });
}
