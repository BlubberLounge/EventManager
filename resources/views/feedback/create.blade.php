@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/feedback.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid px-4">
    <div class="row text-center my-5">
        <h1> Feedback </h1>
    </div>
    <div id="container-feedback">
        <div class="row">
            <div class="col p-3">
                <button class="btn-feedback-type" value="{{ App\Enums\FeedbackType::ENHANCEMENT }}">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    Enhancement
                </button>
            </div>
            <div class="col p-3">
                <button class="btn-feedback-type" value="{{ App\Enums\FeedbackType::BUG }}">
                    <i class="fa-solid fa-bug"></i>
                    Bug
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col p-3">
                <button class="btn-feedback-type" value="{{ App\Enums\FeedbackType::INFORMATION }}">
                    <i class="fa-solid fa-circle-info"></i>
                    Information
                </button>
            </div>
            <div class="col p-3">
                <button class="btn-feedback-type" value="{{ App\Enums\FeedbackType::GENERAL }}">
                    <i class="fa-regular fa-comments"></i>
                    Other
                </button>
            </div>
        </div>
        <hr class="my-4 mb-5" />
        @forelse (Auth::user()->feedback as $f)
            <div class="row my-1">
                <div class="col-2">
                    <span class="badge rounded-pill" style="background-color:{{ $f->status->color() }};"> {{ $f->status }} </span>
                </div>
                <div class="col-3">
                    <span class="badge rounded-pill" style="background-color:{{ $f->type->color() }};"> {{ $f->type }} </span>
                </div>
                <div class="col">
                    {{ Str::limit($f->subject, 20) }}
                </div>
            </div>
        @empty
            <div class="row" style="color:var(--bl-clr-background-light);">
                <div class="col">
                    no feedback has been send yet
                </div>
            </div>
        @endforelse
        <hr class="mt-5"/>
    </div>
    <div class="row justify-center mt-3 px-5" id="container-form-feedback-create" style="display: none">
        @include('includes.forms.feedback-create', ['options' => $options])
    </div>
</div>
@endsection
