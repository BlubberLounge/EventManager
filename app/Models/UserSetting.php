<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class UserSetting extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_settings_metadata_id',
        'user_id',
        'value',
    ];


    /**
     * Perform any actions required after the model boots.
     *
     * @return void
     */
    protected static function booted(): void
    {
        static::addGlobalScope(new Scopes\AddMetadata());
    }

    /**
     * Get the user that owns this setting
     */
    public function metadata(): BelongsTo
    {
        return $this->belongsTo(UserSettingsMetadata::class, 'user_settings_metadata_id');
    }

    /**
     * Get the user that owns this setting
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
