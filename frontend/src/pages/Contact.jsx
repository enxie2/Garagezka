import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contact() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-250px] right-[-150px] w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-[#2A2A2A]"
            : "bg-transparent border-transparent"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-wide"
          >
            GARAGEZKA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <Link
              to="/"
              className="hover:text-red-500 transition-all"
            >
              Beranda
            </Link>

            <Link
              to="/about"
              className="hover:text-red-500 transition-all"
            >
              Tentang Kami
            </Link>

            <Link
              to="/services"
              className="hover:text-red-500 transition-all"
            >
              Layanan
            </Link>

            <Link
              to="/contact"
              className="text-red-500 transition-all"
            >
              Kontak
            </Link>

          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/login"
              className="text-sm text-white hover:text-red-500 transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-red-500/20"
            >
              Daftar
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >

            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>

          </button>

        </div>

        {/* Mobile Menu */}
        {
          menuOpen && (
            <div className="md:hidden border-t border-[#1F1F1F] bg-[#0D0D0D]/95 backdrop-blur-xl px-6 py-6 space-y-6 animate-fadeIn">

              <Link
                to="/"
                className="block text-gray-300 hover:text-red-500 transition-all"
              >
                Beranda
              </Link>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-red-500 transition-all"
              >
                Tentang Kami
              </Link>

              <Link
                to="/services"
                className="block text-gray-300 hover:text-red-500 transition-all"
              >
                Layanan
              </Link>

              <Link
                to="/contact"
                className="block text-red-500 transition-all"
              >
                Kontak
              </Link>

              <div className="flex flex-col gap-3 pt-4">

                <Link
                  to="/login"
                  className="border border-[#2A2A2A] text-center py-3 rounded-2xl hover:border-red-500 transition-all"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-red-500 hover:bg-red-600 transition-all text-center py-3 rounded-2xl font-semibold"
                >
                  Daftar
                </Link>

              </div>

            </div>
          )
        }

      </nav>

      {/* Hero */}
      <section className="relative z-10 border-b border-[#1F1F1F]">

        <div className="max-w-7xl mx-auto px-6 py-32 text-center animate-fadeIn">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hubungi GARAGEZKA
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed text-lg">
            Kami siap membantu kebutuhan servis kendaraan Anda
            dengan pelayanan cepat, profesional, dan modern.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-6 animate-fadeIn">

            <div className="bg-[#111111] border border-[#1F1F1F] rounded-3xl p-8">

              <h2 className="text-2xl font-bold">
                Informasi Kontak
              </h2>

              <div className="space-y-6 mt-8">

                <div>
                  <p className="text-gray-500 text-sm">
                    WhatsApp
                  </p>

                  <p className="text-lg mt-2">
                    +62 812-3456-7890
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="text-lg mt-2">
                    garagezka@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Alamat
                  </p>

                  <p className="text-lg mt-2 leading-relaxed">
                    Jl. Performa Motor No. 27,
                    Jakarta, Indonesia
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Jam Operasional
                  </p>

                  <p className="text-lg mt-2">
                    08:00 - 17:00 WIB
                  </p>
                </div>

              </div>

            </div>

            {/* Maps */}
            <div className="bg-[#111111] border border-[#1F1F1F] rounded-3xl p-4 h-[260px] flex items-center justify-center text-gray-500">

              Google Maps Area

            </div>

          </div>

          {/* Right */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-3xl p-8 animate-fadeIn">

            <h2 className="text-2xl font-bold">
              Kirim Pesan
            </h2>

            <form className="space-y-6 mt-8">

              <div>

                <label className="text-sm text-gray-400">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full mt-3 bg-[#181818] border border-[#2A2A2A] rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition-all"
                />

              </div>

              <div>

                <label className="text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full mt-3 bg-[#181818] border border-[#2A2A2A] rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition-all"
                />

              </div>

              <div>

                <label className="text-sm text-gray-400">
                  Pesan
                </label>

                <textarea
                  rows="6"
                  placeholder="Tulis pesan Anda..."
                  className="w-full mt-3 bg-[#181818] border border-[#2A2A2A] rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition-all resize-none"
                ></textarea>

              </div>

              <button
                className="w-full bg-red-500 hover:bg-red-600 hover:scale-[1.01] transition-all duration-300 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1F1F1F]">

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="pt-6">

            <h2 className="text-3xl font-bold">
              GARAGEZKA
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
              Bengkel motor modern dengan standarisasi industri balap.
              Solusi perawatan presisi untuk setiap mesin.
            </p>

          </div>

          <div className="md:text-right md:pr-10">

            <h3 className="text-sm tracking-[0.2em] text-gray-500">
              NAVIGASI
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-gray-300">

              <Link
                to="/"
                className="hover:text-red-500 transition-all"
              >
                Beranda
              </Link>

              <Link
                to="/about"
                className="hover:text-red-500 transition-all"
              >
                Tentang Kami
              </Link>

              <Link
                to="/services"
                className="hover:text-red-500 transition-all"
              >
                Layanan
              </Link>

              <Link
                to="/contact"
                className="hover:text-red-500 transition-all"
              >
                Kontak
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t border-[#1F1F1F]">

          <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500">

            © 2026 GARAGEZKA. Presisi dalam Performa.

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Contact