<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\v1\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use App\Models\User;

class AuthController extends Controller
{
	/**
	 * Generate sanctum token on successful login
	 */
	public function login(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'password' => 'required',
            // 'device_name' => 'required',
        ]);

		$user = User::where('name', $request->name)->first();

		if (!$user || !Hash::check($request->password, $user->password)) {
			throw ValidationException::withMessages([
				'email' => ['The provided credentials are incorrect.'],
			]);
		}

		return response()->json([
			'user' => $user,
			'access_token' => $user->createToken($request->name)->plainTextToken
		], 200);
	}

    /**
	 * Revoke token; only remove token that is used to perform logout (i.e. will not revoke all tokens)
	 */
	public function logout(Request $request) {

		// Revoke the token that was used to authenticate the current request
		$request->user()->currentAccessToken()->delete();
		//$request->user->tokens()->delete(); // use this to revoke all tokens (logout from all devices)
		return response()->json(null, 200);
	}
}
