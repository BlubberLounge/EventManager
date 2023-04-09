@extends('mockup-V0.layouts.app_mobile')

@section('mockup-V0.content')
<div class="container">
    <h2> Test Index Page </h2>

    <h2>{{ App\Models\Acquaintance::where('transmitter_user_id', 7)->where('receiver_user_id', App\Models\User::adminAcc()->id)->exists() ? 'ja' : 'nein' }}</h2>

    <h2>------------------------</h2>
    @foreach(Auth::user()->pendingAcquaintances as $us)
        <h3>{{ $us->name }}</h3>
    @endforeach

    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_01.png') }}" width="84%">
    </div>
    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_05.png') }}" width="84%">
    </div>
    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_02.png') }}" width="84%">
    </div>
    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_03.png') }}" width="84%">
    </div>
    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_06.png') }}" width="84%">
    </div>
    <div class="row mb-3">
        <img src="{{ asset('img/ticketRender_04.png') }}" width="84%">
    </div>
</div>
@endsection
