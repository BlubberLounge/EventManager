<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Http\Requests\StoreFeedbackRequest;
use App\Http\Requests\UpdateFeedbackRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        // $exclude = [
        //     'sanctum',
        //     'ignition',
        //     'api',
        //     'docs',
        //     'password',
        //     'email',
        //     'register'
        // ];
        // Generate a option list based on alll registered routes
        // foreach(Route::getRoutes() as $route)
        // {
        //     if($route->methods()[0] != 'GET')
        //         continue;

        //     if(is_null($route->getName()))
        //         continue;

        //     // Exclusion list
        //     $path = $route->uri();
        //     $name = $route->getName();
        //     $skip = false;
        //     foreach($exclude as $e)
        //     {
        //         foreach(Str::of($path)->explode('/') as $pathPart)
        //             if(Str::contains($pathPart, $e)) {
        //                 $skip = true;
        //                 break;
        //             }

        //         if($skip)
        //             break;
        //     }

        //     if($skip)
        //         continue;

        //     $data['options'][$route->getName()] = $route->uri();
        // }

        $data['options'] = [
            'unkown' => 'Other',
            'registration' => 'Registration',
            'login' => 'Login',
            'home' => 'Home',
            'home.timetable' => 'Home > Timetable',
            'home.acquaintances' => 'Home > Acquaintances',
            'tickets' => 'Tickets',
            'events' => 'Events',
            'calendar' => 'Calendar',
            'profile' => 'Profile',
            'profile.account' => 'Profile > Account',
            'profile.settings' => 'Profile > Settings',

        ];


        return view('feedback.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFeedbackRequest $request)
    {
        $currentDevice = Auth::user()->currentDevice();
        // dd($currentDevice);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeedbackRequest $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
