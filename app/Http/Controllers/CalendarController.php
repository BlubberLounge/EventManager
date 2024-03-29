<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Timetable;
use App\Enums\TimetableStatus;
use App\Enums\AcquaintanceStatus;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $futureDays = 30;
        $data = [];
        $data['acquaintances']['accepted'] = Auth::user()->acceptedAcquaintancesMerged();

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

        $users = Auth::user()->timetableAcquaintances();
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
                $dateFormated = $date->format('Y-m-d');
                $timetableDate = $timetableData->where('date', $dateFormated);

                // check if timetable table has any data for $date day
                // $sql = $user->timetableData->where('date', $dateFormated);
                // if($sql->isEmpty()) {
                if($timetableDate->isEmpty()) {
                    $tt = new Timetable;
                    $tt->user_id = $user;
                    $tt->date = $dateFormated;
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

        return view('calendar.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
