<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EgyptCity extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone',
        'address',
        'zip_code',
        'user_id',
        'city_id',
    ];


    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function shippings()
    {
        return $this->hasMany(Shipping::class);
    }
}
