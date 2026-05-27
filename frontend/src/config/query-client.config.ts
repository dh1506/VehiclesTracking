import { QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 phút
    },
    mutations: {
      onError: (error: any) => {
        // Global error handling cho mutations
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error('Có lỗi xảy ra, vui lòng thử lại.');
        }
      },
    },
  },
});
