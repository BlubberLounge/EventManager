<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Acquaintance;

class AcquaintanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bound = [
            'lower' => 3,
            'upper' => User::all()->count()-2
        ];

        Acquaintance::factory()
            ->count(rand($bound['lower'], $bound['upper']))
            ->create();
    }
}
