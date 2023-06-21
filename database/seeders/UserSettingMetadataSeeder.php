<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App;
use App\Models\UserSettingsMetadata;


class UserSettingMetadataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
         * Metadata Types
         *
         */
        $MetadataItems = [
            // USER SETTINGS VIEW - Privacy and security
            [
                'name'          => 'showMeOnHomeView',
                'category'      => 'timetable',
                'default'       => 'false',
                'slug'          => 'timetable.showMeOnHomeView',
                'description'   => 'wheter to show my availabillity on other users timetable',
            ],

            // USER SETTINGS VIEW - Notifications
            [
                'name'          => 'sendEmails',
                'category'      => 'notifications',
                'default'       => 'true',
                'slug'          => 'notifications.sendEmails',
                'description'   => '',
            ],

            // USER SETTINGS VIEW - Devices
            [
                'name'          => '',
                'category'      => '',
                'default'       => '',
                'slug'          => '',
                'description'   => '',
            ],

            // USER SETTINGS VIEW - Presets
            [
                'name'          => '',
                'category'      => '',
                'default'       => '',
                'slug'          => '',
                'description'   => '',
            ],

            // USER SETTINGS VIEW - Language
            [
                'name'          => 'language',
                'category'      => 'language',
                'default'       => 'de',
                'slug'          => 'language.language',
                'description'   => '',
            ],
        ];

        if(App::environment('local', 'development'))
            $MetadataItems[] = [
                // DEBUG - Testing
                'name'      => 'test',
                'category'  => 'debug',
                'default'   => '',
                'slug'      => 'debug.test',
                'description'   => 'This should not be seen on a PROD System'
            ];

        /*
         * Add Metadata Items
         *
         */
        foreach ($MetadataItems as $MetadataItem) {
            if ($MetadataItem['name'] === null)
                continue;

            $newMetadataItem = UserSettingsMetadata::where('slug', $MetadataItem['slug'])->first();

            if ($newMetadataItem === null)
                $newMetadataItem = UserSettingsMetadata::create([
                    'name'          => $MetadataItem['name'],
                    'category'      => $MetadataItem['category'],
                    'default'       => $MetadataItem['default'],
                    'slug'          => $MetadataItem['slug'],
                    'description'   => $MetadataItem['description'],
                ]);
        }
    }
}
