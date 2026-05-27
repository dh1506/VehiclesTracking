import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../../services/user.service'

export function useUser(id?: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => (id ? getUser(id) : Promise.resolve(null as any)),
    enabled: !!id,
  })
}
