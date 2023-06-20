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
        if (!Schema::hasTable('user_settings_metadata'))
            Schema::create('user_settings_metadata', function (Blueprint $table)
            {
                $table->id();

                $table->string('name')
                    ->unique();
                $table->string('category')
                    ->default('default');
                $table->string('default')
                    ->nullable();
                $table->string('slug')
                    ->unique();
                $table->string('description')
                    ->nullable();

                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_settings_metadata');
    }
};
