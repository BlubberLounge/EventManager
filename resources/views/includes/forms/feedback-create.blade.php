<form action="{{ route('user.feedback.store') }}" method="POST" id="form-feedback">
    @csrf

    <x-form.input-text attribute="subject" label="Subject" />
    <x-form.input-textarea attribute="message" label="Message" />

    <x-form.button-submit />
</form>
