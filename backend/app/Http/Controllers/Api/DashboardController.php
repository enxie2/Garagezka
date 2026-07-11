<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Notification;
use App\Models\Service;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user()->load([
            'vehicles',
            'bookings',
            'notifications'
        ]);

        /*
        |--------------------------------------------------------------------------
        | Dashboard Admin
        |--------------------------------------------------------------------------
        */

        if ($user->role === 'admin') {

            return response()->json([
                'status' => true,

                'user' => $user,

                'summary' => [

                    'total_users' => User::count(),

                    'total_services' => Service::count(),

                    'total_vehicles' => Vehicle::count(),

                    'total_bookings' => Booking::count(),

                    'pending_bookings' => Booking::where(
                        'status',
                        'pending'
                    )->count(),

                    'confirmed_bookings' => Booking::where(
                        'status',
                        'confirmed'
                    )->count(),

                    'completed_bookings' => Booking::where(
                        'status',
                        'completed'
                    )->count(),

                    'cancelled_bookings' => Booking::where(
                        'status',
                        'cancelled'
                    )->count(),

                    'total_notifications' => Notification::count(),

                ],

                'chart' => [

                    'pending' => Booking::where(
                        'status',
                        'pending'
                    )->count(),

                    'confirmed' => Booking::where(
                        'status',
                        'confirmed'
                    )->count(),

                    'completed' => Booking::where(
                        'status',
                        'completed'
                    )->count(),

                    'cancelled' => Booking::where(
                        'status',
                        'cancelled'
                    )->count(),

                ],

                'today_summary' => [

                    'today_bookings' => Booking::whereDate(
                        'created_at',
                        today()
                    )->count(),

                    'today_pending' => Booking::whereDate(
                        'created_at',
                        today()
                    )
                    ->where('status', 'pending')
                    ->count(),

                    'today_completed' => Booking::whereDate(
                        'created_at',
                        today()
                    )
                    ->where('status', 'completed')
                    ->count(),

                    'today_cancelled' => Booking::whereDate(
                        'created_at',
                        today()
                    )
                    ->where('status', 'cancelled')
                    ->count(),

                ],

                'latest_bookings' => Booking::with([
                    'user',
                    'vehicle',
                    'service'
                ])
                ->latest()
                ->take(5)
                ->get(),

            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Dashboard User
        |--------------------------------------------------------------------------
        */

        $primaryVehicle = Vehicle::where('user_id', $user->id)
            ->where('is_primary', true)
            ->first();

        $latestBooking = Booking::with(['service'])
            ->where('user_id', $user->id)
            ->latest()
            ->first();

        return response()->json([
            'status' => true,

            'user' => $user,

            'summary' => [

                'total_services' => Service::count(),

                'total_vehicles' => $user->vehicles->count(),

                'total_bookings' => $user->bookings->count(),

                'pending_bookings' => Booking::where(
                    'user_id',
                    $user->id
                )
                ->where('status', 'pending')
                ->count(),

                'completed_bookings' => Booking::where(
                    'user_id',
                    $user->id
                )
                ->where('status', 'completed')
                ->count(),

                'total_notifications' => $user->notifications->count(),

            ],

            'primary_vehicle' => $primaryVehicle,

            'latest_booking' => $latestBooking,

        ]);
    }
}