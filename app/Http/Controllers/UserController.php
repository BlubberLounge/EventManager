<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use chillerlan\QRCode\{QRCode, QROptions};

use App\Helpers\FileHelper;
use App\Enums\AcquaintanceStatus;
use App\Models\User;
use App\Models\Acquaintance;

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
        $storagePathOriginal = storage_path('/app/private/uploads/user/original');
        $storagePathCropped = '/public/uploads/user';

        // Original image may be used later for further cropping
        if($request->has('originalImage')) {
            $originalImage = $request->file('originalImage');
            $originalImageFilename = time().'_'.Auth::user()->id.'.' . $originalImage->extension();
            $originalImagepath = $originalImage->move($storagePathOriginal, $originalImageFilename);
        }

        // Cropped image
        if($request->has('croppedImage')) {
            $croppedImagePath = FileHelper::fromBase64($request->croppedImage)->storePublicly($storagePathCropped);
            $croppedImagePath = Str::replace('public', 'storage', $croppedImagePath);
        }

        $u = Auth::user();
        $u->name = $request->name ?? $u->name;
        $u->firstname = $request->firstname ?? $u->firstname;
        $u->lastname = $request->lastname ?? $u->firstname;
        $u->email = $request->email ?? $u->email;
        $u->telefon_mobil = $request->telefon_mobil ?? $u->telefon_mobil;
        $u->img = $croppedImagePath ?? $u->img;
        $u->qrcode = $request->qrcode ?? $u->qrcode;
        $u->password = $request->password ? Hash::make($request->password) : $u->password;
        $u->locked = $request->locked ?? $u->locked;

        $u->save();

        return redirect()->route('user.show')
            ->with('success','User has been updated successfully');
    }

    /**
     * Display the AcquaintanceAdd view
     */
    public function acquaintanceAdd(Request $request)
    {
        $data['user'] = User::findOrFail($request->u);
        $data['isSignatureValid'] = $request->hasValidSignature();
        $data['signedRoute'] = URL::temporarySignedRoute('user.updateAcquaintances', now()->addMinutes(3), ['u' => $request->u]);

        return view('user.acquaintanceAdd', $data);
    }

    /**
     * Update the user acquaintances
     */
    public function updateAcquaintances(Request $request)
    {
        if(Auth::user()->id == $request->u) // ToDo: better exception handling
        return redirect()->route('home')
                ->with('error','Error: You cannot send/receive an acquaintance request from yourself');
            // abort(400, 'User can\'t send/receive an acquaintance request from itself');

        $acq = new Acquaintance;
        $acq->transmitter_user_id = Auth::user()->id;
        $acq->receiver_user_id = $request->u;
        $acq->status = AcquaintanceStatus::PENDING;

        // Error handling
        return rescue(function () use ($acq) {
            $acq->save();

            return redirect()->route('home')
                ->with('success', 'Acquaintances request send succesfully');
        }, function() use ($request) {  // Exception
            return redirect()->route('home')
                ->with('error','Error: '.User::find($request->u)->name.' is already in your list');
        });
    }

    /**
     * Show User QRCode
     */
    public function qrCode()
    {
        $options = new QROptions([
            'version' => 7, // 7 not 5 because of bit length, may use a url shortener at a later point
        ]);

        $data['url'] = Auth::user()->qrcode;
        $data['qrcode'] = (new QRCode($options))->render($data['url']);
        $data['qrcode_expires_in'] = Auth::user()->qrCodeExpiresIn(true);

        return view('user.qrCode', $data);
    }

    /**
     * Show the form for editing the image.
     */
    public function imageEdit()
    {
        $data['image'] = Auth::user()->img ?? 'img/dummyAvatar.png';
        return view('user.image-edit', $data);
    }

    /**
     *  Show the language selection view
     */
    public function languageEdit()
    {
        $data['availableLanguages'] = config('app.available_locales');

        return view('user.settings.language.index', $data);
    }

    /**
     *  Update Language setting
     */
    public function languageUpdate(Request $request)
    {
        app()->setLocale($request->locale);
        session()->put('locale', $request->locale);

        return redirect()->route('user.show')
            ->with('success','Language has been updated successfully');
    }
}
