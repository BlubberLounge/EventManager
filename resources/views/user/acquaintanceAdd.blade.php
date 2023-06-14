@extends('layouts.app_mobile')

@section('content')
<div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center pt-4" style="height: calc(100vh - 90px - 60px);">
        <div class="acquaintanceAdd-container text-center position-relative">
            <div  class="position-absolute" style="top:-20px;left:50%;transform:translateX(-50%);background-color:var(--bl-clr-primary);border:10px solid var(--bl-clr-primary);border-radius:var(--br-primary);">
                @if($user->img)
                    <img src="{{ $user->img }}" width="40px">
                @else
                    {!! Avatar::create($user->name)->setDimension(50)->setFontSize(28)->toSvg() !!} {{-- https://github.com/laravolt/avatar --}}
                @endif
            </div>

            <section id="reliability">
                <div class="row justify-content-center align-items-center">
                    <div class="col">
                        <div class="reliability-meter">
                            <div class="reliability-meter-progress"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div style="font-size: 1.1rem"> {{ $user->full_name }} </div>
            <div style="color: var(--bl-clr-gray-40);font-size: .9rem"> Alter: {{ $user->age }} </div>
            <div class="mb-5" style="color: var(--bl-clr-gray-40);font-size: .9rem"> Member since: {{ $user->created_at->format('m.Y') }} </div>

            <form action="{{ $signedRoute }}" method="POST" id="userform">
                @csrf
                @method('PUT')

                <button type="submit" class="btn btn-success btn-lg mb-2"> Anfrage schicken </button>
            </form>

            @if($isSignatureValid)
                <div style="color: var(--bl-clr-gray-40);font-size: .75rem;"> Signature is valid <i class="fa-solid fa-circle-check" style="color: var(--bl-clr-green-soft);"></i> </div>
            @else
                <div style="color: var(--bl-clr-gray-40);font-size: .75rem;"> Signature is invalid <i class="fa-solid fa-triangle-exclamation" style="color: var(--bl-clr-red-soft);"></i> </div>
            @endif
        </div>

        <div class="text-center" style="padding: 2rem;color: var(--bl-clr-gray-20);">
            Glückwunsch! <br> Du kannst einen neuen potentiellen Kontakt hinzufügen.
        </div>
    </div>
</div>
@endsection
