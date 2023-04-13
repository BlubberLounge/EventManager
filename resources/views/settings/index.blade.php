@extends('layouts.app_mobile')

@section('content')
<div class="container p-0 py-3">
    <div class="profile-card">
        <h6 class="fw-bold mb-3"> Konto </h6>
        <div class="d-flexjustify-content-centeralign-items-center" style="display:inline-block;background-color:var(clr-rand-profile-mt_rand(1,4) --}}); width:100px;height:100px;border-radius: 20px;">
            {{-- <img src="{{ Auth::user()->img == '/storage/avatar/avatar-dummy.png' ? asset('img/blubber2.svg') : asset(Auth::user()->img) }}" width="50px"> --}}
        </div>
        <img src="{{ Avatar::create(Auth::user()->name)->toBase64() }}" /> {{-- https://github.com/laravolt/avatar --}}
        <ul>
            <li> {{ '@'.Auth::user()->name }} </li>
            <li>
                <span> {{ Auth::user()->firstname }} </span>
                <span> {{ Auth::user()->lastname }} </span>
            </li>
            <li> {{ Auth::user()->email }} </li>
            <li> {{ Auth::user()->telefon_mobil }} </li>
            <li> {{ Auth::user()->dob }} </li>
        </ul>
    </div>

    <div class="settings-card">
        <h6 class="fw-bold mb-3"> Einstellungen </h5>
            <a href="#" class="row">
            <div class="col-1">
                <i class="fa-solid fa-bell"></i>
            </div>
            <div class="col">
                <span> Benachrichtigungen </span>
            </div>
        </a>
        <a href="#" class="row">
            <div class="col-1">
                <i class="fa-solid fa-desktop"></i>
            </div>
            <div class="col">
                Geräte
            </div>
        </a>
        <a href="#" class="row">
            <div class="col-1">
                <i class="fa-solid fa-bell"></i>
            </div>
            <div class="col">
                <span> Benachrichtigungen </span>
            </div>
        </a>
        <a href="#" class="row">
            <div class="col-1">
                <i class="fa-solid fa-sliders"></i>
            </div>
            <div class="col">
                <span> Presets </span>
            </div>
        </a>
        <a href="#" class="row">
            <div class="col-1">
                <i class="fa-solid fa-globe"></i>
            </div>
            <div class="col">
                <span> Sprache </span>
            </div>
        </a>
    </div>
    </div>
</div>
@endsection
