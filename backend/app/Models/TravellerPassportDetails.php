<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravellerPassportDetails extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $dates = ['date_of_bird', 'date_of_issue', 'date_of_expiry'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'traveller_id',
        'passport_no',
        'date_of_bird',
        'date_of_issue',
        'date_of_expiry',
        'country_of_issue'
    ];

    public function traveller(): BelongsTo
    {
        return $this->belongsTo(Traveller::class);
    }
}
