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
        if(Schema::hasTable('users'))
            Schema::table('users', function (Blueprint $table)
            {
                $table->string('name')
                    ->unique()
                    ->comment('unique username of the user')
                    ->change();
                $table->string('firstname')
                    ->comment('users firstname')
                    ->after('name');
                $table->string('lastname')
                    ->comment('users lastname/sirname')
                    ->after('firstname');
                $table->string('telefon_mobil')
                    ->comment('telefonnumber')
                    ->after('email');
                $table->timestamp('dob')
                    ->comment('date of birth')
                    ->after('telefon_mobil')
                    ->nullable();
                $table->string('img')
                    ->comment('users profile picture')
                    ->nullable()
                    ->after('dob');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if(Schema::hasTable('users'))
            Schema::table('users', function (Blueprint $table)
            {
                $table->string('name')->change();
                $table->dropColumn('firstname');
                $table->dropColumn('lastname');
                $table->dropColumn('telefon_mobil');
                $table->dropColumn('dob');
                $table->dropColumn('img');
            });
    }
};
