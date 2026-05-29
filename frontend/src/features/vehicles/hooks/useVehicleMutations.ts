import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createVehicle, updateVehicle, deleteVehicle } from '../../../services/vehicle.service'
import type { Vehicle } from '../../../services/vehicle.service'
import { assignDevice, unassignDevice } from '../../../services/vehicle.service';

export function useCreateVehicle() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (payload: Partial<Vehicle>) => createVehicle(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['vehicles'] }),
  })
}

export function useUpdateVehicle() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Partial<Vehicle> }) => updateVehicle(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['vehicles'] })
      qc.invalidateQueries({ queryKey: ['vehicle'] })
    },
  })
}

export function useDeleteVehicle() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteVehicle(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['vehicles'] }),
  })
}

export function useAssignDevice() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ vehicleId, deviceId }: { vehicleId: number; deviceId: number }) => assignDevice(vehicleId, deviceId),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['vehicles'] }),
  });
}

export function useUnassignDevice() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (vehicleId: number) => unassignDevice(vehicleId),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['vehicles'] }),
  });
}
