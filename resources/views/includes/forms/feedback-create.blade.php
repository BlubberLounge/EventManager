<form action="{{ route('user.feedback.store') }}" method="POST" id="form-feedback">
    @csrf

    <x-form.select attribute="area" label="Area" :$options />
    <x-form.input-text attribute="subject" label="Subject" autofocus="true" />
    <x-form.input-textarea attribute="message" label="Message" maxRows="10" />

    <x-form.button-submit />
</form>
