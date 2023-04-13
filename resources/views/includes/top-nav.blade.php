<nav id="topNav" class="navbar">
    <div class="container" style="max-width: 1200px">
        <div class="row w-100 justify-content-between align-items-center">
            <div class="col">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white.svg" id="navBrand" alt="Dart a Web-App Logo" width="75px">
                </a>
            </div>
            <div class="col-2 col-md-1 d-flex justify-content-center">
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
