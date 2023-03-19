<div id="ticketNavContianer" class="position-fixed w-100" style="bottom: 60px;">
    <div class="container">
        <div class="row">
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-index') ? 'active' : '' }}">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-tickets') ? 'active' : '' }}">
                    <i class="fa-solid fa-envelope-open hasNotification"></i>
                </a>
            </div>
            <div class="col">
                <a href="{{ route('mv0-index') }}" class="{{ request()->routeIs('mv0-profile') ? 'active' : '' }}">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                </a>
            </div>
        </div>
    </div>
</div>
