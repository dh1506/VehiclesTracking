import { useQuery } from '@tanstack/react-query';
import { getMaintenances } from '../../services/maintenance.service';

export default function MaintenanceListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['maintenances'],
    queryFn: () => getMaintenances(),
  });

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải dữ liệu</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bảo trì</h1>
      <ul>
        {data?.data?.map((m: any) => (
          <li key={m.id} className="p-2 border-b">{m.title || `#${m.id}`}</li>
        ))}
      </ul>
    </div>
  );
}
