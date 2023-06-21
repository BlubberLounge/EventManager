<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\URL;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Carbon\CarbonInterval;

// composer package traits
use Staudenmeir\LaravelMergedRelations\Eloquent\HasMergedRelationships;
use OwenIt\Auditing\Contracts\Auditable;
use jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission;
use DarkGhostHunter\Laraconfig\HasConfig;
use IvanoMatteo\LaravelDeviceTracking\Traits\UseDevices;

use App\Classes\AcquaintanceStatus;


class User extends Authenticatable implements MustVerifyEmail, Auditable
{
    use HasFactory,
        Notifiable,
        HasApiTokens,
        HasMergedRelationships,
        \OwenIt\Auditing\Auditable,
        HasConfig,
        HasRoleAndPermission,
        UseDevices;

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
     * Attributes to include in the Audit.
     *
     * @var array
     */
    protected $auditInclude = [
        //
    ];

    /**
     * QRCode Accessor
     * When the expiration time has expired, the Qrcode is regenerated
     */
    protected function qrcode(): Attribute
    {
        return Attribute::make(
            get: function (string|null $value) {
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
     *
     */
    public function showOnHomeView(): bool
    {
        //
    }

    /**
     * Get all of the TimetableData
     */
    public function timetableData(): HasMany
    {
        return $this->hasMany(Timetable::class);
    }

    /**
     * Get all accepted Acquaintances user that should be shown on the timetable
     */
    public function timetableAcquaintances()
    {
        return $this->acquaintances(AcquaintanceStatus::ACCEPTED, true)->sortBy(
            ['firstname', 'asc'],
            ['lastname', 'asc'],
        );;
    }

    // works but is not the best solution
    public function acquaintances(string $status, bool $showOnHomeView)
    {
        $transmitted = $this->acquaintancesSend()
            ->wherePivot('status', $status)
            ->wherePivot('showOnHomeView', $showOnHomeView)
            ->get();

        $received = $this->acquaintancesReceived()
            ->wherePivot('status', $status)
            ->wherePivot('showOnHomeView', $showOnHomeView)
            ->get();

        return $received->merge($transmitted);
    }

    // works ok. BUT there is no access on pivot tables with this method
    public function acquaintances_beta()
    {
        return $this->mergedRelationWithModel(User::class, 'acquaintances_view');
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
            ->withPivot('status', 'showOnHomeView')
            ->withTimestamps();
    }

    /**
     * Get all pending Acquaintances user
     */
    public function pendingAcquaintances(): BelongsToMany
    {
        return $this->acquaintancesReceived()->wherePivot('status', AcquaintanceStatus::PENDING);
    }

    /**
     * Get all accepted Acquaintances user
     */
    public function acceptedAcquaintances(): BelongsToMany
    {
        return $this->acquaintancesReceived()->wherePivot('status', AcquaintanceStatus::ACCEPTED);
    }

    /**
     * Get all denied Acquaintances user
     */
    public function deniedAcquaintances(): BelongsToMany
    {
        return $this->acquaintancesReceived()->wherePivot('status', AcquaintanceStatus::DENIED);
    }

    /**
     * Get all pending Acquaintances user
     */
    public function pendingAcquaintancesMerged()
    {
        $transmitted = $this->acquaintancesSend()
            ->wherePivot('status', AcquaintanceStatus::PENDING)
            ->get();

        $received = $this->acquaintancesReceived()
            ->wherePivot('status', AcquaintanceStatus::PENDING)
            ->get();

        return $received->merge($transmitted)->sortBy(
            ['firstname', 'asc'],
            ['lastname', 'asc'],
        );
    }

    /**
     * Get all accepted Acquaintances user
     */
    public function acceptedAcquaintancesMerged()
    {
        $transmitted = $this->acquaintancesSend()
            ->wherePivot('status', AcquaintanceStatus::ACCEPTED)
            ->get();

        $received = $this->acquaintancesReceived()
            ->wherePivot('status', AcquaintanceStatus::ACCEPTED)
            ->get();

        return $received->merge($transmitted)->sortBy(
            ['firstname', 'asc'],
            ['lastname', 'asc'],
        );
    }

    /**
     * Get all denied Acquaintances user
     */
    public function deniedAcquaintancesMerged()
    {
        $transmitted = $this->acquaintancesSend()
            ->wherePivot('status', AcquaintanceStatus::DENIED)
            ->get();

        $received = $this->acquaintancesReceived()
            ->wherePivot('status', AcquaintanceStatus::DENIED)
            ->get();

        return $received->merge($transmitted)->sortBy(
            ['firstname', 'asc'],
            ['lastname', 'asc'],
        );
    }

    /**
     * get admin account
     */
    protected function adminAcc(): User
    {
        return $this->where('name', 'Admin')->first();
    }
}
