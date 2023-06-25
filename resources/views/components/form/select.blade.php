<div class="mb-3">
    <label for="{{ $attribute }}" class="form-label"> {{ $label }} </label>
    <select
        id="{{ $attribute }}"
        class="form-select"
        name="{{ $attribute }}" value="{{ old($attribute) ?? '' }}"
    >
        @foreach ($options as $key => $option)
            <option value="{{ $key }}">{{ $option }}</option>
        @endforeach
    </select>
</div>
