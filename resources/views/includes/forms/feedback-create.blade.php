<form action="{{ route('user.feedback.store') }}" method="POST" id="form-feedback">
    @csrf

    <x-form.input-text attribute="subject" label="Subject" autofocus="true" />
    <x-form.input-textarea attribute="Message" label="Message" />

    <x-form.button-submit />
</form>
