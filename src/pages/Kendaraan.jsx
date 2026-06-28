import DashboardLayout from "../layouts/DashboardLayout"

import {
  Bike,
  Plus,
  Pencil,
  Trash2,
  Star
} from "lucide-react"

function Kendaraan() {

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Kendaraan Saya
          </h1>

          <p className="text-gray-400 mt-2">
            Kelola semua kendaraan Anda di GARAGEZKA.
          </p>

        </div>

        <button className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20">

          <Plus size={20} />

          Tambah Kendaraan

        </button>

      </div>

      {/* Vehicle List */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Vehicle Card */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 relative overflow-hidden">

          {/* Glow */}
          <div className="absolute right-[-40px] top-[-40px] w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>

          {/* Top */}
          <div className="relative z-10 flex items-start justify-between gap-4">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                <Bike className="text-red-500" size={28} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Honda Vario 160
                </h2>

                <p className="text-gray-500 mt-1">
                  DA 1234 XYZ
                </p>

              </div>

            </div>

            <div className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2">

              <Star size={14} />

              Utama

            </div>

          </div>

          {/* Info */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Tahun
              </p>

              <h3 className="text-white font-semibold mt-2">
                2024
              </h3>

            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Warna
              </p>

              <h3 className="text-white font-semibold mt-2">
                Hitam
              </h3>

            </div>

          </div>

          {/* Action */}
          <div className="relative z-10 flex flex-wrap gap-3 mt-8">

            <button className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-white px-5 py-3 rounded-2xl">

              <Pencil size={18} />

              Edit

            </button>

            <button className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-red-500 px-5 py-3 rounded-2xl">

              <Trash2 size={18} />

              Hapus

            </button>

          </div>

        </div>

        {/* Vehicle Card */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 relative overflow-hidden">

          {/* Glow */}
          <div className="absolute right-[-40px] top-[-40px] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Top */}
          <div className="relative z-10 flex items-start justify-between gap-4">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <Bike className="text-blue-500" size={28} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Yamaha NMAX
                </h2>

                <p className="text-gray-500 mt-1">
                  DA 5678 ABC
                </p>

              </div>

            </div>

          </div>

          {/* Info */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Tahun
              </p>

              <h3 className="text-white font-semibold mt-2">
                2023
              </h3>

            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Warna
              </p>

              <h3 className="text-white font-semibold mt-2">
                Abu-Abu
              </h3>

            </div>

          </div>

          {/* Action */}
          <div className="relative z-10 flex flex-wrap gap-3 mt-8">

            <button className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-white px-5 py-3 rounded-2xl">

              <Pencil size={18} />

              Edit

            </button>

            <button className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-red-500 px-5 py-3 rounded-2xl">

              <Trash2 size={18} />

              Hapus

            </button>

            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold px-5 py-3 rounded-2xl">

              <Star size={18} />

              Jadikan Utama

            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Kendaraan