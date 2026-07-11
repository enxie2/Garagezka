<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Menampilkan semua kendaraan milik user.
     */
    public function index()
    {
        $vehicles = Vehicle::where('user_id', auth()->id())
            ->orderByDesc('is_primary')
            ->latest()
            ->get();

        return response()->json($vehicles, 200);
    }

    /**
     * Menyimpan kendaraan baru.
     */
    public function store(Request $request)
    {
        $request->validate([
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer',
            'plate_number' => 'required|string|max:255',
            'color' => 'required|string|max:255',
        ]);

        $vehicle = Vehicle::create([
            'user_id' => auth()->id(),
            'brand' => $request->brand,
            'model' => $request->model,
            'year' => $request->year,
            'plate_number' => $request->plate_number,
            'color' => $request->color,
            'is_primary' => Vehicle::where('user_id', auth()->id())->count() === 0,
        ]);

        return response()->json([
            'message' => 'Data kendaraan berhasil ditambahkan.',
            'data' => $vehicle,
        ], 201);
    }

    /**
     * Menampilkan detail kendaraan.
     */
    public function show(string $id)
    {
        $vehicle = Vehicle::where('user_id', auth()->id())->find($id);

        if (!$vehicle) {
            return response()->json([
                'message' => 'Data kendaraan tidak ditemukan.',
            ], 404);
        }

        return response()->json($vehicle, 200);
    }

    /**
     * Mengubah kendaraan.
     */
    public function update(Request $request, string $id)
    {
        $vehicle = Vehicle::where('user_id', auth()->id())->find($id);

        if (!$vehicle) {
            return response()->json([
                'message' => 'Data kendaraan tidak ditemukan.',
            ], 404);
        }

        $request->validate([
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer',
            'plate_number' => 'required|string|max:255',
            'color' => 'required|string|max:255',
        ]);

        $vehicle->update([
            'brand' => $request->brand,
            'model' => $request->model,
            'year' => $request->year,
            'plate_number' => $request->plate_number,
            'color' => $request->color,
        ]);

        return response()->json([
            'message' => 'Data kendaraan berhasil diperbarui.',
            'data' => $vehicle,
        ], 200);
    }

    /**
     * Menghapus kendaraan.
     */
    public function destroy(string $id)
    {
        $vehicle = Vehicle::where('user_id', auth()->id())->find($id);

        if (!$vehicle) {
            return response()->json([
                'message' => 'Data kendaraan tidak ditemukan.',
            ], 404);
        }

        $vehicle->delete();

        return response()->json([
            'message' => 'Data kendaraan berhasil dihapus.',
        ], 200);
    }

    /**
     * Menjadikan kendaraan sebagai kendaraan utama.
     */
    public function setPrimary(Vehicle $vehicle)
    {
        if ($vehicle->user_id !== auth()->id()) {
            return response()->json([
                'message' => 'Unauthorized.'
            ], 403);
        }

        Vehicle::where('user_id', auth()->id())
            ->update([
                'is_primary' => false
            ]);

        $vehicle->update([
            'is_primary' => true
        ]);

        return response()->json([
            'message' => 'Kendaraan utama berhasil diperbarui.',
            'data' => $vehicle,
        ], 200);
    }
}