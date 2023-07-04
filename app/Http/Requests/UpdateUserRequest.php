<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'string',
            'firstname' => 'nullable|string',
            'lastname' => 'nullable|string',
            'email' => 'nullable|email:rfc',
            'telefon_mobil' => 'nullable|string',
            'originalImage' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'croppedImage' => 'nullable|string',
            'qrcode' => 'nullable|url',
            'password' => 'nullable|min:5|string',
            'locked' => 'boolean'
        ];
    }
}
