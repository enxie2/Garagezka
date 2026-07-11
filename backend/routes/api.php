<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\VehicleController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\AdminBookingController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\ServiceHistoryController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    */

    Route::get('/user', [AuthController::class, 'user']);

    Route::put('/user/profile', [
        AuthController::class,
        'updateProfile'
    ]);

    Route::put('/user/password', [
        AuthController::class,
        'changePassword'
    ]);

    Route::post('/logout', [AuthController::class, 'logout']);

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get('/dashboard', [DashboardController::class, 'index']);

    /*
    |--------------------------------------------------------------------------
    | Vehicles
    |--------------------------------------------------------------------------
    */

    Route::apiResource('vehicles', VehicleController::class);

    Route::post('/vehicles/{vehicle}/set-primary', [
        VehicleController::class,
        'setPrimary'
    ]);

    /*
    |--------------------------------------------------------------------------
    | Services
    |--------------------------------------------------------------------------
    */

    Route::apiResource('services', ServiceController::class);

    /*
    |--------------------------------------------------------------------------
    | Bookings (User)
    |--------------------------------------------------------------------------
    */

    Route::apiResource('bookings', BookingController::class);

    /*
    |--------------------------------------------------------------------------
    | Bookings (Admin)
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/bookings', [
        AdminBookingController::class,
        'index'
    ]);

    Route::put('/admin/bookings/{booking}/confirm', [
        AdminBookingController::class,
        'confirm'
    ]);

    Route::put('/admin/bookings/{booking}/complete', [
        AdminBookingController::class,
        'complete'
    ]);

    Route::put('/admin/bookings/{booking}/cancel', [
        AdminBookingController::class,
        'cancel'
    ]);

    /*
    |--------------------------------------------------------------------------
    | Notifications
    |--------------------------------------------------------------------------
    */

    Route::apiResource('notifications', NotificationController::class);

    /*
    |--------------------------------------------------------------------------
    | Service Histories
    |--------------------------------------------------------------------------
    */

    Route::apiResource('service-histories', ServiceHistoryController::class);

    /*
    |--------------------------------------------------------------------------
    | Users (Admin)
    |--------------------------------------------------------------------------
    */

    Route::apiResource('users', UserController::class);

});