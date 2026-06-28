import DashboardLayout from "../layouts/DashboardLayout"

import {
  Wrench,
  CalendarDays,
  Clock3,
  CheckCircle2
} from "lucide-react"

function Riwayat() {

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Riwayat Servis
        </h1>

        <p className="text-gray-400 mt-2">
          Semua aktivitas servis kendaraan Anda.
        </p>

      </div>

      {/* List */}
      <div className="space-y-6">

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

            {/* Left */}
            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                <Wrench className="text-red-500" size={28} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Ganti Oli
                </h2>

                <p className="text-gray-500 mt-2">
                  Honda Vario 160 • DA 1234 XYZ
                </p>

                <div className="flex flex-wrap gap-5 mt-5">

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <CalendarDays size={16} />

                    12 Mei 2026

                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <Clock3 size={16} />

                    09:30 WIB

                  </div>

                </div>

              </div>

            </div>

            {/* Status */}
            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-2xl flex items-center gap-3 w-fit">

              <CheckCircle2 size={20} />

              <span className="font-semibold">
                Selesai
              </span>

            </div>

          </div>

        </div>

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

            {/* Left */}
            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <Wrench className="text-blue-500" size={28} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Tune Up
                </h2>

                <p className="text-gray-500 mt-2">
                  Yamaha NMAX • DA 5678 ABC
                </p>

                <div className="flex flex-wrap gap-5 mt-5">

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <CalendarDays size={16} />

                    01 Mei 2026

                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <Clock3 size={16} />

                    13:00 WIB

                  </div>

                </div>

              </div>

            </div>

            {/* Status */}
            <div className="bg-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl flex items-center gap-3 w-fit">

              <Clock3 size={20} />

              <span className="font-semibold">
                Diproses
              </span>

            </div>

          </div>

        </div>

        {/* Item */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

            {/* Left */}
            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Wrench className="text-purple-500" size={28} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Servis Lengkap
                </h2>

                <p className="text-gray-500 mt-2">
                  Honda Vario 160 • DA 1234 XYZ
                </p>

                <div className="flex flex-wrap gap-5 mt-5">

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <CalendarDays size={16} />

                    18 April 2026

                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">

                    <Clock3 size={16} />

                    10:15 WIB

                  </div>

                </div>

              </div>

            </div>

            {/* Status */}
            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-2xl flex items-center gap-3 w-fit">

              <CheckCircle2 size={20} />

              <span className="font-semibold">
                Selesai
              </span>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Riwayat