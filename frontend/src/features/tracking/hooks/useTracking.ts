import { useQuery } from '@tanstack/react-query';
import { getTrackingHistory, getAlerts, type TrackingHistoryFilters, type TrackingAlertsFilters } from '../../../services/tracking.service';

export function useTrackingHistory(filters?: TrackingHistoryFilters, enabled = true) {
  return useQuery({
    queryKey: ['trackingHistory', filters],
    queryFn: () => getTrackingHistory(filters),
    enabled,
    refetchInterval: 5000,
    staleTime: 0, // Buộc React Query luôn lấy dữ liệu mới từ server khi poll
  });
}

export function useTrackingAlerts(filters?: TrackingAlertsFilters, enabled = true) {
  return useQuery({
    queryKey: ['trackingAlerts', filters],
    queryFn: () => getAlerts(filters),
    enabled,
    refetchInterval: 5000, // Tự động cập nhật các sự cố cảnh báo mỗi 1 phút (60 giây)
    staleTime: 0, // Buộc React Query luôn lấy dữ liệu mới từ server khi poll
  });
}