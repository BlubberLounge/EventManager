<div id="ticketNavContainer" class="position-fixed w-100" style="bottom: 53px;">
    <div class="container">
        <div class="row">
            <div class="col position-relative">
                @if(request()->routeIs('tickets.done'))
                    <div class="active text-center"> Done </div>
                @endif
                <a href="{{ route('tickets.done') }}" @class(['active' => request()->routeIs('tickets.done')])>
                    <img src="{{ asset('icon/ticket-xmark.svg') }}" class="hasNotification" width="35px">
                </a>
            </div>
            <div class="col position-relative">
                @if(request()->routeIs('tickets.pending'))
                    <div class="active text-center"> Pending </div>
                @endif
                <a href="{{ route('tickets.pending') }}" @class(['active' => request()->routeIs('tickets.pending')])>
                    <img src="{{ asset('icon/ticket-question.svg') }}" class="hasNotification" width="35px">
                </a>
            </div>
            <div class="col position-relative">
                @if(request()->routeIs('tickets.accepted'))
                    <div class="active text-center"> Accepted </div>
                @endif
                <a href="{{ route('tickets.accepted') }}" @class(['active' => request()->routeIs('tickets.accepted')])>
                    <img src="{{ asset('icon/ticket-check.svg') }}" class="hasNotification" width="35px">
                </a>
            </div>
        </div>
    </div>
</div>
