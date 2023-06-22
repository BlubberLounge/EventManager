<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Enums\DeviceType;


class Device extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'device_type',
        'browser',
        'browser_version',
        'platform',
        'platform_version',
        'ip',
        'data',
        'last_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'device_type' => DeviceType::class,
        'data' => 'array',
        'last_active' => 'datetime',
    ];

    /**
     * Get all of the Users that own this device
     */
    public function users(): belongsToMany
    {
        return $this->belongsToMany(User::class)
            ->using(DeviceUser::class);
    }
}
