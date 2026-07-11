<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Menampilkan seluruh data user.
     */
    public function index()
    {
        $users = User::select(
                'id',
                'name',
                'email',
                'phone',
                'address',
                'role',
                'created_at'
            )
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Daftar user berhasil diambil.',
            'data' => $users
        ], 200);
    }

    /**
     * Menyimpan user baru.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Menampilkan detail user.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Mengubah data user.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Menghapus user.
     */
    public function destroy(User $user)
    {
        //
    }
}