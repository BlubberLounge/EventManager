<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\HomeController;

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
    //return view('index');
    return redirect()->route('home');
});

Auth::routes(['verify' => true]);

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
Route::middleware(['auth', 'verified'])->group(function ()
{
    Route::get('/home', [HomeController::class, 'index'])->name('home');


    /* ==============================
    * Mockup Views
    * ============================== */
    Route::prefix('mockupV0')->group(function () {
        Route::view('/home', 'mockup-V0.home.index')->name('mv0-index');
        Route::view('/tickets', 'mockup-V0.ticket.index')->name('mv0-tickets');
        Route::view('/calendar', 'mockup-V0.calendar.index')->name('mv0-calendar');
        Route::view('/profile', 'mockup-V0.profile.index')->name('mv0-profile');

        Route::view('/tickets/done', 'mockup-V0.ticket.done')->name('mv0-tickets.done');
        Route::view('/tickets/open', 'mockup-V0.ticket.open')->name('mv0-tickets.open');
        Route::view('/tickets/send', 'mockup-V0.ticket.send')->name('mv0-tickets.send');
    });
});
