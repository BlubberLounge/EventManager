<?php

namespace App\Enums;

/**
 * FeedbackType enumaration
 */
enum FeedbackType: string
{
    case GENERAL = 'general';
    case QUESTION = 'question';
    case INFORMATIVE = 'informative';
    case ENHANCEMENT = 'enhancement';
}
