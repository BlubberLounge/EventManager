<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data = [];
        $data['acquaintances']['pending'] = Auth::user()->pendingAcquaintances;
        $data['acquaintances']['accepted'] = Auth::user()->acceptedAcquaintances;

        $data['timeTable']['users'] = $data['acquaintances']['accepted'];
        $data['timeTable']['users'][] = Auth::user();

        return view('mockup-V0.home.index', $data);
    }
}
