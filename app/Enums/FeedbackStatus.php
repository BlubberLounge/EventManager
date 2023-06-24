<?php

namespace App\Enums;

/**
 * FeedbackStatus enumaration
 */
enum FeedbackStatus: string
{
    case UNKOWN = 'unkown';
    case NEW = 'new';
    case SEEN = 'seen';
    case ACCEPTED = 'accepted';
    case DECLINED = 'declined';
}
