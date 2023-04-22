<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display the resource.
     */
    public function show()
    {
        $data['user'] = Auth::user();
        return view('user.index', $data);
    }

    /**
     * Show the form for editing the resource.
     */
    public function edit()
    {
        $data['user'] = Auth::user();
        return view('user.edit', $data);
    }

    /**
     * Update the resource in storage.
     */
    public function update(UpdateUserRequest $request)
    {
        $u = Auth::user();
        $u->name = $request->name ?? $u->name;
        $u->firstname = $request->firstname ?? $u->firstname;
        $u->lastname = $request->lastname ?? $u->firstname;
        $u->email = $request->email ?? $u->email;
        $u->password = $request->password ? Hash::make($request->password) : $u->password;

        $u->save();

        return redirect()->route('user.show', ['user' => Auth::user()])
            ->with('success','User has been updated successfully');
    }
}