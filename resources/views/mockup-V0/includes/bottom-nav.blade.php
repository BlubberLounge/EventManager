<nav id="botNav" class="navbar position-fixed bottom-0 w-100">
    <div class="container">
        <div class="row">
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-index.*') ? 'active' : '' }}">
                    <i class="fa-solid fa-house hasNotification"></i>
                    Home
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-tickets') }}" class="{{ request()->routeIs('mv0-tickets.*') ? 'active' : '' }}">
                    <i class="fa-solid fa-ticket hasNotification"></i>
                    Tickets
                </a>
            </div>
            <div class="col" style="{{ request()->routeIs('mv0-tickets.*') ? '' : 'display: none' }}">
                <a href="{{ route('mv0-tickets') }}" style="margin-top: -10px;">
                    <i class="fa-solid fa-plus p-2 addTicketBtn"></i>
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-calendar') }}" class="{{ request()->routeIs('mv0-calendar.*') ? 'active' : '' }}">
                    <i class="fa-solid fa-calendar-days"></i>
                    Calendar
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-profile') }}" class="{{ request()->routeIs('mv0-profile.*') ? 'active' : '' }}">
                    <i class="fa-solid fa-user"></i>
                    Profile
                </a>
            </div>
        </div>
    </div>
</nav>
