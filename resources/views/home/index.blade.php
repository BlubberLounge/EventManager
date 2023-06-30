@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/timetable.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid" id="container-home">

    <section id="section-next-event">
        <h3 class="section-title">Event in 2 Days</h3>
        <div class="section-content">
            <img src="{{ asset('img/ticketRender_04.png') }}" class="w-100">
        </div>
    </section>

    {{-- <section id="welcome">
        <div class="d-flex align-items-center justify-content-evenly">
            <h2 class="d-inline-block p-0 m-0">Welcome {{ Auth::user()->lastname }}, {{ Auth::user()->firstname }} </h2>
            <img src="{{ asset('img/dummyAvatar.png') }}" width="45px" />
        </div>
    </section> --}}

    <section id="acquaintances-pending">
        <h3>Acquaintances (pending)</h3>
        @forelse ($acquaintances['pending'] as $acquaintancesPending)
            <div class="row mt-2 pe-2 align-items-center" data-bl-acquaintance-id="{{ $acquaintancesPending->id }}">
                <div class="col">
                    <img src="{{ Avatar::create($acquaintancesPending->firstname)->toBase64() }}" width="40px" />
                    <span class="ms-3" style="font-size:1.05rem;">
                        {{ $acquaintancesPending->full_name }}
                    </span>
                </div>
                <div class="col-1 d-flex justify-center">
                    <button type="button" class="btn btn-bl-icon btn-acquaintance-accept">
                        <i class="fa-solid fa-square-check"></i>
                    </button>
                </div>
                <div class="col-2 d-flex justify-center">
                    <button type="button" class="btn btn-bl-icon btn-acquaintance-decline">
                        <i class="fa-solid fa-square-xmark"></i>
                    </button>
                </div>
            </div>
        @empty
            <div style="padding: 1rem 0;padding-left: .5em;color:var(--bl-clr-background-light);text-align:center;">
                no pending acquaintances requests
            </div>
        @endforelse
    </section>

    <section>
        <h1> Ignore this </h1>
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
    </section>
</div>
@endsection
