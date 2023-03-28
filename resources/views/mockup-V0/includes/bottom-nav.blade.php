<nav id="botNav" class="navbar position-fixed bottom-0 w-100">
    <div class="container">
        <div class="row">
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-index.*') || request()->routeIs('mv0-index') ? 'active' : '' }}">
                    <i class="fa-solid fa-house hasNotification"></i>
                    Home
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-tickets') }}" class="{{ request()->routeIs('mv0-tickets.*') || request()->routeIs('mv0-tickets') ? 'active' : '' }}">
                    <i class="fa-solid fa-ticket hasNotification"></i>
                    Tickets
                </a>
            </div>
            <div class="col" >
                <a href="{{ route('mv0-tickets') }}" class="{{-- request()->routeIs('mv0-tickets.*')||request()->routeIs('mv0-tickets')?'active':'' --}}">
                    <i class="fa-solid fa-users-viewfinder" style="font-size: 1.75rem;"></i>
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-calendar') }}" class="{{ request()->routeIs('mv0-calendar.*') || request()->routeIs('mv0-calendar') ? 'active' : '' }}">
                    <i class="fa-solid fa-calendar-days"></i>
                    Calendar
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-settings') }}" class="{{ request()->routeIs('mv0-settings.*') || request()->routeIs('mv0-settings') ? 'active' : '' }}">
                    <i class="fa-solid fa-gear"></i>
                    Settings
                </a>
            </div>
        </div>
    </div>
</nav>
