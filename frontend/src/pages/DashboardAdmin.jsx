import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import {
  Car,
  Bell,
  Clock,
  Users,
  ClipboardList,
} from "lucide-react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

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

const {
    summary,
    latest_bookings,
    chart,
    today_summary,
    user,
} = dashboard;

const chartData = [
    { name: "Pending", total: chart?.pending ?? 0 },
    { name: "Confirmed", total: chart?.confirmed ?? 0 },
    { name: "Completed", total: chart?.completed ?? 0 },
    { name: "Cancelled", total: chart?.cancelled ?? 0 },
];

const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
}).format(new Date());
  return (
    <DashboardLayout>

      {/* Hero Admin */}

      <div className="mt-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl p-8 overflow-hidden relative">

        <div className="absolute right-[-70px] top-[-70px] w-72 h-72 rounded-full bg-white/10"></div>

        <div className="relative z-10">

          <h1 className="text-4xl font-bold text-white mt-3">
            Halo, Admin 👋
          </h1>

          <p className="text-red-100 mt-2 capitalize">
            {today}
          </p>

          <p className="text-red-100 mt-4 max-w-2xl leading-7">
            Pantau seluruh aktivitas booking, pelanggan,
            dan operasional GARAGEZKA secara real-time
            melalui dashboard admin.
          </p>

        </div>

      </div>

{/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        {/* Total Booking */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Total Booking
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.total_bookings ?? 0}
              </h2>
            </div>

            <div className="bg-red-500/20 p-3 rounded-xl">
              <Clock className="text-red-500" />
            </div>

          </div>

        </div>

        {/* Booking Pending */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Notifikasi
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.pending_bookings ?? 0}
              </h2>
            </div>

            <div className="bg-yellow-500/20 p-3 rounded-xl">
              <Clock className="text-yellow-500" />
            </div>

          </div>

        </div>

        {/* Booking Confirmed */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Booking Confirmed
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.confirmed_bookings ?? 0}
              </h2>

            </div>

            <div className="bg-blue-500/20 p-3 rounded-xl">
              <Clock className="text-blue-500" />
            </div>

          </div>

        </div>

        {/* Status */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Booking Selesai
              </p>

             <h2 className="text-white text-2xl font-bold mt-2">
    {summary?.completed_bookings ?? 0}
</h2>
            </div>

            <div
    className="bg-green-500/20 p-3 rounded-xl">
              <Clock className="text-green-500" />
            </div>

          </div>

        </div>


        {/* Total User */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400 text-sm">
                Total User
              </p>
              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.total_users ?? 0}
              </h2>
            </div>

            <div className="bg-purple-500/20 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V18a4 4 0 00-5-3.87M9 20H4V18a4 4 0 015-3.87m8-6.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0" /></svg>
            </div>

          </div>

        </div>

        {/* Booking Cancelled */}
<div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">
<div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Booking Cancelled</p><h2 className="text-white text-2xl font-bold mt-2">{summary?.cancelled_bookings ?? 0}</h2></div><div className="bg-red-500/20 p-3 rounded-xl"><Clock className="text-red-500" /></div></div></div>

        {/* Total Kendaraan */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

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

        {/* Total Notifikasi */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-5 hover:border-red-500 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Total Notifikasi
              </p>

              <h2 className="text-white text-2xl font-bold mt-2">
                {summary?.total_notifications ?? 0}
              </h2>

            </div>

            <div className="bg-yellow-500/20 p-3 rounded-xl">
              <Bell className="text-yellow-500" />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">

        {/* Booking Terbaru */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-white text-xl font-semibold">
                Booking Terbaru
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Daftar booking terbaru yang masuk ke sistem.
              </p>

            </div>

            <button
              onClick={() => navigate("/admin/bookings")}
              className="text-red-500 hover:text-red-400 text-sm font-semibold transition-all"
            >
              Lihat Semua →
            </button>

          </div>

          <div className="space-y-4">

    {latest_bookings?.length > 0 ? (

        latest_bookings.slice(0, 3).map((booking) => (

        <div key={booking.id} className="bg-[#1B1B1B] rounded-2xl p-4 border border-transparent hover:border-red-500 transition-all duration-300">

<div className="flex items-center justify-between">
<div>
<h3 className="text-white font-semibold">{booking.user?.name ?? "-"}</h3>

<p className="text-gray-500 text-sm mt-2">Kendaraan: {booking.vehicle ? `${booking.vehicle.brand} ${booking.vehicle.model}` : "-"}</p>
<p className="text-gray-500 text-sm mt-2">Layanan: {booking.service?.service_name ?? "-"}</p>
<p className="text-gray-500 text-sm mt-2">Tanggal: {" "}{booking.booking_date}</p>
<p className="text-gray-500 text-sm mt-1">Jam: {" "}{booking.booking_time}</p>
</div>

<span className={`px-3 py-1 rounded-full text-xs font-semibold ${
booking.status==="pending"?"bg-yellow-500/20 text-yellow-400":
booking.status==="confirmed"?"bg-blue-500/20 text-blue-400":
booking.status==="completed"?"bg-green-500/20 text-green-400":
"bg-red-500/20 text-red-400"
}`}>
{booking.status==="pending"?"Menunggu":
booking.status==="confirmed"?"Dikonfirmasi":
booking.status==="completed"?"Selesai":"Dibatalkan"}
</span>

</div>
</div>

))

    ) : (

        <div className="bg-[#1B1B1B] rounded-2xl p-4 border border-transparent hover:border-red-500 transition-all duration-300">

            <p className="text-gray-400">
                Belum ada booking terbaru.
            </p>

        </div>

    )}

</div>
      </div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

<div className="xl:col-span-2 bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6 hover:border-red-500 transition-all duration-300">

    <div className="mb-6">
        <h2 className="text-white text-xl font-semibold">Statistik Booking</h2>
        <p className="text-gray-500 text-sm mt-1">Grafik jumlah booking berdasarkan status.</p>
    </div>

    <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Bar dataKey="total" radius={[8,8,0,0]} fill="#ef4444" />
            </BarChart>
        </ResponsiveContainer>
    </div>
</div>

<div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6 hover:border-red-500 transition-all duration-300">

    <h2 className="text-white text-xl font-semibold">
        Ringkasan Hari Ini
    </h2>

    <p className="text-gray-500 text-sm mt-1">
        Aktivitas booking pada hari ini.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#1B1B1B] rounded-xl p-4 border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-400 text-sm">Booking Hari Ini</p>
            <h3 className="text-white text-2xl font-bold mt-2">{today_summary?.today_bookings ?? 0}</h3>
        </div>
        <div className="bg-[#1B1B1B] rounded-xl p-4 border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <p className="text-yellow-400 text-sm">Pending</p>
            <h3 className="text-white text-2xl font-bold mt-2">{today_summary?.today_pending ?? 0}</h3>
        </div>
        <div className="bg-[#1B1B1B] rounded-xl p-4 border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <p className="text-green-400 text-sm">Selesai</p>
            <h3 className="text-white text-2xl font-bold mt-2">{today_summary?.today_completed ?? 0}</h3>
        </div>
        <div className="bg-[#1B1B1B] rounded-xl p-4 border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <p className="text-red-400 text-sm">Dibatalkan</p>
            <h3 className="text-white text-2xl font-bold mt-2">{today_summary?.today_cancelled ?? 0}</h3>
        </div>

    </div>

</div>

</div>

      </div>

    </DashboardLayout>
  )
}

export default Dashboard