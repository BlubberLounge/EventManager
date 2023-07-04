@extends('layouts.app')

@push('styles')
<link href="{{ mix('css/defaultComponents.css') }}" rel="stylesheet">
@endpush

@section('content')
<div class="container-fluid p-4" id="container-defaultComponents">
    <div>
        <h1> Buttons </h1>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>
    </div>
    <div>
        <h1> Badges </h1>
        <span class="badge text-bg-primary">Primary</span>
        <span class="badge text-bg-secondary">Secondary</span>
        <span class="badge text-bg-success">Success</span>
        <span class="badge text-bg-danger">Danger</span>
        <span class="badge text-bg-warning">Warning</span>
        <span class="badge text-bg-info">Info</span>
        <span class="badge text-bg-light">Light</span>
        <span class="badge text-bg-dark">Dark</span>
    </div>
    <div>
        <h1> Alerts </h1>
        <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div class="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div class="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div class="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div class="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div class="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>
    </div>
    <div>
        <h1> Accordion </h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
    </div>
    <div>
        <h1> Card </h1>
        <div class="card" style="width: 18rem;">
            <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    </div>
    <div>
        <h1> Modal </h1>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    ...
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h1> Form </h1>
        {{--
            <input type="button">
            <input type="checkbox">
            <input type="color">
            <input type="date">
            <input type="datetime-local">
            <input type="email">
            <input type="file">
            <input type="hidden">
            <input type="image">
            <input type="month">
            <input type="number">
            <input type="password">
            <input type="radio">
            <input type="range">
            <input type="reset">
            <input type="search">
            <input type="submit">
            <input type="tel">
            <input type="text">
            <input type="time">
            <input type="url">
            <input type="week">
        --}}
        <form>
            <div class="mb-3">
                <label for="InputText" class="form-label"> Text Field </label>
                <input type="text" class="form-control" id="InputText">
            </div>
            <div class="mb-3">
                <label for="InputEmail" class="form-label"> Email address </label>
                <input type="email" class="form-control" id="InputEmail">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="InputPassword" class="form-label"> Password </label>
                <input type="password" class="form-control" id="InputPassword">
            </div>
            <div class="mb-3 form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
            </div>
            <div class="mb-3 form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
            </div>
            <div class="mb-3 form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
            <div class="mb-3">
                <label for="InputDate" class="form-label"> Date </label>
                <input type="date" class="form-control" id="InputDate">
            </div>
            <div class="mb-3">
                <label for="InputRange" class="form-label">Example range</label>
                <input type="range" class="form-range" id="InputRange">
            </div>
            <div class="mb-3">
                <label for="InputFile" class="form-label"> Text Field </label>
                <input type="file" class="form-control" id="InputFile">
            </div>
            <div class="mb-3">
                <label for="InputNumber" class="form-label"> Text Field </label>
                <input type="number" class="form-control" id="InputNumber">
            </div>
            <div class="mb-3">
                <label for="InputTime" class="form-label"> Text Field </label>
                <input type="time" class="form-control" id="InputTime">
            </div>
        </form>
    </div>
</div>
@endsection
