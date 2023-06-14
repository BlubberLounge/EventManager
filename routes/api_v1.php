<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\UtillityController;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\UserTimetableController;
use App\Http\Controllers\Api\v1\TimetableController;
use App\Http\Controllers\Api\v1\AcquaintanceController;

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

    Route::apiResource('user', UserController::class)
        ->except(['destroy']);

    Route::apiResource('user.timetable', UserTimetableController::class)
        ->except(['store', 'update', 'destroy']);
    Route::get('/user/{user}/timetable/between/{dateFrom}/{dateTo}', [UserTimetableController::class, 'betweenDates'])->name('user.timetable.between');

    Route::apiResource('timetable', TimetableController::class)
        ->except(['destroy']);
    Route::get('/timetable/between/{dateFrom}/{dateTo}', [TimetableController::class, 'betweenDates'])->name('timetable.between');

    Route::apiResource('acquaintance', AcquaintanceController::class)
        ->except(['destroy']);
    Route::put('/acquaintance/byReceiver/{acquaintance}', [AcquaintanceController::class, 'updateByReceiver'])->name('user.timetable.updateByReceiver');
    Route::put('/acquaintance/byTransmitter/{acquaintance}', [AcquaintanceController::class, 'updateByTransmitter'])->name('user.timetable.updateByTransmitter');
    Route::put('/acquaintance/byReceiverOrTransmitter/{acquaintance}', [AcquaintanceController::class, 'updateByReceiverOrTransmitter'])->name('user.timetable.updateByReceiverOrTransmitter');
});
