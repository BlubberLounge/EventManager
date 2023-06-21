<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Model::unguard();

        $this->call([
            // AcquaintanceSeeder::class
            PermissionsSeeder::class,
            RolesSeeder::class,
            ConnectRelationshipsSeeder::class,
            //
            UserSeeder::class,
            UserSettingMetadataSeeder::class,
            UserSettingSeeder::class,
        ]);

        Model::reguard();
    }
}
