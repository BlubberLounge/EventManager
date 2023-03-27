@extends('mockup-V0.layouts.app_mobile')

@section('mockup-V0.content')
<div class="container">
    <h2> Test Index Page </h2>
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
