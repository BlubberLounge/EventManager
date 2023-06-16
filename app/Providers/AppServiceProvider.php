<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;

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
    }

    // public function provides()
    // {
    //     return ['qrcode'];
    // }
}
