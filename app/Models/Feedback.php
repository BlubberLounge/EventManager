<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// composer package traits
use OwenIt\Auditing\Contracts\Auditable;

use App\Enums\FeedbackType;
use App\Enums\FeedbackStatus;


class Feedback extends Model implements Auditable
{
    use HasFactory,
        \OwenIt\Auditing\Auditable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'type',
        'status',
        'subject',
        'message',
        'area',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'type' => FeedbackType::class,
        'status' => FeedbackStatus::class,
    ];
}
