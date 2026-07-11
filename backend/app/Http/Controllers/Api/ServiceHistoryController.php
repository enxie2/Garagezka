<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ServiceHistory;
use Illuminate\Http\Request;

class ServiceHistoryController extends Controller
{
    /**
     * Menampilkan semua riwayat servis.
     */
    public function index()
    {
        return response()->json(
            ServiceHistory::with('booking')->get(),
            200
        );
    }

    /**
     * Menyimpan riwayat servis baru.
     */
    public function store(Request $request)
    {
        $history = ServiceHistory::create($request->all());

        return response()->json([
            'message' => 'Riwayat servis berhasil ditambahkan.',
            'data' => $history
        ], 201);
    }

    /**
     * Menampilkan detail riwayat servis.
     */
    public function show(string $id)
    {
        $history = ServiceHistory::with('booking')->find($id);

        if (!$history) {
            return response()->json([
                'message' => 'Data riwayat servis tidak ditemukan.'
            ], 404);
        }

        return response()->json($history, 200);
    }

    /**
     * Mengubah riwayat servis.
     */
    public function update(Request $request, string $id)
    {
        $history = ServiceHistory::find($id);

        if (!$history) {
            return response()->json([
                'message' => 'Data riwayat servis tidak ditemukan.'
            ], 404);
        }

        $history->update($request->all());

        return response()->json([
            'message' => 'Riwayat servis berhasil diperbarui.',
            'data' => $history
        ], 200);
    }

    /**
     * Menghapus riwayat servis.
     */
    public function destroy(string $id)
    {
        $history = ServiceHistory::find($id);

        if (!$history) {
            return response()->json([
                'message' => 'Data riwayat servis tidak ditemukan.'
            ], 404);
        }

        $history->delete();

        return response()->json([
            'message' => 'Riwayat servis berhasil dihapus.'
        ], 200);
    }
}