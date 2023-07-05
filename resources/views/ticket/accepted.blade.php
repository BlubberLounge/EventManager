@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/ticket.js') }}" defer></script>
@endpush

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <h1> Tickets gesendet </h1>
    </div>
</div>
@endsection
