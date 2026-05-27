import { useMutation } from '@tanstack/react-query'
import { login } from '../../../services/auth.service'
import type { LoginInput } from '../../../services/auth.service'
import { useAuthStore } from '@/stores/auth.store'

// Custom hook dùng cho hành vi đăng nhập
export function useLogin() {
  const setAuth = useAuthStore.getState().setAuth

  return useMutation({
    mutationFn: (input: LoginInput) => login(input),
    onSuccess: (res) => {
      if (res?.success) {
        setAuth(res.data.user, res.data.token)
      }
    },
  })
}
