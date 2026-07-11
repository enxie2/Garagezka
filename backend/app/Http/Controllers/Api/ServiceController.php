<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Menampilkan semua layanan yang aktif.
     */
    public function index()
    {
        $services = Service::where('is_active', true)
            ->orderBy('service_name')
            ->get();

        return response()->json($services, 200);
    }

    /**
     * Menyimpan layanan baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'service_name'   => 'required|string|max:255',
            'description'    => 'nullable|string',
            'price'          => 'required|numeric|min:0',
            'estimated_time' => 'required|string|max:100',
            'is_active'      => 'boolean',
        ]);

        $service = Service::create($validated);

        return response()->json([
            'message' => 'Data layanan berhasil ditambahkan.',
            'data' => $service,
        ], 201);
    }

    /**
     * Detail layanan.
     */
    public function show(string $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'message' => 'Data layanan tidak ditemukan.'
            ], 404);
        }

        return response()->json($service, 200);
    }

    /**
     * Update layanan.
     */
    public function update(Request $request, string $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'message' => 'Data layanan tidak ditemukan.'
            ], 404);
        }

        $validated = $request->validate([
            'service_name'   => 'sometimes|string|max:255',
            'description'    => 'nullable|string',
            'price'          => 'sometimes|numeric|min:0',
            'estimated_time' => 'sometimes|string|max:100',
            'is_active'      => 'sometimes|boolean',
        ]);

        $service->update($validated);

        return response()->json([
            'message' => 'Data layanan berhasil diperbarui.',
            'data' => $service,
        ], 200);
    }

    /**
     * Hapus layanan.
     */
    public function destroy(string $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'message' => 'Data layanan tidak ditemukan.'
            ], 404);
        }

        $service->delete();

        return response()->json([
            'message' => 'Data layanan berhasil dihapus.'
        ], 200);
    }
}