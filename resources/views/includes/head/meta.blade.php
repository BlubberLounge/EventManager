<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

<link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

<!-- prefetch important images -->
{{-- <link rel="prefetch" href="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white.svg">
<link rel="prerender" href="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white.svg"> --}}
<link rel="preload"
      href="https://media.maximilian-mewes.de/project/bl/blubber_lounge_rebrand_try_white_optimized.svg"
      as="image"
      type="image/svg+xml" />

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<title>{{ config('app.name', 'Laravel') }}</title>
