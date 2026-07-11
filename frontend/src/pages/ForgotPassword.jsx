import {
  ArrowLeft,
  Mail
} from "lucide-react"

import { Link } from "react-router-dom"

function ForgotPassword() {

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
            Reset password akun Anda
            dengan aman dan cepat.
          </p>

          <div className="mt-10">

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5">

              <h2 className="text-white font-semibold">
                Keamanan Akun
              </h2>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Kami akan mengirimkan link reset password
                ke email yang terdaftar.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">

          {/* Header */}
          <div className="mb-8">

            <h2 className="text-white text-4xl font-bold">
              Lupa Password
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Masukkan email Anda untuk menerima
              link reset password.
            </p>

          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>

              <label className="text-gray-400 text-sm">
                Email
              </label>

              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">

                <Mail size={18} className="text-gray-500" />

                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full bg-transparent outline-none px-4 py-4 text-white"
                />

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
            >
              Kirim Reset Link
            </button>

            {/* Back */}
            <div className="text-center">

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all"
              >
                <ArrowLeft size={16} />

                Kembali ke Login
              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default ForgotPassword