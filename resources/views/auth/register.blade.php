@extends('layouts.auth_mobile')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <form method="POST" action="{{ route('register') }}">
            @csrf

            <div class="row mb-2">
                <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" placeholder="Username" required autocomplete="name" autofocus>
                    <i class="fa-solid fa-user"></i>

                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="firstname" class="col-md-4 col-form-label text-md-end">{{ __('Firstname') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="firstname" type="text" class="form-control @error('firstname') is-invalid @enderror" name="firstname" value="{{ old('firstname') }}" placeholder="Vorname" required autocomplete="firstname">
                    <i class="fa-solid fa-signature"></i>

                    @error('firstname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="lastname" class="col-md-4 col-form-label text-md-end">{{ __('Lastname') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="lastname" type="text" class="form-control @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" placeholder="Nachname" required autocomplete="lastname">
                    <i class="fa-solid fa-signature"></i>

                    @error('lastname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="ich@google.com" required autocomplete="email">
                    <i class="fa-solid fa-at"></i>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="telefon_mobil" class="col-md-4 col-form-label text-md-end">{{ __('Telefon') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="telefon_mobil" type="text" class="form-control @error('telefon_mobil') is-invalid @enderror" name="telefon_mobil" value="{{ old('telefon_mobil') }}" placeholder="+49 152 33869318" required autocomplete="telefon_mobil">
                    <i class="fa-solid fa-phone"></i>

                    @error('telefon_mobil')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                    <i class="fa-solid fa-key"></i>

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-2">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                <div class="col-md-6 position-relative">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                    <i class="fa-solid fa-key"></i>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-login">
                        {{ __('Register') }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
