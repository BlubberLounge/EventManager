@extends('layouts.app_mobile')

@section('content')
<div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center pt-4" style="height: calc(100vh - 90px - 60px);">
        <div class="qrcode-container text-center position-relative">
            <div  class="position-absolute" style="top:-20px;left:50%;transform:translateX(-50%);background-color:var(--clr-primary);border:10px solid var(--clr-primary);border-radius:var(--br-primary);">
                @if($user->img)
                    <img src="{{ $user->img }}" width="40px">
                @else
                    {!! Avatar::create(Auth::user()->name)->setDimension(50)->setFontSize(28)->toSvg() !!} {{-- https://github.com/laravolt/avatar --}}
                @endif
            </div>
            <div style="font-size: 1.1rem"> {{ $user->name }} </div>
            <div class="position-relative mb-3" style="color: var(--clr-gray-40);font-size: .9rem;top:-6px;"> EventManager &#8212; WebApp </div>
        </div>

        <div class="text-center" style="padding: 2rem;color: var(--clr-gray-20);">
            Dein QR-Code ist privat. Teile ihn mit Leuten denen du auf Events begegnest. Das ist die einzige möglichkeit wie die neue Leute zu deiner Kontaktliste hinzufügen kannst!
        </div>
    </div>
</div>
@endsection
