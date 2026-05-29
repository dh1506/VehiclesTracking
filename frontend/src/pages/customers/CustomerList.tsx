import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getCustomers } from '../../services/customer.service';
import { useCreateCustomer, useUpdateCustomer, useDeleteCustomer } from '../../features/customers/hooks/useCustomerMutations';
import { Button } from '../../components/ui/button';
import CustomerForm from '../../features/customers/components/CustomerForm';
import { User, Phone, CreditCard, MapPin, Trash2, Edit3, Plus, X } from 'lucide-react';

export default function CustomerListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['customers'],
    queryFn: () => getCustomers(),
  });

  const createMutation = useCreateCustomer();
  const updateMutation = useUpdateCustomer();
  const deleteMutation = useDeleteCustomer();

  const handleOpenAddModal = () => {
    setEditingCustomer(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (customer: any) => {
    setEditingCustomer(customer);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingCustomer) {
        await updateMutation.mutateAsync({
          id: editingCustomer.customerId,
          payload: values,
        });
        toast.success('Cập nhật thông tin khách hàng thành công');
      } else {
        await createMutation.mutateAsync(values);
        toast.success('Thêm khách hàng vào danh bạ thành công');
      }
      setIsModalOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra, vui lòng thử lại');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa khách hàng này khỏi danh bạ?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa khách hàng thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xảy ra khi xóa');
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Danh bạ khách hàng</h1>
          <p className="text-sm text-slate-500 font-medium">Lưu trữ thông tin liên hệ và số chứng thư cá nhân của các chủ xe thuê.</p>
        </div>
        <Button onClick={handleOpenAddModal} className="shadow-lg shadow-indigo-600/10 gap-1.5">
          <Plus className="h-4 w-4" /> Đăng ký khách hàng mới
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Khách hàng</th>
                <th className="p-4">Số điện thoại</th>
                <th className="p-4">Số CCCD</th>
                <th className="p-4">Địa chỉ</th>
                <th className="p-4 pr-6 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data?.data?.map((c: any) => (
                <tr key={c.customerId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{c.fullName}</p>
                      <p className="text-xs text-slate-400">{c.email || 'Chưa cập nhật email'}</p>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-slate-400" />
                      <span>{c.phone}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-500">
                    {c.identityNumber ? (
                      <div className="flex items-center gap-1.5">
                        <CreditCard className="h-3.5 w-3.5 text-slate-400" />
                        <span>{c.identityNumber}</span>
                      </div>
                    ) : <span className="text-slate-300">-</span>}
                  </td>
                  <td className="p-4 text-slate-500 max-w-xs truncate">
                    {c.address ? (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        <span>{c.address}</span>
                      </div>
                    ) : <span className="text-slate-300">-</span>}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleOpenEditModal(c)} className="h-8 w-8 p-0">
                        <Edit3 className="h-4 w-4 text-slate-500" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(c.customerId)} className="h-8 w-8 p-0 hover:bg-rose-50 text-slate-400 hover:text-rose-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">
                {editingCustomer ? 'Chỉnh sửa danh bạ khách hàng' : 'Đăng ký danh bạ khách hàng mới'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            <CustomerForm initialValues={editingCustomer || undefined} onSubmit={handleFormSubmit} submitLabel={editingCustomer ? "Lưu thông tin" : "Xác nhận đăng ký"} />
          </div>
        </div>
      )}
    </div>
  );
}