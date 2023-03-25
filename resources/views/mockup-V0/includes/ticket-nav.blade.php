<div id="ticketNavContainer" class="position-fixed w-100" style="bottom: 60px;">
    <div class="container">
        <div class="row">
            <div class="col position-relative">
                @if(request()->routeIs('mv0-tickets.done'))
                    <div class="active text-center">Trash</div>
                @endif
                <a href="{{ route('mv0-tickets.done') }}" class="{{ request()->routeIs('mv0-tickets.done') ? 'active' : '' }}">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </div>
            <div class="col position-relative">
                @if(request()->routeIs('mv0-tickets.open'))
                    <div class="active text-center">Offen</div>
                @endif
                <a href="{{ route('mv0-tickets.open') }}" class="{{ request()->routeIs('mv0-tickets.open') ? 'active' : '' }}">
                    <i class="fa-solid fa-envelope-open hasNotification"></i>
                </a>
            </div>
            <div class="col position-relative">
                @if(request()->routeIs('mv0-tickets.send'))
                    <div class="active text-center">Gesendet</div>
                @endif
                <a href="{{ route('mv0-tickets.send') }}" class="{{ request()->routeIs('mv0-tickets.send') ? 'active' : '' }}">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                </a>
            </div>
        </div>
    </div>
</div>
