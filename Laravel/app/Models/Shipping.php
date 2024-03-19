<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;
    protected $table = 'shipping_details';

    protected $fillable = [
        'phone',
        'city',
        'address',
        'zip_code',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function city()
    {
        return $this->belongsTo(EgyptCity::class, 'city_id');
    }
}
