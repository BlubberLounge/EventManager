<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.head.meta')

    <!-- Scripts -->
    @include('includes.head.script')
    @stack('scripts')   {{-- get all scripts that got pushed to the stack --}}

    <!-- Styles -->
    @include('includes.head.style')
    <link href="{{ mix('css/auth.css') }}" rel="stylesheet">
    @stack('styles')   {{-- get all styles that got pushed to the stack --}}
</head>
<body>
    <div id="app" class="p-4 w-100">
        <div class="d-flex justify-content-center position-relative" style="padding: 3.5rem 0;">
            <img src="http://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white.svg" id="brandLogo" alt="BlubberLounge EventManager Logo" width="200px">
            <span id="subText">Events</span>
        </div>

        <main class="py-1">
            @yield('content')
        </main>

    </div>
</body>
</html>
