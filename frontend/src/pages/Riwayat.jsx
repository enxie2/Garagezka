import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import {
  Wrench,
  CalendarDays,
  Clock3,
  CheckCircle2,
  XCircle,
  Hourglass,
} from "lucide-react";

import bookingService from "../services/bookingService";

function Riwayat() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await bookingService.getAll();
      setBookings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return {
          bg: "bg-yellow-500/20",
          text: "text-yellow-400",
          icon: <Hourglass size={20} />,
          label: "Pending",
        };

      case "confirmed":
        return {
          bg: "bg-blue-500/20",
          text: "text-blue-400",
          icon: <Clock3 size={20} />,
          label: "Confirmed",
        };

      case "completed":
        return {
          bg: "bg-green-500/20",
          text: "text-green-400",
          icon: <CheckCircle2 size={20} />,
          label: "Completed",
        };

      case "cancelled":
        return {
          bg: "bg-red-500/20",
          text: "text-red-400",
          icon: <XCircle size={20} />,
          label: "Cancelled",
        };

      default:
        return {
          bg: "bg-gray-500/20",
          text: "text-gray-400",
          icon: <Clock3 size={20} />,
          label: status,
        };
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Riwayat Servis
        </h1>

        <p className="text-gray-400 mt-2">
          Semua aktivitas servis kendaraan Anda.
        </p>
      </div>

      {/* List */}
      <div className="space-y-6">
        {bookings.map((booking) => {
          const badge = getStatusBadge(booking.status);

          return (
            <div
              key={booking.id}
              className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6"
            >
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                    <Wrench className="text-red-500" size={28} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {booking.service?.service_name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {booking.vehicle?.brand} {booking.vehicle?.model} •{" "}
                      {booking.vehicle?.plate_number}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-5">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <CalendarDays size={16} />
                        {booking.booking_date}
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock3 size={16} />
                        {booking.booking_time}
                      </div>
                    </div>

                    {booking.notes && (
                      <p className="text-gray-400 mt-4">
                        Catatan: {booking.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`${badge.bg} ${badge.text} px-5 py-3 rounded-2xl flex items-center gap-3 w-fit`}
                >
                  {badge.icon}

                  <span className="font-semibold">
                    {badge.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

export default Riwayat;