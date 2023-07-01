@extends('layouts.auth_mobile')

@section('content')
<div class="container-fluid" style="max-width: 540px">
    <form class="d-flex flex-column justify-content-center" method="POST" action="{{ route('login') }}">
        @csrf

        <div class="row mb-3">
            <label for="name" class="col-md-4 col-form-label text-md-end"> Username or Email </label>
            <div class="col-md-8 position-relative">
                <input type="text"
                    id="name"
                    class="form-control @error('name') is-invalid @enderror"
                    name="name" value="{{ old('name') }}"
                    placeholder="Type your Username or Email"
                    required
                    autofocus
                >
                <i class="fa-solid fa-user input-icon"></i>

                @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>
            <div class="col-md-8 position-relative">
                <input id="password"
                    type="password"
                    class="form-control @error('password') is-invalid @enderror"
                    name="password"
                    placeholder="Type your Password"
                    required
                    autocomplete="off"
                >
                <i class="fa-solid fa-key" id="password-toggler"></i>

                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                    <label class="form-check-label" for="remember">
                        {{ __('Remember Me') }}
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-auto offset-md-4">
                <button type="submit" class="btn btn-login">
                    {{ __('Login') }}
                </button>
            </div>
            @if (Route::has('password.request'))
                <div class="col-auto p-0" style="margin-left: auto;">
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                        {{-- @if(!App::environment('local'))
                            <span class="ms-1" style="text-decoration:none;font-size:.75em; color: rgb(190, 55, 55);"> (Disabled) </span>
                        @endif --}}
                    </a>
                </div>
            @endif
        </div>

    </form>

    {{--
        <div class="row justify-content-center" style="margin-top: 4rem">
            [Anmelden mit Google] Platzhalter
        </div>
        <div class="row justify-content-center mt-4">
            [Anmelden mit Apfel] Platzhalter
        </div>
    --}}

    @if (Route::has('register'))
        <div class="d-flex justify-content-center w-100 position-absolute start-0" style="bottom: 1rem;">
            <span class="registerText"> Don't have an Account? </span>
            <a href="{{ route('login') }}" class="display-inline ms-2"> Sign up </a>
            {{-- @if(!App::environment('local'))
                <span class="ms-1" style="font-size:.75em; color: rgb(190, 55, 55);"> (Disabled) </span>
            @endif --}}
        </div>
    @endif
</div>
@endsection
