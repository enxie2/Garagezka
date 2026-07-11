import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal";

import adminBookingService from "../services/adminBookingService";

function AdminBooking() {
    const [bookings, setBookings] = useState([]);

    const [selectedStatus, setSelectedStatus] = useState("all");

    const [search, setSearch] = useState("");

    const [loadingAction, setLoadingAction] = useState(null);

    const [confirmModal, setConfirmModal] = useState({
        open: false,
        title: "",
        message: "",
        confirmText: "",
        action: null,
    });

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            const data = await adminBookingService.getAll();
            setBookings(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleConfirm = async (id) => {
        try {
            setLoadingAction(`confirm-${id}`);

            await adminBookingService.confirm(id);

            toast.success("Booking berhasil dikonfirmasi.");

            await loadBookings();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message ??
                    "Gagal mengonfirmasi booking."
            );
        } finally {
            setLoadingAction(null);
        }
    };

    const handleComplete = async (id) => {
        try {
            setLoadingAction(`complete-${id}`);

            await adminBookingService.complete(id);

            toast.success("Booking berhasil diselesaikan.");

            await loadBookings();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message ??
                    "Gagal menyelesaikan booking."
            );
        } finally {
            setLoadingAction(null);
        }
    };

    const handleCancel = async (id) => {
        try {
            setLoadingAction(`cancel-${id}`);

            await adminBookingService.cancel(id);

            toast.success("Booking berhasil dibatalkan.");

            await loadBookings();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message ??
                    "Gagal membatalkan booking."
            );
        } finally {
            setLoadingAction(null);
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500/20 text-yellow-400";

            case "confirmed":
                return "bg-blue-500/20 text-blue-400";

            case "completed":
                return "bg-green-500/20 text-green-400";

            case "cancelled":
                return "bg-red-500/20 text-red-400";

            default:
                return "bg-gray-500/20 text-gray-400";
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case "pending":
                return "Menunggu";

            case "confirmed":
                return "Dikonfirmasi";

            case "completed":
                return "Selesai";

            case "cancelled":
                return "Dibatalkan";

            default:
                return status;
        }
    };

    const filteredBookings = bookings.filter((booking) => {

        const matchStatus =
            selectedStatus === "all" ||
            booking.status === selectedStatus;

        const keyword = search.toLowerCase();

        const matchSearch =

            booking.user?.name
                ?.toLowerCase()
                .includes(keyword)

            ||

            booking.vehicle?.brand
                ?.toLowerCase()
                .includes(keyword)

            ||

            booking.vehicle?.model
                ?.toLowerCase()
                .includes(keyword)

            ||

            booking.vehicle?.plate_number
                ?.toLowerCase()
                .includes(keyword)

            ||

            booking.service?.service_name
                ?.toLowerCase()
                .includes(keyword);

        return matchStatus && matchSearch;

    });

    const bookingCounts = {

        all: bookings.length,

        pending: bookings.filter(
            booking => booking.status === "pending"
        ).length,

        confirmed: bookings.filter(
            booking => booking.status === "confirmed"
        ).length,

        completed: bookings.filter(
            booking => booking.status === "completed"
        ).length,

        cancelled: bookings.filter(
            booking => booking.status === "cancelled"
        ).length,

    };

    return (
        <>
            <DashboardLayout>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Kelola Booking
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Daftar seluruh booking pelanggan.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">

                        <button onClick={() => setSelectedStatus("all")} className={`px-4 py-2 rounded-xl transition ${selectedStatus==="all"?"bg-red-500 text-white":"bg-[#1B1B1B] text-gray-300 hover:bg-[#252525]"}`}>Semua ({bookingCounts.all})</button>
                        <button onClick={() => setSelectedStatus("pending")} className={`px-4 py-2 rounded-xl transition ${selectedStatus==="pending"?"bg-yellow-500 text-black":"bg-[#1B1B1B] text-gray-300 hover:bg-[#252525]"}`}>Menunggu ({bookingCounts.pending})</button>
                        <button onClick={() => setSelectedStatus("confirmed")} className={`px-4 py-2 rounded-xl transition ${selectedStatus==="confirmed"?"bg-blue-500 text-white":"bg-[#1B1B1B] text-gray-300 hover:bg-[#252525]"}`}>Dikonfirmasi ({bookingCounts.confirmed})</button>
                        <button onClick={() => setSelectedStatus("completed")} className={`px-4 py-2 rounded-xl transition ${selectedStatus==="completed"?"bg-green-500 text-white":"bg-[#1B1B1B] text-gray-300 hover:bg-[#252525]"}`}>Selesai ({bookingCounts.completed})</button>
                        <button onClick={() => setSelectedStatus("cancelled")} className={`px-4 py-2 rounded-xl transition ${selectedStatus==="cancelled"?"bg-red-500 text-white":"bg-[#1B1B1B] text-gray-300 hover:bg-[#252525]"}`}>Dibatalkan ({bookingCounts.cancelled})</button>

                    </div>

                    <div className="mt-6">

                        <input
                            type="text"
                            placeholder="Cari nama pelanggan, kendaraan, plat, atau layanan..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full lg:w-96 bg-[#151515] border border-[#2A2A2A] rounded-2xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                        />

                    </div>
                </div>

                <div className="space-y-5">
                    {filteredBookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6"
                        >
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {booking.service?.service_name}
                                    </h2>

                                    <p className="text-gray-400 mt-2">
                                        User : {booking.user?.name}
                                    </p>

                                    <p className="text-gray-400">
                                        Kendaraan : {booking.vehicle?.brand}{" "}
                                        {booking.vehicle?.model}
                                    </p>

                                    <p className="text-gray-400">
                                        Plat :{" "}
                                        {booking.vehicle?.plate_number}
                                    </p>

                                    <p className="text-gray-400">
                                        Tanggal : {booking.booking_date}
                                    </p>

                                    <p className="text-gray-400">
                                        Jam : {booking.booking_time}
                                    </p>

                                    <p className="text-gray-400">
                                        Status :
                                        <span
                                            className={`ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(
                                                booking.status
                                            )}`}
                                        >
                                            {getStatusLabel(
                                                booking.status
                                            )}
                                        </span>
                                    </p>

                                    {booking.notes && (
                                        <p className="text-gray-400 mt-2">
                                            Catatan : {booking.notes}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-3 h-fit">
                                    {booking.status === "pending" && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setConfirmModal({
                                                        open: true,
                                                        title:
                                                            "Konfirmasi Booking",
                                                        message:
                                                            "Apakah Anda yakin ingin mengonfirmasi booking ini?",
                                                        confirmText:
                                                            "Konfirmasi",
                                                        action: () =>
                                                            handleConfirm(
                                                                booking.id
                                                            ),
                                                    })
                                                }
                                                disabled={
                                                    loadingAction ===
                                                    `confirm-${booking.id}`
                                                }
                                                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loadingAction ===
                                                `confirm-${booking.id}`
                                                    ? "Mengonfirmasi..."
                                                    : "Confirm"}
                                            </button>

                                            <button
                                                onClick={() =>
                                                    setConfirmModal({
                                                        open: true,
                                                        title:
                                                            "Batalkan Booking",
                                                        message:
                                                            "Booking akan dibatalkan. Tindakan ini tidak dapat dibatalkan.",
                                                        confirmText:
                                                            "Batalkan",
                                                        action: () =>
                                                            handleCancel(
                                                                booking.id
                                                            ),
                                                    })
                                                }
                                                disabled={
                                                    loadingAction ===
                                                    `cancel-${booking.id}`
                                                }
                                                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loadingAction ===
                                                `cancel-${booking.id}`
                                                    ? "Membatalkan..."
                                                    : "Cancel"}
                                            </button>
                                        </>
                                    )}

                                    {booking.status === "confirmed" && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setConfirmModal({
                                                        open: true,
                                                        title:
                                                            "Selesaikan Booking",
                                                        message:
                                                            "Booking akan ditandai sebagai selesai.",
                                                        confirmText:
                                                            "Selesaikan",
                                                        action: () =>
                                                            handleComplete(
                                                                booking.id
                                                            ),
                                                    })
                                                }
                                                disabled={
                                                    loadingAction ===
                                                    `complete-${booking.id}`
                                                }
                                                className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loadingAction ===
                                                `complete-${booking.id}`
                                                    ? "Menyelesaikan..."
                                                    : "Complete"}
                                            </button>

                                            <button
                                                onClick={() =>
                                                    setConfirmModal({
                                                        open: true,
                                                        title:
                                                            "Batalkan Booking",
                                                        message:
                                                            "Booking akan dibatalkan. Tindakan ini tidak dapat dibatalkan.",
                                                        confirmText:
                                                            "Batalkan",
                                                        action: () =>
                                                            handleCancel(
                                                                booking.id
                                                            ),
                                                    })
                                                }
                                                disabled={
                                                    loadingAction ===
                                                    `cancel-${booking.id}`
                                                }
                                                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loadingAction ===
                                                `cancel-${booking.id}`
                                                    ? "Membatalkan..."
                                                    : "Cancel"}
                                            </button>
                                        </>
                                    )}

                                    {(booking.status === "completed" ||
                                        booking.status === "cancelled") && (
                                        <span className="text-gray-500 italic">
                                            Tidak ada aksi tersedia.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <ConfirmModal
                    open={confirmModal.open}
                    title={confirmModal.title}
                    message={confirmModal.message}
                    confirmText={confirmModal.confirmText}
                    cancelText="Batal"
                    loading={loadingAction !== null}
                    onConfirm={async () => {
                        if (confirmModal.action) {
                            await confirmModal.action();
                        }

                        setConfirmModal({
                            open: false,
                            title: "",
                            message: "",
                            confirmText: "",
                            action: null,
                        });
                    }}
                    onCancel={() => {
                        if (loadingAction) return;

                        setConfirmModal({
                            open: false,
                            title: "",
                            message: "",
                            confirmText: "",
                            action: null,
                        });
                    }}
                />
            </DashboardLayout>
        </>
    );
}

export default AdminBooking;