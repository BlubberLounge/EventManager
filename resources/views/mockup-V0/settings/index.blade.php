@extends('mockup-V0.layouts.app_mobile')

@section('mockup-V0.content')
<div class="container p-0 py-3">
    <div class="profile-card">
        <h6 class="fw-bold mb-3"> Konto </h5>
        <ul>
            <li> @maxmewes </li>
            <li>
                <span> Maximilian </span>
                <span> Mewes </span>
            </li>
            <li> admin@blubber-lounge.de </li>
            <li> +49 152 33869318 </li>
            <li> 02. November 1999 </li>
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

        <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
        </a>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
        </form>
    </div>
</div>
@endsection
