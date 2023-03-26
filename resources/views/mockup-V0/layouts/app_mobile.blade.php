<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.head.meta')

    <!-- Scripts -->
    @include('includes.head.script')
    @stack('scripts')   {{-- get all scripts that got pushed to the stack --}}

    <!-- Styles -->
    @include('includes.head.style')
    <link href="{{ mix('css/mockup-V0/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/mockup-V0/glide.core.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/mockup-V0/glide.theme.min.css') }}">
    @stack('styles')   {{-- get all styles that got pushed to the stack --}}
</head>
<body>
    <div id="app">

        @include('mockup-V0.includes.top-nav')

        <main class="py-1">
            @yield('mockup-V0.content')
        </main>

        @if(request()->routeIs('mv0-tickets') || request()->routeIs('mv0-tickets.*'))
            @include('mockup-V0.includes.ticket-nav')
        @endif

        @include('mockup-V0.includes.bottom-nav')
    </div>
</body>
</html>
