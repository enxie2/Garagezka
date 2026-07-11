import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Camera
} from "lucide-react";

import profileService from "../services/profileService";
import { useAuth } from "../context/AuthContext";
function Profile() {
const navigate = useNavigate();
const { logout } = useAuth();
const [user, setUser] = useState(null);

const [name, setName] = useState("");

const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const [address, setAddress] = useState("");

const [currentPassword, setCurrentPassword] = useState("");

const [newPassword, setNewPassword] = useState("");

const [confirmPassword, setConfirmPassword] = useState("");

useEffect(() => {
    loadProfile();
}, []);

const loadProfile = async () => {

    try {

        const data = await profileService.getProfile();

setUser(data);

setName(data.name ?? "");

setEmail(data.email ?? "");

setPhone(data.phone ?? "");

setAddress(data.address ?? "");

    } catch (error) {

        console.error(error);

    }

};

const handleUpdateProfile = async (e) => {

    e.preventDefault();

    try {

        await profileService.updateProfile({

    name,

    email,

    phone,

    address,

});

        toast.success("Profil berhasil diperbarui.");

        loadProfile();

    } catch (error) {

        toast.error(
            error.response?.data?.message ??
            "Gagal memperbarui profil."
        );

    }

};

const handleChangePassword = async () => {

    if (!currentPassword || !newPassword || !confirmPassword) {

        toast.warning("Lengkapi semua data password.");

        return;

    }

    try {

        const response = await profileService.changePassword({

            current_password: currentPassword,

            new_password: newPassword,

            new_password_confirmation: confirmPassword,

        });

        toast.success(response.message);

        setCurrentPassword("");

        setNewPassword("");

        setConfirmPassword("");

        if (response.force_logout) {

            await logout();

            navigate("/login", {
                replace: true,
            });

        }

    } catch (error) {

        toast.error(
            error.response?.data?.message ??
            "Gagal mengubah password."
        );

    }

};
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
              {user?.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {user?.email}
            </p>

          </div>

          {/* Card */}
          <div className="mt-8 space-y-4">

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Total Kendaraan
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                {user?.vehicles?.length ?? 0} Kendaraan
                
              </h3>

            </div>

            <div className="bg-[#1B1B1B] rounded-2xl p-4">

              <p className="text-gray-500 text-sm">
                Total Booking
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                {user?.bookings?.length ?? 0} Booking
              </h3>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="xl:col-span-2 bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8">

          <form
    onSubmit={handleUpdateProfile}
    className="space-y-6"
>

            {/* Nama */}
            <div>

              <label className="text-gray-300 text-sm">
                Nama Lengkap
              </label>

              <div className="mt-2 flex items-start gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <User className="text-red-500" />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
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
    rows={4}
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="w-full bg-transparent outline-none text-white resize-none"
/>

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-gray-300 text-sm">
                Password
              </label>

              <div className="mt-2 flex items-center gap-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4">

                <Lock className="text-red-500" />

                <div className="space-y-4">

    <input
        type="password"
        placeholder="Password Lama"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4 text-white outline-none"
    />

    <input
        type="password"
        placeholder="Password Baru"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4 text-white outline-none"
    />

    <input
        type="password"
        placeholder="Konfirmasi Password Baru"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-5 py-4 text-white outline-none"
    />

    <button
        type="button"
        onClick={handleChangePassword}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
    >
        Ganti Password
    </button>

</div>

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