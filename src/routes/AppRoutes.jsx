import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Booking from "../pages/Booking"
import Kendaraan from "../pages/Kendaraan"
import Riwayat from "../pages/Riwayat"
import Notifikasi from "../pages/Notifikasi"
import Profil from "../pages/Profil"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/kendaraan" element={<Kendaraan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil" element={<Profil />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes