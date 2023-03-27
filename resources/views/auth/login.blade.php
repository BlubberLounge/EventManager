@extends('layouts.auth_mobile')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="row mb-3">
                <label for="name" class="col-md-4 col-form-label text-md-end">Username or Email</label>

                <div class="col-md-6 position-relative">
                    <input id="name" type="username" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required  autofocus>
                    <i class="fa-solid fa-user"></i>

                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-0">
                <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="off">
                    <i class="fa-solid fa-key"></i>

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>
            </div>


            @if (Route::has('password.request'))
                <div class="d-flex justify-content-end">
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                </div>
            @endif

            <div class="row mt-3">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-login">
                        {{ __('Login') }}
                    </button>
                </div>
            </div>

        </form>
    </div>

    <div class="row justify-content-center" style="margin-top: 4rem">
        [Anmelden mit Google] Platzhalter
    </div>
    <div class="row justify-content-center mt-4">
        [Anmelden mit Apfel] Platzhalter
    </div>

    @if (Route::has('register'))
        <div class="d-flex justify-content-center w-100 position-absolute start-0" style="bottom: 1rem;">
            <span class="registerText"> Don't have an Account? </span>
            <a href="{{ route('register') }}" class="display-inline ms-2"> Sign up </a>
        </div>
    @endif
</div>
@endsection
