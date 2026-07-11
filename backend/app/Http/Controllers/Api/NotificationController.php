<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Menampilkan semua notifikasi milik user yang login.
     */
    public function index(Request $request)
    {
        $notifications = Notification::where(
            'user_id',
            $request->user()->id
        )
        ->latest()
        ->get();

        return response()->json($notifications, 200);
    }

    /**
     * Menampilkan detail notifikasi.
     */
    public function show(Request $request, string $id)
    {
        $notification = Notification::where(
            'user_id',
            $request->user()->id
        )->find($id);

        if (!$notification) {
            return response()->json([
                'message' => 'Notifikasi tidak ditemukan.'
            ], 404);
        }

        return response()->json($notification, 200);
    }

    /**
     * Menandai notifikasi sebagai sudah dibaca.
     */
    public function update(Request $request, string $id)
    {
        $notification = Notification::where(
            'user_id',
            $request->user()->id
        )->find($id);

        if (!$notification) {
            return response()->json([
                'message' => 'Notifikasi tidak ditemukan.'
            ], 404);
        }

        $notification->update([
            'is_read' => true,
        ]);

        return response()->json([
            'message' => 'Notifikasi telah dibaca.',
            'data' => $notification
        ], 200);
    }

    /**
     * Menghapus notifikasi.
     */
    public function destroy(Request $request, string $id)
    {
        $notification = Notification::where(
            'user_id',
            $request->user()->id
        )->find($id);

        if (!$notification) {
            return response()->json([
                'message' => 'Notifikasi tidak ditemukan.'
            ], 404);
        }

        $notification->delete();

        return response()->json([
            'message' => 'Notifikasi berhasil dihapus.'
        ], 200);
    }
}