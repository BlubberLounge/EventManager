@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/user-edit.js') }}" defer></script>
@endpush

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <form action="{{ route('user.update') }}" method="POST" id="userform">
            @csrf
            @method('PUT')

            <x-form.input-text attribute="name" label="Name" />
            <x-form.input-text attribute="firstname" label="Firstname" />
            <x-form.input-text attribute="lastname" label="Lastname" />
            <x-form.input-text attribute="dob" label="Date of dirth" />
            <x-form.input-text attribute="telefon_mobil" label="Mobilephone" />
            <x-form.input-text attribute="email" label="Email" />

            <div class="mb-4">
                <a href="#"> change Password </a>
            </div>

            <x-form.button-submit />
        </form>
    </div>
</div>
@endsection
