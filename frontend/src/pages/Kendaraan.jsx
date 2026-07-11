import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import VehicleCard from "../components/VehicleCard";
import AddVehicleModal from "../components/AddVehicleModal";
import EditVehicleModal from "../components/EditVehicleModal";
import ConfirmModal from "../components/ConfirmModal";

import vehicleService from "../services/vehicleService";
import { Plus } from "lucide-react";
import { toast } from "react-toastify";

function Kendaraan() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const loadVehicles = async () => {
    try {
      const response = await vehicleService.getAll();
      const data = Array.isArray(response) ? response : response.data ?? [];
      setVehicles(data);
    } catch (error) {
      console.error("GET VEHICLES ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const handleEdit = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    setSelectedVehicleId(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      setDeleteLoading(true);
      await vehicleService.delete(selectedVehicleId);
      await loadVehicles();
      toast.success("Kendaraan berhasil dihapus.");
      setShowConfirmModal(false);
      setSelectedVehicleId(null);
    } catch (error) {
      console.error(error);
      toast.error("Gagal menghapus kendaraan.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSetPrimary = async (vehicle) => {

  try {

    await vehicleService.setPrimary(vehicle.id);

    await loadVehicles();

    toast.success("Kendaraan utama berhasil diperbarui.");

  } catch (error) {

    console.error(error);

    toast.error("Gagal mengubah kendaraan utama.");

  }


};

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Kendaraan Saya</h1>
          <p className="text-gray-400 mt-2">
            Kelola semua kendaraan Anda di GARAGEZKA.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
        >
          <Plus size={20} />
          Tambah Kendaraan
        </button>
      </div>

      {loading && (
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Memuat Data Kendaraan...
          </h2>
          <p className="text-gray-500 mt-3">Mohon tunggu sebentar.</p>
        </div>
      )}

      {!loading && vehicles.length === 0 && (
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Belum Ada Kendaraan
          </h2>
          <p className="text-gray-500 mt-3">
            Silakan tambahkan kendaraan pertama Anda.
          </p>
        </div>
      )}

      {!loading && vehicles.length > 0 && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
  key={vehicle.id}
  vehicle={vehicle}
  isPrimary={vehicle.is_primary}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onSetPrimary={handleSetPrimary}
/>
          ))}
        </div>
      )}

      <AddVehicleModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={() => {
          setShowAddModal(false);
          loadVehicles();
        }}
      />

      <EditVehicleModal
        open={showEditModal}
        vehicle={selectedVehicle}
        onClose={() => {
          setShowEditModal(false);
          setSelectedVehicle(null);
        }}
        onSuccess={() => {
          setShowEditModal(false);
          setSelectedVehicle(null);
          loadVehicles();
        }}
      />

      <ConfirmModal
        open={showConfirmModal}
        title="Hapus Kendaraan"
        message="Apakah Anda yakin ingin menghapus kendaraan ini? Tindakan ini tidak dapat dibatalkan."
        confirmText="Hapus"
        cancelText="Batal"
        loading={deleteLoading}
        onConfirm={confirmDelete}
        onCancel={() => {
          if (deleteLoading) return;
          setShowConfirmModal(false);
          setSelectedVehicleId(null);
        }}
      />

    </DashboardLayout>
  );
}

export default Kendaraan;
