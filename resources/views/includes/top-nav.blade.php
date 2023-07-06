<nav id="topNav" @class(['navbar','no-bottom-padding' => request()->routeIs('user.qrCode') && App::environment(['local', 'development']) ])>
    <div class="container" style="max-width: 1200px">
        <div @class([ 'col-auto' => request()->routeIs('user.show') || request()->routeIs('user.edit'),
                      'col' => !request()->routeIs('user.show') && !request()->routeIs('user.edit')])>
            @if(request()->routeIs('user.edit'))
                <a href="{{ url()->previous() }}" class="">
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
            @else
                <a class="navbar-brand m-0 placeholder-glow" href="{{ url('/') }}">
                    {{-- <span class="placeholder col-3"></span> --}}
                    <img src="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white_optimized.svg" id="navBrand" alt="Dart a Web-App Logo" width="75px">
                </a>
            @endif
        </div>
        @if(request()->routeIs('user.edit'))
            <div class="col ps-4">
                <span style="font-size:1.25rem;font-weight: bold;"> Edit Profile </span>
            </div>
        @endif
        @if(request()->routeIs('user.show'))
            <div id="moveMe" class="col d-flex align-items-center ps-2" style="font-size:.8rem;">
                <div class="me-2">
                    @if(Auth::user()->img)
                        <img src="{{ Auth::user()->img }}" width="45px" style="border-radius:50%">
                    @else
                        {!! Avatar::create(Auth::user()->name)->setDimension(45)->setFontSize(28)->toSvg() !!} {{-- https://github.com/laravolt/avatar --}}
                    @endif
                </div>
                <div style="line-height: 1">
                    <span class="h4 m-0"> {{ Auth::user()->firstname .' '. Auth::user()->lastname }} </span>
                    <span class="d-block m-0 p-0" style="color: var(--bl-clr-gray-50);"> {{ '@'.Auth::user()->name }} </span>
                </div>
            </div>
            <div class="col-1">
                <a href="{{ route('user.qrCode') }}">
                    <i class="fa-solid fa-qrcode"></i>
                </a>
            </div>
            <div class="col-1">
                <a href="{{ route('user.edit') }}">
                    <i class="fa-solid fa-pencil"></i>
                </a>
            </div>
        @endif
        @if(!request()->routeIs('user.show'))
            <div class="col-1 d-flex align-items-center">
                <a href="{{ route('user.qrCode') }}" @class(['d-flex align-items-center','active' => request()->routeIs('user.qrCode') ])>
                    <i class="fa-solid fa-qrcode"></i>
                </a>
            </div>
        @endif
        <div class="col-1 d-flex justify-content-center" onclick="$('#burger-menu').toggle()">
            <div class="burger-menu-toggler" style="cursor: pointer;padding:.1rem .5rem;">
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
        </div>
    </div>
    @if(request()->routeIs('user.qrCode') && App::environment(['local', 'development']))
        <div class="container text-center tab-container" id="topTabs" role="tablist">
            <button id="code-myCode-tab" class="col active" data-bs-toggle="tab" data-bs-target="#code-myCode" type="button" role="tab" aria-controls="code-myCode" aria-selected="true">
                Mein Code
            </button>
            <button id="code-scan-tab" class="col" data-bs-toggle="tab" data-bs-target="#code-scan" type="button" role="tab" aria-controls="code-scan" aria-selected="false">
                Code scannen
            </button>
        </div>
    @endif

    <div id="burger-menu" class="down">
        <div class="burger-menu-item-group">
            <a href="{{ route('logout') }}" class="burger-menu-item logout d-flex align-items-center" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                <i class="fa-solid fa-power-off"></i>
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </div>
        <div class="burger-menu-item-group">
            <a href="#" class="burger-menu-item d-flex align-items-center">
                <i class="fa-solid fa-circle-info"></i>
                App info
            </a>
            <a href="#" class="burger-menu-item d-flex align-items-center">
                <i class="fa-solid fa-square-poll-vertical"></i>
                Statistics
            </a>
            <a href="#" class="burger-menu-item d-flex align-items-center">
                <i class="fa-solid fa-circle-half-stroke"></i>
                Switch mode
            </a>
        </div>
        <div class="burger-menu-item-group">
            <a href="#" class="burger-menu-item d-flex align-items-center">
                <i class="fa-solid fa-circle-nodes"></i>
                <s>
                    Scan QR-Code
                </s>
            </a>
        </div>
    </div>
</nav>
@if(request()->routeIs('user.show'))
    <div class="scrollBox position-relative">
        <div class="col-1 d-flex justify-content-center">
            <a href="{{ route('user.image.edit') }}" class="btn btn-primary btn-profileimage">
                <i class="fa-solid fa-camera"></i>
            </a>
        </div>
    </div>
@endif
