// src/pages/auth/Login.tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useLogin } from '../../features/auth/hooks/useAuth';
import { Navigation, ShieldCheck, Mail, Lock } from 'lucide-react';

const schema = z.object({
  email: z.string().email({ message: 'Email không đúng định dạng' }),
  password: z.string().min(6, { message: 'Mật khẩu tối thiểu từ 6 ký tự' }),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { register, handleSubmit, setError, formState } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const onSubmit = async (values: FormData) => {
    try {
      await loginMutation.mutateAsync(values);
      toast.success('Đăng nhập hệ thống thành công');
      navigate('/');
    } catch (err: any) {
      if (err?.details && Array.isArray(err.details)) {
        err.details.forEach((d: any) => {
          const field = d.field || d.path || d.key || d.name;
          if (field) setError(field as any, { type: 'server', message: d.message || d.msg });
        });
        return;
      }
      toast.error(err?.message || 'Email hoặc mật khẩu không chính xác');
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Panel Trái - Giới thiệu Đồ họa Đẳng cấp */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12">
        {/* Lớp nền hạt sáng (Gradients) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_40%)]" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="bg-indigo-600 p-2.5 rounded-xl text-white">
            <Navigation className="h-6 w-6 animate-pulse" />
          </div>
          <span className="font-extrabold text-white text-lg tracking-widest">V-TRACKING</span>
        </div>

        <div className="space-y-4 relative z-10">
          <h2 className="text-4xl font-black text-white leading-tight tracking-tight">
            Nền Tảng Giám Sát <br />
            & Định Vị Thời Gian Thực.
          </h2>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Hệ thống quản lý hành trình phi đội xe thông minh, tối ưu hóa mức tiêu hao nhiên liệu và cảnh báo giới hạn địa lý thông qua phần cứng IoT MQTT.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 relative z-10 border-t border-slate-800/80 pt-6">
          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
          <span>Hệ thống bảo mật hạ tầng máy chủ định vị chuẩn ISO/IEC</span>
        </div>
      </div>

      {/* Panel Phải - Form Đăng Nhập */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Cổng kết nối vận hành</h2>
            <p className="text-sm text-slate-400">Vui lòng nhập tài khoản quản trị viên được cấp phép.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Hộp thư liên hệ (Email)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail className="h-4 w-4" />
                </span>
                <Input 
                  {...register('email')} 
                  className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" 
                  placeholder="admin@vtracking.com"
                />
              </div>
              {formState.errors.email && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mật khẩu bảo mật</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock className="h-4 w-4" />
                </span>
                <Input 
                  type="password" 
                  {...register('password')} 
                  className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                />
              </div>
              {formState.errors.password && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.password.message}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/10 transition-all mt-4" 
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Đang xác thực kết nối...' : 'Bắt đầu vận hành'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}