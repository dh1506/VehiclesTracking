import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useUser } from '../../features/users/hooks/useUser'
import { useUpdateUser } from '../../features/users/hooks/useUserMutations'
import UserForm from '../../features/users/components/UserForm'
import type { UserFormValues } from '../../schemas/user.schema'

export default function EditUserPage() {
  const { id } = useParams()
  const numericId = id ? Number(id) : undefined
  const { data, isLoading, isError } = useUser(numericId)
  const update = useUpdateUser()
  const navigate = useNavigate()

  if (isLoading) return <div className="p-6">Loading...</div>
  if (isError) return <div className="p-6 text-red-600">Không thể tải dữ liệu người dùng</div>

  const initial = data?.data

  const onSubmit = async (values: UserFormValues) => {
    try {
      if (!numericId) throw new Error('ID người dùng không hợp lệ')
      await update.mutateAsync({ id: numericId, payload: values })
      toast.success('Cập nhật người dùng thành công')
      navigate('/users')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi cập nhật người dùng')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa người dùng</h1>
      <UserForm initialValues={initial} onSubmit={onSubmit} submitLabel="Cập nhật" />
    </div>
  )
}
