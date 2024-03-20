<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'location',
        'price',
        'user_id',
        'category_id',
    ];

    // protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
        //// return $this->belongsToMany(User::class, 'favourite_products', 'product_id', 'user_id')->withTimestamps();
    }


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function carts()
    {
        return $this->belongsToMany(Cart::class);
    }

    public function cartProducts()
    {
        return $this->belongsTo(CartProduct::class);
    }

    public function EgyptCity()
    {
        return $this->belongsTo(EgyptCity::class, 'location_id');
    }
}
