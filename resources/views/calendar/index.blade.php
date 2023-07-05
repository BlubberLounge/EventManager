@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/calendar.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid" id="container-calendar">
    <section id="section-page-description">
        <i class="fa-regular fa-calendar page-description-icon"></i>
        <h1> Calendar </h1>
        <p> Here you can see everything time / date related. <br /> For now only the timetable is shown here. </p>
    </section>
    <section id="section-timetable" class="container-timetable" style="max-width: 100vw; overflow-x: scroll;">
        <table id="timetable" class="timetable pt-2">
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
                            @if ($result >= ceil(count($timeTable['body']) / 2) && end($timeTable['body'])['days'][$key]->status == App\Enums\TimetableStatus::AVAILABLE)
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
                    @if(!$acquaintancesAccepted->img)
                        <img src="{{ Avatar::create($acquaintancesAccepted->firstname)->toBase64() }}" width="40px" />
                    @else
                        <img src="{{ $acquaintancesAccepted->img }}" width="40px" style="border-radius: 50%;"/>
                    @endif
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
</div>
@endsection
