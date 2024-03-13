<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;

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

    

}
