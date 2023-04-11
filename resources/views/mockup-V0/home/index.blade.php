@extends('mockup-V0.layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/timetable.js') }}" defer></script>
@endpush

@section('mockup-V0.content')
<div class="container-fluid">

    {{--
    <section id="event-next" class="py-3" style="background-color: var(--clr-background-botNav);">
        <h3 style="color:var(--clr-gray-70);">Event in 2 Days</h3>
        <div class="section-content w-100">
            <img src="{{ asset('img/ticketRender_04.png') }}" class="w-100">
        </div>
    </section>
    --}}

    <section id="welcome">
        <div class="d-flex align-items-center justify-content-evenly">
            <h2 class="d-inline-block p-0 m-0">Welcome {{ Auth::user()->lastname }}, {{ Auth::user()->firstname }} </h2>
            <img src="{{ asset('storage/avatar/dummyAvatar.png') }}" class="avatar" width="45px">
        </div>
    </section>

    <section id="timetable" class="px-2 pt-1" style="max-width: 100vw; overflow-x: scroll;">
        <table>
            <thead>
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> <span class="day">01</span> Mo </th>
                    <th> <span class="day">02</span> Di </th>
                    <th> <span class="day">03</span> Mi </th>
                    <th> <span class="day">04</span> Do </th>
                    <th> <span class="day">05</span> Fr </th>
                    <th> <span class="day">06</span> Sa </th>
                    <th> <span class="day">07</span> So </th>
                    <th> <span class="day">08</span> Mo </th>
                    <th> <span class="day">09</span> Di </th>
                    <th> <span class="day">10</span> Mi </th>
                    <th> <span class="day">11</span> Do </th>
                    <th> <span class="day">12</span> Fr </th>
                    <th> <span class="day">13</span> Sa </th>
                    <th> <span class="day">14</span> So </th>
                    <th> <span class="day">15</span> Mo </th>
                    <th> <span class="day">16</span> Di </th>
                    <th> <span class="day">17</span> Mi </th>
                    <th> <span class="day">18</span> Do </th>
                    <th> <span class="day">19</span> Fr </th>
                    <th> <span class="day">20</span> Sa </th>
                    <th> <span class="day">21</span> So </th>
                    <th> <span class="day">22</span> Mo </th>
                    <th> <span class="day">23</span> Di </th>
                    <th> <span class="day">24</span> Mi </th>
                    <th> <span class="day">25</span> Do </th>
                    <th> <span class="day">26</span> Fr </th>
                    <th> <span class="day">27</span> Sa </th>
                    <th> <span class="day">28</span> So </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($timeTable['users'] as $user)
                    <tr>
                        <td class="detectSticky" width="1px"></td>
                        <td class="timeTableUser">{{ $user->id === Auth::user()->id ? Auth::user()->name . ' (Ich)' : $user->name}}</td>
                        <td class="unkown"></td>
                        <td class="check"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="check"></td>
                        <td class="unkown"></td>
                        <td class="unkown"></td>
                        <td class="unkown"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="check"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="check"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                        <td class="x"></td>
                    </tr>
                @endforeach
                <tr>
                    <td></td>
                    <td class="timeTableUser"> Results </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                    <td> {{ mt_rand(0, count($timeTable['users'])-1) }} </td>
                </tr>
                <tr style="font-size: 1.2rem">
                    <td> </td>
                    <td> </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                    <td> @if(mt_rand(0, 1)) <i class="fa-solid fa-calendar-plus"></i> @endif </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section id="acquaintances-accepted">
        <h3>Acquaintances</h3>
        <div class="section-content" {{-- style="max-height: 130px; overflow-y: scroll;" --}}>
            @foreach ($acquaintances['accepted'] as $acquaintancesAccepted)
                <div class="d-flex align-items-center" style="margin-top:1em;padding-left: .5em;">
                    <img src="{{ asset('storage/avatar/dummyAvatar.png') }}" class="avatar" width="30px">
                    <span style="margin-left: 20px;">{{ $acquaintancesAccepted->name }}</span>
                    <div class="acquaintances-actions d-flex">
                        <div>
                            <input type="checkbox" id="checkbox-checked-{{ $acquaintancesAccepted->id }}" name="checkbox-checked-{{ $acquaintancesAccepted->id }}" />
                            <label for="checkbox-checked-{{ $acquaintancesAccepted->id }}">
                                <i class="fa-regular fa-calendar-check"></i>
                            </label>
                        </div>

                        {{-- <div><i class="fa-regular fa-calendar-xmark"></i></div> --}}
                        <div><i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
            @endforeach
        </div>
    </section>

    <section id="acquaintances-pending">
        <h3>Acquaintances (pending)</h3>
        <div class="section-content" {{-- style="max-height: 130px; overflow-y: scroll;" --}}>
            @forelse ($acquaintances['pending'] as $acquaintancesPending)
                <div class="d-flex align-items-center" style="margin-top:1em;padding-left: .5em;">
                    <img src="{{ asset('storage/avatar/dummyAvatar.png') }}" class="avatar" width="30px">
                    <span style="margin-left: 20px;">{{ $acquaintancesPending->name }}</span>
                    <div class="acquaintances-actions d-flex">
                        <i class="fa-solid fa-square-check"></i>
                        <i class="fa-solid fa-square-xmark"></i>
                    </div>
                </div>
            @empty
                <div style="padding: 1rem 0;padding-left: .5em;color:var(--clr-background-light);text-align:center;">
                    no pending acquaintances requests
                </div>
            @endforelse
        </div>
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
