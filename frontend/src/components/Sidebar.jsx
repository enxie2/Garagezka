import {
  LayoutDashboard,
  CalendarCheck,
  Car,
  History,
  Bell,
  User,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 bg-[#111111] text-white h-screen border-r border-[#2A2A2A] flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-red-500">
            GARAGEZKA
          </h1>

          {user?.role === "admin" && (
            <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase">
              Admin Panel
            </p>
          )}
        </div>

        {/* Menu */}
        <ul className="space-y-2 px-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "hover:bg-[#1B1B1B] text-gray-300"
                }`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
          </li>

          {user?.role === "user" && (
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "hover:bg-[#1B1B1B] text-gray-300"
                  }`
                }
              >
                <CalendarCheck size={18} />
                Booking Servis
              </NavLink>
            </li>
          )}

          {user?.role === "user" && (
            <li>
              <NavLink
                to="/kendaraan"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "hover:bg-[#1B1B1B] text-gray-300"
                  }`
                }
              >
                <Car size={18} />
                Kendaraan Saya
              </NavLink>
            </li>
          )}

          {user?.role === "user" && (
            <li>
              <NavLink
                to="/riwayat"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "hover:bg-[#1B1B1B] text-gray-300"
                  }`
                }
              >
                <History size={18} />
                Riwayat Servis
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/notifikasi"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "hover:bg-[#1B1B1B] text-gray-300"
                }`
              }
            >
              <Bell size={18} />
              Notifikasi
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profil"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "hover:bg-[#1B1B1B] text-gray-300"
                }`
              }
            >
              <User size={18} />
              Profil
            </NavLink>
          </li>

          {user?.role === "admin" && (
            <li>
              <NavLink
                to="/admin/bookings"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "hover:bg-[#1B1B1B] text-gray-300"
                  }`
                }
              >
                <ShieldCheck size={18} />
                Kelola Booking
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="p-4 border-t border-[#2A2A2A]">
        <div className="flex items-center justify-between bg-[#1A1A1A] p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>

            <div>
              <h2 className="text-sm font-semibold">
                {user?.name ?? "Loading..."}
              </h2>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#252525] transition-all text-gray-400 hover:text-red-500"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
