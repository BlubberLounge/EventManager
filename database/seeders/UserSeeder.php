<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // always create one root user, that root user has always to be verified
        User::create([
            'name' => 'Admin',
            'firstname' => 'Blubber',
            'lastname' => 'Lounge',
            'email' => 'admin@blubber-lounge.de',
            'telefon_mobil' => '+49 152 33869318',
            'dob' => date('Y-m-d H:i:s', strtotime('02.11.1999')),
            'email_verified_at' => now(),
            'password' => Hash::make('blem-r00t'),
        ]);

        User::factory()
            ->count(rand(10, 18))
            ->create();
    }
}
