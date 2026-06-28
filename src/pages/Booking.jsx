import DashboardLayout from "../layouts/DashboardLayout"

import {
  CalendarDays,
  Clock3,
  Wrench,
  StickyNote,
  Bike,
  Plus
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Booking() {

  const navigate = useNavigate()

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Booking Servis
        </h1>

        <p className="text-gray-400 mt-2">
          Booking servis motor Anda dengan mudah.
        </p>

      </div>

      {/* Form */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left */}
        <div className="xl:col-span-2 bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8">

          <form className="space-y-6">

            {/* Kendaraan */}
            <div>

              <div className="flex items-center justify-between">

                <label className="text-gray-300 text-sm">
                  Pilih Kendaraan
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/kendaraan")}
                  className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-all"
                >
                  <Plus size={16} />

                  Tambah Kendaraan
                </button>

              </div>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Bike className="text-red-500" />

                <select className="w-full bg-transparent outline-none text-white">

                  <option className="bg-[#1B1B1B]">
                    Honda Vario 160
                  </option>

                  <option className="bg-[#1B1B1B]">
                    Yamaha NMAX
                  </option>

                </select>

              </div>

            </div>

            {/* Jenis Servis */}
            <div>

              <label className="text-gray-300 text-sm">
                Jenis Servis
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Wrench className="text-red-500" />

                <select className="w-full bg-transparent outline-none text-white">

                  <option className="bg-[#1B1B1B]">
                    Ganti Oli
                  </option>

                  <option className="bg-[#1B1B1B]">
                    Tune Up
                  </option>

                  <option className="bg-[#1B1B1B]">
                    Servis Lengkap
                  </option>

                  <option className="bg-[#1B1B1B]">
                    Perbaikan Mesin
                  </option>

                </select>

              </div>

            </div>

            {/* Tanggal */}
            <div>

              <label className="text-gray-300 text-sm">
                Pilih Tanggal
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <CalendarDays className="text-red-500" />

                <input
                  type="date"
                  className="w-full bg-transparent outline-none text-white"
                />

              </div>

            </div>

            {/* Jam */}
            <div>

              <label className="text-gray-300 text-sm">
                Pilih Jam
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Clock3 className="text-red-500" />

                <select className="w-full bg-transparent outline-none text-white">

                  <option className="bg-[#1B1B1B]">
                    08:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    09:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    10:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    11:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    12:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    13:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    14:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    15:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    16:00
                  </option>

                  <option className="bg-[#1B1B1B]">
                    17:00
                  </option>

                </select>

              </div>

            </div>

            {/* Catatan */}
            <div>

              <label className="text-gray-300 text-sm">
                Catatan Kerusakan
              </label>

              <div className="mt-2 flex gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <StickyNote className="text-red-500 mt-1" />

                <textarea
                  rows="5"
                  placeholder="Contoh: suara mesin kasar, rem kurang pakem..."
                  className="w-full bg-transparent outline-none text-white resize-none"
                ></textarea>

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all py-4 rounded-2xl text-white font-semibold shadow-lg shadow-red-500/20"
            >
              Booking Sekarang
            </button>

          </form>

        </div>

        {/* Right */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 h-fit">

          <h2 className="text-white text-xl font-semibold">
            Informasi Booking
          </h2>

          <div className="mt-6 space-y-4">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-medium">
                Jam Operasional
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                08:00 - 17:00 WIB
              </p>
            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-medium">
                Estimasi Servis
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                30 menit - 2 jam
              </p>
            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">
              <h3 className="text-white font-medium">
                Catatan
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Pastikan datang sesuai jadwal booking agar servis berjalan lancar.
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Booking