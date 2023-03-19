<nav id="botNav" class="navbar position-absolute bottom-0 ">
    <div class="container">
        <div class="row">
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-index') ? 'active' : '' }}">
                    <i class="fa-solid fa-house"></i>
                    Home
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-tickets') }}" class="{{ request()->routeIs('mv0-tickets') ? 'active' : '' }}">
                    <i class="fa-solid fa-ticket"></i>
                    Tickets
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-calendar') }}" class="{{ request()->routeIs('mv0-calendar') ? 'active' : '' }}">
                    <i class="fa-solid fa-calendar-days"></i>
                    Calendar
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-profile') }}" class="{{ request()->routeIs('mv0-profile') ? 'active' : '' }}">
                    <i class="fa-solid fa-user"></i>
                    Profile
                </a>
            </div>
        </div>
    </div>
</nav>
