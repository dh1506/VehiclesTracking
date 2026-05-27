import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser, updateUser, deleteUser } from '../../../services/user.service'
import type { CreateUserInput, UpdateUserInput } from '../../../services/user.service'

export function useCreateUser() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (payload: CreateUserInput) => createUser(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  })
}

export function useUpdateUser() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateUserInput }) => updateUser(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] })
      qc.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

export function useDeleteUser() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  })
}
