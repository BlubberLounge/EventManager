<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Classes\Status;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'firstname',
        'lastname',
        'email',
        'telefon_mobil',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get all of the acquaintances
     */
    public function acquaintancesSend(): BelongsToMany
    {
        return $this->belongsToMany(User::class, Acquaintance::class, 'transmitter_user_id', 'receiver_user_id')
            ->withPivot('status')
            ->withTimestamps();
    }

    /**
     * Get all of the acquaintances
     */
    public function acquaintancesReceived(): BelongsToMany
    {
        return $this->belongsToMany(User::class, Acquaintance::class, 'receiver_user_id', 'transmitter_user_id')
            ->withPivot('status')
            ->withTimestamps();
    }

    /**
     * Get all pending Acquaintances user
     */
    public function pendingAcquaintances()
    {
        return $this->acquaintancesReceived()->wherePivot('status', Status::PENDING);
    }

    /**
     * Get all accepted Acquaintances user
     */
    public function acceptedAcquaintances(): BelongsToMany
    {
        return $this->acquaintancesReceived()->wherePivot('status', Status::ACCEPTED);
    }

    /**
     * Get all denied Acquaintances user
     */
    public function deniedAcquaintances(): BelongsToMany
    {
        return $this->acquaintancesReceived()->wherePivot('status', Status::DENIED);
    }

    /**
     * get admin account
     */
    protected function adminAcc(): User
    {
        return $this->where('name', 'Admin')->first();
    }
}
