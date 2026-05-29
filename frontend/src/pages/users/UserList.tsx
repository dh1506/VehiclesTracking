import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getUsers } from '../../services/user.service';
import { useCreateUser, useUpdateUser, useDeleteUser } from '../../features/users/hooks/useUserMutations';
import { Button } from '../../components/ui/button';
import UserForm from '../../features/users/components/UserForm';
import { Mail, Shield, Trash2, Edit3, Phone, Plus, X } from 'lucide-react';

const ROLE_BADGES: Record<number, { label: string, style: string }> = {
  1: { label: 'Quản trị viên', style: 'bg-rose-50 text-rose-700 border-rose-100' },
  2: { label: 'Điều phối viên', style: 'bg-violet-50 text-violet-700 border-violet-100' },
  3: { label: 'Kỹ thuật viên', style: 'bg-amber-50 text-amber-700 border-amber-100' },
  4: { label: 'Khách hàng', style: 'bg-blue-50 text-blue-700 border-blue-100' }
};

export default function UserListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  const handleOpenAddModal = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (user: any) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingUser) {
        const { password, ...updatePayload } = values;
        if (password && password.trim() !== '') {
          (updatePayload as any).password = password;
        }
        // Cập nhật người dùng
        await updateMutation.mutateAsync({
          id: editingUser.userId,
          payload: updatePayload,
        });
        toast.success('Cập nhật thông tin người dùng thành công');
      } else {
        // Thêm người dùng mới
        await createMutation.mutateAsync({
          ...values,
          password: values.password || '123456', // Mật khẩu mặc định nếu trống
        });
        toast.success('Đăng ký tài khoản mới thành công');
      }
      setIsModalOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra, vui lòng thử lại');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa tài khoản người dùng này?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa người dùng thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa người dùng');
    }
  };

  if (isLoading) return (
    <div className="p-8 flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
    </div>
  );

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hệ thống người dùng</h1>
          <p className="text-sm text-slate-500">Cấp quyền hoạt động cho kỹ thuật viên và quản lý danh bạ khách hàng thuê xe.</p>
        </div>
        <Button onClick={handleOpenAddModal} className="shadow-lg shadow-indigo-600/10 gap-1.5">
          <Plus className="h-4 w-4" /> Thêm người dùng mới
        </Button>
      </div>

      {/* Bảng dữ liệu người dùng */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Họ và tên</th>
                <th className="p-4">Hộp thư liên hệ</th>
                <th className="p-4">Số điện thoại</th>
                <th className="p-4">Vai trò điều hành</th>
                <th className="p-4 pr-6 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data?.data?.map((u: any) => {
                const role = ROLE_BADGES[u.roleId] || { label: 'Thành viên', style: 'bg-slate-50 text-slate-600 border-slate-100' };
                return (
                  <tr key={u.userId} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-4 pl-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 font-bold border border-slate-200/30 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        {u.fullName?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{u.fullName}</p>
                        <p className="text-xs text-slate-400">ID tài khoản: #{u.userId}</p>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <span>{u.email}</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-slate-600">
                      {u.phone ? (
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                          <span>{u.phone}</span>
                        </div>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${role.style}`}>
                        <Shield className="h-3.5 w-3.5" />
                        {role.label}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleOpenEditModal(u)}
                          className="h-8 w-8 p-0 text-slate-500 hover:text-slate-800"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDelete(u.userId)}
                          className="h-8 w-8 p-0 text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP MODAL THÊM / SỬA NGƯỜI DÙNG */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">
                {editingUser ? 'Chỉnh sửa tài khoản người dùng' : 'Đăng ký tài khoản người dùng'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            
            <UserForm 
              initialValues={editingUser || undefined} 
              onSubmit={handleFormSubmit} 
              submitLabel={editingUser ? "Cập nhật tài khoản" : "Tạo tài khoản mới"} 
            />
          </div>
        </div>
      )}
    </div>
  );
}