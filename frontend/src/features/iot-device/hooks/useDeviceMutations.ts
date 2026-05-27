import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createDevice, updateDevice, deleteDevice } from '../../../services/iot-device.service'
import type { CreateDeviceInput, UpdateDeviceInput } from '../../../services/iot-device.service'

export function useCreateDevice() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (payload: CreateDeviceInput) => createDevice(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['iot-devices'] }),
  })
}

export function useUpdateDevice() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateDeviceInput }) => updateDevice(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['iot-devices'] })
      qc.invalidateQueries({ queryKey: ['iot-device'] })
    },
  })
}

export function useDeleteDevice() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteDevice(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['iot-devices'] }),
  })
}
