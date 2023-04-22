<nav id="botNav" class="navbar">
    <div class="container" style="max-width: 700px">
        <div class="row">
            <div class="col">
                <a href="{{ route('home') }}" @class(['active' => request()->routeIs('home') || request()->routeIs('home.*')])>
                    <i class="fa-solid fa-house"></i>
                    Home
                </a>
            </div>
            <div class="col">
                <a href="{{ route('tickets') }}" @class(['active' => request()->routeIs('tickets') || request()->routeIs('tickets.*')])>
                    <i class="fa-solid fa-ticket hasNotification"></i>
                    Tickets
                </a>
            </div>
            <div class="col-3" >
                <a href="{{ route('host') }}" @class(['active' => request()->routeIs('host') || request()->routeIs('host.*')])>
                    <i class="fa-solid fa-users-rectangle" style="font-size: 1.5rem"></i>
                    {{-- <i class="fa-solid fa-people-line" style="font-size: 1.75rem;"></i> --}}
                    {{-- <i class="fa-solid fa-users-between-lines" style="font-size: 1.75rem;"></i> --}}
                    Events
                </a>
            </div>
            <div class="col">
                <a href="{{ route('calendar') }}" @class(['active' => request()->routeIs('calendar') || request()->routeIs('calendar.*')])>
                    <i class="fa-solid fa-calendar-days"></i>
                    Calendar
                </a>
            </div>
            <div class="col">
                <a href="{{ route('user.show') }}" @class(['active' => request()->routeIs('user.*')])>
                    <i class="fa-solid fa-user"></i>
                    Profile
                </a>
            </div>
        </div>
    </div>
</nav>
