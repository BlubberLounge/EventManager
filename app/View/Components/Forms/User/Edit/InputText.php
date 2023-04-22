<?php

namespace App\View\Components\Forms\User\Edit;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class InputText extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $attribute,
        public string $label = '',
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $this->label = $this->label ? $this->label : $this->attribute;

        return view('components.forms.user.edit.input-text');
    }
}
