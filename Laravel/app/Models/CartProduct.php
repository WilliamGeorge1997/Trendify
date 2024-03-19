<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartProduct extends Model
{
    use HasFactory;
    protected $table = 'cart_products';
    // protected $primaryKey = ['cart_id', 'product_id'];
    protected $fillable = [
        'cart_id',
        'product_id',
        'count',
        'total_product_price',
    ];
    
    
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
    
}
