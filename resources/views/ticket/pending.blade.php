@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/ticket.js') }}" defer></script>
@endpush

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <div id="glide" class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="{{ asset('img/base-ticket-with-content.svg') }}" width="84%">
                </li>
                <li class="glide__slide">
                    <img src="{{ asset('img/base-ticket1-with-content.svg') }}" width="84%">
                </li>
                <li class="glide__slide">
                    <img src="{{ asset('img/ticketRender_05.png') }}" width="84%">
                </li>
              </ul>
            </div>
            <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">
                <button class="slider__bullet glide__bullet glide__bullet--active" data-glide-dir="=0"></button>
                <button class="slider__bullet glide__bullet" data-glide-dir="=1"></button>
                <button class="slider__bullet glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>
    </div>
</div>
@endsection
