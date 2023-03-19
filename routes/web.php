<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view('index');
});


/* ==============================
 * Mockup Views
 * ============================== */
Route::prefix('mockupV0')->group(function () {
    Route::view('', 'mockup-V0.index')->name('mv0-index');
    Route::view('/tickets', 'mockup-V0.ticket.index')->name('mv0-tickets');
    Route::view('/calendar', 'mockup-V0.calendar.index')->name('mv0-calendar');
    Route::view('/profile', 'mockup-V0.profile.index')->name('mv0-profile');
});


// Auth::routes(['verify' => true]);

/*
 * email verification routes
 */
// Route::get('/email', function () {
//     return view('auth.verify');
// })->middleware('auth')->name('verification.notice');

// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return redirect('/home');
// })->middleware(['auth'])->name('verification.verify');

// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();

//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');


/*
 * protected routes
 */
/*Route::middleware(['auth', 'verified'])->group(function ()
{
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/battery', [BatteryController::class, 'index'])->name('battery');
    Route::get('/event', [EventController::class, 'index'])->name('event');
    Route::get('/audit-log', [AuditLogController::class, 'index'])->name('audit-log');

    Route::resource('/hookah', HookahController::class);
    Route::resource('/user', UserController::class);
});*/
