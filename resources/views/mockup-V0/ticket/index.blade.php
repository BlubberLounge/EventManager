@extends('mockup-V0.layouts.app_mobile_ticket')

@section('mockup-V0.content')
<div class="container">
    <div class="row justify-content-center p-1">
        <div id="glide" class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="{{ asset('img/base-ticket-with-content.svg') }}" width="320px">
                </li>
                <li class="glide__slide">
                    <img src="{{ asset('img/base-ticket1-with-content.svg') }}" width="320px">
                </li>
                <li class="glide__slide">2</li>
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
