<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    // use AuthorizesRequests, ValidatesRequests;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // is already set in api_v1.php routing file wold interrupt api AuthProcess
        // $this->middleware('auth:sanctum');
    }
}
