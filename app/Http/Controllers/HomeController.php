<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Classes\TimetableStatus;
use App\Models\Timetable;

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
        $futureDays = 30;
        $data = [];
        $data['acquaintances']['pending'] = Auth::user()->pendingAcquaintances;
        $data['acquaintances']['accepted'] = Auth::user()->acceptedAcquaintances;

        $data['timeTable']['head'] = [];
        $data['timeTable']['monthCut'] = null;
        $data['timeTable']['body'] = [];
        $data['timeTable']['result'] = array_fill(0, $futureDays+1, 0);

        for($i = 0; $i <= $futureDays; $i++)
        {
            $headData = [];
            $date = now()->addDays($i);

            // data for TimeTable view
            $headData = $date;

            if(is_null($data['timeTable']['monthCut']) && now()->month != $date->month)
                $data['timeTable']['monthCut'] = $i;

            $data['timeTable']['head'][] = $headData;
        }

        $users = $data['acquaintances']['accepted'];
        $users[] = Auth::user();

        foreach($users as $user)
        {
            $userData[] = null;
            $userData['user'] = $user;
            $userData['days'] = [];
            // only one DB query request solution
            $timetableData = $user->timetableData->whereBetween('date', [now()->subDay(), now()->addDays($futureDays)]);

            for($i = 0; $i <= $futureDays; $i++)
            {
                $date = now()->addDays($i);
                $timetableDate = $timetableData->where('date', $date->format('Y-m-d'));

                // check if timetable table has any data for $date day
                // $sql = $user->timetableData->where('date', $date->format('Y-m-d'));
                // if($sql->isEmpty()) {
                if($timetableDate->isEmpty()) {
                    $tt = new Timetable;
                    $tt->user_id = $user;
                    $tt->date = $date;
                    $tt->status = TimetableStatus::NO_TIME;
                    $userData['days'][] = $tt;
                } else {
                    $s = $timetableDate->first();
                    $userData['days'][] = $s;

                    // count available users
                    if($s->status != TimetableStatus::NO_TIME)
                        $data['timeTable']['result'][$i] += 1;
                }
            }

            $data['timeTable']['body'][] = $userData;
        }

        return view('home.index', $data);
    }
}
