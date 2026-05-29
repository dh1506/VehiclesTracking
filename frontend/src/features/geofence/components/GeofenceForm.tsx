// src/features/geofence/components/GeofenceForm.tsx
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { geofenceSchema } from '../../../schemas/geofence.schema';
import type { GeofenceFormValues } from '../../../schemas/geofence.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

// Tải cấu hình Map Leaflet vẽ vùng cấm
import { MapContainer, TileLayer, Circle, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map as MapIcon} from 'lucide-react';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component con xử lý sự kiện click chuột trên bản đồ để lấy tọa độ
function MapClickInterceptor({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

// Component con hỗ trợ đồng bộ hiển thị bản đồ khi tọa độ thay đổi
function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

type Props = {
  initialValues?: Partial<GeofenceFormValues>;
  onSubmit: (values: GeofenceFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export function GeofenceForm({ initialValues, onSubmit, submitLabel = 'Lưu vùng cấm' }: Props) {
  const { register, handleSubmit, setValue, control, formState } = useForm<GeofenceFormValues>({
    resolver: zodResolver(geofenceSchema) as any,
    defaultValues: initialValues as any,
  });

  // Lắng nghe thay đổi của tọa độ và bán kính để vẽ đồ họa mô phỏng thời gian thực
  const latValue = useWatch({ control, name: 'latitude' });
  const lonValue = useWatch({ control, name: 'longitude' });
  const radiusValue = useWatch({ control, name: 'radiusMeters' });

  const hasCoordinates = typeof latValue === 'number' && typeof lonValue === 'number';
  const centerPosition: [number, number] = hasCoordinates ? [latValue, lonValue] : [21.0285, 105.8542]; // Mặc định là Hà Nội

  const handleMapClick = (lat: number, lng: number) => {
    setValue('latitude', Number(lat.toFixed(6)));
    setValue('longitude', Number(lng.toFixed(6)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl bg-white text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Phần điền thông tin */}
        <div className="space-y-3">
          {/* Tên vùng */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Tên nhãn vùng</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><MapIcon className="h-4 w-4" /></span>
              <Input {...register('zoneName')} className="pl-9 h-10 rounded-xl text-xs" placeholder="Tên khu vực an toàn" />
            </div>
            {formState.errors.zoneName && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.zoneName.message}</p>}
          </div>

          {/* Vĩ độ */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Vĩ độ (Latitude)</label>
            <Input type="number" step="any" {...register('latitude', { valueAsNumber: true })} className="h-10 rounded-xl text-xs bg-slate-50"  placeholder="Click bản đồ để lấy tọa độ" />
            {formState.errors.latitude && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.latitude.message}</p>}
          </div>

          {/* Kinh độ */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Kinh độ (Longitude)</label>
            <Input type="number" step="any" {...register('longitude', { valueAsNumber: true })} className="h-10 rounded-xl text-xs bg-slate-50"  placeholder="Click bản đồ để lấy tọa độ" />
            {formState.errors.longitude && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.longitude.message}</p>}
          </div>

          {/* Bán kính */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Bán kính cảnh báo (mét)</label>
            <Input type="number" {...register('radiusMeters', { valueAsNumber: true })} className="h-10 rounded-xl text-xs" placeholder="VD: 200, 500" />
            {formState.errors.radiusMeters && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.radiusMeters.message}</p>}
          </div>
        </div>

        {/* Bản đồ chọn tọa độ tương tác */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <span>Bản đồ tọa độ trực quan</span>
            <span className="text-[10px] text-indigo-500 normal-case">(Click lên bản đồ để chọn tâm vùng cấm)</span>
          </label>
          <div className="h-64 rounded-2xl overflow-hidden border border-slate-200 relative">
            <MapContainer center={centerPosition} zoom={14} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapClickInterceptor onMapClick={handleMapClick} />
              {hasCoordinates && (
                <>
                  <RecenterMap center={centerPosition} />
                  <Marker position={centerPosition} icon={DefaultIcon} />
                  {radiusValue > 0 && (
                    <Circle 
                      center={centerPosition} 
                      radius={radiusValue} 
                      pathOptions={{ color: '#4F46E5', fillColor: '#818CF8', fillOpacity: 0.35 }} 
                    />
                  )}
                </>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="space-y-1 pt-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mô tả / Chỉ dẫn</label>
        <textarea {...register('description')} rows={2} className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="VD: Tránh xa khu vực hồ bơi công cộng..." />
      </div>

      <div className="flex justify-end pt-3 border-t">
        <Button type="submit" className="h-10 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-xs shadow-lg" disabled={formState.isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default GeofenceForm;