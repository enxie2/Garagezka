import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import {
  Car,
  Bell,
  Clock
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import dashboardService from "../services/dashboardService";

function Dashboard() {
const navigate = useNavigate();

const [dashboard, setDashboard] = useState(null);

useEffect(() => {
    loadDashboard();
}, []);

const loadDashboard = async () => {
    try {
        const data = await dashboardService.getDashboard();
        setDashboard(data);
    } catch (error) {
        console.error(error);
    }
};

if (!dashboard) {
    return (
        <DashboardLayout>
            <div className="text-white">
                Memuat dashboard...
            </div>
        </DashboardLayout>
    );
}

const { summary, primary_vehicle, latest_booking, user } = dashboard;
  return (
    <DashboardLayout>

      {/* Greeting */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>
          <h1 className="text-3xl font-bold text-white">
           Halo, {user?.name ?? "Pengguna"} 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Selamat datang kembali di GARAGEZKA.
          </p>
        </div>

        <button
    onClick={() => navigate("/booking")}
    className="bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
>
    Booking Servis
</button>

      </div>

      {/* Main Vehicle */}
      <div className="mt-8 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl p-8 relative overflow-hidden">

        {/* Glow */}
        <div className="absolute right-[-60px] top-[-60px] w-72 h-72 bg-white/10 rounded-full"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left */}
          <div>

            <p className="text-red-100 text-sm uppercase tracking-widest">
              Kendaraan Utama
            </p>

            <h2 className="text-4xl font-bold text-white mt-3">
              {primary_vehicle
    ? `${primary_vehicle.brand} ${primary_vehicle.model}`
    : "Belum ada kendaraan"}
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-4 rounded-2xl">

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Car className="text-white" />
              </div>

              <div>
                <p className="text-red-100 text-sm">
                  Plat Nomor
                </p>

                <h3 className="text-white font-semibold mt-1">
                  {primary_vehicle?.plate_number ?? "-"}
                </h3>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 w-full lg:w-[320px] border border-white/10">

            <p className="text-red-100 text-sm">
              Booking Berikutnya
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              {latest_booking?.booking_date ?? "Belum ada booking"}
            </h3>

            <p className="text-red-100 text-sm mt-3">
              {latest_booking?.service?.service_name ?? "Belum ada booking"}
            </p>

            <button className="mt-6 w-full bg-white text-red-600 hover:bg-gray-100 transition-all py-3 rounded-2xl font-semibold">
              Lihat Detail
            </button>

          </div>

        </div>

      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

        {/* Kendaraan */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Total Kendaraan
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.total_vehicles ?? 0} Motor
              </h2>
            </div>

            <div className="bg-blue-500/20 p-3 rounded-xl">
              <Car className="text-blue-500" />
            </div>

          </div>

        </div>

        {/* Notifikasi */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Notifikasi
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.total_notifications ?? 0} Baru
              </h2>
            </div>

            <div className="bg-yellow-500/20 p-3 rounded-xl">
              <Bell className="text-yellow-500" />
            </div>

          </div>

        </div>

        {/* Status */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Status Servis
              </p>

             <h2 className="text-white text-2xl font-bold mt-2">
    {latest_booking
        ? latest_booking.status.charAt(0).toUpperCase() +
          latest_booking.status.slice(1)
        : "Belum Ada"}
</h2>
            </div>

            <div
    className={`p-3 rounded-xl ${
        latest_booking?.status === "completed"
            ? "bg-green-500/20"
            : latest_booking?.status === "pending"
            ? "bg-yellow-500/20"
            : latest_booking?.status === "confirmed"
            ? "bg-blue-500/20"
            : latest_booking?.status === "cancelled"
            ? "bg-red-500/20"
            : "bg-gray-500/20"
    }`}
>
    <Clock
        className={
            latest_booking?.status === "completed"
                ? "text-green-500"
                : latest_booking?.status === "pending"
                ? "text-yellow-500"
                : latest_booking?.status === "confirmed"
                ? "text-blue-500"
                : latest_booking?.status === "cancelled"
                ? "text-red-500"
                : "text-gray-500"
        }
    />
</div>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">

        {/* Riwayat */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6">

          <div className="mb-6">
            <h2 className="text-white text-xl font-semibold">
              Riwayat Servis Terakhir
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Aktivitas servis kendaraan Anda.
            </p>
          </div>

          <div className="space-y-4">

    {latest_booking ? (

        <div className="bg-[#1B1B1B] rounded-2xl p-4">

            <h3 className="text-white font-semibold">
                {latest_booking.service?.service_name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
                {primary_vehicle
                    ? `${primary_vehicle.brand} ${primary_vehicle.model}`
                    : "-"}
                {" • "}
                {latest_booking.booking_date}
            </p>

            <p className="text-gray-500 text-sm mt-1">
                Jam {latest_booking.booking_time}
            </p>

            <p className="text-gray-500 text-sm mt-1">
                Status : {latest_booking.status}
            </p>

        </div>

    ) : (

        <div className="bg-[#1B1B1B] rounded-2xl p-4">

            <p className="text-gray-400">
                Belum ada riwayat servis.
            </p>

        </div>

    )}

</div>
      </div>

    </div>

    </DashboardLayout>
  )
}

export default Dashboard