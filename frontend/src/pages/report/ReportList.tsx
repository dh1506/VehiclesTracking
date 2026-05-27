import { useQuery } from '@tanstack/react-query';
import { getReports } from '../../services/report.service';

export default function ReportListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reports'],
    queryFn: () => getReports(),
  });

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải dữ liệu</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Báo cáo</h1>
      <ul>
        {data?.data?.map((r: any) => (
          <li key={r.id} className="p-2 border-b">{r.title || `#${r.id}`}</li>
        ))}
      </ul>
    </div>
  );
}
