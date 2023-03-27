@extends('mockup-V0.layouts.app_mobile')

@section('mockup-V0.content')
<div class="container">
    <div class="row justify-content-center">
        <h1> Profile index </h1>

        <h2>User: {{ Auth::user() }}</h2>

        <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
        </a>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
        </form>
    </div>
</div>
@endsection
