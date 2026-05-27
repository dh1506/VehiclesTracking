import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGeofence, updateGeofence, deleteGeofence } from '../../../services/geofence.service';
import type { CreateGeofenceInput, UpdateGeofenceInput } from '../../../services/geofence.service';

export function useCreateGeofence() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateGeofenceInput) => createGeofence(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['geofences'] }),
  });
}

export function useUpdateGeofence() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateGeofenceInput }) => updateGeofence(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['geofences'] });
      qc.invalidateQueries({ queryKey: ['geofence'] });
    },
  });
}

export function useDeleteGeofence() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteGeofence(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['geofences'] }),
  });
}
