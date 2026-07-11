import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

function ConfirmModal({
  open,
  title = "Konfirmasi",
  message,
  confirmText = "Ya",
  cancelText = "Batal",
  loading = false,
  onConfirm,
  onCancel,
}) {

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {

        onCancel();

      }

    };

    if (open) {

      document.addEventListener("keydown", handleKeyDown);

    }

    return () => {

      document.removeEventListener("keydown", handleKeyDown);

    };

  }, [open, onCancel]);

  if (!open) return null;

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onCancel}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8"
      >

        <div className="flex justify-center">

          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">

            <AlertTriangle
              size={42}
              className="text-red-500"
            />

          </div>

        </div>

        <h2 className="text-white text-2xl font-bold text-center mt-6">

          {title}

        </h2>

        <p className="text-gray-400 text-center mt-4 leading-relaxed">

          {message}

        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 border border-[#2A2A2A] text-gray-300 py-3 rounded-2xl hover:bg-[#1B1B1B] transition disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl transition disabled:opacity-50"
          >
            {loading ? "Menghapus..." : confirmText}
          </button>

        </div>

      </div>

    </div>

  );

}

export default ConfirmModal;