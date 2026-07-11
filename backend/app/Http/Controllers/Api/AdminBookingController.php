<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Notification;
use Illuminate\Http\Request;

class AdminBookingController extends Controller
{
    /**
     * Cek apakah user adalah admin.
     */
    private function authorizeAdmin(Request $request)
    {
        if (!$request->user()->isAdmin()) {

            abort(
                response()->json([
                    'status' => false,
                    'message' => 'Akses ditolak. Hanya admin yang dapat mengakses fitur ini.'
                ], 403)
            );

        }
    }

    /**
     * Menampilkan semua booking.
     */
    public function index(Request $request)
    {
        $this->authorizeAdmin($request);

        $bookings = Booking::with([
            'user',
            'vehicle',
            'service'
        ])
        ->latest()
        ->get();

        return response()->json([
            'status' => true,
            'data' => $bookings
        ]);
    }

    /**
     * Konfirmasi booking.
     */
    public function confirm(Request $request, Booking $booking)
    {
        $this->authorizeAdmin($request);

        $booking->update([
            'status' => 'confirmed'
        ]);

        Notification::create([
            'user_id' => $booking->user_id,
            'title' => 'Booking Dikonfirmasi',
            'message' => 'Booking servis Anda telah dikonfirmasi oleh admin.',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Booking berhasil dikonfirmasi.',
            'data' => $booking
        ]);
    }

    /**
     * Selesaikan booking.
     */
    public function complete(Request $request, Booking $booking)
    {
        $this->authorizeAdmin($request);

        $booking->update([
            'status' => 'completed'
        ]);

        Notification::create([
            'user_id' => $booking->user_id,
            'title' => 'Servis Selesai',
            'message' => 'Servis kendaraan Anda telah selesai dan siap diambil.',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Booking berhasil diselesaikan.',
            'data' => $booking
        ]);
    }

    /**
     * Batalkan booking.
     */
    public function cancel(Request $request, Booking $booking)
    {
        $this->authorizeAdmin($request);

        $booking->update([
            'status' => 'cancelled'
        ]);

        Notification::create([
            'user_id' => $booking->user_id,
            'title' => 'Booking Dibatalkan',
            'message' => 'Booking servis Anda telah dibatalkan oleh admin.',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Booking berhasil dibatalkan.',
            'data' => $booking
        ]);
    }
}