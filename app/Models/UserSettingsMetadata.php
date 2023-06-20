<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class UserSettingsMetadata extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'default',
        'category',
    ];

    /**
     * Get all of the TimetableData
     */
    public function settings(): HasMany
    {
        return $this->hasMany(UserSetting::class);
    }
}
