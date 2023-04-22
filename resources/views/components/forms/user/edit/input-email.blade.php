<div class="mb-4">
    <label for="{{ $attribute }}" class="form-check-label">{{ __($label) }}</label>
    <input id="{{ $attribute }}" type="email" class="form-control @error('{{ $attribute }}') is-invalid @enderror" name="{{ $attribute }}" value="{{ old($attribute) ? old($attribute) : Auth::user()->$attribute }}" required autocomplete="off">
    @error('{{ $attribute }}')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
