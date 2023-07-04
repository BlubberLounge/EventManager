@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/user-profilepicture.js') }}"></script>
@endpush

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/cropper.min.css') }}" />
@endpush

@section('content')
<div class="container-fluid">
    <form action="{{ route('user.update') }}" method="POST" enctype="multipart/form-data" id="form-user-image">
        @csrf
        @method('PUT')

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input type="file" name="originalImage" id="originalImage" accept="image/*" class="form-control">
                </div>
            </div>
        </div>
        <div class="row justify-center mt-2 mb-3 p-3">
            <div class="col-md-9">
                <div style="display:block;max-height: 497px;min-height: 200px;">
                    <img id="image" src="{{ asset($image) }}" class="display:none; max-width: 90%;">
                </div>
            </div>
        </div>
        <div class="row justify-center mb-4">
            <div class="col-auto">
                <div class="img-preview" style="height: 100px; width: 100px;overflow: hidden;">
                    <!-- Image preview -->
                </div>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-auto">
                <button type="button" id="cropImage" class="btn btn-success">Crop</button>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
            <input type="hidden" name="croppedImage" id="croppedImage">
        </div>
        <div style="height: 25px;"></div>
    </form>
</div>
@endsection
