<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('devices', function (Blueprint $table)
        {
            $table->id();

            $table->enum('device_type', ['unkown', 'mobile', 'tablet', 'desktop', 'bot'])
                ->default('unkown');
            $table->string('browser')
                ->nullable();
            $table->string('browser_version')
                ->nullable();
            $table->string('platform')
                ->nullable();
            $table->string('platform_version')
                ->nullable();
            $table->ipAddress('ip')
                ->index();
            $table->json('data')
                ->nullable();
            $table->timestamp('last_active')
                ->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
