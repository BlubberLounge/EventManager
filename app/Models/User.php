<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\URL;
use App\Classes\Status;
use Illuminate\Support\Facades\Auth;


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
        'dob',
        'img',
        'qrcode',
        'qrcode_created_at',
        'password',
        'locked',
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
     * QRCode Accessor
     * When the expiration time has expired, the Qrcode is regenerated
     */
    protected function qrcode(): Attribute
    {
        return Attribute::make(
            get: function (string $value) {
                if(is_null($value) || !$this->needsNewQRCode())
                    return $value;

                $value = $this->generateQRCode();
                $this->qrcode = $value;
                $this->qrcode_created_at = now();
                $this->save();

                return $value;
            }
        );
    }

    /**
     * Profile picture Accessor
     */
    protected function img(): Attribute
    {
        return Attribute::make(
            get: function (string|null $value) {
                if(is_null($value))
                    return null;
                    // return Avatar::create(Auth::user()->name)->setDimension(50)->setFontSize(28)->toBase64();
                return $value;
            }
        );
    }

    public function getFullNameAttribute()
    {
        return $this->firstname . ' ' . $this->lastname;
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->dob)->diff(Carbon::now())->y;
    }

    /**
     *
     */
    public function isLocked(): bool
    {
        return $this->locked;
    }

    /**
     * returns remaining valid qrcode time in seconds
     */
    public function qrCodeExpiresIn(bool $forHumans = false): String
    {
        return $forHumans
            ? CarbonInterval::seconds(Carbon::parse($this->qrcode_created_at)->diffInSeconds(now()))->subMinutes(config('custom.QRCode.expiration'))->cascade()->forHumans()
            : Carbon::parse($this->qrcode_created_at)->diffInSeconds(now())->subMinutes(config('custom.QRCode.expiration'));
    }

    /**
     * returns true if the QRCode string has to be renewed
     */
    private function needsNewQRCode(): bool
    {
        return Carbon::parse($this->qrcode_created_at)->diffInSeconds(now()) >= (config('custom.QRCode.expiration') * 60);
    }

    /**
     *
     */
    private function generateQRCode(): String
    {
        return URL::temporarySignedRoute('user.acquaintanceAdd', now()->addMinutes(config('custom.QRCode.expiration')), ['u' => $this->id]);
    }

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
    public function pendingAcquaintances(): BelongsToMany
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
