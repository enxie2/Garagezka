import DashboardLayout from "../layouts/DashboardLayout"

import {
  Bell,
  CheckCircle2,
  Clock3,
  Wrench,
  CalendarDays
} from "lucide-react"

function Notifikasi() {

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Notifikasi
        </h1>

        <p className="text-gray-400 mt-2">
          Semua informasi terbaru aktivitas akun Anda.
        </p>

      </div>

      {/* Notification List */}
      <div className="space-y-5">

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          {/* Left */}
          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={26} />
            </div>

            <div>

              <h2 className="text-white text-xl font-semibold">
                Servis Selesai
              </h2>

              <p className="text-gray-500 mt-2 leading-relaxed">
                Motor Honda Vario 160 Anda telah selesai dikerjakan dan siap diambil.
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">

                <CalendarDays size={16} />

                22 Mei 2026 • 14:30 WIB

              </div>

            </div>

          </div>

          {/* Badge */}
          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl text-sm font-semibold w-fit">
            Baru
          </div>

        </div>

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          {/* Left */}
          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
              <Clock3 className="text-yellow-500" size={26} />
            </div>

            <div>

              <h2 className="text-white text-xl font-semibold">
                Booking Diproses
              </h2>

              <p className="text-gray-500 mt-2 leading-relaxed">
                Booking servis Yamaha NMAX Anda sedang diproses oleh bengkel.
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">

                <CalendarDays size={16} />

                21 Mei 2026 • 09:15 WIB

              </div>

            </div>

          </div>

          {/* Badge */}
          <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-2xl text-sm font-semibold w-fit">
            Diproses
          </div>

        </div>

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          {/* Left */}
          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">
              <Wrench className="text-red-500" size={26} />
            </div>

            <div>

              <h2 className="text-white text-xl font-semibold">
                Booking Dikonfirmasi
              </h2>

              <p className="text-gray-500 mt-2 leading-relaxed">
                Booking servis Anda telah diterima dan dijadwalkan oleh GARAGEZKA.
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">

                <CalendarDays size={16} />

                20 Mei 2026 • 11:00 WIB

              </div>

            </div>

          </div>

          {/* Badge */}
          <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-2xl text-sm font-semibold w-fit">
            Penting
          </div>

        </div>

        {/* Empty State Example */}
        <div className="bg-[#151515] border border-dashed border-[#2A2A2A] rounded-3xl p-10 flex flex-col items-center justify-center text-center mt-8">

          <div className="w-20 h-20 rounded-full bg-[#1B1B1B] flex items-center justify-center">

            <Bell className="text-gray-500" size={32} />

          </div>

          <h2 className="text-white text-2xl font-semibold mt-6">
            Semua Notifikasi Sudah Dibaca
          </h2>

          <p className="text-gray-500 mt-3 max-w-md leading-relaxed">
            Tidak ada notifikasi baru saat ini. Semua aktivitas akun Anda sudah diperbarui.
          </p>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Notifikasi