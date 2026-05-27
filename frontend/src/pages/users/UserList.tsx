import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getUsers } from '../../services/user.service';
import { useDeleteUser } from '../../features/users/hooks/useUserMutations';
import { Button } from '../../components/ui/button';

export default function UserListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
  const deleteMutation = useDeleteUser();

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa người dùng thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa người dùng');
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải danh sách</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Danh sách người dùng</h1>
        <Link to="/users/new">
          <Button>Tạo người dùng</Button>
        </Link>
      </div>
      <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Tên</th>
            <th className="p-2 text-left">Vai trò</th>
            <th className="p-2 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((u: any) => (
            <tr key={u.userId} className="border-t hover:bg-slate-50">
              <td className="p-2">{u.userId}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.fullName}</td>
              <td className="p-2">{u.roleId}</td>
              <td className="p-2 flex gap-2">
                <Link to={`/users/${u.userId}/edit`}>
                  <Button variant="outline" size="sm">Sửa</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(u.userId)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
