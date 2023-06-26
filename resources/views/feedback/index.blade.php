@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/feedback.js') }}" defer></script>
@endpush

@section('content')
<div class="container-fluid px-0">
    <x-buttons.back urlAddition="#settingsDevice" />
    <section id="feedback-description" class="text-center" style="padding: 2rem 3rem 1rem 3rem;">
        <i class="fa-regular fa-comments" style="font-size: 4rem"></i>
        <h1> Feedback </h1>
        <p> Liste aller User Feedbacks </p>
    </section>
    <section class="px-0">
        <div class="accordion accordion-flush" id="accordionfeedback">
            @forelse ($feedbackList as $feedback)
                @php($headerID = 'header-'.$feedback->id)
                @php($bodyID = 'body-'.$feedback->id)
                <div class="accordion-item position-relative mb-4">
                    <div class="position-absolute" style="z-index: 100;top:-10px;">
                        <span class="badge rounded-pill feedback-type-{{ $feedback->type }}" style="background-color:{{ $feedback->type->color() }};"> {{ $feedback->type }} </span>
                    </div>
                    <h2 class="accordion-header feedback-type-{{ $feedback->type }}" id="{{ $headerID }}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#{{ $bodyID }}" aria-expanded="false" aria-controls="{{ $bodyID }}">
                            {{ Str::limit($feedback->subject, 40) }}
                        </button>
                    </h2>
                    <div id="{{ $bodyID }}" class="accordion-collapse collapse" aria-labelledby="{{ $headerID }}" data-bs-parent="#accordionfeedback">
                        <div class="accordion-body p-4" style="word-break: break-all;">
                            <div class="row">
                                <div class="btn-group mb-4" role="group">
                                    <button type="button" class="btn btn-success">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                        Good
                                    </button>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-regular fa-thumbs-down"></i>
                                        Bad
                                    </button>
                                  </div>
                            </div>
                            <div class="row">
                                {{ $feedback->message }}
                            </div>
                        </div>
                    </div>
                </div>
            @empty
            <div class="row" style="color:var(--bl-clr-background-light);">
                <div class="col">
                    no feedback has been send yet
                </div>
            </div>
            @endforelse
        </div>
    </section>
</div>
@endsection
