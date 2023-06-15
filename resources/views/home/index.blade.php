@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/timetable.js') }}" defer></script>
    <script src="{{ mix('js/home.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid">

    {{--
    <section id="event-next" class="py-3" style="background-color: var(--bl-clr-background-botNav);">
        <h3 style="color:var(--bl-clr-gray-70);">Event in 2 Days</h3>
        <div class="section-content w-100">
            <img src="{{ asset('img/ticketRender_04.png') }}" class="w-100">
        </div>
    </section>
    --}}

    <section id="welcome">
        <div class="d-flex align-items-center justify-content-evenly">
            <h2 class="d-inline-block p-0 m-0">Welcome {{ Auth::user()->lastname }}, {{ Auth::user()->firstname }} </h2>
            <img src="{{ asset('img/dummyAvatar.png') }}" width="45px" />
        </div>
    </section>

    <section id="timetable" class="ps-0 pe-2 pt-1" style="max-width: 100vw; overflow-x: scroll;">
        <table id="timetableTable" class="pt-2">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th class="border-end border-0 border-3" colspan="{{ $timeTable['monthCut'] }}"> {{ now()->format('F') }} </th>
                    <th colspan="{{ 30-$timeTable['monthCut'] }}"> {{ now()->addMonth()->format('F') }} </th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    @foreach ($timeTable['head'] as $date)
                        <th> <span class="day">{{ $date->format('d') }}</span> {{ $date->format('D') }} </th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                @foreach ($timeTable['body'] as $i => $dat)
                    <tr @class(['timetable-me' => $dat['user']->id === Auth::user()->id]) data-bl-timetable-user-id="{{ $dat['user']->id }}">
                        <td class="detectSticky"></td>
                        <td class="timeTableUser">{{ $dat['user']->id === Auth::user()->id ? '(Ich)' : (strlen($dat['user']->name) >= 10 ? substr($dat['user']->name, 0, 10).'...' : $dat['user']->name) }}</td>
                        @foreach ($dat['days'] as $day)
                            @if($dat['user']->id === Auth::user()->id)
                                <td data-bl-timetable-status="{{ $day->status }}" data-bl-timetable-date="{{ $day->date }}" data-bs-toggle="popover" data-bs-placement="top"></td>
                            @else
                                <td data-bl-timetable-status="{{ $day->status }}"></td>
                            @endif
                        @endforeach
                    </tr>
                @endforeach

                <tr>
                    <td></td>
                    <td class="timeTableUser"> Results </td>
                    @foreach ($timeTable['result'] as $result)
                        <td> {{ $result }} </td>
                    @endforeach
                </tr>
                <tr style="font-size: 1.2rem">
                    <td> </td>
                    <td> </td>
                    @foreach ($timeTable['result'] as $key => $result)
                        <td>
                            @if ($result >= ceil(count($timeTable['body']) / 2) && end($timeTable['body'])['days'][$key]->status == App\Classes\TimetableStatus::AVAILABLE)
                                <i class="fa-solid fa-calendar-plus"></i>
                            @endif
                        </td>
                    @endforeach
                </tr>
            </tbody>
        </table>
    </section>

    <section id="acquaintances-accepted">
        <h3>Acquaintances</h3>
        @foreach ($acquaintances['accepted'] as $acquaintancesAccepted)
            <div class="row mt-2 pe-2 align-items-center">
                <div class="col">
                    <img src="{{ Avatar::create($acquaintancesAccepted->firstname)->toBase64() }}" width="40px" />
                    <span class="ms-3" style="font-size:1.05rem;">
                        {{ $acquaintancesAccepted->full_name }}
                    </span>
                </div>
                <div class="col-1 d-flex justify-center">
                    <button type="button" class="btn-bl-icon btn-add-to-timetable" data-bl-acquaintance-id="{{ $acquaintancesAccepted->id }}" data-bl-acquaintance-active="{{ $acquaintancesAccepted->pivot->showOnHomeView }}">
                        <i class="fa-regular fa-calendar-check"></i>
                    </button>
                </div>
                <div class="col-2 d-flex justify-center">
                    <button type="button" class="btn btn-bl-icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>
        @endforeach
    </section>

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
