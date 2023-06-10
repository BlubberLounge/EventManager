<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="EventManager REST Api",
 *      description="BlubberLounge EventManager REST Api",
 *      @OA\Contact(
 *          email="admin@blubber-lounge.de"
 *      )
 * )
 *
 * @OA\Server(
 *      url=L5_SWAGGER_CONST_HOST,
 *      description="Current Server"
 * )
 *
 *
 * @OA\Tag(
 *     name="Users",
 *     description="User Endpoints"
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

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
