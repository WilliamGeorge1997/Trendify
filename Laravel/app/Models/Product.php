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
    public function users()
    {
        return $this->belongsToMany(User::class, 'favourite_products', 'product_id', 'user_id')->withTimestamps();
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
}
