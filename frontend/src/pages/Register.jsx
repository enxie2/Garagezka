import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User
} from "lucide-react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import authService from "../services/authService"

function Register() {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [passwordConfirmation,setPasswordConfirmation]=useState("")
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try{
      await authService.register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      })

      toast.success("Registrasi berhasil. Silakan login.")

      setTimeout(() => {
        navigate("/", {
          replace: true,
        })
      }, 1000)

    }catch(error){
      toast.error(
        error.response?.data?.message ??
        "Registrasi gagal."
      )
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-5">
      <div className="absolute w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-5xl h-[90vh] bg-[#121212] border border-[#2A2A2A] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">

        <div className="hidden lg:flex flex-col justify-center p-14 bg-[#151515] relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-red-500/10 blur-3xl rounded-full -top-20 -left-20"></div>

          <h1 className="text-5xl font-bold text-red-500">GARAGEZKA</h1>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Daftar sekarang dan nikmati pengalaman booking servis motor modern dan profesional.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-4">
              <h2 className="text-white font-semibold">Booking Cepat</h2>
              <p className="text-gray-500 text-sm mt-1">Servis lebih praktis tanpa antre.</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-4">
              <h2 className="text-white font-semibold">Riwayat Kendaraan</h2>
              <p className="text-gray-500 text-sm mt-1">Semua histori tersimpan otomatis.</p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-14 flex flex-col justify-center overflow-y-auto">

          <div className="mb-8">
            <h2 className="text-white text-4xl font-bold">Daftar</h2>
            <p className="text-gray-500 mt-8 leading-relaxed">
              Buat akun baru GARAGEZKA.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-400 text-sm">Nama Lengkap</label>
              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">
                <User size={18} className="text-gray-500" />
                <input type="text" placeholder="Masukkan nama lengkap" className="w-full bg-transparent outline-none px-4 py-4 text-white" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">
                <Mail size={18} className="text-gray-500" />
                <input type="email" placeholder="Masukkan email" className="w-full bg-transparent outline-none px-4 py-4 text-white" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">Password</label>
              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">
                <Lock size={18} className="text-gray-500" />
                <input type={showPassword ? "text" : "password"} placeholder="Masukkan password" className="w-full bg-transparent outline-none px-4 py-4 text-white" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} className="text-gray-500" /> : <Eye size={18} className="text-gray-500" />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">Konfirmasi Password</label>
              <div className="mt-2 flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4">
                <Lock size={18} className="text-gray-500" />
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Konfirmasi password" className="w-full bg-transparent outline-none px-4 py-4 text-white" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOff size={18} className="text-gray-500" /> : <Eye size={18} className="text-gray-500" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sedang mendaftar..." : "Daftar"}
            </button>

            <div className="text-center text-gray-500 text-sm mt-6">
              Sudah punya akun?
              <Link to="/" className="text-red-500 ml-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
