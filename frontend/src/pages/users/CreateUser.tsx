import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useCreateUser } from '../../features/users/hooks/useUserMutations'
import UserForm from '../../features/users/components/UserForm'
import type { UserFormValues } from '../../schemas/user.schema'

export default function CreateUserPage() {
  const navigate = useNavigate()
  const create = useCreateUser()

  const onSubmit = async (values: UserFormValues) => {
    try {
      await create.mutateAsync({
      ...values,
      password: values.password ?? '', // Chuyển đổi undefined thành chuỗi rỗng để khớp kiểu string
    })
      toast.success('Tạo người dùng thành công')
      navigate('/users')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi tạo người dùng')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo người dùng</h1>
      <UserForm onSubmit={onSubmit} submitLabel="Tạo" />
    </div>
  )
}
