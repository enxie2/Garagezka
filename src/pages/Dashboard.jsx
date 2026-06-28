import DashboardLayout from "../layouts/DashboardLayout"

import {
  CalendarCheck,
  Car,
  Bell,
  Clock
} from "lucide-react"

function Dashboard() {

  return (
    <DashboardLayout>

      {/* Greeting */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Halo, Azka 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Selamat datang kembali di GARAGEZKA.
          </p>
        </div>

        <button className="bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20">
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
              Honda Vario 160
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
                  DA 1234 XYZ
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
              24 Mei 2026
            </h3>

            <p className="text-red-100 text-sm mt-3">
              Tune Up • GARAGEZKA Banjarbaru
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
                2 Motor
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
                3 Baru
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
                Tidak Ada
              </h2>
            </div>

            <div className="bg-green-500/20 p-3 rounded-xl">
              <Clock className="text-green-500" />
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

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-semibold">
                Ganti Oli
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Honda Vario 160 • 12 Mei 2026
              </p>
            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-semibold">
                Tune Up
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Yamaha NMAX • 01 Mei 2026
              </p>
            </div>

          </div>

        </div>

        {/* Notifikasi */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6">

          <div className="mb-6">
            <h2 className="text-white text-xl font-semibold">
              Notifikasi
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Informasi terbaru akun Anda.
            </p>
          </div>

          <div className="space-y-4">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-semibold">
                Booking Dikonfirmasi
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Booking servis Anda telah diterima bengkel.
              </p>
            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-semibold">
                Servis Selesai
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Motor Anda telah selesai dikerjakan dan siap diambil.
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Dashboard