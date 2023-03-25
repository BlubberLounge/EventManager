<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('mockup-V0.includes.head')

<body>
    <div id="app">

        @include('mockup-V0.includes.top-nav')

        <main class="py-1">
            @yield('mockup-V0.content')
        </main>

        @include('mockup-V0.includes.ticket-nav')
        @include('mockup-V0.includes.bottom-nav')
    </div>
</body>
</html>
