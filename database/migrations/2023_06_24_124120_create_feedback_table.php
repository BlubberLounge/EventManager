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
        if(!Schema::hasTable('feedback'))
            Schema::create('feedback', function (Blueprint $table)
            {
                $table->id();

                $table->foreignId('user_id')
                    ->constrained('users')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                $table->enum('type', ['general', 'question', 'informative', 'enhancement'])
                    ->default('general');
                $table->string('subject')
                    ->comment('message title/subject');
                $table->text('message');
                $table->string('area')
                    ->comment('Where? - page/view/url/site')
                    ->nullable();

                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
