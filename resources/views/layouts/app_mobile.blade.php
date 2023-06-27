<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="dark">
<head>
    @include('includes.head.meta')

    <!-- Scripts -->
    @include('includes.head.script')
    <script src="{{ mix('js/menu.js') }}" defer></script>
    @stack('scripts')   {{-- get all scripts that got pushed to the stack --}}

    <!-- Styles -->
    @include('includes.head.style')
    <link href="{{ mix('css/top-nav.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/mockup-V0/glide.core.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/mockup-V0/glide.theme.min.css') }}">
    @stack('styles')   {{-- get all styles that got pushed to the stack --}}
</head>
<body>
    <div id="app">

        @include('includes.top-nav')

        @if (session('status'))
            <x-alert type="primary" message="{{ session('status') }}" />
        @elseif (session('error'))
            <x-alert type="danger" message="{{ session('error') }}" />
        @elseif (session('success'))
            <x-alert type="success" message="{{ session('success') }}" />
        @elseif (session('info'))
            <x-alert type="info" message="{{ session('info') }}" />
        @endif

        {{-- Validation error debugging --}}
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <main> {{-- <main class="pt-1"> --}}
            @yield('content')
        </main>

        @if(request()->routeIs('tickets') || request()->routeIs('tickets.*'))
            @include('includes.ticket-nav')
        @endif

        @include('includes.bottom-nav')
    </div>
</body>
</html>
