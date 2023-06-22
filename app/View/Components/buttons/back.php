<?php

namespace App\View\Components\buttons;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class back extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $urlAddition = ''
    ) { }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $data['urlAddition'] = $this->urlAddition;
        return view('components.buttons.back', $data);
    }
}
