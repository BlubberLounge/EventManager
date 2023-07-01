<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Mail;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register any application services.
     */
    public function register(): void
    {
        // $this->app->bind(chillerlan\QRCode\QRCode::class, function (Application $app) {

        //     $qrcode = new chillerlan\QRCode\QRCode();
        //     return $qrcode;
        // });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::useBootstrap();

        if ($this->app->environment('local')) {
            Mail::alwaysTo(env('MAIL_TO_DEVELOPMENT', 'admin@blubber-lounge.de'));
        }
    }

    // public function provides()
    // {
    //     return ['qrcode'];
    // }
}
