<?php

namespace App\Enums;

use App\Interfaces\EnumTypeOrStatus;

/**
 * FeedbackStatus enumaration
 */
enum FeedbackStatus: string implements EnumTypeOrStatus
{
    case UNKOWN = 'unkown';
    case NEW = 'new';
    case SEEN = 'seen';
    case ACCEPTED = 'accepted';
    case DECLINED = 'declined';

    public static function fromString(string $string): FeedbackStatus
    {
        foreach (self::cases() as $status)
            if (strtoupper($string) === $status->name)
                return $status;

        throw new \ValueError("$string is not a valid backing value for enum " . self::class );
    }

    public function color(): string
    {
        return match($this)
        {
            FeedbackStatus::UNKOWN => 'var(--bl-clr-gray-50)',
            FeedbackStatus::NEW => 'var(--bl-clr-yellow)',
            FeedbackStatus::SEEN => 'var(--bl-clr-blue)',
            FeedbackStatus::ACCEPTED => 'var(--bl-clr-green)',
            FeedbackStatus::DECLINED => 'var(--bl-clr-red)',
        };
    }
}
