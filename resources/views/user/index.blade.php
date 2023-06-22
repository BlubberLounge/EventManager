@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/settings.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid" id="container-account">
    <section id="reliability">
        <h3 style="font-size: 1rem"> Zuverlässigkeit </h3>
        <div class="row justify-content-center align-items-center">
            <div class="col">
                <div class="reliability-meter">
                    <div class="reliability-meter-progress"></div>
                </div>
            </div>
            <div class="col-1">
                <i class="fa-regular fa-circle-question" data-bs-toggle="modal" data-bs-target="#help-modal-reliability"></i>
            </div>
        </div>

        <div class="row reliability-stats justify-content-around">
            <div class="col">
                <span> pünktlich </span>
                <span class="d-"> 000007 </span>
            </div>
            <div class="col">
                <span> zu spät </span>
                <span> 000007 </span>
            </div>
            <div class="col">
                <span> nicht erschienen </span>
                <span> 000007 </span>
            </div>
        </div>

        <div class="modal fade" id="help-modal-reliability" tabindex="-1" aria-labelledby="help-modal-reliability-label" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <h1 class="modal-title fs-5" id="help-modal-reliability-label"> <small>Hilfe</small> <br> <b>Zuverlässigkeitsanzeige</b> </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2> Die Zuverlässigkeitsanzeige </h2>
                        <p> Zeigt an ob du ein absoluter Wixxer bist oder eben nicht :)</p>
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="modal-footer">
                        <span class="pe-2"> Hilfreich? </span>
                        <button type="button" class="btn btn-success px-3 py-2" data-bs-dismiss="modal">
                            <i class="fa-solid fa-thumbs-up fa-xl"></i>
                        </button>
                        <button type="button" class="btn btn-danger px-3 py-2" data-bs-target="#help-modal-reliability-feedback" data-bs-toggle="modal">
                            <i class="fa-solid fa-thumbs-down fa-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="help-modal-reliability-feedback" tabindex="-1" aria-labelledby="help-modal-reliability-feedback-label" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <h1 class="modal-title fs-5" id="help-modal-reliability-feedback-label"> <small>Feedback</small> <br> <b>Hilfsanzeige:</b> Zuverlässigkeit </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="message-text" class="col-form-label">Nachricht:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"> Abschicken </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{--
    <section id="profile-badge">
        <h3> Errungenschaften </h3>
    </section>
    --}}

    <section id="account">
        <h3> Account </h3>
        <div class="row">
            <div class="col-1 d-flex justiy-content-center">
                <i class="fa-solid fa-phone"></i>
            </div>
            <div class="col">
                <span>{{ $user->telefon_mobil }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-1 d-flex justiy-content-center">
                <i class="fa-solid fa-cake-candles"></i>
            </div>
            <div class="col">
                <span>{{ date('d. F Y', strtotime($user->dob)) }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-1 d-flex justiy-content-center">
                <i class="fa-regular fa-id-card"></i>
            </div>
            <div class="col">
                <span>Alter: {{ \Illuminate\Support\Carbon::parse($user->dob)->age }} </span>
            </div>
        </div>
        <div class="row">
            <div class="col-1 d-flex justiy-content-center">
                <i class="fa-solid fa-at"></i>
            </div>
            <div class="col">
                <span>{{ $user->email }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-1 d-flex justiy-content-center">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="col">
                <span>{{ $user->telefon_mobil }}</span>
            </div>
        </div>
        @level(5)
            <div class="row">
                <div class="col-1 d-flex justiy-content-center">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="col">
                    @role('root')
                        <span class="badge rounded-pill text-bg-danger"> Root </span>
                    @endrole
                    @role('Developer')
                        <span class="badge rounded-pill text-bg-success"> Developer </span>
                    @endrole
                    @role('Admin')
                        <span class="badge rounded-pill text-bg-info"> Admin </span>
                    @endrole
                    @role('EventManager')
                        <span class="badge rounded-pill text-bg-warning"> EventManager </span>
                    @endrole
                    @role('Trusted')
                        <span class="badge rounded-pill text-bg-light"> Trusted </span>
                    @endrole
                    @role('User')
                        <span class="badge rounded-pill text-bg-secondary"> User </span>
                    @endrole
                    @role('Unverified')
                        <span class="badge rounded-pill text-bg-secondary"> Unverified </span>
                    @endrole
                </div>
            </div>
        @endlevel
    </section>

    <section id="account-settings">
        <h3> Settings </h3>
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div class="col">
                    <span> Privatsphäre und Sicherheit </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="col">
                    <span> Benachrichtigungen </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="{{ route('user.device') }}" id="settingsDevice">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-desktop"></i>
                </div>
                <div class="col">
                    <span> Geräte </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-sliders"></i>
                </div>
                <div class="col">
                    <span> Presets </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-globe"></i>
                </div>
                <div class="col">
                    <span> Sprache </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-comment-dots"></i>
                </div>
                <div class="col">
                    <span> EventManager FAQ </span>
                </div>
            </div>
        </a>
        <hr />
        <a href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fa-solid fa-circle-question"></i>
                </div>
                <div class="col">
                    <span> Feedback </span>
                </div>
            </div>
        </a>
    </section>

    @includeIf('includes.section-development', [
        App::environment(['local', 'development'])
    ])

    <div class="d-flex flex-column align-items-center pt-4 pb-3" style="background-color:var(--bl-clr-background-dark);">
        <p class="m-0 small" style="color:var(--bl-clr-gray-60);">EventManager v{{ env('APP_VERSION', 'invalid') }} | Systemtime: {{ now()->format('H:i:s d.m.y ') }} </p>
        <p class="m-0 small" style="color:var(--bl-clr-gray-70);"><i class="fa-regular fa-copyright fa-xs"></i> EventManager {{ now()->year }}. Some Rights Reserverd.</p>
    </div>
</div>
@endsection
