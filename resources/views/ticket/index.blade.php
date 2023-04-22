@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/ticket.js') }}" defer></script>
@endpush

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <h1>Tickets</h1>
    </div>
</div>
@endsection
