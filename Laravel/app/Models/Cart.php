<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
    ];
    

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products(){
        return $this->hasMany(Product::class);
    }
    public function cartProducts()
    {
        return $this->hasMany(CartProduct::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
