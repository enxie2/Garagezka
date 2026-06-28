import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function About() {

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
              className="text-red-500 transition-all"
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
                className="block text-red-500 transition-all"
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
                className="block text-gray-300 hover:text-red-500 transition-all"
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
            GARAGEZKA
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed text-lg">
            GARAGEZKA hadir sebagai solusi bengkel motor modern
            yang menggabungkan teknologi digital dengan pelayanan
            profesional untuk memberikan pengalaman servis terbaik.
          </p>

        </div>

      </section>

      {/* Story */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="animate-fadeIn">

            <p className="text-red-500 tracking-[0.3em] text-sm">
              CERITA KAMI
            </p>

            <h2 className="text-4xl font-bold mt-6 leading-tight">
              Bukan Sekadar Bengkel Biasa
            </h2>

            <p className="text-gray-400 mt-8 leading-relaxed">
              Kami percaya bahwa servis motor harus menjadi pengalaman
              yang cepat, nyaman, dan transparan.
              Karena itu GARAGEZKA dibangun dengan pendekatan modern
              menggunakan sistem booking digital dan monitoring servis real-time.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Dengan mekanik profesional dan standar pengerjaan presisi,
              kami membantu menjaga performa kendaraan tetap optimal
              untuk kebutuhan harian maupun performa tinggi.
            </p>

          </div>

          {/* Right */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-[40px] p-10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#181818] rounded-3xl p-6 border border-[#222222]">

                <h3 className="text-4xl font-bold text-red-500">
                  5+
                </h3>

                <p className="text-gray-400 mt-3">
                  Tahun Pengalaman
                </p>

              </div>

              <div className="bg-[#181818] rounded-3xl p-6 border border-[#222222]">

                <h3 className="text-4xl font-bold text-red-500">
                  1000+
                </h3>

                <p className="text-gray-400 mt-3">
                  Kendaraan Ditangani
                </p>

              </div>

              <div className="bg-[#181818] rounded-3xl p-6 border border-[#222222]">

                <h3 className="text-4xl font-bold text-red-500">
                  24/7
                </h3>

                <p className="text-gray-400 mt-3">
                  Booking Online
                </p>

              </div>

              <div className="bg-[#181818] rounded-3xl p-6 border border-[#222222]">

                <h3 className="text-4xl font-bold text-red-500">
                  100%
                </h3>

                <p className="text-gray-400 mt-3">
                  Transparan
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="w-20 h-[4px] bg-red-500 rounded-full mb-22"></div>

          <div className="bg-red-500 rounded-[40px] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-red-500/20 hover:scale-[1.01] transition-all duration-300">

            <div>

              <h2 className="text-4xl font-bold">
                Siap Bergabung Dengan GARAGEZKA?
              </h2>

              <p className="text-white/80 mt-4 max-w-2xl leading-relaxed">
                Rasakan pengalaman servis motor modern
                dengan sistem digital yang cepat dan profesional.
              </p>

            </div>

            <Link
              to="/register"
              className="bg-white text-red-500 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Daftar Sekarang
            </Link>

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

export default About