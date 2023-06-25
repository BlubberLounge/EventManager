@extends('layouts.app_mobile')

@section('content')
<div class="container-fluid">
    <div class="row text-center mt-4">
        <h1> Feedback </h1>
    </div>
    <div class="row justify-center mt-3 px-5">
        @include('includes.forms.feedback-create', ['options' => $options])
    </div>
</div>
@endsection
