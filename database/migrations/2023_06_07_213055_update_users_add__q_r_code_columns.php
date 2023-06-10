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
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('locked')
                ->default(false)
                ->comment('User Account is locked may be temporarly banned / disabled')
                ->after('remember_token');
            $table->string('qrcode', 255)
                ->comment('QRCode for adding acquaintances')
                ->nullable()
                ->after('img');
            $table->timestamp('qrcode_created_time')
                ->comment('time when QrCode got created')
                ->nullable()
                ->after('qrcode');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('locked');
            $table->dropColumn('qrcode');
            $table->dropColumn('qrcode_created_at');
        });
    }
};
