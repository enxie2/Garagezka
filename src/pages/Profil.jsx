import DashboardLayout from "../layouts/DashboardLayout"

import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Camera
} from "lucide-react"

function Profile() {

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Profil Saya
        </h1>

        <p className="text-gray-400 mt-2">
          Kelola informasi akun GARAGEZKA Anda.
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8 h-fit">

          <div className="flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="relative">

              <div className="w-32 h-32 rounded-full bg-red-500/20 border-4 border-red-500/30 flex items-center justify-center">

                <User size={50} className="text-red-500" />

              </div>

              <button className="absolute bottom-0 right-0 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 transition-all flex items-center justify-center shadow-lg shadow-red-500/20">

                <Camera size={18} className="text-white" />

              </button>

            </div>

            {/* Info */}
            <h2 className="text-white text-2xl font-bold mt-6">
              Azka Gans
            </h2>

            <p className="text-gray-500 mt-2">
              Member GARAGEZKA
            </p>

          </div>

          {/* Card */}
          <div className="mt-8 space-y-4">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Total Kendaraan
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                2 Motor
              </h3>

            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Total Booking
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                12 Booking
              </h3>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="xl:col-span-2 bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8">

          <form className="space-y-6">

            {/* Nama */}
            <div>

              <label className="text-gray-300 text-sm">
                Nama Lengkap
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <User className="text-red-500" />

                <input
                  type="text"
                  value="Azka Gans"
                  className="w-full bg-transparent outline-none text-white"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="text-gray-300 text-sm">
                Email
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Mail className="text-red-500" />

                <input
                  type="email"
                  value="azka@gmail.com"
                  className="w-full bg-transparent outline-none text-white"
                />

              </div>

            </div>

            {/* Phone */}
            <div>

              <label className="text-gray-300 text-sm">
                Nomor Telepon
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Phone className="text-red-500" />

                <input
                  type="text"
                  value="081234567890"
                  className="w-full bg-transparent outline-none text-white"
                />

              </div>

            </div>

            {/* Address */}
            <div>

              <label className="text-gray-300 text-sm">
                Alamat
              </label>

              <div className="mt-2 flex items-start gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <MapPin className="text-red-500 mt-1" />

                <textarea
                  rows="4"
                  className="w-full bg-transparent outline-none text-white resize-none"
                  defaultValue="Banjarbaru, Kalimantan Selatan"
                ></textarea>

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-gray-300 text-sm">
                Password
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Lock className="text-red-500" />

                <input
                  type="password"
                  value="password123"
                  className="w-full bg-transparent outline-none text-white"
                />

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all py-4 rounded-2xl text-white font-semibold shadow-lg shadow-red-500/20"
            >
              Simpan Perubahan
            </button>

          </form>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Profile