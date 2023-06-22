@extends('layouts.app_mobile')

@section('content')
<div class="container-fluid">
    <section id="device-description">
        <a href="{{ url()->previous() }}#settingsDevice">
            <i class="fa-solid fa-caret-left"></i>
            {{ 'Back' }}
        </a>
        <h1> Geräte </h1>
        <p> Hier siehst du eine Liste aller Geräte </p>
    </section>
    <section id="device-list">
        <div>
            @forelse ($devices as $device)
                <x-list-item.user.item-device :device="$device" />
            @empty
                <div class="row">
                    Keine Geräte gefunden
                </div>
            @endforelse
        </div>
    </section>
</div>
@endsection
