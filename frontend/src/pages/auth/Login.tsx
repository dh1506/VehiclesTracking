import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useLogin } from '../../features/auth/hooks/useAuth';

const schema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(6, { message: 'Mật khẩu tối thiểu 6 ký tự' }),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { register, handleSubmit, setError, formState } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const onSubmit = async (values: FormData) => {
    try {
      await loginMutation.mutateAsync(values);
      navigate('/');
    } catch (err: any) {
      // Xử lý lỗi validation từ server (chi tiết trong err.details)
      if (err?.details && Array.isArray(err.details)) {
        err.details.forEach((d: any) => {
          // d có thể chứa tên trường dưới các key khác nhau
          const field = d.field || d.path || d.key || d.name;
          if (field) setError(field as any, { type: 'server', message: d.message || d.msg });
        });
        return;
      }

      toast.error(err?.message || 'Lỗi đăng nhập');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>

        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <Input {...register('email')} />
          {formState.errors.email && <p className="text-sm text-red-600 mt-1">{(formState.errors.email as any).message}</p>}
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Mật khẩu</label>
          <Input type="password" {...register('password')} />
          {formState.errors.password && <p className="text-sm text-red-600 mt-1">{(formState.errors.password as any).message}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Button>
      </form>
    </div>
  );
}
