<nav id="topNav" class="navbar">
    <div class="container" style="max-width: 1200px">
        <div class="row w-100 justify-content-between align-items-center">
            <div class="col">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white.svg" id="navBrand" alt="Dart a Web-App Logo" width="75px">
                </a>
            </div>
            @if(request()->routeIs('settings'))
                <div class="col-1 d-flex justify-content-center">
                    <a href="#">
                        <i class="fa-solid fa-pencil"></i>
                    </a>
                </div>
            @endif
            <div class="col-2 d-flex justify-content-center">
                <a href="#" class="d-flex align-items-center">
                    <i class="fa-solid fa-qrcode"></i>
                </a>
            </div>
            <div class="col-1 d-flex justify-content-center" onclick="$('#burger-menu').toggle()">
                <div class="burger-menu-toggler" style="cursor: pointer;padding:.1rem .5rem;">
                    <div class="burger"></div>
                    <div class="burger"></div>
                    <div class="burger"></div>
                </div>
            </div>
        </div>
        @if(request()->routeIs('settings'))
            <div class="row pt-4 pb-1">
                <div style="flex: 0 0 auto;max-width: 70px;">
                    @if(Auth::user()->img)
                        <img src="{{ Auth::user()->img }}" width="50px" style="border-radius:50%">
                    @else
                        {!! Avatar::create(Auth::user()->name)->setDimension(50)->setFontSize(28)->toSvg() !!} {{-- https://github.com/laravolt/avatar --}}
                    @endif
                </div>
                <div class="col">
                    <span class="h4"> {{ Auth::user()->firstname .' '. Auth::user()->lastname }} </span>
                    <span class="d-block m-0 p-0" style="color: var(--clr-gray-50);"> {{ '@'.Auth::user()->name }} </span>
                </div>
            </div>
            <div class="update-profileimage">
                <i class="fa-solid fa-camera"></i>
            </div>
        @endif
    </div>

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
