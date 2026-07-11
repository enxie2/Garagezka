import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import vehicleService from "../services/vehicleService";

function EditVehicleModal({
  open,
  onClose,
  onSuccess,
  vehicle,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    plate_number: "",
    color: "",
  });

  useEffect(() => {
    if (vehicle) {
      setForm({
        brand: vehicle.brand || "",
        model: vehicle.model || "",
        year: vehicle.year || "",
        plate_number: vehicle.plate_number || "",
        color: vehicle.color || "",
      });
    }
  }, [vehicle]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await vehicleService.update(vehicle.id, form);

      toast.success("Kendaraan berhasil diperbarui.");

      if (onSuccess) onSuccess();

      if (onClose) onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ??
          "Gagal mengubah kendaraan."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center py-10 px-4">
        <div className="bg-[#151515] w-full max-w-xl rounded-3xl p-8 border border-[#2A2A2A] my-10">
          <h2 className="text-2xl font-bold text-white">
            Edit Kendaraan
          </h2>

          <p className="text-gray-500 mt-2">
            Ubah informasi kendaraan Anda.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >
            <div>
              <label className="text-gray-400 text-sm">Merek</label>

              <input
                type="text"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white outline-none"
                placeholder="Contoh: Honda"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Model</label>

              <input
                type="text"
                name="model"
                value={form.model}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white outline-none"
                placeholder="Contoh: Vario 160"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Tahun</label>

              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white outline-none"
                placeholder="2024"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Plat Nomor</label>

              <input
                type="text"
                name="plate_number"
                value={form.plate_number}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white outline-none"
                placeholder="DA 1234 XYZ"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Warna</label>

              <input
                type="text"
                name="color"
                value={form.color}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white outline-none"
                placeholder="Hitam"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="px-6 py-3 rounded-2xl bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Batal
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditVehicleModal;
