<?php

namespace App\Classes;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Browser;

use App\Models\Device;


class DeviceTracker
{


    public static function detect()
    {

        $device = Device::where('user_id', Auth::user()->id)
            ->where('device_type', Str::lower(Browser::deviceType()))
            ->where('device_family', Browser::deviceFamily())
            ->where('device_model', Browser::deviceModel())
            ->where('browser', Browser::browserName())
            ->where('platform', Browser::platformName())
            ->where('ip', Request::ip())
            ->first();

        if(is_null($device)) {
            $device = new Device;
            $device->user_id = Auth::user()->id;
            $device->device_type = Str::lower(Browser::deviceType());
            $device->device_family = Browser::deviceFamily();
            $device->device_model = Browser::deviceModel();
            $device->device_grade = Browser::mobileGrade();

            $device->browser = Browser::browserName();
            $device->browser_family = Browser::browserFamily();
            $device->browser_version = Browser::browserVersion();

            $device->platform = Browser::platformName();
            $device->platform_family = Browser::platformFamily();
            $device->platform_version = Browser::platformVersion();

            $device->data = [
                'ip_addresses' => Request::ips(),
                'user_agent' => Str::limit(Request::header('user-agent'), 512),
            ];
            $device->ip = Request::ip();
            $device->last_active = now();

            $device->save();
        }

        return $device;
    }

    /**
     *
     */
    public static function detectLogin()
    {
        if(!Auth::guard('web')->check())
            return;

        $d = self::detect();
        $d->login_count += 1;
        $d->save();
    }
};
