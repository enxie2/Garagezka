<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::insert([

            [
                'service_name' => 'Ganti Oli',
                'description' => 'Penggantian oli mesin berkualitas.',
                'price' => 80000,
                'estimated_time' => '30 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Tune Up',
                'description' => 'Penyetelan mesin agar performa kembali optimal.',
                'price' => 150000,
                'estimated_time' => '60 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Servis CVT',
                'description' => 'Pembersihan dan pengecekan CVT.',
                'price' => 120000,
                'estimated_time' => '45 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Servis Lengkap',
                'description' => 'Pemeriksaan seluruh komponen motor.',
                'price' => 250000,
                'estimated_time' => '120 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Overhaul',
                'description' => 'Perbaikan mesin secara menyeluruh.',
                'price' => 700000,
                'estimated_time' => '1 Hari',
                'is_active' => true,
            ],

            [
                'service_name' => 'Ban & Roda',
                'description' => 'Pengecekan dan penggantian ban.',
                'price' => 50000,
                'estimated_time' => '20 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Sistem Pengereman',
                'description' => 'Servis rem depan dan belakang.',
                'price' => 100000,
                'estimated_time' => '45 Menit',
                'is_active' => true,
            ],

            [
                'service_name' => 'Kelistrikan',
                'description' => 'Pengecekan aki, lampu, starter, dan pengapian.',
                'price' => 80000,
                'estimated_time' => '30 Menit',
                'is_active' => true,
            ],

        ]);
    }
}