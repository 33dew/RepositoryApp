<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TravellerPassportDetails;

class Traveller extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'surname',
        'email',
        'phone',
        'adress',
        'city',
        'country',
        'avatar',
        'status'
    ];

    public function passportdetails(): BelongsTo
    {
        return $this->belongsTo(TravellerPassportDetails::class);
    }
    
}
