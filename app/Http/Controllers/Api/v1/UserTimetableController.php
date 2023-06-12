<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\v1\Controller;
use Illuminate\Http\Request;

use App\Models\User;

class UserTimetableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * @OA\Get(
     *      path="/user/{userID}/timetable",
     *      operationId="getUserAllTimetable",
     *      tags={"Users"},
     *      summary="Timetable index",
     *      description="Display a listing of the resource.",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *       @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function index(string $id)
    {
        $data = User::find($id)->timetableData->all();
        return $this->sendResponse($data, 'ok');
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     //
    // }

    /**
     * Display the specified resource.
     */
    /**
     * @OA\Get(
     *      path="/user/{userID}/timetable/{timetableID}",
     *      operationId="getUserTimetable",
     *      tags={"Users"},
     *      summary="Timetable show",
     *      description="Display the specified resource.",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *       @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function show(string $userId, string $timetableId)
    {
        $data = User::find($userId)->timetableData->find($timetableId);
        return $this->sendResponse($data, 'ok');
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $data = "";
    //     return $this->sendResponse($data, 'ok');
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(string $id)
    // {
    //     //
    // }
}
