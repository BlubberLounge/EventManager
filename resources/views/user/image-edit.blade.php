@extends('layouts.app')

@push('scripts')
    <script src="{{ mix('js/user-profilepicture.js') }}"></script>
@endpush

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/cropper.min.css') }}" />
@endpush

@section('content')
<div class="container-fluid">
    <div class="row justify-center items-center" style="height: 500px;">
        <div class="col-md-9">
            <div style="display:block;max-height: 497px;min-height: 200px;">
                <img id="image" src="{{ asset('img/dummyAvatar.png') }}" class="display:block; max-width: 90%;">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="docs-data">
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataX">X</label>
              </span>
              <input type="text" class="form-control" id="dataX" placeholder="x" data-dashlane-rid="5aad6db3aafe7608">
              <span class="input-group-append">
                <span class="input-group-text">px</span>
              </span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataY">Y</label>
              </span>
              <input type="text" class="form-control" id="dataY" placeholder="y" data-dashlane-rid="b79c987697b7170e">
              <span class="input-group-append">
                <span class="input-group-text">px</span>
              </span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataWidth">Width</label>
              </span>
              <input type="text" class="form-control" id="dataWidth" placeholder="width" data-dashlane-rid="43abef53affe3bc6">
              <span class="input-group-append">
                <span class="input-group-text">px</span>
              </span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataHeight">Height</label>
              </span>
              <input type="text" class="form-control" id="dataHeight" placeholder="height" data-dashlane-rid="7eeeb716fe60288e">
              <span class="input-group-append">
                <span class="input-group-text">px</span>
              </span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataRotate">Rotate</label>
              </span>
              <input type="text" class="form-control" id="dataRotate" placeholder="rotate" data-dashlane-rid="9ca32ab3ffa20073">
              <span class="input-group-append">
                <span class="input-group-text">deg</span>
              </span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataScaleX">ScaleX</label>
              </span>
              <input type="text" class="form-control" id="dataScaleX" placeholder="scaleX" data-dashlane-rid="b79b2c4e723a45e0">
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-prepend">
                <label class="input-group-text" for="dataScaleY">ScaleY</label>
              </span>
              <input type="text" class="form-control" id="dataScaleY" placeholder="scaleY" data-dashlane-rid="2c79c48e1327d9f4">
            </div>
          </div>
    </div>
</div>
@endsection
