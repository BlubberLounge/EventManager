<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\UtillityController;
use App\Http\Controllers\Api\v1\TimetableController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::get('/ping', [UtillityController::class, 'ping']);


Route::middleware(['auth:sanctum', 'verified'])->group(function ()
{
    // Route::get('/u', function (Request $request) {
    //     return $request->user();
    // });

    // Route::apiResource('user', UserController::class);

    Route::apiResource('timetable', TimetableController::class)
        ->except(['destroy']);
});
