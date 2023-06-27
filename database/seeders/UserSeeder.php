<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Feedback;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = config('roles.models.permission')::all();

        // always create one root user, that root user has always to be verified
        if(User::where('email', 'admin+EventManager@blubber-lounge.de')->first() === null) {
            $rootUser = User::create([
                'name' => 'Admin',
                'firstname' => 'Blubber',
                'lastname' => 'Lounge',
                'email' => 'admin+EventManager@blubber-lounge.de',
                'telefon_mobil' => '+49 152 33869318',
                'dob' => date('Y-m-d H:i:s', strtotime('02.11.1999')),
                'email_verified_at' => now(),
                'password' => Hash::make('blem-r00t'),
            ]);

            $rootUser->attachRole(config('roles.models.role')::where('name', 'Root')->first());

            // foreach ($permissions as $permission)
            //     $adminUser->attachPermission($permission);
        }

        $userRole = config('roles.models.role')::where('name', 'User')->first();
        User::factory()
            ->count(rand(10, 18))
            ->has(
                Feedback::factory()
                    ->count(rand(0, 2))
            )
            ->create()
            ->each( function($user) use ($userRole) {
                $user->attachRole($userRole);
            });
    }
}
