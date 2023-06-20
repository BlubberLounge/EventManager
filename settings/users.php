<?php

use DarkGhostHunter\Laraconfig\Facades\Setting;


/*
 *  PRIVACY AND SECURITY - SETTINGS
 */
Setting::name('showOnTimetable')
    ->boolean()
    ->default(true)
    ->group('privacyAndSecurity');

Setting::name('showAge')
    ->boolean()
    ->default(true)
    ->group('privacyAndSecurity');


/*
 *  NOTIFICATION - SETTINGS
 */
Setting::name('sendEmails')
    ->boolean()
    ->default(true)
    ->group('notification');

Setting::name('notifyMeWhenDeviceIsHijacked')
    ->boolean()
    ->default(true)
    ->group('notification');


/*
 *  DEVICE - SETTINGS
 */
Setting::name('trackMyDevices')
    ->boolean()
    ->default(true)
    ->group('device');


/*
 *  LANGUAGE - SETTINGS
 */
Setting::name('language')
    ->string()
    ->default('de')
    ->group('language');
