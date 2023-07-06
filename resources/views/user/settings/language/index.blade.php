@extends('layouts.app')

@section('content')
<div class="contaienr-fluid">
    <section id="device-description" class="text-center" style="padding: 2rem 3rem 1rem 3rem;">
        <i class="fa-solid fa-computer" style="font-size: 4rem"></i>
        <h1> Language </h1>
        <p> Liste aller verfügbaren Sprachen </p>
    </section>

    <section>
        <form method="POST" action="{{ route('user.language.update') }}">
            <div class="row mb-4">
                @csrf
                @method('PUT')

                <ul class="list-group">
                    @foreach ($availableLanguages as $k => $locale)
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="radio" name="locale" value="{{ $locale }}" id="locale_{{ $locale }}" @checked($locale == App::currentLocale())>
                            <label class="form-check-label" for="locale_{{ $locale }}">
                                {{ __($k) }} <span class="fi fi-{{ $locale === 'en' ? 'gb' : $locale}}"></span>
                            </label>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="row justify-center">
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">
                        {{ __('Save') }}
                    </button>
                </div>
            </div>
        </form>
    </section>
</div>
@endsection
