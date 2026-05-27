import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resolveAlert } from '../../../services/tracking.service';

export function useResolveAlert() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => resolveAlert(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['trackingAlerts'] });
      qc.invalidateQueries({ queryKey: ['trackingHistory'] });
    },
  });
}
