@extends('layouts.app_mobile')

@section('content')
<div class="container">
    <div class="row justify-content-center p-1">
        <div class="col">
            <h1>QR Code</h1>
            <img src="{{ (new chillerlan\QRCode\QRCode)->render("otpauth://totp/test?secret=B3JX4VCVJDVNXNZ5&issuer=chillerlan.net") }}" alt="" width="300px">
        </div>
    </div>
</div>
@endsection
