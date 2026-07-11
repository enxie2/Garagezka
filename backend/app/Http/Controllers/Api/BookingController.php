<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Menampilkan semua booking milik user yang login.
     */
    public function index(Request $request)
    {
        $bookings = Booking::with(['vehicle', 'service'])
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();

        return response()->json($bookings, 200);
    }

    /**
     * Menyimpan booking baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'vehicle_id'   => 'required|exists:vehicles,id',
            'service_id'   => 'required|exists:services,id',
            'booking_date' => 'required|date',
            'booking_time' => 'required',
            'notes'        => 'nullable|string',
        ]);

        $booking = Booking::create([
            'user_id'      => $request->user()->id,
            'vehicle_id'   => $validated['vehicle_id'],
            'service_id'   => $validated['service_id'],
            'booking_date' => $validated['booking_date'],
            'booking_time' => $validated['booking_time'],
            'notes'        => $validated['notes'] ?? null,
            'status'       => 'pending',
        ]);

        return response()->json([
            'message' => 'Booking berhasil ditambahkan.',
            'data'    => $booking->load(['vehicle', 'service']),
        ], 201);
    }

    /**
     * Detail booking.
     */
    public function show(Request $request, string $id)
    {
        $booking = Booking::with(['vehicle', 'service'])
            ->where('user_id', $request->user()->id)
            ->find($id);

        if (!$booking) {
            return response()->json([
                'message' => 'Data booking tidak ditemukan.'
            ], 404);
        }

        return response()->json($booking, 200);
    }

    /**
     * Update booking.
     */
    public function update(Request $request, string $id)
    {
        $booking = Booking::where('user_id', $request->user()->id)
            ->find($id);

        if (!$booking) {
            return response()->json([
                'message' => 'Data booking tidak ditemukan.'
            ], 404);
        }

        $validated = $request->validate([
            'vehicle_id'   => 'sometimes|exists:vehicles,id',
            'service_id'   => 'sometimes|exists:services,id',
            'booking_date' => 'sometimes|date',
            'booking_time' => 'sometimes',
            'notes'        => 'nullable|string',
            'status'       => 'sometimes|in:pending,confirmed,completed,cancelled',
        ]);

        $booking->update($validated);

        return response()->json([
            'message' => 'Booking berhasil diperbarui.',
            'data'    => $booking->load(['vehicle', 'service']),
        ], 200);
    }

    /**
     * Hapus booking.
     */
    public function destroy(Request $request, string $id)
    {
        $booking = Booking::where('user_id', $request->user()->id)
            ->find($id);

        if (!$booking) {
            return response()->json([
                'message' => 'Data booking tidak ditemukan.'
            ], 404);
        }

        $booking->delete();

        return response()->json([
            'message' => 'Booking berhasil dihapus.'
        ], 200);
    }
}