<div class="mb-3">
    <label for="{{ $attribute }}" class="form-label">Example textarea</label>
    <textarea
        id="{{ $attribute }}"
        class="form-control @error('{{ $attribute }}') is-invalid @enderror"
        name="{{ $attribute }}" value="{{ old($attribute) ? old($attribute) : Auth::user()->$attribute }}"
        @if($maxRows > 0) rows="{{ $maxRows }}" @endif
        @if($autofocus) autofocus @endif
        autocomplete="off"
    ></textarea>
</div>
