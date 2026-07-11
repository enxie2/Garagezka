
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { toast } from "react-toastify";

import {
  CalendarDays,
  Clock3,
  Wrench,
  StickyNote,
  Bike,
  Plus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import vehicleService from "../services/vehicleService";
import serviceService from "../services/serviceService";
import bookingService from "../services/bookingService";

function Booking() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    vehicle_id: "",
    service_id: "",
    booking_date: "",
    booking_time: "",
    notes: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const vehicleData = await vehicleService.getAll();
      const serviceData = await serviceService.getAll();

      setVehicles(vehicleData);
      setServices(serviceData);
    } catch (error) {
      console.error(error);
      toast.error("Gagal memuat data booking.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.vehicle_id ||
      !formData.service_id ||
      !formData.booking_date ||
      !formData.booking_time
    ) {
      toast.warning("Lengkapi semua data.");
      return;
    }

    try {
      setLoading(true);

      await bookingService.create(formData);

      toast.success("Booking berhasil dibuat.");

      setFormData({
        vehicle_id: "",
        service_id: "",
        booking_date: "",
        booking_time: "",
        notes: "",
      });

      setTimeout(() => {
        navigate("/riwayat");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message ?? "Booking gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Booking Servis</h1>
        <p className="text-gray-400 mt-2">
          Booking servis motor Anda dengan mudah.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <div className="flex items-center justify-between">
                <label className="text-gray-300 text-sm">Pilih Kendaraan</label>

                <button
                  type="button"
                  onClick={() => navigate("/kendaraan")}
                  className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400"
                >
                  <Plus size={16} />
                  Tambah Kendaraan
                </button>
              </div>

              {vehicles.length === 0 && (
                <div className="mt-3 rounded-xl border border-yellow-600 bg-yellow-500/10 p-3 text-sm text-yellow-300">
                  🚗 Belum ada kendaraan.<br />
                  Silakan tambahkan kendaraan terlebih dahulu.
                </div>
              )}

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">
                <Bike className="text-red-500" />

                <select
                  name="vehicle_id"
                  required
                  value={formData.vehicle_id}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                >
                  <option value="" className="bg-[#1B1B1B]">
                    Pilih Kendaraan
                  </option>

                  {vehicles.map((vehicle) => (
                    <option
                      key={vehicle.id}
                      value={vehicle.id}
                      className="bg-[#1B1B1B]"
                    >
                      {vehicle.brand} {vehicle.model} ({vehicle.plate_number})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Jenis Servis</label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">
                <Wrench className="text-red-500" />

                <select
                  name="service_id"
                  required
                  value={formData.service_id}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                >
                  <option value="">Pilih Layanan</option>

                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.service_name} - Rp {Number(service.price).toLocaleString("id-ID")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Pilih Tanggal</label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">
                <CalendarDays className="text-red-500" />

                <input
                  type="date"
                  name="booking_date"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  value={formData.booking_date}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Pilih Jam</label>
              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">
                <Clock3 className="text-red-500" />
                <select
                  name="booking_time"
                  required
                  value={formData.booking_time}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                >
                  {["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"].map(t=>(
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Catatan Kerusakan</label>
              <div className="mt-2 flex gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">
                <StickyNote className="text-red-500 mt-1" />
                <textarea
                  name="notes"
                  rows="5"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Contoh: suara mesin kasar, rem kurang pakem..."
                  className="w-full bg-transparent outline-none text-white resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 transition-all py-4 rounded-2xl text-white font-semibold shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Memproses Booking..." : "Booking Sekarang"}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Booking;
