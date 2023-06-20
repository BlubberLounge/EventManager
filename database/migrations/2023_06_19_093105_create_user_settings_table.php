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
        if (!Schema::hasTable('user_settings'))
            Schema::create('user_settings', function (Blueprint $table)
            {
                $table->id();

                $table->foreignId('user_settings_metadata_id')
                    ->constrained('user_settings_metadata')
                    ->comment('The setting that corresponds to this meta information')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                $table->foreignId('user_id')
                    ->constrained('users')
                    ->comment('The user that corresponds to this setting')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                $table->string('value')
                    ->nullable();

                $table->timestamps();

                // composite unique key
                $table->unique(['user_settings_metadata_id', 'user_id']);
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_settings');
    }
};
