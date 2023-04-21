<nav id="botNav" class="navbar position-fixed bottom-0 vw-100">
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
            <div class="col" >
                <a href="{{ route('host') }}" @class(['active' => request()->routeIs('host') || request()->routeIs('host.*')])>
                    <i class="fa-solid fa-users-viewfinder" style="font-size: 1.75rem;"></i>
                </a>
            </div>
            <div class="col">
                <a href="{{ route('calendar') }}" @class(['active' => request()->routeIs('calendar') || request()->routeIs('calendar.*')])>
                    <i class="fa-solid fa-calendar-days"></i>
                    Calendar
                </a>
            </div>
            <div class="col">
                <a href="{{ route('user') }}" @class(['active' => request()->routeIs('user') || request()->routeIs('user.*')])>
                    <i class="fa-solid fa-gear"></i>
                    Settings
                </a>
            </div>
        </div>
    </div>
</nav>
