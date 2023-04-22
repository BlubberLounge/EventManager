@extends('layouts.app_mobile')

@push('scripts')
    <script src="{{ mix('js/user-edit.js') }}" defer></script>
@endpush

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <form action="{{ route('user.update') }}" method="POST" id="userform">
            @csrf
            @method('PUT')

            <x-forms.user.edit.Input-text attribute="name" label="Name" />
            <x-forms.user.edit.Input-text attribute="firstname" label="Firstname" />
            <x-forms.user.edit.Input-text attribute="lastname" label="Lastname" />
            <x-forms.user.edit.Input-text attribute="dob" label="Date of dirth" />
            <x-forms.user.edit.Input-text attribute="telefon_mobil" label="Mobilephone" />
            <x-forms.user.edit.Input-text attribute="email" label="Email" />

            <div class="mb-4">
                <a href="#"> change Password </a>
            </div>

            <button type="submit" class="btn btn-primary">{{ __('Save') }}</button>
        </form>
    </div>
</div>
@endsection
