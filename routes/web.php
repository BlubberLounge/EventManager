<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\FeedbackController;

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

if (App::environment('local')) {
    Auth::routes(['verify' => true]);
} else {
    Auth::routes(['verify' => true, 'register' => false]);
}

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
    Route::view('/tickets', 'ticket.index')->name('tickets');
    Route::view('/host', 'host.index')->name('host');
    Route::view('/calendar', 'calendar.index')->name('calendar');

    Route::singleton('user', UserController::class);
    // route: /user/*
    // name: user.*
    Route::prefix('user')->group(function () {
        Route::name('user.')->group(function () {
            Route::get('/device', [DeviceController::class, 'index'])->name('device.index');
            Route::get('/QRCode', [UserController::class, 'qrCode'])->name('qrCode');
            Route::get('/acquaintanceAdd', [UserController::class, 'acquaintanceAdd'])
                ->name('acquaintanceAdd')
                ->middleware('signed');
            Route::put('/updateAcquaintances', [UserController::class, 'updateAcquaintances'])
                ->name('updateAcquaintances')
                ->middleware('signed');

            Route::resource('feedback', FeedbackController::class)
                ->except('destroy');
        });
    });

    // route: /tickets/*
    // name: tickets.*
    Route::prefix('tickets')->group(function () {
        Route::name('tickets.')->group(function () {
            Route::view('/accepted', 'ticket.accepted')->name('accepted');
            Route::view('/pending', 'ticket.pending')->name('pending');
            Route::view('/done', 'ticket.done')->name('done');
        });
    });

    /**
     * DEBUG Routes
     */
    // if (App::environment(['local', 'development'])) {

    // }

    Route::group(['middleware' => ['level:5']], function ()
    {
        Route::get('/debug/auditLog', [AuditController::class, 'index'])->name('debug.AuditLog');
        Route::view('/defaultComponents', 'debug.defaultComponents')->name('defaultComponents');
    });


    /* ==============================
    * Mockup Views
    * ============================== */
    /*
    Route::prefix('mockupV0')->group(function () {
        Route::get('/home', [HomeController::class, 'index'])->name('mv0-index');
        Route::view('/tickets', 'ticket.index')->name('mv0-tickets');
        Route::view('/calendar', 'calendar.index')->name('mv0-calendar');
        Route::view('/settings', 'settings.index')->name('mv0-settings');

        Route::view('/tickets/done', 'ticket.done')->name('mv0-tickets.done');
        Route::view('/tickets/open', 'ticket.open')->name('mv0-tickets.open');
        Route::view('/tickets/send', 'ticket.send')->name('mv0-tickets.send');
    });
    */
});

// Route::fallback(function () {
//     // ...
// });
