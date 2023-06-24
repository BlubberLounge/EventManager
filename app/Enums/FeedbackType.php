<?php

namespace App\Enums;

/**
 * FeedbackType enumaration
 */
enum FeedbackType: string
{
    case GENERAL = 'general';
    case BUG = 'bug';
    case INFORMATION = 'information';
    case ENHANCEMENT = 'enhancement';
}
