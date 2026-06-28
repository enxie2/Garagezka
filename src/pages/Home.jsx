import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden scroll-smooth">

      {/* Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-300px] right-[-200px] w-[500px] h-[500px] bg-red-500/5 blur-3xl rounded-full"></div>

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
          <h1 className="text-xl font-bold tracking-wide">
            GARAGEZKA
          </h1>

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
      <section
        className="min-h-[85vh] flex items-center justify-center px-6 relative z-10"
      >

        <div className="max-w-3xl text-center animate-fadeIn">

          <p className="text-red-500 tracking-[0.3em] text-sm">
            PRESISI. PERFORMA. PROFESIONAL.
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
            Servis Motor Jadi
            <br />
            Lebih Mudah
          </h1>

          <p className="text-gray-400 mt-8 leading-relaxed max-w-2xl mx-auto">
            Booking servis jadi lebih cepat, praktis, dan profesional.
            Kelola kendaraan serta riwayat servis Anda dengan mudah melalui GARAGEZKA.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
            >
              Booking Sekarang
            </Link>

            <Link
              to="/services"
              className="border border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#111111] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Lihat Layanan
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        className="relative z-10 px-6 pb-28 mt-24"
      >

        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16 animate-fadeIn">

            <p className="text-red-500 tracking-[0.3em] text-sm">
              KEUNGGULAN GARAGEZKA
            </p>

            <h2 className="text-4xl font-bold mt-5">
              Kenapa Harus GARAGEZKA?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              Kami menghadirkan pengalaman servis motor modern dengan sistem booking digital yang cepat dan profesional.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                icon: "⚡",
                title: "Cepat",
                desc: "Booking servis hanya dalam hitungan menit tanpa perlu antre panjang di bengkel."
              },
              {
                icon: "🛠️",
                title: "Profesional",
                desc: "Ditangani mekanik berpengalaman dengan standar pengerjaan berkualitas tinggi."
              },
              {
                icon: "🔒",
                title: "Terpercaya",
                desc: "Riwayat servis tersimpan aman dan transparan untuk semua kendaraan Anda."
              },
              {
                icon: "📱",
                title: "Modern",
                desc: "Sistem digital modern yang memudahkan booking, monitoring, dan pengelolaan servis."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111111] border border-[#1F1F1F] hover:border-red-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 rounded-3xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        className="relative z-10 px-6 pb-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="w-20 h-[4px] bg-red-500 rounded-full mb-22"></div>

          <div className="bg-red-500 rounded-3xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-500/20 hover:scale-[1.01] transition-all duration-300">

            <h2 className="text-3xl font-bold text-white text-center lg:text-left">
              Siap untuk performa terbaik?
            </h2>

            <Link
              to="/register"
              className="bg-white text-red-500 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg"
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

export default Home