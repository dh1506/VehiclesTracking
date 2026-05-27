import { useQuery } from '@tanstack/react-query';
import { getRentals } from '../../services/rental.service';

export default function RentalListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['rentals'],
    queryFn: () => getRentals(),
  });

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải dữ liệu</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Thuê xe</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Vehicle ID</th>
            <th className="p-2 text-left">Người thuê</th>
            <th className="p-2 text-left">Khoảng</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((r: any) => (
            <tr key={r.id} className="border-t">
              <td className="p-2">{r.id}</td>
              <td className="p-2">{r.vehicleId}</td>
              <td className="p-2">{r.renterName}</td>
              <td className="p-2">{r.startDate} - {r.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
