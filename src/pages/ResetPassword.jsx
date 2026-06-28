import {
  Eye,
  EyeOff,
  Lock
} from "lucide-react"

import { useState } from "react"
import { Link } from "react-router-dom"

function ResetPassword() {

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-5">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#2A2A2A] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">

        {/* Left */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-[#151515] relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-red-500/10 blur-3xl rounded-full -top-20 -left-20"></div>

          <h1 className="text-5xl font-bold text-red-500">
            GARAGEZKA
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Buat password baru
            untuk melindungi akun Anda.
          </p>

          <div className="mt-10">

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5">

              <h2 className="text-white font-semibold">
                Keamanan Password
              </h2>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Gunakan kombinasi huruf,
                angka, dan simbol agar
                password lebih aman.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">

          {/* Header */}
          <div className="mb-8">

            <h2 className="text-white text-4xl font-bold">
              Reset Password
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Masukkan password baru Anda.
            </p>

          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Password Baru */}
            <div>

              <label className="text-gray-400 text-sm">
                Password Baru
              </label>

              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">

                <Lock size={18} className="text-gray-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password baru"
                  className="w-full bg-transparent outline-none px-4 py-4 text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {
                    showPassword
                      ? <EyeOff size={18} className="text-gray-500" />
                      : <Eye size={18} className="text-gray-500" />
                  }
                </button>

              </div>

            </div>

            {/* Konfirmasi Password */}
            <div>

              <label className="text-gray-400 text-sm">
                Konfirmasi Password
              </label>

              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">

                <Lock size={18} className="text-gray-500" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Konfirmasi password"
                  className="w-full bg-transparent outline-none px-4 py-4 text-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {
                    showConfirmPassword
                      ? <EyeOff size={18} className="text-gray-500" />
                      : <Eye size={18} className="text-gray-500" />
                  }
                </button>

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
            >
              Simpan Password Baru
            </button>

            {/* Back */}
            <div className="text-center text-sm">

              <Link
                to="/"
                className="text-gray-400 hover:text-red-500 transition-all"
              >
                Kembali ke Login
              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default ResetPassword