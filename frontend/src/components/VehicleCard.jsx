import {
  Bike,
  Pencil,
  Trash2,
  Star
} from "lucide-react";

function VehicleCard({
  vehicle,
  isPrimary = false,
  onEdit,
  onDelete,
  onSetPrimary,
}) {
  return (
    <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute right-[-40px] top-[-40px] w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
            <Bike className="text-red-500" size={28} />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {vehicle.brand} {vehicle.model}
            </h2>

            <p className="text-gray-500 mt-1">
              {vehicle.plate_number}
            </p>

          </div>

        </div>

        {isPrimary && (
          <div className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2">

            <Star size={14} />

            Utama

          </div>
        )}

      </div>

      {/* Detail */}
      <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">

        <div className="bg-[#1B1B1B] rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            Tahun
          </p>

          <h3 className="text-white font-semibold mt-2">
            {vehicle.year}
          </h3>

        </div>

        <div className="bg-[#1B1B1B] rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            Warna
          </p>

          <h3 className="text-white font-semibold mt-2">
            {vehicle.color}
          </h3>

        </div>

      </div>

      {/* Action */}
      <div className="relative z-10 flex flex-wrap gap-3 mt-8">

        <button
          onClick={() => onEdit(vehicle)}
          className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-white px-5 py-3 rounded-2xl"
        >

          <Pencil size={18} />

          Edit

        </button>

        <button
          onClick={() => onDelete(vehicle.id)}
          className="flex items-center gap-2 bg-[#1B1B1B] hover:bg-[#252525] transition-all text-red-500 px-5 py-3 rounded-2xl"
        >

          <Trash2 size={18} />

          Hapus

        </button>

        {!isPrimary && (
          <button
            onClick={() => onSetPrimary(vehicle)}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold px-5 py-3 rounded-2xl"
          >

            <Star size={18} />

            Jadikan Utama

          </button>
        )}

      </div>

    </div>
  );
}

export default VehicleCard;