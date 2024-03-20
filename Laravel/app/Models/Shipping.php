<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shipping extends Model
{
    use HasFactory , SoftDeletes;
    protected $table = 'shipping_details';

    protected $fillable = [
        'phone',
        'city_id',
        'address',
        'zip_code',
        'user_id',
        'cart_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function city()
    {
        return $this->belongsTo(EgyptCity::class);
    }
}
