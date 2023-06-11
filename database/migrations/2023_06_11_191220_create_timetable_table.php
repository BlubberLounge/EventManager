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
        Schema::create('timetable', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained('users')
                ->comment('the user that initialised the friend request')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamp('time_from')  // $table->time('time_from')
                ->comment('may be used in a later version')
                ->nullable();
            $table->timestamp('time_to')    // $table->time('time_to')
                ->comment('may be used in a later version')
                ->nullable();
            $table->date('date')
                ->comment('date')
                ->nullable();   // ->default(now())
            $table->enum('status', ['available', 'maybe', 'noTime'])
                ->default('available')
                ->comment('available/maybe/noTime');
            $table->timestamps();

            // composite unique key
            $table->unique(['user_id', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timetable');
    }
};
