<div class="mb-4">
    <label for="{{ $attribute }}" class="form-check-label">{{ __($label) }}</label>
    <input id="{{ $attribute }}" type="text" class="form-control @error('{{ $attribute }}') is-invalid @enderror" name="{{ $attribute }}" value="{{ old($attribute) ? old($attribute) : Auth::user()->$attribute }}" autocomplete="off">
    @error('{{ $attribute }}')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
